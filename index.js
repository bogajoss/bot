const { Telegraf } = require('telegraf');
const puppeteer = require('puppeteer');
const fs = require('fs');

const BOT_TOKEN = '8371775356:AAHpi0vmZmL9SdWB5w3CITSL3IPfLQvfFo0';
const bot = new Telegraf(BOT_TOKEN);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function escapeCsv(value) {
    if (value === null || value === undefined) return '';
    const stringValue = String(value);
    if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
}

async function scrapeDirectUrl(url) {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });

    try {
        console.log(`Scraping URL: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Scroll to load all questions
        let lastHeight = await page.evaluate('document.body.scrollHeight');
        while (true) {
            await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
            await delay(2000);
            let newHeight = await page.evaluate('document.body.scrollHeight');
            if (newHeight === lastHeight) break;
            lastHeight = newHeight;
        }

        const data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.mcq-item'));

            return items.map(item => {
                const qTextElement = item.querySelector('.mcq-question-text');
                // Extract question text without the serial number
                let questionText = qTextElement?.innerHTML.replace(/<span class="question-number">.*?<\/span>/, '').trim() || "";

                // Address academy images inside question text
                const imgInQ = item.querySelector('.mcq-question-text img')?.outerHTML || "";
                if (imgInQ && !questionText.includes('<img')) {
                    questionText = imgInQ + "<br />" + questionText;
                }

                const optionsElements = Array.from(item.querySelectorAll('.mcq-options p'));
                const options = optionsElements.map(p => {
                    // Remove the A, B, C, D span prefix
                    let text = p.innerHTML.replace(/<span.*?>.*?<\/span>/, '').trim();
                    return {
                        text: text,
                        isCorrect: p.classList.contains('correct-answer')
                    };
                });

                const explanationBox = item.querySelector('.pollp-explanation-box');
                const explanation = explanationBox?.innerHTML.trim() || "";

                // Find 1-based index of correct answer
                const correctIndex = options.findIndex(o => o.isCorrect) + 1;

                return {
                    question: questionText,
                    options: options.map(o => o.text),
                    answer: correctIndex,
                    explanation: explanation
                };
            });
        });

        await browser.close();
        return data;
    } catch (e) {
        await browser.close();
        throw e;
    }
}

bot.start((ctx) => {
    ctx.reply("👋 Welcome! Send me an Address Academy QB URL to scrape and convert to CSV.\n\nExample: https://addresacademy.com/qb/qb.php?university=SUST&unit=Unit-A");
});

bot.on('text', async (ctx) => {
    const url = ctx.message.text;

    if (!url.startsWith('http')) {
        return ctx.reply("❌ Please send a valid URL.");
    }

    const statusMsg = await ctx.reply("🚀 Scraping and generating CSV... please wait.");

    try {
        const results = await scrapeDirectUrl(url);

        if (results.length === 0) {
            return ctx.reply("⚠️ No questions found on that page.");
        }

        const csvHeader = "questions,option1,option2,option3,option4,option5,answer,explanation,type,section\n";
        const csvRows = results.map(r => {
            const q = `<b>${r.question}<br /></b>`;
            const opt1 = r.options[0] || '';
            const opt2 = r.options[1] || '';
            const opt3 = r.options[2] || '';
            const opt4 = r.options[3] || '';
            const opt5 = r.options[4] || '';
            const ans = r.answer || '';
            const exp = r.explanation ? `<b><br />${r.explanation}<br /></b>` : '';
            const type = 1;
            const section = 1;

            return [
                escapeCsv(q),
                escapeCsv(opt1),
                escapeCsv(opt2),
                escapeCsv(opt3),
                escapeCsv(opt4),
                escapeCsv(opt5),
                ans,
                escapeCsv(exp),
                type,
                section
            ].join(',');
        }).join('\n');

        const csvContent = csvHeader + csvRows;
        const fileName = `Questions_${Date.now()}.csv`;
        fs.writeFileSync(fileName, csvContent);

        await ctx.telegram.deleteMessage(ctx.chat.id, statusMsg.message_id);
        await ctx.replyWithDocument(
            { source: fileName },
            { caption: `✅ Successfully scraped ${results.length} questions into CSV format.` }
        );

        fs.unlinkSync(fileName);
    } catch (err) {
        console.error(err);
        ctx.reply(`❌ Scrape Failed: ${err.message}`);
    }
});

bot.launch().then(() => console.log("CSV Direct Link Scraper Bot is LIVE!"));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
