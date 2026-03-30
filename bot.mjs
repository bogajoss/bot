import { Telegraf } from 'telegraf';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const TELEGRAM_TOKEN = '8506013448:AAEQGsPjJnqRSEW7Hs80zFHVjpImiusFyOs';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not defined in environment variables.');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

const bot = new Telegraf(TELEGRAM_TOKEN);

async function getImagePart(ctx, fileId) {
  const link = await ctx.telegram.getFileLink(fileId);
  const response = await fetch(link.href);
  const buffer = await response.arrayBuffer();
  return {
    inlineData: {
      data: Buffer.from(buffer).toString('base64'),
      mimeType: 'image/jpeg',
    },
  };
}

bot.start((ctx) => ctx.reply('Welcome! Send me a question or an image (or reply to one) and I will use Gemini to help you.'));

bot.on(['text', 'photo'], async (ctx) => {
  try {
    const isMentioned = ctx.message.text?.includes(`@${ctx.botInfo.username}`) ||
                        ctx.message.caption?.includes(`@${ctx.botInfo.username}`);

    if (!isMentioned) {
      return;
    }

    await ctx.sendChatAction('typing');
    const parts = [];
    let userText = ctx.message.text || ctx.message.caption || '';

    // Check current message for photo
    if (ctx.message.photo) {
      const fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
      parts.push(await getImagePart(ctx, fileId));
    }

    // Check if it's a reply
    if (ctx.message.reply_to_message) {
      const reply = ctx.message.reply_to_message;
      const replyText = reply.text || reply.caption || '';
      if (replyText) {
        userText = `Context from replied message: "${replyText}" User Question/Instruction: ${userText}`;
      }
      if (reply.photo) {
        const fileId = reply.photo[reply.photo.length - 1].file_id;
        parts.push(await getImagePart(ctx, fileId));
      }
    }

    if (userText) {
      parts.unshift(userText);
    }

    if (parts.length === 0) {
      return;
    }

    const systemInstruction = "Format your response for Telegram using HTML. Always answer in Bengali. Use <b>bold</b> for importance. Do NOT use markdown like ** or ### headers. For math, use plain text or simple unicode characters (e.g., ^2, sqrt, integral signs) instead of complex LaTeX. Ensure the output is clean and readable in a chat bubble.";
    
    // Note: The original code passed systemInstruction as the first element of the array. 
    // The generateContent method usually takes the prompt parts. 
    // If we want system instructions, we should usually pass them to getGenerativeModel or use the new API if available.
    // However, I will mimic the original code's intent. 
    // If 'gemini-3-flash-preview' behaves like current models, system instructions might need to be set in model config or just passed as text.
    // The original code: model.generateContent([systemInstruction, ...parts]);
    // I will keep it as is.
    
    const result = await model.generateContent([systemInstruction, ...parts]);
    const response = await result.response;
    const text = response.text();
    
    await ctx.reply(text, {
      reply_to_message_id: ctx.message.message_id,
      parse_mode: 'HTML'
    });
  } catch (error) {
    console.error('Error processing message:', error);
    await ctx.reply('Sorry, I encountered an error while processing your request.');
  }
});

bot.launch().then(() => {
  console.log('Bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));