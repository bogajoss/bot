import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import {
  Moon, Sun, GraduationCap, ArrowRight, BookOpen, Timer, Trophy, Brain, User, 
  Lock, IdCard, Mail, Send, CheckCircle, Camera, Compass, Landmark, Briefcase, 
  Check, LayoutDashboard, Zap, Presentation, FileText, CheckSquare, Bookmark, 
  Egg, Users, ChevronLeft, ChevronDown, Menu, Coins, Flame, LogOut, PlayCircle, 
  Play, FlaskConical, Monitor, Atom, Magnet, TestTube, Ruler, Calculator, Leaf, 
  UserCheck, Building2, Cpu, Factory, Wrench, Container, Languages, FunctionSquare, 
  Dna, PieChart, CircuitBoard, Home, Puzzle, Flag, Eye, EyeOff, ShieldCheck, Database, 
  Library, TrendingUp, Minus, DollarSign, Plus, Pencil, Trash2, Bold, Italic, 
  Underline, List, ListOrdered, Sigma, Image as ImageIcon, Link as LinkIcon, 
  Upload, UploadCloud, Ban, Sliders, Stethoscope, Calendar, Clock, Download, 
  AlertCircle, Info, BookOpenText, ListPlus, X, MessageSquare, Share2, Heart, 
  ShoppingBag, CreditCard, Smartphone, Bell, Tag, Ticket, Bot, Star, Award, Crown,
  BarChart, History, Sparkles, LayoutGrid, ArrowLeft
} from 'lucide-react';

const injectGlobalStyles = () => {
  if (document.getElementById('readingzone-styles')) return;

  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect'; preconnect1.href = 'https://fonts.googleapis.com';
  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect'; preconnect2.href = 'https://fonts.gstatic.com'; preconnect2.crossOrigin = 'anonymous';
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet'; fontLink.href = 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap';
  
  document.head.appendChild(preconnect1);
  document.head.appendChild(preconnect2);
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.id = 'readingzone-styles';
  style.innerHTML = `
    :root {
      --background: 210 40% 98%; 
      --foreground: 222.2 84% 4.9%;
      --card: 0 0% 100%; 
      --card-foreground: 222.2 84% 4.9%;
      --popover: 0 0% 100%; 
      --popover-foreground: 222.2 84% 4.9%;
      --primary: 160 84% 39%;
      --primary-foreground: 210 40% 98%;
      --secondary: 210 40% 96.1%; 
      --secondary-foreground: 222.2 47.4% 11.2%;
      --muted: 210 40% 96.1%; 
      --muted-foreground: 215.4 16.3% 46.9%;
      --accent: 210 40% 96.1%; 
      --accent-foreground: 222.2 47.4% 11.2%;
      --destructive: 0 84.2% 60.2%; 
      --destructive-foreground: 210 40% 98%;
      --success: 142 76% 36%; 
      --success-foreground: 355.7 100% 97.3%;
      --warning: 38 92% 50%; 
      --warning-foreground: 48 96% 89%;
      --info: 221.2 83.2% 53.3%; 
      --info-foreground: 210 40% 98%;
      --border: 214.3 31.8% 91.4%; 
      --input: 214.3 31.8% 91.4%; 
      --ring: 160 84% 39%;
      --radius: 1.25rem;
    }
    .dark {
      --background: 222.2 84% 4.9%; 
      --foreground: 210 40% 98%;
      --card: 217.2 32.6% 12.5%; 
      --card-foreground: 210 40% 98%;
      --popover: 222.2 84% 4.9%; 
      --popover-foreground: 210 40% 98%;
      --primary: 160 84% 39%; 
      --primary-foreground: 210 40% 98%;
      --secondary: 217.2 32.6% 17.5%; 
      --secondary-foreground: 210 40% 98%;
      --muted: 217.2 32.6% 17.5%; 
      --muted-foreground: 215 20.2% 65.1%;
      --accent: 217.2 32.6% 17.5%; 
      --accent-foreground: 210 40% 98%;
      --destructive: 0 62.8% 50.6%; 
      --destructive-foreground: 210 40% 98%;
      --success: 142 70% 45%; 
      --success-foreground: 144.9 80.4% 10%;
      --warning: 38 92% 50%; 
      --warning-foreground: 48 96% 89%;
      --info: 217.2 91.2% 59.8%; 
      --info-foreground: 222.2 47.4% 11.2%;
      --border: 217.2 32.6% 17.5%; 
      --input: 217.2 32.6% 17.5%; 
      --ring: 160 84% 39%;
    }
    body {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: 'Hind Siliguri', sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
    }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    .glass-effect {
      background: rgba(var(--card), 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    
    .text-gradient {
      background: linear-gradient(135deg, hsl(var(--primary)), #0ea5e9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }

    @keyframes slideUpFade {
      0% { transform: translateY(100%); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .animate-slide-up {
      animation: slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `;
  document.head.appendChild(style);

  if (!window.katex) {
    const katexCss = document.createElement('link');
    katexCss.rel = 'stylesheet';
    katexCss.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(katexCss);

    const katexJs = document.createElement('script');
    katexJs.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js';
    document.head.appendChild(katexJs);

    const katexRender = document.createElement('script');
    katexRender.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js';
    document.head.appendChild(katexRender);
  }
};

const initialDb = {
  squads: [
    { id: 'sq1', name: 'Alpha Focus', members_count: 3, points: 1500, rank: 1 }
  ],
  users: [
    { id: 'u1', name: 'Arif Hasan', username: 'arif_student', email: 'student@example.com', password: 'password', role: 'student', is_pro: false, squad_id: 'sq1', coins: 120, point: 450, level: 2, xp: 450, current_streak: 7, total_focus_time: 3600, joinDate: '2026-03-15' },
    { id: 'admin1', name: 'Admin Master', username: 'admin', email: 'admin@example.com', password: 'admin', role: 'admin', is_pro: true, squad_id: null, coins: 0, point: 0, level: 99, xp: 9999, current_streak: 0, total_focus_time: 0, joinDate: '2026-01-01' }
  ],
  badges: [
    { id: 'b1', name: 'Early Bird', description: 'Complete 5 tasks before 8 AM', icon_url: 'Award' },
    { id: 'b2', name: 'Focus Master', description: 'Study for 10 hours', icon_url: 'Brain' }
  ],
  notifications: [
    { id: 'n1', user_id: 'u1', title: 'নতুন ব্যাচ যুক্ত হয়েছে!', message: 'মেডিকেল স্পেশাল ব্যাচ ২০২৬ এ ভর্তি চলছে।', is_read: false, created_at: new Date().toISOString() },
  ],
  coupons: [
    { id: 'c1', code: 'PROMO50', discount_type: 'flat', discount_value: 50, used_count: 12, is_active: true }
  ],
  subjects: [
    { id: 'sub_phy1', slug: 'physics-1', title: 'পদার্থবিজ্ঞান', sub: '১ম পত্র', icon: 'Atom', color: 'from-blue-600 to-indigo-700' },
    { id: 'sub_phy2', slug: 'physics-2', title: 'পদার্থবিজ্ঞান', sub: '২য় পত্র', icon: 'Magnet', color: 'from-indigo-600 to-violet-700' },
    { id: 'sub_chem1', slug: 'chemistry-1', title: 'রসায়ন', sub: '১ম পত্র', icon: 'FlaskConical', color: 'from-fuchsia-600 to-purple-700' },
    { id: 'sub_math1', slug: 'math-1', title: 'উচ্চতর গণিত', sub: '১ম পত্র', icon: 'Ruler', color: 'from-amber-500 to-orange-600' },
    { id: 'sub_bio1', slug: 'biology-1', title: 'জীববিজ্ঞান', sub: '১ম পত্র', icon: 'Leaf', color: 'from-emerald-500 to-teal-700' }
  ],
  institutions: [
    { id: 'uni_du', slug: 'du', title: 'ঢাকা বিশ্ববিদ্যালয়', icon: 'Landmark', color: 'from-violet-600 to-purple-800' },
    { id: 'uni_buet', slug: 'buet', title: 'বুয়েট', icon: 'Building2', color: 'from-rose-600 to-red-800' },
    { id: 'uni_bup', slug: 'bup', title: 'বিইউপি', icon: 'ShieldCheck', color: 'from-amber-600 to-yellow-800' }
  ],
  chapters: [
    { id: 'ch_p1_1', subject_id: 'sub_phy1', title: 'ভৌতজগৎ ও পরিমাপ', order_index: 1 },
    { id: 'ch_p1_2', subject_id: 'sub_phy1', title: 'ভেক্টর', order_index: 2 },
    { id: 'ch_p1_3', subject_id: 'sub_phy1', title: 'গতিবিদ্যা', order_index: 3 }
  ],
  topics: [
    { id: 'top_1', chapter_id: 'ch_p1_2', title: 'ক্রস গুণন', order_index: 1 },
    { id: 'top_3', chapter_id: 'ch_p1_3', title: 'প্রজেক্টাইল', order_index: 1 }
  ],
  questions: [
    { id: 'q1', type: 'mcq', subject_id: 'sub_phy1', chapter_id: 'ch_p1_2', topic_id: 'top_1', source: 'DCU A 24-25', question: 'নিচের কোন সম্পর্কটি সঠিক?', options: ['$\\vec{L} = \\vec{r} \\times \\vec{F}$', '$\\vec{L} = \\vec{P} \\times \\vec{r}$', '$\\vec{L} = \\vec{F} \\times \\vec{r}$', '$\\vec{L} = \\vec{r} \\times \\vec{P}$'], correct_answer: 3, explanation: 'কৌণিক ভরবেগ $\\vec{L} = \\vec{r} \\times \\vec{P}$ এবং টর্ক $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.', is_public: true },
    { id: 'q2', type: 'mcq', subject_id: 'sub_phy1', chapter_id: 'ch_p1_3', topic_id: 'top_3', source: 'DU A 23-24', question: 'একটি প্রক্ষেপককে অণুভূমিকের সাথে 30° কোণে 40 m/s বেগে নিক্ষেপ করা হলো। সর্বোচ্চ উচ্চতা কত?', options: ['20.41 m', '40.82 m', '10.20 m', '80.0 m'], correct_answer: 0, explanation: '$H = \\frac{v_0^2 \\sin^2\\theta}{2g} = 20.41 m$', is_public: true },
    { id: 'q3', type: 'cq', subject_id: 'sub_phy1', chapter_id: 'ch_p1_3', topic_id: 'top_3', source: 'বুয়েট ২০-২১', question: 'একটি প্রক্ষেপককে অণুভূমিকের সাথে 30° কোণে 40 m/s বেগে নিক্ষেপ করা হলো।\n\nক) প্রক্ষেপকের সর্বোচ্চ উচ্চতা নির্ণয় করো।\nখ) প্রক্ষেপকটি অণুভূমিক পাল্লা অতিক্রম করতে কত সময় নেবে বিশ্লেষণ করো।', options: [], correct_answer: null, explanation: 'ক) $H = \\frac{v_0^2 \\sin^2\\theta}{2g} = 20.41 m$\nখ) $T = \\frac{2v_0 \\sin\\theta}{g} = 4.08 s$', is_public: true }
  ],
  bookmarked_questions: [
    { id: 'bq1', user_id: 'u1', question_id: 'q2' }
  ],
  tasks: [
    { id: 't1', user_id: 'u1', title: 'পদার্থবিজ্ঞান ভেক্টর অধ্যায়ের ২০টি MCQ', subject: 'Physics', scheduled_time: new Date().toISOString(), completed: true },
    { id: 't2', user_id: 'u1', title: '১টি কাস্টম মক টেস্ট দিন', subject: 'Exam', scheduled_time: new Date().toISOString(), completed: false }
  ],
  batches: [
    { id: 'b1', tag: 'ইঞ্জিনিয়ারিং', title: "ঢাবি 'ক' ইউনিট স্পেশাল ২০২৬", price: 1500, icon: 'Rocket', color: 'bg-blue-600', is_public: true, exam_count: 12 },
    { id: 'b2', tag: 'মেডিকেল', title: "মেডিকেল এক্সাম ব্যাচ ২০২৬", price: 1000, icon: 'Stethoscope', color: 'bg-green-600', is_public: true, exam_count: 20 }
  ],
  enrollments: [
    { id: 'e1', user_id: 'u1', batch_id: 'b1', status: 'approved', enrolled_at: '2026-03-16' }
  ],
  exams: [
    { id: 'ex1', tag: 'Weekly', title: 'উইকলি টেস্ট - ০১ (পদার্থবিজ্ঞান)', exam_date: '2026-03-25', duration_minutes: 45, marks: 50, status: 'completed', type: 'mcq', color: 'bg-primary', icon: 'FileText' },
    { id: 'ex2', tag: 'Daily', title: 'ডেইলি প্র্যাকটিস - রসায়ন', exam_date: '2026-03-30', duration_minutes: 30, marks: 30, status: 'upcoming', type: 'mcq', color: 'bg-primary', icon: 'FileText' }
  ],
  batch_exams: [
    { id: 'be1', batch_id: 'b1', exam_id: 'ex1' },
    { id: 'be2', batch_id: 'b1', exam_id: 'ex2' }
  ],
  results: [
    { id: 'r1', user_id: 'u1', exam_id: 'ex1', score: 42.5, total: 50, correct: 45, wrong: 10, skipped: 5, accuracy: 85, submitted_at: '2026-03-25T10:00:00Z' }
  ],
  leaderboards: [
    { id: 'l1', user_id: 'u2', name: 'Nusrat Jahan', period: 'weekly', rank: 1, xp: 800, time_spent: '12:00:00' },
    { id: 'l2', user_id: 'u1', name: 'Arif Hasan', period: 'weekly', rank: 2, xp: 450, time_spent: '08:30:00' }
  ],
  ai_chat_messages: [
    { id: 'msg1', session_id: 'sess1', user_id: 'u1', role: 'assistant', content: 'Hello! I am your AI Science Tutor. What physics doubt can I help you with today?' }
  ],
  discussions: [
    { id: 'd1', user_id: 'u2', title: 'ইন্টিগ্রেশনের শর্টকাট', content: 'কেউ কি ইন্টিগ্রেশন এর শর্টকাট টেকনিকগুলো শেয়ার করতে পারবেন? পরীক্ষার সময় অনেক কাজে লাগত।', created_at: new Date().toISOString(), is_resolved: false }
  ]
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeRoot, setActiveRoot] = useState('auth');
  const [authView, setAuthView] = useState('login'); 
  const [appPage, setAppPage] = useState('page-dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [db, setDb] = useState(initialDb);
  const [currentUser, setCurrentUser] = useState(null);

  const [toast, setToast] = useState({ visible: false, title: '', message: '', type: 'success' });
  const [modal, setModal] = useState({ visible: false, title: '', message: '', type: 'warning', onConfirm: null });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [pageProps, setPageProps] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    injectGlobalStyles();
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const showToast = (title, message, type = 'success') => {
    setToast({ visible: true, title, message, type });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3000);
  };

  const showConfirmModal = (title, message, onConfirm, type = 'warning') => {
    setModal({ visible: true, title, message, onConfirm, type });
  };

  const navigateTo = (root, viewOrPage = null, props = {}) => {
    setActiveRoot(root);
    setPageProps(props);
    if (root === 'auth' && viewOrPage) setAuthView(viewOrPage);
    if (root === 'app' && viewOrPage) setAppPage(viewOrPage);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dbInsert = (table, data) => {
    const newItem = { id: Date.now().toString(), ...data, created_at: new Date().toISOString() };
    setDb(prev => ({ ...prev, [table]: [...prev[table], newItem] }));
    return newItem;
  };

  const dbUpdate = (table, id, data) => {
    setDb(prev => ({ ...prev, [table]: prev[table].map(item => item.id === id ? { ...item, ...data } : item) }));
  };

  const dbDelete = (table, id) => {
    setDb(prev => ({ ...prev, [table]: prev[table].filter(item => item.id !== id) }));
  };

  return (
    <AppContext.Provider value={{
      theme, toggleTheme, activeRoot, authView, setAuthView, appPage, setAppPage,
      toast, showToast, modal, setModal, showConfirmModal,
      isSidebarCollapsed, setIsSidebarCollapsed, isMobileMenuOpen, setIsMobileMenuOpen,
      navigateTo, pageProps, setPageProps,
      db, setDb, dbInsert, dbUpdate, dbDelete,
      currentUser, setCurrentUser,
      showNotifications, setShowNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

const DynamicIcon = ({ iconStr, ...props }) => {
  const IconCmp = LucideIcons[iconStr] || LucideIcons.HelpCircle;
  return <IconCmp {...props} />;
};

const GlobalOverlays = () => {
  const { theme, toggleTheme, toast, modal, setModal } = useApp();
  return (
    <>
      <button onClick={toggleTheme} className="fixed top-safe right-4 md:right-8 top-4 md:top-6 p-3 rounded-full border border-border bg-card/80 backdrop-blur-md text-foreground hover:bg-accent/80 hover:scale-105 transition-all z-[100] shadow-md cursor-pointer">
        {theme === 'dark' ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-primary" />}
      </button>

      {toast.visible && (
        <div className="fixed top-20 md:top-auto md:bottom-8 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-4 px-5 py-4 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl text-card-foreground shadow-2xl min-w-[320px] max-w-[90vw] transform transition-all animate-in slide-in-from-top-5 md:slide-in-from-bottom-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-inner ${toast.type === 'success' ? 'bg-success/20 text-success' : toast.type === 'destructive' ? 'bg-destructive/20 text-destructive' : 'bg-info/20 text-info'}`}>
            {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : toast.type === 'destructive' ? <AlertCircle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm leading-tight tracking-tight">{toast.title}</h4>
            <p className="text-sm text-muted-foreground mt-0.5">{toast.message}</p>
          </div>
        </div>
      )}

      {modal.visible && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card text-card-foreground p-8 w-full max-w-sm rounded-[2rem] border border-border/50 shadow-2xl text-center transform scale-100 transition-all">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner ${modal.type === 'destructive' ? 'bg-destructive/20 text-destructive' : 'bg-warning/20 text-warning'}`}>
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">{modal.title}</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{modal.message}</p>
            <div className="flex gap-3 justify-center">
              <button className="flex-1 inline-flex items-center justify-center rounded-xl text-sm font-bold border border-input bg-background hover:bg-accent h-12 transition-colors" onClick={() => setModal(m => ({ ...m, visible: false }))}>বাতিল</button>
              <button className={`flex-1 inline-flex items-center justify-center rounded-xl text-sm font-bold h-12 text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${modal.type === 'destructive' ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}`} onClick={() => { setModal(m => ({ ...m, visible: false })); modal.onConfirm?.(); }}>নিশ্চিত</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NotificationsDropdown = () => {
  const { currentUser, db, dbUpdate, showNotifications, setShowNotifications } = useApp();
  const userNotifications = db.notifications.filter(n => n.user_id === currentUser?.id).sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  const unreadCount = userNotifications.filter(n => !n.is_read).length;

  if (!showNotifications) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
      <div className="absolute right-0 top-14 mt-2 w-[90vw] sm:w-80 max-w-sm bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden transform origin-top-right animate-in fade-in scale-95 duration-150">
        <div className="p-4 border-b border-border/50 bg-muted/30 font-bold flex justify-between items-center">
          <span className="text-[15px]">নোটিফিকেশন</span>
          {unreadCount > 0 && <span className="bg-primary text-primary-foreground text-[10px] px-2.5 py-1 rounded-full font-bold shadow-sm">{unreadCount} নতুন</span>}
        </div>
        <div className="max-h-[350px] overflow-y-auto hide-scrollbar">
          {userNotifications.length === 0 ? (
            <div className="p-8 text-center text-sm text-muted-foreground flex flex-col items-center">
              <Bell className="w-8 h-8 opacity-20 mb-2" />
              কোনো নোটিফিকেশন নেই।
            </div>
          ) : (
            userNotifications.map(n => (
              <div key={n.id} onClick={() => dbUpdate('notifications', n.id, { is_read: true })} className={`p-4 border-b border-border/50 last:border-0 cursor-pointer transition-colors hover:bg-accent/80 flex gap-3 ${!n.is_read ? 'bg-primary/5' : ''}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${!n.is_read ? 'bg-primary' : 'bg-transparent'}`} />
                <div>
                  <h5 className={`text-sm mb-1 ${!n.is_read ? 'font-bold text-foreground' : 'font-semibold text-muted-foreground'}`}>{n.title}</h5>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">{n.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

const MobileMenuDrawer = ({ sidebarItems }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, navigateTo, currentUser, showConfirmModal } = useApp();

  if (!isMobileMenuOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden animate-in fade-in" onClick={() => setIsMobileMenuOpen(false)} />
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 z-[110] rounded-t-[2rem] shadow-2xl md:hidden animate-slide-up flex flex-col max-h-[85vh]">
        <div className="flex justify-center pt-3 pb-2"><div className="w-12 h-1.5 bg-border rounded-full" /></div>
        <div className="px-6 py-4 flex items-center justify-between border-b border-border/50">
           <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-info/20 flex items-center justify-center text-primary border border-primary/20"><User className="w-6 h-6" /></div>
             <div>
               <h3 className="font-black text-lg leading-tight">{currentUser?.name}</h3>
               <p className="text-xs font-bold text-muted-foreground uppercase">{currentUser?.role === 'admin' ? 'Admin' : 'Student'}</p>
             </div>
           </div>
           <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center"><X className="w-5 h-5 text-muted-foreground" /></button>
        </div>
        <div className="overflow-y-auto hide-scrollbar p-6 space-y-8 flex-1">
          {sidebarItems.map((group, i) => (
            <div key={i}>
              <h4 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-4 ml-2">{group.label}</h4>
              <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                 {group.items.map(item => (
                   <button key={item.id} onClick={() => navigateTo('app', item.id)} className="flex flex-col items-center gap-2 group">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${item.active ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-secondary text-foreground group-hover:bg-accent border border-border/50'}`}>
                        <item.icon className={`w-6 h-6 ${item.active ? '' : item.colorClass || 'text-muted-foreground'}`} />
                      </div>
                      <span className={`text-[10px] font-bold text-center leading-tight ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</span>
                   </button>
                 ))}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-border/50">
             <button onClick={() => showConfirmModal("লগআউট করবেন?", "আপনি কি নিশ্চিত যে একাউন্ট থেকে বের হতে চান?", () => navigateTo('auth', 'login'), 'destructive')} className="w-full flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 text-destructive font-bold"><LogOut className="w-5 h-5" /> লগআউট করুন</button>
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout = ({ children, sidebarItems, title, subTitle }) => {
  const { navigateTo, currentUser, db, setShowNotifications, isSidebarCollapsed, setIsSidebarCollapsed, setIsMobileMenuOpen, appPage } = useApp();
  const unreadNotifications = currentUser ? db.notifications.filter(n => n.user_id === currentUser.id && !n.is_read).length : 0;
  
  // Hide Navigation Elements for immersive modes
  const hideNavPages = ['page-exam-session', 'page-practice-session'];
  const shouldHideNav = hideNavPages.includes(appPage);
  
  // Mobile Bottom Nav Items
  const primaryNavItems = [
    { id: 'page-dashboard', label: 'Home', icon: Home },
    { id: 'page-qbank', label: 'QBank', icon: BookOpen },
    { id: 'page-fast-practice', label: 'Practice', icon: Zap },
    { id: 'page-exam', label: 'Exams', icon: FileText }
  ];

  return (
    <div className="min-h-[100dvh] w-full flex bg-background md:bg-muted/10">
      
      {/* Desktop Sidebar */}
      {!shouldHideNav && (
        <aside className={`hidden md:flex sticky top-0 left-0 h-screen bg-card text-card-foreground border-r border-border/50 flex-col z-40 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-[88px]' : 'w-[280px]'}`}>
          <div className="p-6 flex items-center justify-between cursor-pointer border-b border-border/50" onClick={() => navigateTo('app', sidebarItems[0]?.items[0]?.id)}>
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-primary-foreground shrink-0 shadow-lg shadow-primary/20"><GraduationCap className="w-6 h-6" /></div>
              {!isSidebarCollapsed && <h1 className="text-2xl font-black whitespace-nowrap text-gradient">রিডিংজোন</h1>}
            </div>
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center text-muted-foreground transition-transform hover:scale-110">
              <ChevronLeft className={`w-4 h-4 transition-transform ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto hide-scrollbar">
            {sidebarItems.map((group, i) => (
              <React.Fragment key={i}>
                {!isSidebarCollapsed && <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-6 mb-3 ml-2">{group.label}</div>}
                {group.items.map(item => (
                  <button key={item.id} onClick={() => navigateTo('app', item.id)} className={`w-full flex items-center group transition-all duration-200 ${isSidebarCollapsed ? 'justify-center p-3 rounded-xl' : 'gap-3.5 px-4 py-3 rounded-2xl'} text-sm font-bold ${item.active ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}>
                    <item.icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${item.active ? '' : item.colorClass || ''}`} />
                    {!isSidebarCollapsed && <span className="whitespace-nowrap">{item.label}</span>}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </nav>
        </aside>
      )}

      <main className="flex-1 flex flex-col h-[100dvh] w-full relative overflow-hidden">
        
        {/* Immersive Mobile Back Header (for Exams/Practice) */}
        {shouldHideNav && (
           <header className="md:hidden glass-effect sticky top-0 z-30 px-4 py-3 flex items-center gap-3 border-b border-border/50">
              <button onClick={() => navigateTo('app', 'page-dashboard')} className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground"><ArrowLeft className="w-5 h-5"/></button>
              <h2 className="font-black text-lg">{title}</h2>
           </header>
        )}

        {/* Global Header */}
        {!shouldHideNav && (
          <header className="sticky top-0 z-30 glass-effect px-5 md:px-10 py-3 md:py-5 flex items-center justify-between border-b border-border/50 transition-all">
            <div className="flex items-center gap-3 md:gap-4">
              {/* Mobile Logo replacing sidebar */}
              <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shadow-md"><GraduationCap className="w-6 h-6" /></div>
              <div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight leading-tight">{title}</h2>
                <p className="text-[11px] md:text-sm font-bold text-muted-foreground hidden sm:block">{subTitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 pr-10 md:pr-12"> {/* Padding right to avoid overlap with theme toggle */}
              {currentUser?.role !== 'admin' && (
                <div className="hidden sm:flex gap-2">
                  <div onClick={() => navigateTo('app', 'page-dim-pet')} className="flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-bold cursor-pointer hover:bg-accent transition-all">
                    <Coins className="w-4 h-4 text-yellow-500" /> <span>{currentUser?.coins || 0}</span>
                  </div>
                  <div onClick={() => navigateTo('app', 'page-study-room')} className="flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-bold cursor-pointer hover:bg-accent transition-all">
                    <Flame className="w-4 h-4 text-orange-500" /> <span>{currentUser?.current_streak || 0}</span>
                  </div>
                </div>
              )}
              
              <div className="relative">
                <button onClick={() => setShowNotifications(prev => !prev)} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-foreground hover:bg-accent transition-all relative shadow-sm">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  {unreadNotifications > 0 && <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-destructive border-2 border-background"></span>}
                </button>
                <NotificationsDropdown />
              </div>
            </div>
          </header>
        )}

        {/* Scrollable Content */}
        <div className={`flex-1 overflow-y-auto hide-scrollbar w-full p-4 md:p-10 mx-auto max-w-7xl ${shouldHideNav ? 'pb-8' : 'pb-28 md:pb-8'}`} key={title}>
          {children}
        </div>

        {/* Mobile Bottom Navigation */}
        {!shouldHideNav && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/85 backdrop-blur-xl border-t border-border/50 pb-safe pt-2 px-6 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-3xl">
             {primaryNavItems.map(item => {
               const isActive = appPage === item.id || (item.id === 'page-qbank' && ['page-subject-detail', 'page-univ-detail', 'page-questions-list', 'page-custom-exam'].includes(appPage));
               return (
                 <button key={item.id} onClick={() => navigateTo('app', item.id)} className="flex flex-col items-center justify-center w-16 h-14 relative group">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary scale-110' : 'text-muted-foreground group-hover:text-foreground'}`}>
                       <item.icon className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className={`text-[10px] font-black mt-1 transition-all ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</span>
                    {isActive && <div className="absolute -top-3 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]" />}
                 </button>
               )
             })}
             
             {/* Mobile Menu Trigger */}
             <button onClick={() => setIsMobileMenuOpen(true)} className="flex flex-col items-center justify-center w-16 h-14 relative group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 text-muted-foreground group-hover:text-foreground">
                   <LayoutGrid className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-black mt-1 text-muted-foreground">More</span>
             </button>
          </div>
        )}
      </main>

      <MobileMenuDrawer sidebarItems={sidebarItems} />
    </div>
  );
};

const Auth = () => {
  const { authView, setAuthView, navigateTo, showToast, db, setCurrentUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = db.users.find(u => u.email === email && u.password === password);
    if (user) {
      showToast('লগইন সফল', 'লগইন হচ্ছে...');
      setCurrentUser(user);
      setTimeout(() => {
        if(user.role === 'admin') navigateTo('app', 'page-admin-dashboard');
        else navigateTo('app', 'page-dashboard');
      }, 500);
    } else {
      showToast('ভুল তথ্য', 'ইমেইল বা পাসওয়ার্ড সঠিক নয়', 'destructive');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      id: 'u_' + Date.now(), name, username: name.toLowerCase().replace(/\s/g, '_'), email, password, role: 'student', is_pro: false, coins: 0, level: 1, xp: 0, current_streak: 0, total_focus_time: 0, joinDate: new Date().toISOString()
    };
    db.users.push(newUser);
    setCurrentUser(newUser);
    showToast('স্বাগতম!', 'আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।'); 
    setTimeout(() => navigateTo('app', 'page-dashboard'), 500); 
  };

  const handleForgot = (e) => { e.preventDefault(); showToast('সফল', 'রিকভারি লিংক পাঠানো হয়েছে'); setTimeout(() => setAuthView('login'), 1000); };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 sm:p-8 w-full bg-background relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-info/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-card/80 backdrop-blur-xl text-card-foreground rounded-[2.5rem] border border-border/50 shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10">
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 p-12 flex-col justify-between relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg"><GraduationCap className="w-7 h-7" /></div>
            <h1 className="text-3xl font-black tracking-tight">রিডিংজোন</h1>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-5 leading-tight animate-float">ভর্তি প্রস্তুতির<br/>স্মার্ট সঙ্গী</h2>
            <p className="text-white/80 text-lg font-medium max-w-sm leading-relaxed">প্রশ্নব্যাংক, মক টেস্ট এবং লাইভ স্টাডি স্কোয়াডের মাধ্যমে নিজের প্রস্তুতিকে নিয়ে যান এক নতুন উচ্চতায়।</p>
          </div>
          <div className="relative z-10 flex items-center gap-4 text-sm font-medium text-white/70">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => <div key={i} className={`w-10 h-10 rounded-full border-2 border-teal-800 bg-teal-${i+3}00 flex items-center justify-center text-xs font-bold`}>{i}</div>)}
            </div>
            <p>১০,০০০+ শিক্ষার্থীর সাথে যুক্ত হোন</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-14 flex flex-col justify-center bg-card py-12">
          <div className="flex md:hidden items-center gap-3 mb-10 justify-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shadow-lg"><GraduationCap className="w-8 h-8" /></div>
            <h1 className="text-4xl font-black text-gradient">রিডিংজোন</h1>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {authView === 'login' && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl font-black tracking-tight mb-2">স্বাগতম</h2>
                  <p className="text-muted-foreground font-medium">অ্যাকাউন্টে প্রবেশ করতে আপনার তথ্য দিন</p>
                  <div className="mt-4 p-4 bg-info/10 border border-info/20 rounded-xl text-xs text-info font-medium text-left leading-relaxed">
                    <strong>Demo Accounts:</strong><br/>
                    Student: student@example.com / password<br/>
                    Admin: admin@example.com / admin
                  </div>
                </div>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">ইমেইল বা ফোন নম্বর</label>
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-background" placeholder="student@example.com" value={email} onChange={e=>setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pl-1 pr-1"><label className="text-sm font-bold text-foreground">পাসওয়ার্ড</label><button type="button" onClick={() => setAuthView('forgot')} className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">পাসওয়ার্ড ভুলে গেছেন?</button></div>
                    <input type="password" className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-background" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl text-lg font-black transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-14 mt-4">লগইন করুন</button>
                </form>
                <p className="text-center text-sm font-bold text-muted-foreground mt-8">অ্যাকাউন্ট নেই? <button onClick={() => setAuthView('register')} className="text-primary hover:text-primary/80 transition-colors ml-1">রেজিস্ট্রেশন করুন</button></p>
              </div>
            )}

            {authView === 'register' && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl font-black tracking-tight mb-2">নতুন অ্যাকাউন্ট</h2>
                  <p className="text-muted-foreground font-medium">আপনার প্রস্তুতির যাত্রা আজই শুরু করুন</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">আপনার পুরো নাম</label>
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="যেমন: রহিম হাসান" value={name} onChange={e=>setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">ইমেইল বা ফোন নম্বর</label>
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="student@example.com" value={email} onChange={e=>setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">পাসওয়ার্ড</label>
                    <input type="password" className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl text-lg font-black transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-14 mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </form>
                <p className="text-center text-sm font-bold text-muted-foreground mt-8">আগে থেকেই অ্যাকাউন্ট আছে? <button onClick={() => setAuthView('login')} className="text-primary hover:text-primary/80 transition-colors ml-1">লগইন করুন</button></p>
              </div>
            )}

            {authView === 'forgot' && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <div className="mb-8 text-center md:text-left">
                  <button onClick={() => setAuthView('login')} className="mb-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                  <h2 className="text-3xl font-black tracking-tight mb-2">পাসওয়ার্ড রিকভারি</h2>
                  <p className="text-muted-foreground font-medium">আপনার ইমেইল দিন, আমরা রিকভারি লিংক পাঠিয়ে দেব।</p>
                </div>
                <form onSubmit={handleForgot} className="space-y-5">
                  <div className="space-y-2">
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="student@example.com" required />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl text-lg font-black transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-14 mt-4">লিংক পাঠান</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ADMIN PAGES ---

const AdminOverview = () => {
  const { db } = useApp();
  const stats = [
    { title: "মোট ইউজার", value: db.users.length, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "প্রশ্ন ডাটাবেস", value: db.questions.length, icon: Database, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { title: "অ্যাক্টিভ ব্যাচ", value: db.batches.length, icon: Library, color: "text-orange-500", bg: "bg-orange-500/10" },
    { title: "অ্যাক্টিভ কুপন", value: db.coupons.length, icon: Ticket, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-3xl border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md transition-all p-5 md:p-6 flex flex-col gap-3 md:gap-4 group">
            <div className="flex items-center justify-between">
              <h3 className="tracking-tight text-xs md:text-sm font-bold text-muted-foreground">{s.title}</h3>
              <div className={`p-2 rounded-xl ${s.bg} ${s.color} transition-transform group-hover:scale-110`}><s.icon className="h-4 w-4 md:h-5 md:w-5" /></div>
            </div>
            <div className="text-3xl md:text-4xl font-black">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-[2rem] border border-border/50 bg-gradient-to-r from-card to-muted/30 text-card-foreground shadow-sm p-6 md:p-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-lg md:text-xl leading-none tracking-tight mb-3">অ্যাডমিন নির্দেশনা</h3>
          <p className="text-sm md:text-base text-muted-foreground font-medium max-w-3xl leading-relaxed">বামপাশের মেনু থেকে ব্যাচ, পরীক্ষা, প্রশ্নব্যাংক, ইউজার এবং কুপন ম্যানেজ করুন। সবগুলো পেজেই Create, Edit এবং Delete অপশন রয়েছে। ড্যাশবোর্ড আপডেটগুলো লাইভ সেভ হবে।</p>
        </div>
        <Sparkles className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 text-primary/5 pointer-events-none" />
      </div>
    </div>
  );
};

const TableWrapper = ({ children }) => (
  <div className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden">
    <div className="overflow-x-auto hide-scrollbar">
      <table className="w-full text-sm text-left border-collapse whitespace-nowrap md:whitespace-normal">
        {children}
      </table>
    </div>
  </div>
);

const AdminBatches = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', tag: '', price: 0, icon: 'Rocket', color: 'bg-blue-600' });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('batches', editId, formData); showToast('আপডেট সফল', 'ব্যাচ আপডেট করা হয়েছে'); } 
    else { dbInsert('batches', formData); showToast('সফল', 'নতুন ব্যাচ তৈরি হয়েছে'); }
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">ব্যাচ ও কোর্স</h3>
        <button onClick={() => { setEditId(null); setFormData({ title: '', tag: '', price: 0, icon: 'Rocket', color: 'bg-blue-600' }); setShowModal(true); }} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন ব্যাচ</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">ব্যাচ</th><th className="p-4 md:p-5 font-bold">ট্যাগ</th><th className="p-4 md:p-5 font-bold">ফি</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.batches.map(b => (
            <tr key={b.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5 font-bold text-base whitespace-normal min-w-[200px]">{b.title}</td>
              <td className="p-4 md:p-5"><span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider">{b.tag}</span></td>
              <td className="p-4 md:p-5 font-black text-muted-foreground">৳{b.price}</td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => { setEditId(b.id); setFormData(b); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('batches', b.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-md rounded-[2rem] border border-border/50 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'ব্যাচ এডিট করুন' : 'নতুন ব্যাচ'}</h3>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2"><label className="text-sm font-bold pl-1">টাইটেল</label><input required value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">ট্যাগ</label><input required value={formData.tag} onChange={e=>setFormData({...formData, tag: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">ফি (টাকা)</label><input type="number" required value={formData.price} onChange={e=>setFormData({...formData, price: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminExams = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', tag: '', exam_date: '', duration_minutes: 30, marks: 30, type: 'mcq' });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('exams', editId, formData); showToast('আপডেট সফল', 'পরীক্ষা আপডেট করা হয়েছে'); }
    else { dbInsert('exams', formData); showToast('সফল', 'নতুন পরীক্ষা তৈরি হয়েছে'); }
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">পরীক্ষাসমূহ</h3>
        <button onClick={() => { setEditId(null); setFormData({ title: '', tag: '', exam_date: '', duration_minutes: 30, marks: 30, type: 'mcq' }); setShowModal(true); }} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন পরীক্ষা</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">পরীক্ষা</th><th className="p-4 md:p-5 font-bold">তারিখ</th><th className="p-4 md:p-5 font-bold">মার্কস/সময়</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.exams.map(e => (
            <tr key={e.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5 font-bold text-base whitespace-normal min-w-[200px]">{e.title}</td>
              <td className="p-4 md:p-5 font-semibold text-muted-foreground">{e.exam_date}</td>
              <td className="p-4 md:p-5 font-semibold">{e.marks} মার্কস / {e.duration_minutes} মি.</td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => { setEditId(e.id); setFormData(e); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('exams', e.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-md rounded-[2rem] border border-border/50 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'পরীক্ষা এডিট' : 'নতুন পরীক্ষা'}</h3>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2"><label className="text-sm font-bold pl-1">টাইটেল</label><input required value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">ট্যাগ</label><input required value={formData.tag} onChange={e=>setFormData({...formData, tag: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">তারিখ</label><input type="date" required value={formData.exam_date} onChange={e=>setFormData({...formData, exam_date: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><label className="text-sm font-bold pl-1">সময় (মিনিট)</label><input type="number" required value={formData.duration_minutes} onChange={e=>setFormData({...formData, duration_minutes: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
                <div className="space-y-2"><label className="text-sm font-bold pl-1">মার্কস</label><input type="number" required value={formData.marks} onChange={e=>setFormData({...formData, marks: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminCoupons = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ code: '', discount_type: 'flat', discount_value: 0, is_active: true });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('coupons', editId, formData); showToast('আপডেট সফল', 'কুপন আপডেট করা হয়েছে'); }
    else { dbInsert('coupons', formData); showToast('সফল', 'নতুন কুপন তৈরি হয়েছে'); }
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">কুপন ম্যানেজমেন্ট</h3>
        <button onClick={() => { setEditId(null); setFormData({ code: '', discount_type: 'flat', discount_value: 0, is_active: true }); setShowModal(true); }} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন কুপন</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">কোড</th><th className="p-4 md:p-5 font-bold">ডিসকাউন্ট</th><th className="p-4 md:p-5 font-bold">স্ট্যাটাস</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.coupons.map(c => (
            <tr key={c.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5 font-black font-mono text-primary text-lg min-w-[120px]">{c.code}</td>
              <td className="p-4 md:p-5 font-bold">{c.discount_type === 'percentage' ? `${c.discount_value}%` : `৳${c.discount_value}`}</td>
              <td className="p-4 md:p-5"><span className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider ${c.is_active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}>{c.is_active ? 'Active' : 'Inactive'}</span></td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => { setEditId(c.id); setFormData(c); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('coupons', c.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-md rounded-[2rem] border border-border/50 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'কুপন এডিট' : 'নতুন কুপন'}</h3>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2"><label className="text-sm font-bold pl-1">কুপন কোড</label><input required value={formData.code} onChange={e=>setFormData({...formData, code: e.target.value.toUpperCase()})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm font-mono uppercase focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><label className="text-sm font-bold pl-1">ধরন</label><select value={formData.discount_type} onChange={e=>setFormData({...formData, discount_type: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"><option value="flat">Flat Amount</option><option value="percentage">Percentage (%)</option></select></div>
                <div className="space-y-2"><label className="text-sm font-bold pl-1">ভ্যালু</label><input type="number" required value={formData.discount_value} onChange={e=>setFormData({...formData, discount_value: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              </div>
              <div className="flex items-center space-x-3 pt-3">
                <input type="checkbox" id="active" checked={formData.is_active} onChange={e=>setFormData({...formData, is_active: e.target.checked})} className="w-6 h-6 rounded-md border-input text-primary focus:ring-primary focus:ring-2" />
                <label htmlFor="active" className="text-base font-bold cursor-pointer">কুপন অ্যাক্টিভ রাখুন</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminUsers = () => {
  const { db, dbUpdate, showToast } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({ role: 'student', is_pro: false });

  const handleSave = (e) => {
    e.preventDefault();
    dbUpdate('users', editUser.id, formData);
    showToast('আপডেট সফল', 'ইউজার প্রোফাইল আপডেট করা হয়েছে');
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex justify-between items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">ইউজার ম্যানেজমেন্ট</h3>
      </div>
      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">ইউজার</th><th className="p-4 md:p-5 font-bold">রোল/স্ট্যাটাস</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.users.map(u => (
            <tr key={u.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5"><div className="font-bold text-base whitespace-nowrap">{u.name}</div><div className="text-xs text-muted-foreground mt-1">{u.email}</div></td>
              <td className="p-4 md:p-5">
                <div className="flex gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-black tracking-wider ${u.role==='admin' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>{u.role}</span>
                  {u.is_pro && <span className="bg-warning/20 text-warning-foreground px-2.5 py-1 rounded-md text-[10px] uppercase font-black tracking-wider">PRO</span>}
                </div>
              </td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end">
                  <button onClick={() => { setEditUser(u); setFormData({ role: u.role, is_pro: u.is_pro }); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-sm rounded-[2rem] border border-border/50 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">ইউজার এডিট</h3>
            <div className="mb-6 p-5 bg-muted/50 rounded-2xl border border-border/50">
               <p className="font-black text-lg">{editUser?.name}</p>
               <p className="text-sm font-semibold text-muted-foreground mt-1">{editUser?.email}</p>
            </div>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">ইউজার রোল</label>
                <select value={formData.role} onChange={e=>setFormData({...formData, role: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all font-semibold">
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex items-center space-x-3 pt-3">
                <input type="checkbox" id="pro" checked={formData.is_pro} onChange={e=>setFormData({...formData, is_pro: e.target.checked})} className="w-6 h-6 rounded-md border-input text-primary focus:ring-primary focus:ring-2" />
                <label htmlFor="pro" className="text-base font-bold cursor-pointer">Pro সাবস্ক্রিপশন</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminQBankQuestions = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ question: '', options: ['', '', '', ''], correct_answer: 0, explanation: '', type: 'mcq' });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('questions', editId, formData); showToast('আপডেট সফল', 'প্রশ্ন আপডেট করা হয়েছে'); }
    else { dbInsert('questions', formData); showToast('সফল', 'নতুন প্রশ্ন তৈরি হয়েছে'); }
    setShowModal(false);
  };

  const openEdit = (q) => { setEditId(q.id); setFormData({ ...q, options: q.options || ['', '', '', ''] }); setShowModal(true); };
  const openNew = () => { setEditId(null); setFormData({ question: '', options: ['', '', '', ''], correct_answer: 0, explanation: '', type: 'mcq' }); setShowModal(true); };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">প্রশ্নব্যাংক ম্যানেজমেন্ট</h3>
        <button onClick={openNew} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন প্রশ্ন</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold w-2/3">প্রশ্ন</th><th className="p-4 md:p-5 font-bold">ধরন</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.questions.map(q => (
            <tr key={q.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5"><div className="font-bold text-base line-clamp-2 min-w-[200px] whitespace-normal">{q.question}</div></td>
              <td className="p-4 md:p-5"><span className="uppercase text-xs font-black tracking-widest bg-secondary px-3 py-1.5 rounded-lg">{q.type}</span></td>
              <td className="p-4 md:p-5 text-right whitespace-nowrap">
                <div className="flex justify-end gap-2">
                  <button onClick={() => openEdit(q)} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('questions', q.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-2xl rounded-[2rem] border border-border/50 shadow-2xl relative max-h-[90vh] overflow-y-auto hide-scrollbar">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'প্রশ্ন এডিট' : 'নতুন প্রশ্ন'}</h3>
            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">প্রশ্ন</label>
                <textarea required value={formData.question} onChange={e=>setFormData({...formData, question: e.target.value})} className="flex min-h-[100px] w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-base font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">ধরন</label>
                <select value={formData.type} onChange={e=>setFormData({...formData, type: e.target.value})} className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base font-bold focus:ring-2 focus:ring-primary outline-none transition-all">
                  <option value="mcq">MCQ</option>
                  <option value="cq">CQ (লিখিত)</option>
                </select>
              </div>
              {formData.type === 'mcq' && (
                <div className="p-5 md:p-6 border border-border/50 rounded-3xl bg-muted/30 space-y-4">
                  <label className="text-sm font-bold ml-1">অপশনসমূহ (সঠিক উত্তর মার্ক করুন)</label>
                  {formData.options.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <input type="radio" name="correct_ans" checked={formData.correct_answer === idx} onChange={() => setFormData({...formData, correct_answer: idx})} className="w-6 h-6 text-primary focus:ring-primary" />
                      <input required value={opt} onChange={e=>{const newOpts=[...formData.options]; newOpts[idx]=e.target.value; setFormData({...formData, options: newOpts})}} className="flex h-14 w-full rounded-2xl border border-input bg-background px-5 text-base focus:ring-2 focus:ring-primary outline-none transition-all" placeholder={`Option ${idx+1}`} />
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">ব্যাখ্যা (ঐচ্ছিক)</label>
                <textarea value={formData.explanation} onChange={e=>setFormData({...formData, explanation: e.target.value})} className="flex min-h-[100px] w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-base font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- STUDENT VIEWS ---

const DashboardOverview = () => {
  const { navigateTo, currentUser, db } = useApp();
  const completedTasks = db.tasks.filter(t => t.user_id === currentUser?.id && t.completed).length;
  const totalTasks = db.tasks.filter(t => t.user_id === currentUser?.id).length;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Banner */}
      <div onClick={() => navigateTo('app', 'page-practice-session')} className="bg-gradient-to-br from-primary via-emerald-600 to-teal-800 p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden cursor-pointer group shadow-xl shadow-primary/20 hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 w-64 h-64 md:w-80 md:h-80 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
        <div className="relative z-10 text-white w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold mb-4 border border-white/20 shadow-sm"><PlayCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /> সর্বশেষ অধ্যায়</div>
          <h3 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">মহাকর্ষ ও অভিকর্ষ</h3>
          <p className="text-white/80 mb-6 text-sm md:text-lg font-medium max-w-lg leading-relaxed">আপনি গতকাল পদার্থবিজ্ঞানের এই অধ্যায়ে ছিলেন। এক ক্লিকেই প্র্যাকটিস শুরু করুন।</p>
          <button className="inline-flex items-center justify-center rounded-xl md:rounded-2xl text-sm md:text-base font-bold bg-white text-primary hover:bg-gray-50 h-12 md:h-14 px-6 md:px-8 shadow-lg transition-all md:group-hover:scale-105 w-full md:w-auto"><Zap className="w-5 h-5 mr-2" /> কুইক স্টার্ট <ArrowRight className="w-5 h-5 ml-2" /></button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Daily Tasks Card */}
        <div onClick={() => navigateTo('app', 'page-tasks')} className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md p-5 md:p-8 cursor-pointer transition-all md:hover:-translate-y-1 flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-bl-[100px] -z-10 group-hover:bg-success/10 transition-colors"></div>
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-success/10 text-success flex items-center justify-center shadow-inner"><CheckSquare className="w-5 h-5 md:w-6 md:h-6" /></div>
              <div><h4 className="font-black text-lg md:text-xl leading-tight">ডেইলি টাস্ক</h4><p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">{completedTasks}/{totalTasks} সম্পন্ন</p></div>
            </div>
            <ArrowRight className="text-muted-foreground w-5 h-5 md:w-6 md:h-6 group-hover:text-success transition-colors md:group-hover:translate-x-1" />
          </div>
          <div className="space-y-3 flex-1 mt-1">
            {db.tasks.filter(t => t.user_id === currentUser?.id).slice(0,3).map(task => (
               <div key={task.id} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${task.completed ? 'bg-secondary/50' : 'bg-background border border-border/50 shadow-sm'}`}>
                 {task.completed ? <CheckCircle className="text-success w-5 h-5 shrink-0" /> : <div className="w-5 h-5 rounded-full border-2 border-muted-foreground shrink-0" />}
                 <span className={`text-sm md:text-[15px] leading-tight ${task.completed ? 'line-through text-muted-foreground font-medium' : 'font-bold text-foreground'}`}>{task.title}</span>
               </div>
            ))}
          </div>
        </div>

        {/* DIM Pet Card */}
        <div onClick={() => navigateTo('app', 'page-dim-pet')} className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md p-5 md:p-8 cursor-pointer transition-all md:hover:-translate-y-1 flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner"><Egg className="w-5 h-5 md:w-6 md:h-6" /></div>
              <div><h4 className="font-black text-lg md:text-xl leading-tight">আমার DIM</h4><p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">লেভেল {currentUser?.level || 1}</p></div>
            </div>
            <ArrowRight className="text-muted-foreground w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors md:group-hover:translate-x-1" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl -z-10"></div>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-md border border-border/50 mb-4 md:mb-5 flex items-center justify-center text-4xl md:text-5xl animate-float">🐣</div>
            <div className="w-full max-w-[200px] md:max-w-xs bg-secondary rounded-full h-2 md:h-2.5 overflow-hidden shadow-inner"><div className="bg-primary h-full w-[45%] rounded-full"></div></div>
            <p className="text-[10px] md:text-xs font-bold text-muted-foreground mt-2 md:mt-3 uppercase tracking-wider">EXP 450 / 1000</p>
          </div>
        </div>
      </div>

      <div className="pt-2 md:pt-4">
        <h3 className="text-lg md:text-xl font-black mb-4 flex items-center gap-2"><Sparkles className="text-warning w-5 h-5 md:w-6 md:h-6" /> দ্রুত অ্যাক্সেস</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { title: "প্রশ্নব্যাংক", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30", route: "page-qbank" },
            { title: "কুইক প্র্যাকটিস", icon: Zap, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30", route: "page-fast-practice" },
            { title: "স্টাডি লাউঞ্জ", icon: Timer, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30", route: "page-study-room" },
            { title: "কমিউনিটি", icon: Users, color: "text-emerald-600", bg: "bg-emerald-100 dark:bg-emerald-900/30", route: "page-community" }
          ].map((item, i) => (
            <div key={i} onClick={() => navigateTo('app', item.route)} className="rounded-3xl md:rounded-[1.5rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md p-4 md:p-5 flex flex-col items-center text-center cursor-pointer active:scale-95 md:active:scale-100 md:hover:bg-accent/50 transition-all md:hover:-translate-y-1 group">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-3 md:mb-4 transition-transform md:group-hover:scale-110 shadow-inner`}><item.icon className="w-6 h-6 md:w-7 md:h-7" /></div>
              <h4 className={`font-bold text-sm md:text-base leading-tight`}>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QBankPage = () => {
  const { navigateTo, db } = useApp();
  return (
    <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
      <div onClick={() => navigateTo('app', 'page-custom-exam')} className="rounded-[2rem] bg-gradient-to-r from-card to-primary/5 border border-primary/20 shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 cursor-pointer active:scale-[0.98] md:active:scale-100 md:hover:shadow-md transition-all group">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 w-full">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-lg shadow-primary/20 md:group-hover:scale-105 transition-transform"><FlaskConical className="w-7 h-7 md:w-8 md:h-8" /></div>
          <div><h3 className="text-xl md:text-2xl font-black leading-tight mb-1.5 text-foreground">কাস্টম মক পরীক্ষা</h3><p className="text-sm md:text-base font-medium text-muted-foreground">নিজের পছন্দমতো টপিক ও প্রশ্ন দিয়ে পরীক্ষা তৈরি করুন এবং নিজেকে যাচাই করুন</p></div>
        </div>
        <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground h-12 md:h-14 px-8 w-full md:w-auto shrink-0 shadow-md md:group-hover:scale-105 transition-transform mt-2 md:mt-0">শুরু করুন <ArrowRight className="w-5 h-5 ml-2" /></button>
      </div>

      <div>
        <div className="mb-4 md:mb-6 px-1">
          <h3 className="text-xl md:text-2xl font-black">বিষয় ভিত্তিক</h3>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-1">সকল বিষয়ের প্রশ্নব্যাংক</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {db.subjects.map((sub) => (
            <div key={sub.id} onClick={() => navigateTo('app', 'page-subject-detail', { subjectId: sub.id, subjectTitle: sub.title, paper: sub.paper })} className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 cursor-pointer text-white min-h-[120px] md:min-h-[140px] bg-gradient-to-br ${sub.color} shadow-md active:scale-95 md:active:scale-100 md:hover:shadow-xl md:hover:-translate-y-1 transition-all group`}>
              <h4 className="text-lg md:text-xl font-black relative z-10 leading-tight mb-1 md:mb-1.5">{sub.title}</h4>
              {sub.paper && <p className="text-xs md:text-sm font-bold opacity-90 relative z-10 bg-black/10 inline-block px-2 py-0.5 rounded-md backdrop-blur-sm">{sub.paper}</p>}
              <DynamicIcon iconStr={sub.icon} className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 opacity-20 md:group-hover:scale-110 md:group-hover:rotate-6 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 md:mb-6 px-1">
          <h3 className="text-xl md:text-2xl font-black">প্রতিষ্ঠান ভিত্তিক</h3>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-1">বিগত বছরের ভর্তি পরীক্ষার প্রশ্ন</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {db.institutions.map((uni) => (
            <div key={uni.id} onClick={() => navigateTo('app', 'page-univ-detail', { uni: uni.title })} className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 cursor-pointer flex flex-col items-center justify-center text-center text-white min-h-[120px] md:min-h-[140px] bg-gradient-to-br ${uni.color} shadow-md active:scale-95 md:active:scale-100 md:hover:shadow-xl md:hover:-translate-y-1 transition-all group`}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-md shadow-inner md:group-hover:scale-110 transition-transform"><DynamicIcon iconStr={uni.icon} className="w-6 h-6 md:w-7 md:h-7" /></div>
              <h4 className="text-sm md:text-base font-black relative z-10 leading-tight">{uni.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomExam = () => {
  const { navigateTo, db } = useApp();

  return (
    <div className="max-w-5xl mx-auto pb-6 md:pb-12 space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-8">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <div>
          <h2 className="text-xl md:text-3xl font-black">কাস্টম মক পরীক্ষা</h2>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">নিজের মত করে পরীক্ষা সাজান</p>
        </div>
      </div>
      
      <div className="p-5 md:p-6 bg-card border border-border/50 rounded-[1.5rem] md:rounded-[2rem] shadow-sm">
        <h3 className="text-base md:text-lg font-black mb-4 md:mb-5">টপিক সিলেক্ট করো</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {db.subjects.map((s, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border-2 border-border/50 bg-background hover:border-primary/50 cursor-pointer transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><DynamicIcon iconStr={s.icon} className="w-5 h-5 text-primary" /></div>
              <span className="text-sm md:text-base font-bold">{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-6 bg-gradient-to-r from-card to-primary/5 border border-primary/20 rounded-[1.5rem] md:rounded-[2rem] shadow-sm">
        <h3 className="text-base md:text-lg font-black mb-4 md:mb-5">প্রিসেট পরীক্ষা (এক ক্লিকে শুরু)</h3>
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {['IUT', "ঢাবি 'ক'", "CoU 'A'", "SUST A", "ঢাবি 'খ'", "জাবি এ", "BUP", "RU A", "কৃষি গুচ্ছ"].map(p => (
            <button key={p} onClick={() => navigateTo('app', 'page-exam-session')} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold border border-border/50 bg-background hover:bg-primary hover:text-white hover:border-primary h-10 md:h-11 px-4 md:px-6 shadow-sm hover:shadow-md transition-all">{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const FastPractice = () => {
  const { navigateTo } = useApp();
  return (
    <div className="max-w-3xl mx-auto pb-6 md:pb-10">
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-xl p-6 md:p-12 relative overflow-hidden text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-purple-500/30">
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3">র‍্যাপিড ফায়ার প্র্যাকটিস</h3>
        <p className="text-sm md:text-base font-medium text-muted-foreground mb-8 md:mb-10 max-w-sm mx-auto">বিষয় ও অধ্যায় নির্বাচন করে দ্রুত উত্তর দিন এবং নিজের স্পিড বাড়ান</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-10 text-left">
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">বিষয় নির্বাচন</label>
            <select className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all font-semibold">
              <option>পদার্থবিজ্ঞান ১ম পত্র</option>
              <option>রসায়ন ১ম পত্র</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">অধ্যায় নির্বাচন</label>
            <select className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all font-semibold">
              <option>র‍্যান্ডম (সকল অধ্যায়)</option>
              <option>ভেক্টর</option>
            </select>
          </div>
        </div>
        <button onClick={() => navigateTo('app', 'page-practice-session')} className="inline-flex items-center justify-center rounded-2xl text-base md:text-lg font-black bg-primary text-primary-foreground h-14 px-8 md:px-10 shadow-lg md:hover:shadow-xl md:hover:-translate-y-1 transition-all w-full sm:w-auto"><Play className="w-5 h-5 md:w-6 md:h-6 mr-2" /> প্র্যাকটিস শুরু করুন</button>
      </div>
    </div>
  );
};

const SubjectDetail = () => {
  const { pageProps, navigateTo, db } = useApp();
  const subjectId = pageProps.subjectId;
  const title = pageProps.subjectTitle || "পদার্থবিজ্ঞান";
  const paper = pageProps.paper || "১ম পত্র";
  const chapters = db.chapters.filter(ch => ch.subject_id === subjectId).sort((a,b) => a.order_index - b.order_index);

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-0">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 h-6" /></button>
        <div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight">{title}</h2>
          <p className="text-muted-foreground font-bold text-xs md:text-sm mt-0.5">অধ্যায় বা ইউনিট নির্বাচন করুন</p>
        </div>
      </div>

      <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-r from-primary to-emerald-600 text-white p-6 md:p-10 flex items-center justify-between relative overflow-hidden shadow-lg">
        <div className="relative z-10">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-5 bg-white/20 backdrop-blur-md shadow-inner">
            <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-2">{title} প্রশ্নব্যাংক</h3>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-lg leading-relaxed">{title} বিষয়ের সকল অধ্যায়ের সমাধান এখানে পাবেন। নিজের দক্ষতা যাচাই করতে প্র্যাকটিস শুরু করুন।</p>
        </div>
        <BookOpen className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-40 h-40 md:w-64 md:h-64 text-white/10 pointer-events-none transform -rotate-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {chapters.map((ch) => (
          <div key={ch.id} onClick={() => navigateTo('app', 'page-questions-list', { chapterId: ch.id, title: ch.title, sub: `${title} ${paper}` })} className="rounded-[1.25rem] md:rounded-[1.5rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md md:hover:border-primary/50 p-4 md:p-6 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all group md:hover:-translate-y-0.5">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <BookOpenText className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg leading-tight mb-1">{ch.title}</h4>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">অধ্যায় {String(ch.order_index).padStart(2, '0')}</p>
              </div>
            </div>
            <ArrowRight className="text-muted-foreground w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
          </div>
        ))}
        {chapters.length === 0 && <p className="text-muted-foreground font-medium col-span-full">কোনো অধ্যায় পাওয়া যায়নি।</p>}
      </div>
    </div>
  );
};

const UnivDetail = () => {
  const { pageProps, navigateTo } = useApp();
  const uni = pageProps.uni || "ঢাকা বিশ্ববিদ্যালয়";
  const units = [
    { name: "A", desc: "বিজ্ঞান ইউনিট", color: "from-purple-500 to-indigo-600" },
    { name: "B", desc: "মানবিক ইউনিট", color: "from-pink-500 to-rose-600" },
    { name: "C", desc: "বাণিজ্য ইউনিট", color: "from-orange-500 to-amber-600" },
    { name: "D", desc: "সম্মিলিত ইউনিট", color: "from-teal-500 to-emerald-600" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-0">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <div><h3 className="text-xl md:text-3xl font-black leading-tight">{uni}</h3><p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">ইউনিটসমূহ নির্বাচন করুন</p></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {units.map((u, i) => (
          <div key={i} onClick={() => navigateTo('app', 'page-questions-list', { title: `${u.name} ইউনিট`, sub: uni })} className={`rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 cursor-pointer flex flex-col items-center justify-center text-center text-white min-h-[140px] md:min-h-[160px] bg-gradient-to-br ${u.color} shadow-md active:scale-95 md:hover:shadow-xl md:hover:-translate-y-1 transition-all group`}>
            <h4 className="text-4xl md:text-5xl font-black mb-1 md:mb-2 md:group-hover:scale-110 transition-transform">{u.name}</h4>
            <p className="text-xs md:text-sm font-bold opacity-90">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuestionsList = () => {
  const { pageProps, db, showToast, dbInsert, currentUser, navigateTo } = useApp();
  const [qType, setQType] = useState('mcq');
  const [selectedTopicId, setSelectedTopicId] = useState('all');
  const [showAnswers, setShowAnswers] = useState({});
  const katexRef = useRef(null);

  const chapterId = pageProps.chapterId;
  const topics = db.topics.filter(t => t.chapter_id === chapterId);
  const questions = db.questions.filter(q => (chapterId ? q.chapter_id === chapterId : true) && q.type === qType && (selectedTopicId === 'all' ? true : q.topic_id === selectedTopicId));

  useEffect(() => {
    if (window.renderMathInElement && katexRef.current) {
      window.renderMathInElement(katexRef.current, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false });
    }
  }, [qType, showAnswers, questions, selectedTopicId]);

  const toggleAnswer = (id) => setShowAnswers(prev => ({...prev, [id]: !prev[id]}));

  return (
    <div className="max-w-4xl mx-auto" ref={katexRef}>
      <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <div>
          <h2 className="text-xl md:text-2xl font-black leading-tight">{pageProps.title || 'প্রশ্নব্যাংক'}</h2>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">{pageProps.sub || ''}</p>
        </div>
      </div>

      <div className="flex justify-center mb-6 md:mb-8">
        <div className="bg-muted/50 p-1.5 rounded-2xl inline-flex gap-1 border border-border/50 w-full md:max-w-md shadow-inner">
          <button onClick={() => setQType('mcq')} className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${qType === 'mcq' ? 'bg-card shadow-md text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>MCQ</button>
          <button onClick={() => setQType('cq')} className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${qType === 'cq' ? 'bg-card shadow-md text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>লিখিত / CQ</button>
        </div>
      </div>

      {topics.length > 0 && (
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 md:pb-6 mb-2 -mx-4 px-4 md:mx-0 md:px-0">
           <button onClick={() => setSelectedTopicId('all')} className={`px-5 py-2 rounded-xl text-sm font-bold border whitespace-nowrap transition-colors ${selectedTopicId === 'all' ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-card text-foreground border-border/50 hover:bg-accent'}`}>সকল টপিক</button>
           {topics.map(t => (
              <button key={t.id} onClick={() => setSelectedTopicId(t.id)} className={`px-5 py-2 rounded-xl text-sm font-bold border whitespace-nowrap transition-colors ${selectedTopicId === t.id ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-card text-foreground border-border/50 hover:bg-accent'}`}>{t.title}</button>
           ))}
        </div>
      )}

      <div className="space-y-4 md:space-y-5">
        {questions.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-card rounded-[2rem] border border-border/50">
            <Database className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground font-bold text-sm md:text-base">কোনো প্রশ্ন পাওয়া যায়নি।</p>
          </div>
        )}
        {questions.map((q, i) => (
          <div key={q.id} className="rounded-[1.5rem] border border-border/50 bg-card text-card-foreground shadow-sm p-5 md:p-8 relative transition-all md:hover:shadow-md">
             {q.type === 'cq' && <span className="absolute top-0 right-4 md:right-6 bg-success text-success-foreground px-3 py-1.5 rounded-b-lg md:rounded-b-xl text-[10px] font-black uppercase tracking-widest shadow-sm">সৃজনশীল</span>}
             
             <div className="flex items-center justify-between gap-4 mb-4 md:mb-5 border-b border-border/50 pb-3 md:pb-4">
                <span className="bg-info/10 text-info font-black px-2.5 py-1 rounded-md md:rounded-lg text-[10px] md:text-[11px] uppercase tracking-wider">{q.source || 'Standard'}</span>
                <div className="flex gap-2.5 md:gap-3">
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-warning hover:bg-warning/10 transition-colors"><Flag className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><Bookmark className="w-4 h-4" /></button>
                </div>
             </div>

             <h4 className={`text-base md:text-lg font-bold leading-relaxed mb-5 md:mb-6 whitespace-pre-wrap ${q.type === 'cq' ? 'mt-4' : ''}`}>{i+1}. {q.question}</h4>
             
             {q.type === 'mcq' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {q.options.map((opt, idx) => (
                      <div key={idx} onClick={() => toggleAnswer(q.id)} className={`flex items-center gap-3 md:gap-4 p-3.5 md:p-4 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all active:scale-[0.99] ${showAnswers[q.id] && q.correct_answer === idx ? 'border-success bg-success/5 text-success shadow-sm' : 'border-border/50 bg-background md:hover:border-primary/50'}`}>
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg border-2 flex items-center justify-center text-xs md:text-sm font-black shrink-0 ${showAnswers[q.id] && q.correct_answer === idx ? 'border-success bg-success/10' : 'border-muted-foreground/30'}`}>{String.fromCharCode(2453 + idx)}</div>
                        <span className="text-sm md:text-base font-semibold">{opt}</span>
                      </div>
                    ))}
                  </div>
                  {showAnswers[q.id] && q.explanation && (
                     <div className="mt-4 md:mt-6 p-4 md:p-5 bg-primary/5 border border-primary/10 rounded-xl text-xs md:text-sm leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2"><span className="text-primary font-black block mb-1">ব্যাখ্যা:</span> {q.explanation}</div>
                  )}
                </>
             )}

             {q.type === 'cq' && (
                <>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => toggleAnswer(q.id)} className={`inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold h-10 md:h-11 px-5 md:px-6 transition-all ${showAnswers[q.id] ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                      {showAnswers[q.id] ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />} {showAnswers[q.id] ? 'উত্তর লুকান' : 'উত্তর দেখুন'}
                    </button>
                  </div>
                  {showAnswers[q.id] && (
                    <div className="mt-4 md:mt-6 p-4 md:p-6 bg-muted/30 rounded-2xl border border-border/50 animate-in fade-in slide-in-from-top-2">
                      <div className="text-sm md:text-base font-medium leading-relaxed whitespace-pre-wrap">
                        {q.explanation}
                      </div>
                    </div>
                  )}
                </>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PracticeSession = () => {
  const { navigateTo, db, showToast } = useApp();
  const [selected, setSelected] = useState(null);
  const katexRef = useRef(null);
  const mcqs = db.questions.filter(q => q.type === 'mcq');
  const question = mcqs[0]; 

  useEffect(() => {
    if (window.renderMathInElement && katexRef.current) {
      window.renderMathInElement(katexRef.current, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false });
    }
  }, [selected]);

  const handleSelect = (idx, isCorrect) => {
    if (selected !== null) return;
    setSelected({ idx, isCorrect });
  };

  return (
    <div className="max-w-3xl mx-auto min-h-[80vh] flex flex-col justify-center pb-12 md:pb-0" ref={katexRef}>
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-xl p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-primary to-info"></div>
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <span className="bg-secondary px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground">প্রশ্ন ১ / ২০</span>
          <button className="text-muted-foreground hover:text-warning transition-colors"><AlertCircle className="w-5 h-5" /></button>
        </div>
        <h3 className="text-xl md:text-2xl font-black leading-relaxed mb-6 md:mb-8">{question ? question.question : 'নিচের কোনটি ভেক্টর রাশি নয়?'}</h3>
        <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
          {(question ? question.options : ["সরণ", "কাজ"]).map((opt, i) => {
            const isCorrect = question ? question.correct_answer === i : i === 1;
            let stateClass = "border-border/50 bg-background md:hover:border-primary/50 md:hover:bg-accent/50";
            if (selected?.idx === i) {
              stateClass = isCorrect ? "border-success bg-success/10 text-success shadow-md shadow-success/10" : "border-destructive bg-destructive/10 text-destructive shadow-md shadow-destructive/10";
            } else if (selected !== null && isCorrect) {
              stateClass = "border-success bg-success/10 text-success shadow-md shadow-success/10";
            }
            
            return (
              <div key={i} onClick={() => handleSelect(i, isCorrect)} className={`flex items-center gap-3 md:gap-4 p-3.5 md:p-4 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all active:scale-[0.99] ${stateClass}`}>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl border-2 flex items-center justify-center shrink-0 font-black text-sm md:text-lg ${stateClass.includes('border-border') ? 'border-muted-foreground/30 text-muted-foreground' : 'border-current'}`}>{String.fromCharCode(2453 + i)}</div>
                <span className="text-sm md:text-lg font-bold">{opt}</span>
              </div>
            );
          })}
        </div>
        {selected !== null && question?.explanation && (
           <div className="p-4 md:p-5 bg-primary/5 border border-primary/10 rounded-xl md:rounded-2xl text-xs md:text-base font-medium leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2 mb-6 md:mb-8"><span className="text-primary font-black block mb-1">ব্যাখ্যা:</span> {question.explanation}</div>
        )}
        <div className="flex justify-between items-center pt-5 md:pt-6 border-t border-border/50">
          <button onClick={() => navigateTo('app', 'page-dashboard')} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-secondary hover:bg-secondary/80 h-10 md:h-12 px-6 md:px-8 transition-colors">শেষ করুন</button>
          {selected !== null && <button className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-10 md:h-12 px-6 md:px-8 shadow-md transition-all">পরের প্রশ্ন <ArrowRight className="w-4 h-4 ml-2" /></button>}
        </div>
      </div>
    </div>
  );
};

const BatchesPage = () => {
  const { navigateTo, db } = useApp();
  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {db.batches.map(b => (
          <div key={b.id} className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all p-6 md:p-8 flex flex-col group md:hover:-translate-y-1 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 md:h-1.5 ${b.color}`}></div>
            <div className="flex justify-between items-start mb-5 md:mb-6">
              <div>
                <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg mb-2 md:mb-3 uppercase tracking-wider">{b.tag}</span>
                <h4 className="font-black text-lg md:text-xl leading-tight">{b.title}</h4>
              </div>
              <div className="text-right shrink-0 ml-2 md:ml-3 bg-muted/50 p-2 md:p-3 rounded-xl">
                <p className="text-xl md:text-2xl font-black text-primary">৳{b.price}</p>
              </div>
            </div>
            <div className="space-y-3 mb-6 md:mb-8 flex-1 text-xs md:text-sm font-semibold">
              <p className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> {b.exam_count}+ লাইভ পরীক্ষা</p>
              <p className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> বিস্তারিত লিডারবোর্ড</p>
              <p className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> এক্সক্লুসিভ ম্যাটেরিয়াল</p>
            </div>
            <button onClick={() => navigateTo('app', 'page-checkout')} className="inline-flex w-full items-center justify-center rounded-xl text-sm md:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-12 px-4 shadow-md md:group-hover:shadow-lg transition-all active:scale-[0.98] md:active:scale-100">ব্যাচে এনরোল করুন</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const { navigateTo, showToast } = useApp();
  return (
    <div className="max-w-3xl mx-auto pb-6 md:pb-10 space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-8">
        <button onClick={() => navigateTo('app', 'page-batches')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <h2 className="text-xl md:text-3xl font-black">পেমেন্ট ও চেকআউট</h2>
      </div>
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm p-6 md:p-10">
        <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6 border-b border-border/50 pb-3 md:pb-4">অর্ডার সারাংশ</h3>
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 bg-muted/30 p-4 md:p-6 rounded-2xl border border-border/50">
          <div className="flex justify-between items-center text-sm md:text-base font-semibold"><span>ঢাবি 'ক' ইউনিট স্পেশাল ২০২৬</span><span className="font-black">৳১৫০০</span></div>
          <div className="flex justify-between items-center text-xs md:text-sm font-semibold text-muted-foreground"><span>প্রোমো কোড</span><span className="text-success font-black">-৳০</span></div>
          <div className="flex justify-between items-center text-lg md:text-xl font-black border-t border-border/50 pt-3 md:pt-4 mt-1 md:mt-2 text-primary"><span>সর্বমোট</span><span>৳১৫০০</span></div>
        </div>
        <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5">পেমেন্ট মেথড নির্বাচন করুন</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-10">
          <button className="p-4 md:p-6 border-2 border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:border-primary hover:bg-primary/5 text-sm font-bold transition-all"><Smartphone className="w-6 h-6 md:w-8 md:h-8 text-pink-600" /> বিকাশ</button>
          <button className="p-4 md:p-6 border-2 border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:border-primary hover:bg-primary/5 text-sm font-bold transition-all"><Smartphone className="w-6 h-6 md:w-8 md:h-8 text-orange-500" /> নগদ</button>
          <button className="p-4 md:p-6 border-2 border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:border-primary hover:bg-primary/5 text-sm font-bold transition-all"><CreditCard className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> কার্ড</button>
        </div>
        <button onClick={() => { showToast('পেমেন্ট সফল!', 'আপনি ব্যাচে যুক্ত হয়েছেন।'); navigateTo('app', 'page-dashboard'); }} className="inline-flex w-full items-center justify-center rounded-xl md:rounded-2xl text-base md:text-lg font-black bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 px-8 shadow-lg md:hover:shadow-xl md:hover:-translate-y-1 transition-all active:scale-[0.98]">পেমেন্ট সম্পন্ন করুন</button>
      </div>
    </div>
  );
};

const ExamsPage = () => {
  const { navigateTo, db, currentUser } = useApp();
  const enrolledBatchIds = db.enrollments.filter(e => e.user_id === currentUser?.id).map(e => e.batch_id);
  const myExams = db.batch_exams
    .filter(be => enrolledBatchIds.includes(be.batch_id))
    .map(be => {
      const exam = db.exams.find(ex => ex.id === be.exam_id);
      const batch = db.batches.find(b => b.id === be.batch_id);
      return { ...exam, batchName: batch?.title };
    }).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
      <div className="flex items-center justify-between bg-card p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm mb-2">
         <h3 className="text-xl md:text-2xl font-black">আমার পরীক্ষাসমূহ</h3>
         <span className="bg-primary/10 text-primary px-3 py-1 md:px-4 md:py-1.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm">{myExams.length} টি পরীক্ষা</span>
      </div>
      
      {myExams.length === 0 && (
        <div className="text-center py-12 md:py-16 bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
          <FileText className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
          <p className="text-muted-foreground font-bold text-sm md:text-lg">আপনার কোনো পরীক্ষা নির্ধারিত নেই।</p>
        </div>
      )}
      
      {myExams.map(ex => (
        <div key={ex.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 rounded-[1.5rem] border border-border/50 bg-card shadow-sm hover:shadow-md transition-all gap-4 md:gap-5 group">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary text-primary rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 md:group-hover:scale-110 transition-transform"><FileText className="w-6 h-6 md:w-7 md:h-7" /></div>
            <div>
              <span className="inline-block px-2.5 py-1 bg-muted rounded-md text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 md:mb-2">{ex.batchName || ex.tag}</span>
              <h4 className="font-black text-base md:text-lg leading-tight mb-2">{ex.title}</h4>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-muted-foreground">
                 <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {ex.exam_date}</span>
                 <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {ex.duration_minutes} মিনিট</span>
                 <span className="flex items-center gap-1.5"><Sigma className="w-3.5 h-3.5" /> {ex.marks} মার্কস</span>
              </div>
            </div>
          </div>
          <button onClick={() => navigateTo('app', 'page-exam-session')} className={`inline-flex items-center justify-center rounded-xl text-sm font-bold h-11 md:h-12 px-6 md:px-8 w-full md:w-auto shrink-0 transition-all ${ex.status === 'completed' ? 'border-2 border-border/50 bg-background hover:bg-accent hover:border-primary/50 text-foreground' : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md md:group-hover:shadow-lg md:hover:-translate-y-0.5 active:scale-[0.98]'}`}>
            {ex.status === 'completed' ? 'ফলাফল দেখুন' : 'পরীক্ষা দিন'}
          </button>
        </div>
      ))}
    </div>
  );
};

const ExamSession = () => {
  const { navigateTo, showConfirmModal, showToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (submitted) return;
    const interval = setInterval(() => setTimeLeft(t => t > 0 ? t - 1 : 0), 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

  const handleSubmit = () => {
    showConfirmModal("পরীক্ষা সাবমিট করবেন?", "আপনার এখনো ৫টি প্রশ্নের উত্তর দেওয়া বাকি আছে। নিশ্চিত সাবমিট করবেন?", () => {
      setSubmitted(true);
      showToast('পরীক্ষা সম্পন্ন!', 'আপনার পরীক্ষার খাতা মূল্যায়ন করা হয়েছে।');
      window.scrollTo(0, 0);
    });
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto flex flex-col justify-center min-h-[80vh] pb-12 md:pb-0">
        <div className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-success"></div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-inner"><CheckCircle className="w-10 h-10 md:w-12 md:h-12" /></div>
          <h2 className="text-2xl md:text-3xl font-black mb-3">পরীক্ষা সম্পন্ন হয়েছে!</h2>
          <p className="text-muted-foreground font-medium text-sm md:text-lg mb-8 md:mb-10 max-w-md mx-auto">আপনার খাতা মূল্যায়ন করা হয়েছে। বিস্তারিত রেজাল্ট শিট ড্যাশবোর্ডে পাবেন।</p>
          <button onClick={() => navigateTo('app', 'page-results')} className="inline-flex items-center justify-center rounded-xl md:rounded-2xl text-sm md:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 px-8 md:px-10 shadow-lg md:hover:-translate-y-1 transition-all w-full sm:w-auto">রেজাল্ট দেখুন</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-border/50 bg-card/95 backdrop-blur-md p-3 md:p-4 flex items-center justify-between mb-6 md:mb-8 sticky top-16 md:top-24 z-20 shadow-lg">
         <div className="flex items-center gap-3 md:gap-4 bg-muted/50 px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
            <Timer className={`w-5 h-5 md:w-6 md:h-6 ${timeLeft < 300 ? 'text-destructive animate-pulse' : 'text-primary'}`} />
            <div>
              <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase block tracking-widest">সময় বাকি</span>
              <span className={`font-mono text-lg md:text-xl font-black leading-none ${timeLeft < 300 ? 'text-destructive' : 'text-foreground'}`}>{mins}:{secs}</span>
            </div>
         </div>
         <button onClick={handleSubmit} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 md:h-11 px-4 md:px-6 shadow-md transition-all active:scale-95">সাবমিট</button>
      </div>

      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card shadow-sm p-6 md:p-12 relative">
         <div className="absolute top-0 left-0 w-[4%] h-1 md:h-1.5 bg-primary rounded-tr-full"></div>
         <div className="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-border/50">
            <h3 className="text-sm md:text-base font-black text-muted-foreground">প্রশ্ন ১ / ২৫</h3>
            <span className="bg-secondary text-[10px] md:text-xs font-black px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg tracking-wider">মার্ক: ১.০</span>
         </div>
         <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 leading-relaxed">নিচের কোনটি ভেক্টর রাশি?</h4>
         <div className="space-y-3 md:space-y-4">
           {['কাজ', 'বল', 'তাপমাত্রা', 'দ্রুতি'].map((opt, i) => (
             <div key={i} onClick={() => setSelected(i)} className={`flex items-center gap-3 md:gap-4 p-3.5 md:p-4 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.99] ${selected === i ? 'border-primary bg-primary/5 text-primary shadow-sm' : 'border-border/50 bg-background hover:border-primary/30'}`}>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selected === i ? 'border-primary' : 'border-muted-foreground/50'}`}>
                   {selected === i && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary" />}
                </div>
                <span className="text-sm md:text-base font-bold">{opt}</span>
             </div>
           ))}
         </div>
         
         {/* Fixed Bottom Controls on Mobile, inline on Desktop */}
         <div className="fixed bottom-0 left-0 right-0 p-4 bg-card/90 backdrop-blur-md border-t border-border/50 md:relative md:bg-transparent md:border-t md:border-border/50 md:mt-10 md:pt-6 md:p-0 flex justify-between items-center z-30 pb-safe">
            <button disabled className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold border-2 border-border/50 bg-background opacity-50 h-11 md:h-12 px-5 md:px-6 cursor-not-allowed">আগের প্রশ্ন</button>
            <button className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold border-2 border-border/50 bg-background hover:bg-accent hover:border-primary/50 h-11 md:h-12 px-5 md:px-6 transition-all active:scale-95">পরের প্রশ্ন</button>
         </div>
      </div>
    </div>
  );
};

const ResultsPage = () => {
  const { db, currentUser } = useApp();
  const myResults = db.results.filter(r => r.user_id === currentUser?.id);

  return (
    <div className="max-w-5xl mx-auto pb-10 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between bg-card p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm mb-2 md:mb-4">
         <h3 className="text-xl md:text-2xl font-black">রেজাল্ট হিস্ট্রি</h3>
         <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary"><Trophy className="w-5 h-5 md:w-6 md:h-6" /></div>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        {myResults.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
            <History className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground font-bold text-sm md:text-base">কোনো পরীক্ষার রেজাল্ট পাওয়া যায়নি।</p>
          </div>
        )}
        {myResults.map(r => {
          const exam = db.exams.find(e => e.id === r.exam_id);
          return (
            <div key={r.id} className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card shadow-sm p-5 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6 mb-5 md:mb-8">
                <div>
                  <h4 className="text-lg md:text-2xl font-black leading-tight mb-1.5 md:mb-2">{exam?.title || 'Unknown Exam'}</h4>
                  <p className="text-xs md:text-sm font-semibold text-muted-foreground">{new Date(r.submitted_at).toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between sm:block bg-primary/5 border border-primary/20 p-3 md:p-4 rounded-xl md:rounded-2xl min-w-[120px] md:min-w-[140px] md:text-right">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-0.5 md:mb-1">প্রাপ্ত স্কোর</p>
                  <div className="text-2xl md:text-3xl font-black text-foreground">{r.score} <span className="text-sm md:text-lg text-muted-foreground">/ {r.total}</span></div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-border/50">
                <div className="text-center p-3 md:p-4 rounded-xl bg-success/10 border border-success/20 text-success"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">সঠিক</p><p className="text-lg md:text-2xl font-black">{r.correct}</p></div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">ভুল</p><p className="text-lg md:text-2xl font-black">{r.wrong}</p></div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-secondary border border-border/50 text-muted-foreground"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">স্কিপড</p><p className="text-lg md:text-2xl font-black">{r.skipped}</p></div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-info/10 border border-info/20 text-info"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">অ্যাকুরেসি</p><p className="text-lg md:text-2xl font-black">{r.accuracy}%</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StudyRoomPage = () => {
  const [isStudying, setIsStudying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isStudying) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isStudying]);

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="rounded-[2rem] md:rounded-[2.5rem] border border-border/50 bg-card p-8 md:p-16 text-center flex flex-col items-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[6px] flex items-center justify-center mb-6 md:mb-8 relative transition-colors duration-500 ${isStudying ? 'border-primary shadow-[0_0_40px_rgba(16,185,129,0.2)]' : 'border-border/80'}`}>
          {isStudying && <div className="absolute inset-[-6px] rounded-full border-[6px] border-primary border-t-transparent animate-spin opacity-40"></div>}
          <span className={`text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight ${isStudying ? 'text-primary' : 'text-foreground'}`}>{formatTime(time)}</span>
        </div>
        <button onClick={() => setIsStudying(!isStudying)} className={`inline-flex items-center justify-center rounded-2xl text-base md:text-lg font-black h-12 md:h-14 px-8 md:px-10 shadow-lg hover:-translate-y-1 transition-all active:scale-95 w-full sm:w-auto ${isStudying ? 'bg-warning text-warning-foreground hover:bg-warning/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
          {isStudying ? <><Timer className="w-5 h-5 mr-2" /> বিরতি নিন</> : <><Play className="w-5 h-5 mr-2" /> ফোকাস শুরু করুন</>}
        </button>
      </div>

      <div className="bg-card p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm">
        <div className="flex items-center justify-between mb-5 md:mb-6">
           <h3 className="text-lg md:text-xl font-black">লাইভ স্কোয়াড</h3>
           <span className="bg-success/10 text-success px-2.5 py-1 md:px-3 md:py-1 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-1.5"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-success animate-pulse"></div> ৩ জন লাইভ</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {[
            { name: "Arif Hasan", time: "০২:৪৫:১০", status: "ফোকাসিং" },
            { name: "Nusrat Jahan", time: "০১:২০:০০", status: "বিরতিতে" },
            { name: "Rahim Ali", time: "০০:৪৫:৩০", status: "ফোকাসিং" }
          ].map((user, i) => (
            <div key={i} className="rounded-xl border border-border/50 bg-background p-4 md:p-5 flex items-center gap-3 md:gap-4 shadow-sm hover:border-primary/30 transition-colors">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg ${user.status === 'ফোকাসিং' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-secondary text-muted-foreground'}`}>{user.name.charAt(0)}</div>
              <div>
                 <h4 className="font-bold text-sm md:text-base mb-0.5 md:mb-1">{user.name}</h4>
                 <p className={`text-[10px] md:text-xs font-black uppercase tracking-wider ${user.status === 'ফোকাসিং' ? 'text-success' : 'text-warning'}`}>{user.status} • {user.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TasksPage = () => {
  const { db, dbUpdate, currentUser } = useApp();
  const myTasks = db.tasks.filter(t => t.user_id === currentUser?.id);
  const completedCount = myTasks.filter(t => t.completed).length;
  const progress = myTasks.length > 0 ? Math.round((completedCount / myTasks.length) * 100) : 0;

  const toggleTask = (task) => {
    dbUpdate('tasks', task.id, { completed: !task.completed });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card p-5 md:p-8 shadow-sm">
        <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6">ডেইলি টাস্কস</h3>
        <div className="bg-success/5 border border-success/20 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4 md:mb-5 relative z-10"><h4 className="text-base md:text-lg font-bold">আজকের অগ্রগতি</h4><span className="text-xl md:text-2xl font-black text-success">{progress}%</span></div>
          <div className="w-full bg-background/50 rounded-full h-2.5 md:h-3 border border-border/50 relative z-10 overflow-hidden"><div className="bg-success h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div></div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {myTasks.map(task => (
            <div key={task.id} onClick={() => toggleTask(task)} className={`rounded-xl md:rounded-2xl border-2 p-4 md:p-5 flex items-center gap-3 md:gap-4 cursor-pointer transition-all active:scale-[0.98] md:hover:-translate-y-0.5 group ${task.completed ? 'bg-muted/50 border-border/50 text-muted-foreground' : 'bg-background border-border hover:border-primary/50 shadow-sm'}`}>
              <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center border-2 shrink-0 transition-colors ${task.completed ? 'bg-success border-success text-white' : 'border-muted-foreground/30 text-transparent md:group-hover:border-primary/50'}`}><Check className="w-3.5 h-3.5 md:w-4 md:h-4" /></div>
              <span className={`text-sm md:text-base font-semibold ${task.completed ? 'line-through opacity-70' : ''}`}>{task.title}</span>
            </div>
          ))}
          {myTasks.length === 0 && <p className="text-muted-foreground font-medium p-4 text-center text-sm md:text-base">আজকের কোনো টাস্ক নেই।</p>}
        </div>
      </div>
    </div>
  );
};

const DimPetPage = () => {
  const { currentUser } = useApp();
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-[3] rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-gradient-to-br from-card to-info/5 p-6 md:p-10 flex flex-col items-center justify-center relative shadow-sm overflow-hidden">
          <h2 className="absolute top-4 left-5 md:top-6 md:left-8 text-lg md:text-xl font-black">আমার DIM</h2>
          <div className="absolute top-4 right-5 md:top-6 md:right-8 flex items-center gap-1.5 md:gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 rounded-lg md:rounded-xl text-xs md:text-sm font-black shadow-sm"><Coins className="w-3.5 h-3.5 md:w-4 md:h-4" /> {currentUser?.coins || 0}</div>
          
          <div className="relative mt-8 md:mt-8 mb-6 md:mb-10">
            <div className="absolute inset-0 bg-primary/20 blur-[40px] md:blur-[60px] rounded-full"></div>
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl text-6xl md:text-8xl relative z-10 animate-float">🐣</div>
          </div>
          
          <div className="w-full max-w-sm bg-card p-4 md:p-6 rounded-2xl border border-border/50 shadow-sm z-10">
            <div className="flex justify-between items-end mb-2 md:mb-3">
              <div>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">বর্তমান লেভেল</p>
                <p className="text-lg md:text-xl font-black text-primary">লেভেল {currentUser?.level || 1}</p>
              </div>
              <span className="text-xs md:text-sm font-bold text-muted-foreground">EXP: 450/1000</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5 md:h-3 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-primary to-info h-full w-[45%] rounded-full"></div></div>
          </div>
        </div>
        
        <div className="flex-[2] rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card p-5 md:p-8 shadow-sm">
          <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 flex items-center gap-2"><ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-primary"/> স্টোর</h3>
          <div className="space-y-3 md:space-y-4">
            {[
              { title: 'খাবার কিনুন', price: 50, icon: '🍕' },
              { title: 'নতুন টুপি', price: 150, icon: '🎩' },
              { title: 'প্রিমিয়াম থিম', price: 300, icon: '✨' }
            ].map((item, i) => (
              <div key={i} className="rounded-xl md:rounded-2xl border border-border/50 bg-background p-3 md:p-4 flex items-center justify-between group md:hover:border-primary/30 transition-colors active:bg-muted md:active:bg-background">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted flex items-center justify-center text-xl md:text-2xl md:group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-bold text-sm md:text-base">{item.title}</span>
                </div>
                <button className="px-2.5 py-1.5 md:px-3 md:py-1.5 bg-yellow-500/10 text-yellow-600 font-bold text-[10px] md:text-xs rounded-lg hover:bg-yellow-500/20 transition-colors flex items-center gap-1 active:scale-95"><Coins className="w-3 h-3"/> {item.price}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BookmarksPage = () => {
  const { db, currentUser } = useApp();
  const bookmarked = db.bookmarked_questions.filter(b => b.user_id === currentUser?.id);

  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
      <div className="flex gap-2 md:gap-3 mb-4 md:mb-8 bg-card p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-border/50 w-full md:w-fit shadow-sm">
        <button className="flex-1 md:flex-none inline-flex items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-bold bg-primary text-primary-foreground h-10 px-4 md:px-6 shadow-sm">বুকমার্ক</button>
        <button className="flex-1 md:flex-none inline-flex items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-bold hover:bg-muted text-muted-foreground h-10 px-4 md:px-6 transition-colors">আমার ভুলসমূহ</button>
      </div>
      
      <div className="space-y-4 md:space-y-5">
        {bookmarked.length === 0 ? (
          <div className="text-center py-12 md:py-16 bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
            <Bookmark className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground font-bold text-sm md:text-base">কোনো বুকমার্ক করা প্রশ্ন নেই।</p>
          </div>
        ) : (
          bookmarked.map(b => {
            const q = db.questions.find(qu => qu.id === b.question_id);
            if(!q) return null;
            return (
              <div key={b.id} className="rounded-[1.5rem] border border-border/50 bg-card p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                   <span className="bg-info/10 text-info font-black px-2.5 py-1 md:px-3 md:py-1 rounded-md md:rounded-lg text-[10px] uppercase tracking-widest">{q.source || 'Standard'}</span>
                   <Bookmark className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary cursor-pointer md:hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-sm md:text-base mb-4 md:mb-5 leading-relaxed">{q.question}</h4>
                <div className="p-3 md:p-4 bg-success/5 border border-success/20 rounded-xl">
                   <span className="text-xs md:text-sm font-black text-success flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4"/> সঠিক উত্তর: {q.type === 'mcq' ? q.options[q.correct_answer] : 'লিখিত উত্তর'}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const CommunityPage = () => {
  const { db, currentUser, dbInsert } = useApp();
  const [content, setContent] = useState('');

  const handlePost = () => {
    if(!content) return;
    dbInsert('discussions', { user_id: currentUser.id, title: 'Question', content, is_resolved: false });
    setContent('');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card p-5 md:p-6 shadow-sm">
        <div className="flex gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-primary/20 to-info/20 flex items-center justify-center font-black text-primary shrink-0 border border-primary/20 text-base md:text-lg">{currentUser?.name?.charAt(0) || 'U'}</div>
          <div className="flex-1 space-y-3 md:space-y-4 pt-1">
            <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="আপনার প্রশ্ন বা মতামত শেয়ার করুন..." className="w-full bg-transparent border-none outline-none resize-none min-h-[60px] md:min-h-[80px] text-sm md:text-base font-medium placeholder:text-muted-foreground/60" />
            <div className="flex justify-between items-center pt-3 border-t border-border/50">
              <div className="flex gap-1 md:gap-2">
                 <button className="p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"><ImageIcon className="w-4 h-4 md:w-5 md:h-5" /></button>
                 <button className="p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"><LinkIcon className="w-4 h-4 md:w-5 md:h-5" /></button>
              </div>
              <button onClick={handlePost} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-primary text-primary-foreground h-9 md:h-10 px-5 md:px-6 shadow-md hover:bg-primary/90 transition-all active:scale-95">পোস্ট করুন</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-5">
        {db.discussions.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map(d => {
          const user = db.users.find(u => u.id === d.user_id);
          return (
            <div key={d.id} className="rounded-[1.5rem] border border-border/50 bg-card p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center font-black text-muted-foreground text-sm md:text-base">{user?.name?.charAt(0) || 'A'}</div>
                <div><h4 className="font-bold text-sm md:text-base leading-tight">{user?.name || 'Unknown'}</h4><p className="text-[10px] md:text-xs text-muted-foreground font-semibold mt-0.5">Just now</p></div>
              </div>
              <p className="text-sm md:text-base font-medium text-foreground mb-4 md:mb-5 leading-relaxed">{d.content}</p>
              <div className="flex items-center gap-5 md:gap-6 pt-3 md:pt-4 border-t border-border/50 text-muted-foreground">
                <button className="flex items-center gap-1.5 md:gap-2 hover:text-pink-500 text-xs md:text-sm font-bold transition-colors"><Heart className="w-4 h-4" /> ০</button>
                <button className="flex items-center gap-1.5 md:gap-2 hover:text-info text-xs md:text-sm font-bold transition-colors"><MessageSquare className="w-4 h-4" /> ০</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const { db } = useApp();
  const topUsers = db.leaderboards.filter(l => l.period === 'weekly').sort((a,b) => a.rank - b.rank);

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="flex justify-center mb-6 md:mb-10">
        <div className="bg-muted/50 p-1 md:p-1.5 rounded-xl md:rounded-2xl inline-flex gap-1 border border-border/50 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Daily</button>
          <button className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm bg-card shadow-md text-foreground transition-colors">Weekly</button>
          <button className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">All Time</button>
        </div>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">Rank</th><th className="p-4 md:p-5 font-bold">Student</th><th className="p-4 md:p-5 font-bold hidden sm:table-cell">Focus Time</th><th className="p-4 md:p-5 font-bold text-right">XP</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {topUsers.map((u, index) => (
            <tr key={u.id} className={`transition-colors ${index < 3 ? 'bg-primary/5' : 'hover:bg-muted/30'}`}>
              <td className="p-4 md:p-5 font-black text-lg md:text-xl w-16 md:w-20 text-center">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${u.rank}`}
              </td>
              <td className="p-4 md:p-5 font-bold text-sm md:text-base whitespace-nowrap">
                {u.name}
                <div className="sm:hidden text-xs text-muted-foreground mt-1 font-semibold flex items-center gap-1"><Clock className="w-3 h-3"/>{u.time_spent}</div>
              </td>
              <td className="p-4 md:p-5 text-muted-foreground font-semibold hidden sm:table-cell"><Clock className="w-4 h-4 inline mr-2 text-primary/70"/> {u.time_spent}</td>
              <td className="p-4 md:p-5 text-right font-black text-primary text-base md:text-lg">{u.xp} XP</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="pt-4 md:pt-6">
        <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6">Badges & Achievements</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {db.badges.map(b => (
            <div key={b.id} className="rounded-[1.5rem] border border-border/50 bg-card p-5 md:p-6 text-center shadow-sm md:hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-warning/10 border border-warning/20 text-warning rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 md:group-hover:scale-110 transition-transform"><DynamicIcon iconStr={b.icon_url} className="w-6 h-6 md:w-8 md:h-8" /></div>
              <h4 className="font-bold text-sm md:text-base mb-1 md:mb-1.5">{b.name}</h4>
              <p className="text-[10px] md:text-xs font-medium text-muted-foreground line-clamp-2">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIChatPage = () => {
  const { db, dbInsert, currentUser } = useApp();
  const [messages, setMessages] = useState(db.ai_chat_messages.filter(m => m.session_id === 'sess1'));
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(!input.trim()) return;
    const newMsg = { session_id: 'sess1', user_id: currentUser.id, role: 'user', content: input };
    const inserted = dbInsert('ai_chat_messages', newMsg);
    setMessages([...messages, inserted]);
    setInput('');
    
    setTimeout(() => {
      const reply = { session_id: 'sess1', user_id: currentUser.id, role: 'assistant', content: 'This is a mock response from the AI Mentor. In the future, this will connect to Gemini/ChatGPT API.' };
      const insReply = dbInsert('ai_chat_messages', reply);
      setMessages(prev => [...prev, insReply]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[70vh] md:h-[75vh] flex flex-col border border-border/50 rounded-[1.5rem] md:rounded-[2rem] bg-card shadow-lg overflow-hidden relative">
      <div className="p-4 md:p-5 border-b border-border/50 bg-muted/30 flex items-center gap-3 md:gap-4 shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20"><Bot className="w-6 h-6 md:w-7 md:h-7" /></div>
        <div>
          <h3 className="font-black text-base md:text-lg leading-tight">AI Science Tutor</h3>
          <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5 md:mt-1"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-success inline-block mr-1"></div> Online</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 bg-background/50 hide-scrollbar pb-20">
        {messages.map((m, idx) => (
          <div key={m.id || idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[75%] p-3 md:p-4 rounded-2xl text-sm md:text-[15px] font-medium leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-card border border-border/50 rounded-tl-sm'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 border-t border-border/50 bg-card/90 backdrop-blur-md">
        <div className="flex items-center gap-2 md:gap-3">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&handleSend()} placeholder="আপনার প্রশ্নটি লিখুন..." className="flex-1 h-12 md:h-14 rounded-xl md:rounded-2xl border border-input bg-background px-4 md:px-5 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
          <button onClick={handleSend} className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 shadow-md transition-all active:scale-95"><Send className="w-5 h-5 md:w-6 md:h-6 ml-0.5 md:ml-1" /></button>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPage = () => {
  return (
    <div className="max-w-5xl mx-auto pb-10 text-center space-y-8 md:space-y-10">
      <div>
         <h2 className="text-3xl md:text-4xl font-black mb-3 md:mb-4">Upgrade to PRO</h2>
         <p className="text-muted-foreground font-medium text-sm md:text-lg max-w-xl mx-auto px-4 md:px-0">Get unlimited access to AI Mentor, Advanced Analytics, and Exclusive Pro Batches.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto text-left">
        <div className="rounded-[2rem] border border-border/50 bg-card p-8 md:p-10 shadow-sm flex flex-col">
          <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2">Free Plan</h3>
          <div className="text-3xl md:text-4xl font-black mb-6 md:mb-8">৳0 <span className="text-sm md:text-lg font-bold text-muted-foreground">/ forever</span></div>
          <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm md:text-base font-semibold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> Standard Question Bank</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-semibold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> Basic Study Lounge</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-semibold text-muted-foreground"><Minus className="w-4 h-4 md:w-5 md:h-5" /> Limited AI Chat</li>
          </ul>
          <button disabled className="w-full h-12 rounded-xl border-2 border-border/50 font-bold text-sm md:text-base text-muted-foreground bg-muted/50 cursor-not-allowed">Current Plan</button>
        </div>
        
        <div className="rounded-[2rem] border-[3px] border-primary bg-gradient-to-b from-primary/5 to-transparent p-8 md:p-10 shadow-xl relative flex flex-col md:transform md:hover:-translate-y-1 transition-transform">
          <div className="absolute -top-3.5 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] md:text-xs font-black px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest shadow-md">Most Popular</div>
          <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2 text-primary">Pro Student</h3>
          <div className="text-3xl md:text-4xl font-black mb-6 md:mb-8">৳500 <span className="text-sm md:text-lg font-bold text-muted-foreground">/ month</span></div>
          <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Full Question Bank Access</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Unlimited Custom Exams</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Unlimited AI Tutor Chat</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Pro Badge & Custom DIM Themes</li>
          </ul>
          <button className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-black text-sm md:text-base shadow-lg hover:shadow-xl transition-all active:scale-95">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

const RootSwitcher = () => {
  const { activeRoot, appPage, navigateTo, currentUser } = useApp();

  const studentSidebarItems = [
    { label: "লার্নিং হাব", items: [
      { id: 'page-dashboard', label: 'ড্যাশবোর্ড', icon: LayoutDashboard, active: appPage === 'page-dashboard' },
      { id: 'page-qbank', label: 'প্রশ্নব্যাংক', icon: BookOpen, active: ['page-qbank', 'page-subject-detail', 'page-univ-detail', 'page-questions-list', 'page-custom-exam'].includes(appPage) },
      { id: 'page-fast-practice', label: 'কুইক প্র্যাকটিস', icon: Zap, active: ['page-fast-practice', 'page-practice-session'].includes(appPage) },
      { id: 'page-batches', label: 'ব্যাচসমূহ', icon: Presentation, active: ['page-batches', 'page-checkout'].includes(appPage) },
      { id: 'page-exam', label: 'পরীক্ষা', icon: FileText, active: ['page-exam', 'page-exam-session'].includes(appPage) },
      { id: 'page-results', label: 'রেজাল্ট হিস্ট্রি', icon: History, active: appPage === 'page-results' },
    ]},
    { label: "ফোকাস ও ম্যানেজমেন্ট", items: [
      { id: 'page-study-room', label: 'স্টাডি লাউঞ্জ', icon: Timer, active: appPage === 'page-study-room' },
      { id: 'page-tasks', label: 'ডেইলি টাস্ক', icon: CheckSquare, active: appPage === 'page-tasks' },
      { id: 'page-bookmarks', label: 'বুকমার্কস ও ভুল', icon: Bookmark, active: appPage === 'page-bookmarks' },
    ]},
    { label: "স্মার্ট টুলস", items: [
      { id: 'page-leaderboard', label: 'লিডারবোর্ড', icon: Trophy, active: appPage === 'page-leaderboard' },
      { id: 'page-ai-chat', label: 'AI মেন্টর', icon: Bot, active: appPage === 'page-ai-chat' },
      { id: 'page-dim-pet', label: 'আমার DIM', icon: Egg, active: appPage === 'page-dim-pet' },
      { id: 'page-community', label: 'কমিউনিটি', icon: MessageSquare, active: appPage === 'page-community' },
    ]},
    { label: "অ্যাকাউন্ট", items: [
      { id: 'page-subscription', label: 'Pro সাবস্ক্রিপশন', icon: Crown, colorClass: 'text-warning', active: appPage === 'page-subscription' },
    ]}
  ];

  const adminSidebarItems = [
    { label: "অ্যাডমিন ম্যানেজমেন্ট", items: [
      { id: 'page-admin-dashboard', label: 'ওভারভিউ', icon: LayoutDashboard, active: appPage === 'page-admin-dashboard' },
      { id: 'page-admin-qbank', label: 'প্রশ্নব্যাংক', icon: Database, active: appPage === 'page-admin-qbank' },
      { id: 'page-admin-batches', label: 'ব্যাচ ও কোর্স', icon: Library, active: appPage === 'page-admin-batches' },
      { id: 'page-admin-exams', label: 'পরীক্ষাসমূহ', icon: FileText, active: appPage === 'page-admin-exams' },
      { id: 'page-admin-coupons', label: 'কুপন', icon: Ticket, active: appPage === 'page-admin-coupons' },
      { id: 'page-admin-users', label: 'ইউজার ম্যানেজমেন্ট', icon: Users, active: appPage === 'page-admin-users' }
    ]}
  ];

  const renderAppView = () => {
    switch(appPage) {
      // Student Pages
      case 'page-dashboard': return <DashboardOverview />;
      case 'page-qbank': return <QBankPage />;
      case 'page-custom-exam': return <CustomExam />;
      case 'page-subject-detail': return <SubjectDetail />;
      case 'page-univ-detail': return <UnivDetail />;
      case 'page-questions-list': return <QuestionsList />;
      case 'page-fast-practice': return <FastPractice />;
      case 'page-practice-session': return <PracticeSession />;
      case 'page-batches': return <BatchesPage />;
      case 'page-checkout': return <CheckoutPage />;
      case 'page-exam': return <ExamsPage />;
      case 'page-exam-session': return <ExamSession />;
      case 'page-results': return <ResultsPage />;
      case 'page-study-room': return <StudyRoomPage />;
      case 'page-tasks': return <TasksPage />;
      case 'page-dim-pet': return <DimPetPage />;
      case 'page-bookmarks': return <BookmarksPage />;
      case 'page-community': return <CommunityPage />;
      case 'page-leaderboard': return <LeaderboardPage />;
      case 'page-ai-chat': return <AIChatPage />;
      case 'page-subscription': return <SubscriptionPage />;
      // Admin Pages
      case 'page-admin-dashboard': return <AdminOverview />;
      case 'page-admin-batches': return <AdminBatches />;
      case 'page-admin-exams': return <AdminExams />;
      case 'page-admin-coupons': return <AdminCoupons />;
      case 'page-admin-users': return <AdminUsers />;
      case 'page-admin-qbank': return <AdminQBankQuestions />;
      default: return <DashboardOverview />;
    }
  };

  const getAppHeader = () => {
    const map = {
      'page-dashboard': { t: 'ওভারভিউ', s: 'আপনার আজকের প্রস্তুতির আপডেট' },
      'page-qbank': { t: 'প্রশ্নব্যাংক', s: 'বিগত বছরের প্রশ্ন ও সমাধান' },
      'page-fast-practice': { t: 'কুইক প্র্যাকটিস', s: 'অ্যাডাপটিভ লার্নিং মোড' },
      'page-batches': { t: 'ব্যাচসমূহ', s: 'কোর্স এবং ব্যাচে এনরোল করুন' },
      'page-exam': { t: 'পরীক্ষা', s: 'আমার ব্যাচের পরীক্ষাসমূহ' },
      'page-results': { t: 'রেজাল্ট হিস্ট্রি', s: 'আপনার অতীত পরীক্ষার ফলাফল' },
      'page-study-room': { t: 'স্টাডি লাউঞ্জ', s: 'ফোকাস ধরে রাখুন' },
      'page-tasks': { t: 'ডেইলি টাস্ক', s: 'আপনার প্রাত্যহিক লক্ষ্যসমূহ' },
      'page-dim-pet': { t: 'আমার DIM', s: 'আপনার ভার্চুয়াল স্টাডি পেট' },
      'page-bookmarks': { t: 'বুকমার্কস ও ভুল', s: 'সংরক্ষিত প্রশ্ন ও সমাধান' },
      'page-community': { t: 'কমিউনিটি', s: 'প্রশ্ন করুন এবং আলোচনায় যোগ দিন' },
      'page-leaderboard': { t: 'লিডারবোর্ড', s: 'র‍্যাংকিং এবং ব্যাজসমূহ' },
      'page-ai-chat': { t: 'AI মেন্টর', s: 'আপনার যেকোনো প্রশ্নের উত্তর পান' },
      'page-subscription': { t: 'Pro আপগ্রেড', s: 'প্রিমিয়াম ফিচার আনলক করুন' },
      'page-admin-dashboard': { t: 'অ্যাডমিন প্যানেল', s: 'সিস্টেম ওভারভিউ' },
      'page-admin-batches': { t: 'ব্যাচ ম্যানেজমেন্ট', s: 'নতুন ব্যাচ তৈরি ও এডিট করুন' },
      'page-admin-exams': { t: 'পরীক্ষা ম্যানেজমেন্ট', s: 'পরীক্ষার শিডিউল ও প্রশ্ন যুক্ত করুন' },
      'page-admin-coupons': { t: 'কুপন ম্যানেজমেন্ট', s: 'প্রোমো কোড তৈরি করুন' },
      'page-admin-users': { t: 'ইউজার ম্যানেজমেন্ট', s: 'রোল পরিবর্তন ও নিয়ন্ত্রণ' },
      'page-admin-qbank': { t: 'প্রশ্নব্যাংক ম্যানেজমেন্ট', s: 'নতুন প্রশ্ন যুক্ত করুন' }
    };
    return map[appPage] || { t: '', s: '' };
  };

  if (activeRoot === 'auth') return <Auth />;
  if (activeRoot === 'app') {
    const header = getAppHeader();
    const isAdmin = currentUser?.role === 'admin';
    return <AppLayout sidebarItems={isAdmin ? adminSidebarItems : studentSidebarItems} title={header.t} subTitle={header.s}>{renderAppView()}</AppLayout>;
  }
  return null;
};

export default function App() {
  return (
    <AppProvider>
      <GlobalOverlays />
      <RootSwitcher />
    </AppProvider>
  );
}


import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import {
  Moon, Sun, GraduationCap, ArrowRight, BookOpen, Timer, Trophy, Brain, User, 
  Lock, IdCard, Mail, Send, CheckCircle, Camera, Compass, Landmark, Briefcase, 
  Check, LayoutDashboard, Zap, Presentation, FileText, CheckSquare, Bookmark, 
  Egg, Users, ChevronLeft, ChevronDown, Menu, Coins, Flame, LogOut, PlayCircle, 
  Play, FlaskConical, Monitor, Atom, Magnet, TestTube, Ruler, Calculator, Leaf, 
  UserCheck, Building2, Cpu, Factory, Wrench, Container, Languages, FunctionSquare, 
  Dna, PieChart, CircuitBoard, Home, Puzzle, Flag, Eye, EyeOff, ShieldCheck, Database, 
  Library, TrendingUp, Minus, DollarSign, Plus, Pencil, Trash2, Bold, Italic, 
  Underline, List, ListOrdered, Sigma, Image as ImageIcon, Link as LinkIcon, 
  Upload, UploadCloud, Ban, Sliders, Stethoscope, Calendar, Clock, Download, 
  AlertCircle, Info, BookOpenText, ListPlus, X, MessageSquare, Share2, Heart, 
  ShoppingBag, CreditCard, Smartphone, Bell, Tag, Ticket, Bot, Star, Award, Crown,
  BarChart, History, Sparkles, LayoutGrid, ArrowLeft
} from 'lucide-react';

const injectGlobalStyles = () => {
  if (document.getElementById('readingzone-styles')) return;

  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect'; preconnect1.href = 'https://fonts.googleapis.com';
  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect'; preconnect2.href = 'https://fonts.gstatic.com'; preconnect2.crossOrigin = 'anonymous';
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet'; fontLink.href = 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap';
  
  document.head.appendChild(preconnect1);
  document.head.appendChild(preconnect2);
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.id = 'readingzone-styles';
  style.innerHTML = `
    :root {
      --background: 210 40% 98%; 
      --foreground: 222.2 84% 4.9%;
      --card: 0 0% 100%; 
      --card-foreground: 222.2 84% 4.9%;
      --popover: 0 0% 100%; 
      --popover-foreground: 222.2 84% 4.9%;
      --primary: 160 84% 39%;
      --primary-foreground: 210 40% 98%;
      --secondary: 210 40% 96.1%; 
      --secondary-foreground: 222.2 47.4% 11.2%;
      --muted: 210 40% 96.1%; 
      --muted-foreground: 215.4 16.3% 46.9%;
      --accent: 210 40% 96.1%; 
      --accent-foreground: 222.2 47.4% 11.2%;
      --destructive: 0 84.2% 60.2%; 
      --destructive-foreground: 210 40% 98%;
      --success: 142 76% 36%; 
      --success-foreground: 355.7 100% 97.3%;
      --warning: 38 92% 50%; 
      --warning-foreground: 48 96% 89%;
      --info: 221.2 83.2% 53.3%; 
      --info-foreground: 210 40% 98%;
      --border: 214.3 31.8% 91.4%; 
      --input: 214.3 31.8% 91.4%; 
      --ring: 160 84% 39%;
      --radius: 1.25rem;
    }
    .dark {
      --background: 222.2 84% 4.9%; 
      --foreground: 210 40% 98%;
      --card: 217.2 32.6% 12.5%; 
      --card-foreground: 210 40% 98%;
      --popover: 222.2 84% 4.9%; 
      --popover-foreground: 210 40% 98%;
      --primary: 160 84% 39%; 
      --primary-foreground: 210 40% 98%;
      --secondary: 217.2 32.6% 17.5%; 
      --secondary-foreground: 210 40% 98%;
      --muted: 217.2 32.6% 17.5%; 
      --muted-foreground: 215 20.2% 65.1%;
      --accent: 217.2 32.6% 17.5%; 
      --accent-foreground: 210 40% 98%;
      --destructive: 0 62.8% 50.6%; 
      --destructive-foreground: 210 40% 98%;
      --success: 142 70% 45%; 
      --success-foreground: 144.9 80.4% 10%;
      --warning: 38 92% 50%; 
      --warning-foreground: 48 96% 89%;
      --info: 217.2 91.2% 59.8%; 
      --info-foreground: 222.2 47.4% 11.2%;
      --border: 217.2 32.6% 17.5%; 
      --input: 217.2 32.6% 17.5%; 
      --ring: 160 84% 39%;
    }
    body {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: 'Hind Siliguri', sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
    }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    .glass-effect {
      background: rgba(var(--card), 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    
    .text-gradient {
      background: linear-gradient(135deg, hsl(var(--primary)), #0ea5e9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }

    @keyframes slideUpFade {
      0% { transform: translateY(100%); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .animate-slide-up {
      animation: slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `;
  document.head.appendChild(style);

  if (!window.katex) {
    const katexCss = document.createElement('link');
    katexCss.rel = 'stylesheet';
    katexCss.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(katexCss);

    const katexJs = document.createElement('script');
    katexJs.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js';
    document.head.appendChild(katexJs);

    const katexRender = document.createElement('script');
    katexRender.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js';
    document.head.appendChild(katexRender);
  }
};

const initialDb = {
  squads: [
    { id: 'sq1', name: 'Alpha Focus', members_count: 3, points: 1500, rank: 1 }
  ],
  users: [
    { id: 'u1', name: 'Arif Hasan', username: 'arif_student', email: 'student@example.com', password: 'password', role: 'student', is_pro: false, squad_id: 'sq1', coins: 120, point: 450, level: 2, xp: 450, current_streak: 7, total_focus_time: 3600, joinDate: '2026-03-15' },
    { id: 'admin1', name: 'Admin Master', username: 'admin', email: 'admin@example.com', password: 'admin', role: 'admin', is_pro: true, squad_id: null, coins: 0, point: 0, level: 99, xp: 9999, current_streak: 0, total_focus_time: 0, joinDate: '2026-01-01' }
  ],
  badges: [
    { id: 'b1', name: 'Early Bird', description: 'Complete 5 tasks before 8 AM', icon_url: 'Award' },
    { id: 'b2', name: 'Focus Master', description: 'Study for 10 hours', icon_url: 'Brain' }
  ],
  notifications: [
    { id: 'n1', user_id: 'u1', title: 'নতুন ব্যাচ যুক্ত হয়েছে!', message: 'মেডিকেল স্পেশাল ব্যাচ ২০২৬ এ ভর্তি চলছে।', is_read: false, created_at: new Date().toISOString() },
  ],
  coupons: [
    { id: 'c1', code: 'PROMO50', discount_type: 'flat', discount_value: 50, used_count: 12, is_active: true }
  ],
  subjects: [
    { id: 'sub_phy1', slug: 'physics-1', title: 'পদার্থবিজ্ঞান', sub: '১ম পত্র', icon: 'Atom', color: 'from-blue-600 to-indigo-700' },
    { id: 'sub_phy2', slug: 'physics-2', title: 'পদার্থবিজ্ঞান', sub: '২য় পত্র', icon: 'Magnet', color: 'from-indigo-600 to-violet-700' },
    { id: 'sub_chem1', slug: 'chemistry-1', title: 'রসায়ন', sub: '১ম পত্র', icon: 'FlaskConical', color: 'from-fuchsia-600 to-purple-700' },
    { id: 'sub_math1', slug: 'math-1', title: 'উচ্চতর গণিত', sub: '১ম পত্র', icon: 'Ruler', color: 'from-amber-500 to-orange-600' },
    { id: 'sub_bio1', slug: 'biology-1', title: 'জীববিজ্ঞান', sub: '১ম পত্র', icon: 'Leaf', color: 'from-emerald-500 to-teal-700' }
  ],
  institutions: [
    { id: 'uni_du', slug: 'du', title: 'ঢাকা বিশ্ববিদ্যালয়', icon: 'Landmark', color: 'from-violet-600 to-purple-800' },
    { id: 'uni_buet', slug: 'buet', title: 'বুয়েট', icon: 'Building2', color: 'from-rose-600 to-red-800' },
    { id: 'uni_bup', slug: 'bup', title: 'বিইউপি', icon: 'ShieldCheck', color: 'from-amber-600 to-yellow-800' }
  ],
  chapters: [
    { id: 'ch_p1_1', subject_id: 'sub_phy1', title: 'ভৌতজগৎ ও পরিমাপ', order_index: 1 },
    { id: 'ch_p1_2', subject_id: 'sub_phy1', title: 'ভেক্টর', order_index: 2 },
    { id: 'ch_p1_3', subject_id: 'sub_phy1', title: 'গতিবিদ্যা', order_index: 3 }
  ],
  topics: [
    { id: 'top_1', chapter_id: 'ch_p1_2', title: 'ক্রস গুণন', order_index: 1 },
    { id: 'top_3', chapter_id: 'ch_p1_3', title: 'প্রজেক্টাইল', order_index: 1 }
  ],
  questions: [
    { id: 'q1', type: 'mcq', subject_id: 'sub_phy1', chapter_id: 'ch_p1_2', topic_id: 'top_1', source: 'DCU A 24-25', question: 'নিচের কোন সম্পর্কটি সঠিক?', options: ['$\\vec{L} = \\vec{r} \\times \\vec{F}$', '$\\vec{L} = \\vec{P} \\times \\vec{r}$', '$\\vec{L} = \\vec{F} \\times \\vec{r}$', '$\\vec{L} = \\vec{r} \\times \\vec{P}$'], correct_answer: 3, explanation: 'কৌণিক ভরবেগ $\\vec{L} = \\vec{r} \\times \\vec{P}$ এবং টর্ক $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.', is_public: true },
    { id: 'q2', type: 'mcq', subject_id: 'sub_phy1', chapter_id: 'ch_p1_3', topic_id: 'top_3', source: 'DU A 23-24', question: 'একটি প্রক্ষেপককে অণুভূমিকের সাথে 30° কোণে 40 m/s বেগে নিক্ষেপ করা হলো। সর্বোচ্চ উচ্চতা কত?', options: ['20.41 m', '40.82 m', '10.20 m', '80.0 m'], correct_answer: 0, explanation: '$H = \\frac{v_0^2 \\sin^2\\theta}{2g} = 20.41 m$', is_public: true },
    { id: 'q3', type: 'cq', subject_id: 'sub_phy1', chapter_id: 'ch_p1_3', topic_id: 'top_3', source: 'বুয়েট ২০-২১', question: 'একটি প্রক্ষেপককে অণুভূমিকের সাথে 30° কোণে 40 m/s বেগে নিক্ষেপ করা হলো।\n\nক) প্রক্ষেপকের সর্বোচ্চ উচ্চতা নির্ণয় করো।\nখ) প্রক্ষেপকটি অণুভূমিক পাল্লা অতিক্রম করতে কত সময় নেবে বিশ্লেষণ করো।', options: [], correct_answer: null, explanation: 'ক) $H = \\frac{v_0^2 \\sin^2\\theta}{2g} = 20.41 m$\nখ) $T = \\frac{2v_0 \\sin\\theta}{g} = 4.08 s$', is_public: true }
  ],
  bookmarked_questions: [
    { id: 'bq1', user_id: 'u1', question_id: 'q2' }
  ],
  tasks: [
    { id: 't1', user_id: 'u1', title: 'পদার্থবিজ্ঞান ভেক্টর অধ্যায়ের ২০টি MCQ', subject: 'Physics', scheduled_time: new Date().toISOString(), completed: true },
    { id: 't2', user_id: 'u1', title: '১টি কাস্টম মক টেস্ট দিন', subject: 'Exam', scheduled_time: new Date().toISOString(), completed: false }
  ],
  batches: [
    { id: 'b1', tag: 'ইঞ্জিনিয়ারিং', title: "ঢাবি 'ক' ইউনিট স্পেশাল ২০২৬", price: 1500, icon: 'Rocket', color: 'bg-blue-600', is_public: true, exam_count: 12 },
    { id: 'b2', tag: 'মেডিকেল', title: "মেডিকেল এক্সাম ব্যাচ ২০২৬", price: 1000, icon: 'Stethoscope', color: 'bg-green-600', is_public: true, exam_count: 20 }
  ],
  enrollments: [
    { id: 'e1', user_id: 'u1', batch_id: 'b1', status: 'approved', enrolled_at: '2026-03-16' }
  ],
  exams: [
    { id: 'ex1', tag: 'Weekly', title: 'উইকলি টেস্ট - ০১ (পদার্থবিজ্ঞান)', exam_date: '2026-03-25', duration_minutes: 45, marks: 50, status: 'completed', type: 'mcq', color: 'bg-primary', icon: 'FileText' },
    { id: 'ex2', tag: 'Daily', title: 'ডেইলি প্র্যাকটিস - রসায়ন', exam_date: '2026-03-30', duration_minutes: 30, marks: 30, status: 'upcoming', type: 'mcq', color: 'bg-primary', icon: 'FileText' }
  ],
  batch_exams: [
    { id: 'be1', batch_id: 'b1', exam_id: 'ex1' },
    { id: 'be2', batch_id: 'b1', exam_id: 'ex2' }
  ],
  results: [
    { id: 'r1', user_id: 'u1', exam_id: 'ex1', score: 42.5, total: 50, correct: 45, wrong: 10, skipped: 5, accuracy: 85, submitted_at: '2026-03-25T10:00:00Z' }
  ],
  leaderboards: [
    { id: 'l1', user_id: 'u2', name: 'Nusrat Jahan', period: 'weekly', rank: 1, xp: 800, time_spent: '12:00:00' },
    { id: 'l2', user_id: 'u1', name: 'Arif Hasan', period: 'weekly', rank: 2, xp: 450, time_spent: '08:30:00' }
  ],
  ai_chat_messages: [
    { id: 'msg1', session_id: 'sess1', user_id: 'u1', role: 'assistant', content: 'Hello! I am your AI Science Tutor. What physics doubt can I help you with today?' }
  ],
  discussions: [
    { id: 'd1', user_id: 'u2', title: 'ইন্টিগ্রেশনের শর্টকাট', content: 'কেউ কি ইন্টিগ্রেশন এর শর্টকাট টেকনিকগুলো শেয়ার করতে পারবেন? পরীক্ষার সময় অনেক কাজে লাগত।', created_at: new Date().toISOString(), is_resolved: false }
  ]
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeRoot, setActiveRoot] = useState('auth');
  const [authView, setAuthView] = useState('login'); 
  const [appPage, setAppPage] = useState('page-dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [db, setDb] = useState(initialDb);
  const [currentUser, setCurrentUser] = useState(null);

  const [toast, setToast] = useState({ visible: false, title: '', message: '', type: 'success' });
  const [modal, setModal] = useState({ visible: false, title: '', message: '', type: 'warning', onConfirm: null });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [pageProps, setPageProps] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    injectGlobalStyles();
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const showToast = (title, message, type = 'success') => {
    setToast({ visible: true, title, message, type });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3000);
  };

  const showConfirmModal = (title, message, onConfirm, type = 'warning') => {
    setModal({ visible: true, title, message, onConfirm, type });
  };

  const navigateTo = (root, viewOrPage = null, props = {}) => {
    setActiveRoot(root);
    setPageProps(props);
    if (root === 'auth' && viewOrPage) setAuthView(viewOrPage);
    if (root === 'app' && viewOrPage) setAppPage(viewOrPage);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dbInsert = (table, data) => {
    const newItem = { id: Date.now().toString(), ...data, created_at: new Date().toISOString() };
    setDb(prev => ({ ...prev, [table]: [...prev[table], newItem] }));
    return newItem;
  };

  const dbUpdate = (table, id, data) => {
    setDb(prev => ({ ...prev, [table]: prev[table].map(item => item.id === id ? { ...item, ...data } : item) }));
  };

  const dbDelete = (table, id) => {
    setDb(prev => ({ ...prev, [table]: prev[table].filter(item => item.id !== id) }));
  };

  return (
    <AppContext.Provider value={{
      theme, toggleTheme, activeRoot, authView, setAuthView, appPage, setAppPage,
      toast, showToast, modal, setModal, showConfirmModal,
      isSidebarCollapsed, setIsSidebarCollapsed, isMobileMenuOpen, setIsMobileMenuOpen,
      navigateTo, pageProps, setPageProps,
      db, setDb, dbInsert, dbUpdate, dbDelete,
      currentUser, setCurrentUser,
      showNotifications, setShowNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

const DynamicIcon = ({ iconStr, ...props }) => {
  const IconCmp = LucideIcons[iconStr] || LucideIcons.HelpCircle;
  return <IconCmp {...props} />;
};

const GlobalOverlays = () => {
  const { theme, toggleTheme, toast, modal, setModal } = useApp();
  return (
    <>
      <button onClick={toggleTheme} className="fixed top-safe right-4 md:right-8 top-4 md:top-6 p-3 rounded-full border border-border bg-card/80 backdrop-blur-md text-foreground hover:bg-accent/80 hover:scale-105 transition-all z-[100] shadow-md cursor-pointer">
        {theme === 'dark' ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-primary" />}
      </button>

      {toast.visible && (
        <div className="fixed top-20 md:top-auto md:bottom-8 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-4 px-5 py-4 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl text-card-foreground shadow-2xl min-w-[320px] max-w-[90vw] transform transition-all animate-in slide-in-from-top-5 md:slide-in-from-bottom-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-inner ${toast.type === 'success' ? 'bg-success/20 text-success' : toast.type === 'destructive' ? 'bg-destructive/20 text-destructive' : 'bg-info/20 text-info'}`}>
            {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : toast.type === 'destructive' ? <AlertCircle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm leading-tight tracking-tight">{toast.title}</h4>
            <p className="text-sm text-muted-foreground mt-0.5">{toast.message}</p>
          </div>
        </div>
      )}

      {modal.visible && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card text-card-foreground p-8 w-full max-w-sm rounded-[2rem] border border-border/50 shadow-2xl text-center transform scale-100 transition-all">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner ${modal.type === 'destructive' ? 'bg-destructive/20 text-destructive' : 'bg-warning/20 text-warning'}`}>
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">{modal.title}</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{modal.message}</p>
            <div className="flex gap-3 justify-center">
              <button className="flex-1 inline-flex items-center justify-center rounded-xl text-sm font-bold border border-input bg-background hover:bg-accent h-12 transition-colors" onClick={() => setModal(m => ({ ...m, visible: false }))}>বাতিল</button>
              <button className={`flex-1 inline-flex items-center justify-center rounded-xl text-sm font-bold h-12 text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${modal.type === 'destructive' ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}`} onClick={() => { setModal(m => ({ ...m, visible: false })); modal.onConfirm?.(); }}>নিশ্চিত</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NotificationsDropdown = () => {
  const { currentUser, db, dbUpdate, showNotifications, setShowNotifications } = useApp();
  const userNotifications = db.notifications.filter(n => n.user_id === currentUser?.id).sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  const unreadCount = userNotifications.filter(n => !n.is_read).length;

  if (!showNotifications) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
      <div className="absolute right-0 top-14 mt-2 w-[90vw] sm:w-80 max-w-sm bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden transform origin-top-right animate-in fade-in scale-95 duration-150">
        <div className="p-4 border-b border-border/50 bg-muted/30 font-bold flex justify-between items-center">
          <span className="text-[15px]">নোটিফিকেশন</span>
          {unreadCount > 0 && <span className="bg-primary text-primary-foreground text-[10px] px-2.5 py-1 rounded-full font-bold shadow-sm">{unreadCount} নতুন</span>}
        </div>
        <div className="max-h-[350px] overflow-y-auto hide-scrollbar">
          {userNotifications.length === 0 ? (
            <div className="p-8 text-center text-sm text-muted-foreground flex flex-col items-center">
              <Bell className="w-8 h-8 opacity-20 mb-2" />
              কোনো নোটিফিকেশন নেই।
            </div>
          ) : (
            userNotifications.map(n => (
              <div key={n.id} onClick={() => dbUpdate('notifications', n.id, { is_read: true })} className={`p-4 border-b border-border/50 last:border-0 cursor-pointer transition-colors hover:bg-accent/80 flex gap-3 ${!n.is_read ? 'bg-primary/5' : ''}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${!n.is_read ? 'bg-primary' : 'bg-transparent'}`} />
                <div>
                  <h5 className={`text-sm mb-1 ${!n.is_read ? 'font-bold text-foreground' : 'font-semibold text-muted-foreground'}`}>{n.title}</h5>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">{n.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

const MobileMenuDrawer = ({ sidebarItems }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, navigateTo, currentUser, showConfirmModal } = useApp();

  if (!isMobileMenuOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden animate-in fade-in" onClick={() => setIsMobileMenuOpen(false)} />
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 z-[110] rounded-t-[2rem] shadow-2xl md:hidden animate-slide-up flex flex-col max-h-[85vh]">
        <div className="flex justify-center pt-3 pb-2"><div className="w-12 h-1.5 bg-border rounded-full" /></div>
        <div className="px-6 py-4 flex items-center justify-between border-b border-border/50">
           <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-info/20 flex items-center justify-center text-primary border border-primary/20"><User className="w-6 h-6" /></div>
             <div>
               <h3 className="font-black text-lg leading-tight">{currentUser?.name}</h3>
               <p className="text-xs font-bold text-muted-foreground uppercase">{currentUser?.role === 'admin' ? 'Admin' : 'Student'}</p>
             </div>
           </div>
           <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center"><X className="w-5 h-5 text-muted-foreground" /></button>
        </div>
        <div className="overflow-y-auto hide-scrollbar p-6 space-y-8 flex-1">
          {sidebarItems.map((group, i) => (
            <div key={i}>
              <h4 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-4 ml-2">{group.label}</h4>
              <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                 {group.items.map(item => (
                   <button key={item.id} onClick={() => navigateTo('app', item.id)} className="flex flex-col items-center gap-2 group">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${item.active ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-secondary text-foreground group-hover:bg-accent border border-border/50'}`}>
                        <item.icon className={`w-6 h-6 ${item.active ? '' : item.colorClass || 'text-muted-foreground'}`} />
                      </div>
                      <span className={`text-[10px] font-bold text-center leading-tight ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</span>
                   </button>
                 ))}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-border/50">
             <button onClick={() => showConfirmModal("লগআউট করবেন?", "আপনি কি নিশ্চিত যে একাউন্ট থেকে বের হতে চান?", () => navigateTo('auth', 'login'), 'destructive')} className="w-full flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 text-destructive font-bold"><LogOut className="w-5 h-5" /> লগআউট করুন</button>
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout = ({ children, sidebarItems, title, subTitle }) => {
  const { navigateTo, currentUser, db, setShowNotifications, isSidebarCollapsed, setIsSidebarCollapsed, setIsMobileMenuOpen, appPage } = useApp();
  const unreadNotifications = currentUser ? db.notifications.filter(n => n.user_id === currentUser.id && !n.is_read).length : 0;
  
  // Hide Navigation Elements for immersive modes
  const hideNavPages = ['page-exam-session', 'page-practice-session'];
  const shouldHideNav = hideNavPages.includes(appPage);
  
  // Mobile Bottom Nav Items
  const primaryNavItems = [
    { id: 'page-dashboard', label: 'Home', icon: Home },
    { id: 'page-qbank', label: 'QBank', icon: BookOpen },
    { id: 'page-fast-practice', label: 'Practice', icon: Zap },
    { id: 'page-exam', label: 'Exams', icon: FileText }
  ];

  return (
    <div className="min-h-[100dvh] w-full flex bg-background md:bg-muted/10">
      
      {/* Desktop Sidebar */}
      {!shouldHideNav && (
        <aside className={`hidden md:flex sticky top-0 left-0 h-screen bg-card text-card-foreground border-r border-border/50 flex-col z-40 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-[88px]' : 'w-[280px]'}`}>
          <div className="p-6 flex items-center justify-between cursor-pointer border-b border-border/50" onClick={() => navigateTo('app', sidebarItems[0]?.items[0]?.id)}>
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-primary-foreground shrink-0 shadow-lg shadow-primary/20"><GraduationCap className="w-6 h-6" /></div>
              {!isSidebarCollapsed && <h1 className="text-2xl font-black whitespace-nowrap text-gradient">রিডিংজোন</h1>}
            </div>
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center text-muted-foreground transition-transform hover:scale-110">
              <ChevronLeft className={`w-4 h-4 transition-transform ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto hide-scrollbar">
            {sidebarItems.map((group, i) => (
              <React.Fragment key={i}>
                {!isSidebarCollapsed && <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-6 mb-3 ml-2">{group.label}</div>}
                {group.items.map(item => (
                  <button key={item.id} onClick={() => navigateTo('app', item.id)} className={`w-full flex items-center group transition-all duration-200 ${isSidebarCollapsed ? 'justify-center p-3 rounded-xl' : 'gap-3.5 px-4 py-3 rounded-2xl'} text-sm font-bold ${item.active ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}>
                    <item.icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${item.active ? '' : item.colorClass || ''}`} />
                    {!isSidebarCollapsed && <span className="whitespace-nowrap">{item.label}</span>}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </nav>
        </aside>
      )}

      <main className="flex-1 flex flex-col h-[100dvh] w-full relative overflow-hidden">
        
        {/* Immersive Mobile Back Header (for Exams/Practice) */}
        {shouldHideNav && (
           <header className="md:hidden glass-effect sticky top-0 z-30 px-4 py-3 flex items-center gap-3 border-b border-border/50">
              <button onClick={() => navigateTo('app', 'page-dashboard')} className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground"><ArrowLeft className="w-5 h-5"/></button>
              <h2 className="font-black text-lg">{title}</h2>
           </header>
        )}

        {/* Global Header */}
        {!shouldHideNav && (
          <header className="sticky top-0 z-30 glass-effect px-5 md:px-10 py-3 md:py-5 flex items-center justify-between border-b border-border/50 transition-all">
            <div className="flex items-center gap-3 md:gap-4">
              {/* Mobile Logo replacing sidebar */}
              <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shadow-md"><GraduationCap className="w-6 h-6" /></div>
              <div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight leading-tight">{title}</h2>
                <p className="text-[11px] md:text-sm font-bold text-muted-foreground hidden sm:block">{subTitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 pr-10 md:pr-12"> {/* Padding right to avoid overlap with theme toggle */}
              {currentUser?.role !== 'admin' && (
                <div className="hidden sm:flex gap-2">
                  <div onClick={() => navigateTo('app', 'page-dim-pet')} className="flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-bold cursor-pointer hover:bg-accent transition-all">
                    <Coins className="w-4 h-4 text-yellow-500" /> <span>{currentUser?.coins || 0}</span>
                  </div>
                  <div onClick={() => navigateTo('app', 'page-study-room')} className="flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-bold cursor-pointer hover:bg-accent transition-all">
                    <Flame className="w-4 h-4 text-orange-500" /> <span>{currentUser?.current_streak || 0}</span>
                  </div>
                </div>
              )}
              
              <div className="relative">
                <button onClick={() => setShowNotifications(prev => !prev)} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-foreground hover:bg-accent transition-all relative shadow-sm">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  {unreadNotifications > 0 && <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-destructive border-2 border-background"></span>}
                </button>
                <NotificationsDropdown />
              </div>
            </div>
          </header>
        )}

        {/* Scrollable Content */}
        <div className={`flex-1 overflow-y-auto hide-scrollbar w-full p-4 md:p-10 mx-auto max-w-7xl ${shouldHideNav ? 'pb-8' : 'pb-28 md:pb-8'}`} key={title}>
          {children}
        </div>

        {/* Mobile Bottom Navigation */}
        {!shouldHideNav && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/85 backdrop-blur-xl border-t border-border/50 pb-safe pt-2 px-6 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-3xl">
             {primaryNavItems.map(item => {
               const isActive = appPage === item.id || (item.id === 'page-qbank' && ['page-subject-detail', 'page-univ-detail', 'page-questions-list', 'page-custom-exam'].includes(appPage));
               return (
                 <button key={item.id} onClick={() => navigateTo('app', item.id)} className="flex flex-col items-center justify-center w-16 h-14 relative group">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary scale-110' : 'text-muted-foreground group-hover:text-foreground'}`}>
                       <item.icon className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className={`text-[10px] font-black mt-1 transition-all ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</span>
                    {isActive && <div className="absolute -top-3 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]" />}
                 </button>
               )
             })}
             
             {/* Mobile Menu Trigger */}
             <button onClick={() => setIsMobileMenuOpen(true)} className="flex flex-col items-center justify-center w-16 h-14 relative group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 text-muted-foreground group-hover:text-foreground">
                   <LayoutGrid className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-black mt-1 text-muted-foreground">More</span>
             </button>
          </div>
        )}
      </main>

      <MobileMenuDrawer sidebarItems={sidebarItems} />
    </div>
  );
};

const Auth = () => {
  const { authView, setAuthView, navigateTo, showToast, db, setCurrentUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = db.users.find(u => u.email === email && u.password === password);
    if (user) {
      showToast('লগইন সফল', 'লগইন হচ্ছে...');
      setCurrentUser(user);
      setTimeout(() => {
        if(user.role === 'admin') navigateTo('app', 'page-admin-dashboard');
        else navigateTo('app', 'page-dashboard');
      }, 500);
    } else {
      showToast('ভুল তথ্য', 'ইমেইল বা পাসওয়ার্ড সঠিক নয়', 'destructive');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      id: 'u_' + Date.now(), name, username: name.toLowerCase().replace(/\s/g, '_'), email, password, role: 'student', is_pro: false, coins: 0, level: 1, xp: 0, current_streak: 0, total_focus_time: 0, joinDate: new Date().toISOString()
    };
    db.users.push(newUser);
    setCurrentUser(newUser);
    showToast('স্বাগতম!', 'আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।'); 
    setTimeout(() => navigateTo('app', 'page-dashboard'), 500); 
  };

  const handleForgot = (e) => { e.preventDefault(); showToast('সফল', 'রিকভারি লিংক পাঠানো হয়েছে'); setTimeout(() => setAuthView('login'), 1000); };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 sm:p-8 w-full bg-background relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-info/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-card/80 backdrop-blur-xl text-card-foreground rounded-[2.5rem] border border-border/50 shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10">
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 p-12 flex-col justify-between relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg"><GraduationCap className="w-7 h-7" /></div>
            <h1 className="text-3xl font-black tracking-tight">রিডিংজোন</h1>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-5 leading-tight animate-float">ভর্তি প্রস্তুতির<br/>স্মার্ট সঙ্গী</h2>
            <p className="text-white/80 text-lg font-medium max-w-sm leading-relaxed">প্রশ্নব্যাংক, মক টেস্ট এবং লাইভ স্টাডি স্কোয়াডের মাধ্যমে নিজের প্রস্তুতিকে নিয়ে যান এক নতুন উচ্চতায়।</p>
          </div>
          <div className="relative z-10 flex items-center gap-4 text-sm font-medium text-white/70">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => <div key={i} className={`w-10 h-10 rounded-full border-2 border-teal-800 bg-teal-${i+3}00 flex items-center justify-center text-xs font-bold`}>{i}</div>)}
            </div>
            <p>১০,০০০+ শিক্ষার্থীর সাথে যুক্ত হোন</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-14 flex flex-col justify-center bg-card py-12">
          <div className="flex md:hidden items-center gap-3 mb-10 justify-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shadow-lg"><GraduationCap className="w-8 h-8" /></div>
            <h1 className="text-4xl font-black text-gradient">রিডিংজোন</h1>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {authView === 'login' && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl font-black tracking-tight mb-2">স্বাগতম</h2>
                  <p className="text-muted-foreground font-medium">অ্যাকাউন্টে প্রবেশ করতে আপনার তথ্য দিন</p>
                  <div className="mt-4 p-4 bg-info/10 border border-info/20 rounded-xl text-xs text-info font-medium text-left leading-relaxed">
                    <strong>Demo Accounts:</strong><br/>
                    Student: student@example.com / password<br/>
                    Admin: admin@example.com / admin
                  </div>
                </div>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">ইমেইল বা ফোন নম্বর</label>
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-background" placeholder="student@example.com" value={email} onChange={e=>setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pl-1 pr-1"><label className="text-sm font-bold text-foreground">পাসওয়ার্ড</label><button type="button" onClick={() => setAuthView('forgot')} className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">পাসওয়ার্ড ভুলে গেছেন?</button></div>
                    <input type="password" className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-background" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl text-lg font-black transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-14 mt-4">লগইন করুন</button>
                </form>
                <p className="text-center text-sm font-bold text-muted-foreground mt-8">অ্যাকাউন্ট নেই? <button onClick={() => setAuthView('register')} className="text-primary hover:text-primary/80 transition-colors ml-1">রেজিস্ট্রেশন করুন</button></p>
              </div>
            )}

            {authView === 'register' && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl font-black tracking-tight mb-2">নতুন অ্যাকাউন্ট</h2>
                  <p className="text-muted-foreground font-medium">আপনার প্রস্তুতির যাত্রা আজই শুরু করুন</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">আপনার পুরো নাম</label>
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="যেমন: রহিম হাসান" value={name} onChange={e=>setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">ইমেইল বা ফোন নম্বর</label>
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="student@example.com" value={email} onChange={e=>setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground pl-1">পাসওয়ার্ড</label>
                    <input type="password" className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl text-lg font-black transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-14 mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </form>
                <p className="text-center text-sm font-bold text-muted-foreground mt-8">আগে থেকেই অ্যাকাউন্ট আছে? <button onClick={() => setAuthView('login')} className="text-primary hover:text-primary/80 transition-colors ml-1">লগইন করুন</button></p>
              </div>
            )}

            {authView === 'forgot' && (
              <div className="flex flex-col animate-in fade-in duration-500">
                <div className="mb-8 text-center md:text-left">
                  <button onClick={() => setAuthView('login')} className="mb-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                  <h2 className="text-3xl font-black tracking-tight mb-2">পাসওয়ার্ড রিকভারি</h2>
                  <p className="text-muted-foreground font-medium">আপনার ইমেইল দিন, আমরা রিকভারি লিংক পাঠিয়ে দেব।</p>
                </div>
                <form onSubmit={handleForgot} className="space-y-5">
                  <div className="space-y-2">
                    <input className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="student@example.com" required />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl text-lg font-black transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-14 mt-4">লিংক পাঠান</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ADMIN PAGES ---

const AdminOverview = () => {
  const { db } = useApp();
  const stats = [
    { title: "মোট ইউজার", value: db.users.length, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "প্রশ্ন ডাটাবেস", value: db.questions.length, icon: Database, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { title: "অ্যাক্টিভ ব্যাচ", value: db.batches.length, icon: Library, color: "text-orange-500", bg: "bg-orange-500/10" },
    { title: "অ্যাক্টিভ কুপন", value: db.coupons.length, icon: Ticket, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-3xl border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md transition-all p-5 md:p-6 flex flex-col gap-3 md:gap-4 group">
            <div className="flex items-center justify-between">
              <h3 className="tracking-tight text-xs md:text-sm font-bold text-muted-foreground">{s.title}</h3>
              <div className={`p-2 rounded-xl ${s.bg} ${s.color} transition-transform group-hover:scale-110`}><s.icon className="h-4 w-4 md:h-5 md:w-5" /></div>
            </div>
            <div className="text-3xl md:text-4xl font-black">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-[2rem] border border-border/50 bg-gradient-to-r from-card to-muted/30 text-card-foreground shadow-sm p-6 md:p-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-lg md:text-xl leading-none tracking-tight mb-3">অ্যাডমিন নির্দেশনা</h3>
          <p className="text-sm md:text-base text-muted-foreground font-medium max-w-3xl leading-relaxed">বামপাশের মেনু থেকে ব্যাচ, পরীক্ষা, প্রশ্নব্যাংক, ইউজার এবং কুপন ম্যানেজ করুন। সবগুলো পেজেই Create, Edit এবং Delete অপশন রয়েছে। ড্যাশবোর্ড আপডেটগুলো লাইভ সেভ হবে।</p>
        </div>
        <Sparkles className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 text-primary/5 pointer-events-none" />
      </div>
    </div>
  );
};

const TableWrapper = ({ children }) => (
  <div className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden">
    <div className="overflow-x-auto hide-scrollbar">
      <table className="w-full text-sm text-left border-collapse whitespace-nowrap md:whitespace-normal">
        {children}
      </table>
    </div>
  </div>
);

const AdminBatches = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', tag: '', price: 0, icon: 'Rocket', color: 'bg-blue-600' });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('batches', editId, formData); showToast('আপডেট সফল', 'ব্যাচ আপডেট করা হয়েছে'); } 
    else { dbInsert('batches', formData); showToast('সফল', 'নতুন ব্যাচ তৈরি হয়েছে'); }
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">ব্যাচ ও কোর্স</h3>
        <button onClick={() => { setEditId(null); setFormData({ title: '', tag: '', price: 0, icon: 'Rocket', color: 'bg-blue-600' }); setShowModal(true); }} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন ব্যাচ</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">ব্যাচ</th><th className="p-4 md:p-5 font-bold">ট্যাগ</th><th className="p-4 md:p-5 font-bold">ফি</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.batches.map(b => (
            <tr key={b.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5 font-bold text-base whitespace-normal min-w-[200px]">{b.title}</td>
              <td className="p-4 md:p-5"><span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider">{b.tag}</span></td>
              <td className="p-4 md:p-5 font-black text-muted-foreground">৳{b.price}</td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => { setEditId(b.id); setFormData(b); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('batches', b.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-md rounded-[2rem] border border-border/50 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'ব্যাচ এডিট করুন' : 'নতুন ব্যাচ'}</h3>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2"><label className="text-sm font-bold pl-1">টাইটেল</label><input required value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">ট্যাগ</label><input required value={formData.tag} onChange={e=>setFormData({...formData, tag: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">ফি (টাকা)</label><input type="number" required value={formData.price} onChange={e=>setFormData({...formData, price: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminExams = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', tag: '', exam_date: '', duration_minutes: 30, marks: 30, type: 'mcq' });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('exams', editId, formData); showToast('আপডেট সফল', 'পরীক্ষা আপডেট করা হয়েছে'); }
    else { dbInsert('exams', formData); showToast('সফল', 'নতুন পরীক্ষা তৈরি হয়েছে'); }
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">পরীক্ষাসমূহ</h3>
        <button onClick={() => { setEditId(null); setFormData({ title: '', tag: '', exam_date: '', duration_minutes: 30, marks: 30, type: 'mcq' }); setShowModal(true); }} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন পরীক্ষা</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">পরীক্ষা</th><th className="p-4 md:p-5 font-bold">তারিখ</th><th className="p-4 md:p-5 font-bold">মার্কস/সময়</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.exams.map(e => (
            <tr key={e.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5 font-bold text-base whitespace-normal min-w-[200px]">{e.title}</td>
              <td className="p-4 md:p-5 font-semibold text-muted-foreground">{e.exam_date}</td>
              <td className="p-4 md:p-5 font-semibold">{e.marks} মার্কস / {e.duration_minutes} মি.</td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => { setEditId(e.id); setFormData(e); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('exams', e.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-md rounded-[2rem] border border-border/50 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'পরীক্ষা এডিট' : 'নতুন পরীক্ষা'}</h3>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2"><label className="text-sm font-bold pl-1">টাইটেল</label><input required value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">ট্যাগ</label><input required value={formData.tag} onChange={e=>setFormData({...formData, tag: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold pl-1">তারিখ</label><input type="date" required value={formData.exam_date} onChange={e=>setFormData({...formData, exam_date: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><label className="text-sm font-bold pl-1">সময় (মিনিট)</label><input type="number" required value={formData.duration_minutes} onChange={e=>setFormData({...formData, duration_minutes: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
                <div className="space-y-2"><label className="text-sm font-bold pl-1">মার্কস</label><input type="number" required value={formData.marks} onChange={e=>setFormData({...formData, marks: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminCoupons = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ code: '', discount_type: 'flat', discount_value: 0, is_active: true });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('coupons', editId, formData); showToast('আপডেট সফল', 'কুপন আপডেট করা হয়েছে'); }
    else { dbInsert('coupons', formData); showToast('সফল', 'নতুন কুপন তৈরি হয়েছে'); }
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">কুপন ম্যানেজমেন্ট</h3>
        <button onClick={() => { setEditId(null); setFormData({ code: '', discount_type: 'flat', discount_value: 0, is_active: true }); setShowModal(true); }} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন কুপন</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">কোড</th><th className="p-4 md:p-5 font-bold">ডিসকাউন্ট</th><th className="p-4 md:p-5 font-bold">স্ট্যাটাস</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.coupons.map(c => (
            <tr key={c.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5 font-black font-mono text-primary text-lg min-w-[120px]">{c.code}</td>
              <td className="p-4 md:p-5 font-bold">{c.discount_type === 'percentage' ? `${c.discount_value}%` : `৳${c.discount_value}`}</td>
              <td className="p-4 md:p-5"><span className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider ${c.is_active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}>{c.is_active ? 'Active' : 'Inactive'}</span></td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => { setEditId(c.id); setFormData(c); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('coupons', c.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-md rounded-[2rem] border border-border/50 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'কুপন এডিট' : 'নতুন কুপন'}</h3>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2"><label className="text-sm font-bold pl-1">কুপন কোড</label><input required value={formData.code} onChange={e=>setFormData({...formData, code: e.target.value.toUpperCase()})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm font-mono uppercase focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><label className="text-sm font-bold pl-1">ধরন</label><select value={formData.discount_type} onChange={e=>setFormData({...formData, discount_type: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"><option value="flat">Flat Amount</option><option value="percentage">Percentage (%)</option></select></div>
                <div className="space-y-2"><label className="text-sm font-bold pl-1">ভ্যালু</label><input type="number" required value={formData.discount_value} onChange={e=>setFormData({...formData, discount_value: Number(e.target.value)})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" /></div>
              </div>
              <div className="flex items-center space-x-3 pt-3">
                <input type="checkbox" id="active" checked={formData.is_active} onChange={e=>setFormData({...formData, is_active: e.target.checked})} className="w-6 h-6 rounded-md border-input text-primary focus:ring-primary focus:ring-2" />
                <label htmlFor="active" className="text-base font-bold cursor-pointer">কুপন অ্যাক্টিভ রাখুন</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminUsers = () => {
  const { db, dbUpdate, showToast } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({ role: 'student', is_pro: false });

  const handleSave = (e) => {
    e.preventDefault();
    dbUpdate('users', editUser.id, formData);
    showToast('আপডেট সফল', 'ইউজার প্রোফাইল আপডেট করা হয়েছে');
    setShowModal(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex justify-between items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">ইউজার ম্যানেজমেন্ট</h3>
      </div>
      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">ইউজার</th><th className="p-4 md:p-5 font-bold">রোল/স্ট্যাটাস</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.users.map(u => (
            <tr key={u.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5"><div className="font-bold text-base whitespace-nowrap">{u.name}</div><div className="text-xs text-muted-foreground mt-1">{u.email}</div></td>
              <td className="p-4 md:p-5">
                <div className="flex gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-black tracking-wider ${u.role==='admin' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>{u.role}</span>
                  {u.is_pro && <span className="bg-warning/20 text-warning-foreground px-2.5 py-1 rounded-md text-[10px] uppercase font-black tracking-wider">PRO</span>}
                </div>
              </td>
              <td className="p-4 md:p-5 text-right">
                <div className="flex justify-end">
                  <button onClick={() => { setEditUser(u); setFormData({ role: u.role, is_pro: u.is_pro }); setShowModal(true); }} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-sm rounded-[2rem] border border-border/50 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">ইউজার এডিট</h3>
            <div className="mb-6 p-5 bg-muted/50 rounded-2xl border border-border/50">
               <p className="font-black text-lg">{editUser?.name}</p>
               <p className="text-sm font-semibold text-muted-foreground mt-1">{editUser?.email}</p>
            </div>
            <form onSubmit={handleSave} className="space-y-4 md:space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">ইউজার রোল</label>
                <select value={formData.role} onChange={e=>setFormData({...formData, role: e.target.value})} className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all font-semibold">
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex items-center space-x-3 pt-3">
                <input type="checkbox" id="pro" checked={formData.is_pro} onChange={e=>setFormData({...formData, is_pro: e.target.checked})} className="w-6 h-6 rounded-md border-input text-primary focus:ring-primary focus:ring-2" />
                <label htmlFor="pro" className="text-base font-bold cursor-pointer">Pro সাবস্ক্রিপশন</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminQBankQuestions = () => {
  const { db, dbInsert, dbUpdate, dbDelete, showToast, showConfirmModal } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ question: '', options: ['', '', '', ''], correct_answer: 0, explanation: '', type: 'mcq' });

  const handleSave = (e) => {
    e.preventDefault();
    if(editId) { dbUpdate('questions', editId, formData); showToast('আপডেট সফল', 'প্রশ্ন আপডেট করা হয়েছে'); }
    else { dbInsert('questions', formData); showToast('সফল', 'নতুন প্রশ্ন তৈরি হয়েছে'); }
    setShowModal(false);
  };

  const openEdit = (q) => { setEditId(q.id); setFormData({ ...q, options: q.options || ['', '', '', ''] }); setShowModal(true); };
  const openNew = () => { setEditId(null); setFormData({ question: '', options: ['', '', '', ''], correct_answer: 0, explanation: '', type: 'mcq' }); setShowModal(true); };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-card p-4 md:p-5 rounded-[2rem] border border-border/50 shadow-sm">
        <h3 className="text-xl font-black">প্রশ্নব্যাংক ম্যানেজমেন্ট</h3>
        <button onClick={openNew} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md h-12 sm:h-10 px-6 w-full sm:w-auto"><Plus className="w-4 h-4 mr-2"/> নতুন প্রশ্ন</button>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold w-2/3">প্রশ্ন</th><th className="p-4 md:p-5 font-bold">ধরন</th><th className="p-4 md:p-5 font-bold text-right">অ্যাকশন</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {db.questions.map(q => (
            <tr key={q.id} className="hover:bg-muted/30 transition-colors group">
              <td className="p-4 md:p-5"><div className="font-bold text-base line-clamp-2 min-w-[200px] whitespace-normal">{q.question}</div></td>
              <td className="p-4 md:p-5"><span className="uppercase text-xs font-black tracking-widest bg-secondary px-3 py-1.5 rounded-lg">{q.type}</span></td>
              <td className="p-4 md:p-5 text-right whitespace-nowrap">
                <div className="flex justify-end gap-2">
                  <button onClick={() => openEdit(q)} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Pencil className="w-4 h-4"/></button>
                  <button onClick={() => showConfirmModal("ডিলিট?", "নিশ্চিত ডিলিট করবেন?", () => { dbDelete('questions', q.id); showToast('সফল', 'ডিলিট সম্পন্ন'); }, 'destructive')} className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><Trash2 className="w-4 h-4"/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card text-card-foreground p-6 md:p-8 w-full max-w-2xl rounded-[2rem] border border-border/50 shadow-2xl relative max-h-[90vh] overflow-y-auto hide-scrollbar">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-6 mt-2">{editId ? 'প্রশ্ন এডিট' : 'নতুন প্রশ্ন'}</h3>
            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">প্রশ্ন</label>
                <textarea required value={formData.question} onChange={e=>setFormData({...formData, question: e.target.value})} className="flex min-h-[100px] w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-base font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">ধরন</label>
                <select value={formData.type} onChange={e=>setFormData({...formData, type: e.target.value})} className="flex h-14 w-full rounded-2xl border border-input bg-background/50 px-5 text-base font-bold focus:ring-2 focus:ring-primary outline-none transition-all">
                  <option value="mcq">MCQ</option>
                  <option value="cq">CQ (লিখিত)</option>
                </select>
              </div>
              {formData.type === 'mcq' && (
                <div className="p-5 md:p-6 border border-border/50 rounded-3xl bg-muted/30 space-y-4">
                  <label className="text-sm font-bold ml-1">অপশনসমূহ (সঠিক উত্তর মার্ক করুন)</label>
                  {formData.options.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <input type="radio" name="correct_ans" checked={formData.correct_answer === idx} onChange={() => setFormData({...formData, correct_answer: idx})} className="w-6 h-6 text-primary focus:ring-primary" />
                      <input required value={opt} onChange={e=>{const newOpts=[...formData.options]; newOpts[idx]=e.target.value; setFormData({...formData, options: newOpts})}} className="flex h-14 w-full rounded-2xl border border-input bg-background px-5 text-base focus:ring-2 focus:ring-primary outline-none transition-all" placeholder={`Option ${idx+1}`} />
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">ব্যাখ্যা (ঐচ্ছিক)</label>
                <textarea value={formData.explanation} onChange={e=>setFormData({...formData, explanation: e.target.value})} className="flex min-h-[100px] w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-base font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="h-14 flex-1 rounded-2xl font-bold bg-secondary hover:bg-secondary/80 transition-colors">বাতিল</button>
                <button type="submit" className="h-14 flex-1 rounded-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">সেভ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- STUDENT VIEWS ---

const DashboardOverview = () => {
  const { navigateTo, currentUser, db } = useApp();
  const completedTasks = db.tasks.filter(t => t.user_id === currentUser?.id && t.completed).length;
  const totalTasks = db.tasks.filter(t => t.user_id === currentUser?.id).length;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Banner */}
      <div onClick={() => navigateTo('app', 'page-practice-session')} className="bg-gradient-to-br from-primary via-emerald-600 to-teal-800 p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden cursor-pointer group shadow-xl shadow-primary/20 hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 w-64 h-64 md:w-80 md:h-80 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
        <div className="relative z-10 text-white w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold mb-4 border border-white/20 shadow-sm"><PlayCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /> সর্বশেষ অধ্যায়</div>
          <h3 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">মহাকর্ষ ও অভিকর্ষ</h3>
          <p className="text-white/80 mb-6 text-sm md:text-lg font-medium max-w-lg leading-relaxed">আপনি গতকাল পদার্থবিজ্ঞানের এই অধ্যায়ে ছিলেন। এক ক্লিকেই প্র্যাকটিস শুরু করুন।</p>
          <button className="inline-flex items-center justify-center rounded-xl md:rounded-2xl text-sm md:text-base font-bold bg-white text-primary hover:bg-gray-50 h-12 md:h-14 px-6 md:px-8 shadow-lg transition-all md:group-hover:scale-105 w-full md:w-auto"><Zap className="w-5 h-5 mr-2" /> কুইক স্টার্ট <ArrowRight className="w-5 h-5 ml-2" /></button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Daily Tasks Card */}
        <div onClick={() => navigateTo('app', 'page-tasks')} className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md p-5 md:p-8 cursor-pointer transition-all md:hover:-translate-y-1 flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-bl-[100px] -z-10 group-hover:bg-success/10 transition-colors"></div>
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-success/10 text-success flex items-center justify-center shadow-inner"><CheckSquare className="w-5 h-5 md:w-6 md:h-6" /></div>
              <div><h4 className="font-black text-lg md:text-xl leading-tight">ডেইলি টাস্ক</h4><p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">{completedTasks}/{totalTasks} সম্পন্ন</p></div>
            </div>
            <ArrowRight className="text-muted-foreground w-5 h-5 md:w-6 md:h-6 group-hover:text-success transition-colors md:group-hover:translate-x-1" />
          </div>
          <div className="space-y-3 flex-1 mt-1">
            {db.tasks.filter(t => t.user_id === currentUser?.id).slice(0,3).map(task => (
               <div key={task.id} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${task.completed ? 'bg-secondary/50' : 'bg-background border border-border/50 shadow-sm'}`}>
                 {task.completed ? <CheckCircle className="text-success w-5 h-5 shrink-0" /> : <div className="w-5 h-5 rounded-full border-2 border-muted-foreground shrink-0" />}
                 <span className={`text-sm md:text-[15px] leading-tight ${task.completed ? 'line-through text-muted-foreground font-medium' : 'font-bold text-foreground'}`}>{task.title}</span>
               </div>
            ))}
          </div>
        </div>

        {/* DIM Pet Card */}
        <div onClick={() => navigateTo('app', 'page-dim-pet')} className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md p-5 md:p-8 cursor-pointer transition-all md:hover:-translate-y-1 flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner"><Egg className="w-5 h-5 md:w-6 md:h-6" /></div>
              <div><h4 className="font-black text-lg md:text-xl leading-tight">আমার DIM</h4><p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">লেভেল {currentUser?.level || 1}</p></div>
            </div>
            <ArrowRight className="text-muted-foreground w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors md:group-hover:translate-x-1" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl -z-10"></div>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-md border border-border/50 mb-4 md:mb-5 flex items-center justify-center text-4xl md:text-5xl animate-float">🐣</div>
            <div className="w-full max-w-[200px] md:max-w-xs bg-secondary rounded-full h-2 md:h-2.5 overflow-hidden shadow-inner"><div className="bg-primary h-full w-[45%] rounded-full"></div></div>
            <p className="text-[10px] md:text-xs font-bold text-muted-foreground mt-2 md:mt-3 uppercase tracking-wider">EXP 450 / 1000</p>
          </div>
        </div>
      </div>

      <div className="pt-2 md:pt-4">
        <h3 className="text-lg md:text-xl font-black mb-4 flex items-center gap-2"><Sparkles className="text-warning w-5 h-5 md:w-6 md:h-6" /> দ্রুত অ্যাক্সেস</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { title: "প্রশ্নব্যাংক", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30", route: "page-qbank" },
            { title: "কুইক প্র্যাকটিস", icon: Zap, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30", route: "page-fast-practice" },
            { title: "স্টাডি লাউঞ্জ", icon: Timer, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30", route: "page-study-room" },
            { title: "কমিউনিটি", icon: Users, color: "text-emerald-600", bg: "bg-emerald-100 dark:bg-emerald-900/30", route: "page-community" }
          ].map((item, i) => (
            <div key={i} onClick={() => navigateTo('app', item.route)} className="rounded-3xl md:rounded-[1.5rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md p-4 md:p-5 flex flex-col items-center text-center cursor-pointer active:scale-95 md:active:scale-100 md:hover:bg-accent/50 transition-all md:hover:-translate-y-1 group">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-3 md:mb-4 transition-transform md:group-hover:scale-110 shadow-inner`}><item.icon className="w-6 h-6 md:w-7 md:h-7" /></div>
              <h4 className={`font-bold text-sm md:text-base leading-tight`}>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QBankPage = () => {
  const { navigateTo, db } = useApp();
  return (
    <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
      <div onClick={() => navigateTo('app', 'page-custom-exam')} className="rounded-[2rem] bg-gradient-to-r from-card to-primary/5 border border-primary/20 shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 cursor-pointer active:scale-[0.98] md:active:scale-100 md:hover:shadow-md transition-all group">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 w-full">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-lg shadow-primary/20 md:group-hover:scale-105 transition-transform"><FlaskConical className="w-7 h-7 md:w-8 md:h-8" /></div>
          <div><h3 className="text-xl md:text-2xl font-black leading-tight mb-1.5 text-foreground">কাস্টম মক পরীক্ষা</h3><p className="text-sm md:text-base font-medium text-muted-foreground">নিজের পছন্দমতো টপিক ও প্রশ্ন দিয়ে পরীক্ষা তৈরি করুন এবং নিজেকে যাচাই করুন</p></div>
        </div>
        <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-primary-foreground h-12 md:h-14 px-8 w-full md:w-auto shrink-0 shadow-md md:group-hover:scale-105 transition-transform mt-2 md:mt-0">শুরু করুন <ArrowRight className="w-5 h-5 ml-2" /></button>
      </div>

      <div>
        <div className="mb-4 md:mb-6 px-1">
          <h3 className="text-xl md:text-2xl font-black">বিষয় ভিত্তিক</h3>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-1">সকল বিষয়ের প্রশ্নব্যাংক</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {db.subjects.map((sub) => (
            <div key={sub.id} onClick={() => navigateTo('app', 'page-subject-detail', { subjectId: sub.id, subjectTitle: sub.title, paper: sub.paper })} className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 cursor-pointer text-white min-h-[120px] md:min-h-[140px] bg-gradient-to-br ${sub.color} shadow-md active:scale-95 md:active:scale-100 md:hover:shadow-xl md:hover:-translate-y-1 transition-all group`}>
              <h4 className="text-lg md:text-xl font-black relative z-10 leading-tight mb-1 md:mb-1.5">{sub.title}</h4>
              {sub.paper && <p className="text-xs md:text-sm font-bold opacity-90 relative z-10 bg-black/10 inline-block px-2 py-0.5 rounded-md backdrop-blur-sm">{sub.paper}</p>}
              <DynamicIcon iconStr={sub.icon} className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 opacity-20 md:group-hover:scale-110 md:group-hover:rotate-6 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 md:mb-6 px-1">
          <h3 className="text-xl md:text-2xl font-black">প্রতিষ্ঠান ভিত্তিক</h3>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-1">বিগত বছরের ভর্তি পরীক্ষার প্রশ্ন</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {db.institutions.map((uni) => (
            <div key={uni.id} onClick={() => navigateTo('app', 'page-univ-detail', { uni: uni.title })} className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 cursor-pointer flex flex-col items-center justify-center text-center text-white min-h-[120px] md:min-h-[140px] bg-gradient-to-br ${uni.color} shadow-md active:scale-95 md:active:scale-100 md:hover:shadow-xl md:hover:-translate-y-1 transition-all group`}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-md shadow-inner md:group-hover:scale-110 transition-transform"><DynamicIcon iconStr={uni.icon} className="w-6 h-6 md:w-7 md:h-7" /></div>
              <h4 className="text-sm md:text-base font-black relative z-10 leading-tight">{uni.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomExam = () => {
  const { navigateTo, db } = useApp();

  return (
    <div className="max-w-5xl mx-auto pb-6 md:pb-12 space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-8">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <div>
          <h2 className="text-xl md:text-3xl font-black">কাস্টম মক পরীক্ষা</h2>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">নিজের মত করে পরীক্ষা সাজান</p>
        </div>
      </div>
      
      <div className="p-5 md:p-6 bg-card border border-border/50 rounded-[1.5rem] md:rounded-[2rem] shadow-sm">
        <h3 className="text-base md:text-lg font-black mb-4 md:mb-5">টপিক সিলেক্ট করো</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {db.subjects.map((s, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border-2 border-border/50 bg-background hover:border-primary/50 cursor-pointer transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><DynamicIcon iconStr={s.icon} className="w-5 h-5 text-primary" /></div>
              <span className="text-sm md:text-base font-bold">{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-6 bg-gradient-to-r from-card to-primary/5 border border-primary/20 rounded-[1.5rem] md:rounded-[2rem] shadow-sm">
        <h3 className="text-base md:text-lg font-black mb-4 md:mb-5">প্রিসেট পরীক্ষা (এক ক্লিকে শুরু)</h3>
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {['IUT', "ঢাবি 'ক'", "CoU 'A'", "SUST A", "ঢাবি 'খ'", "জাবি এ", "BUP", "RU A", "কৃষি গুচ্ছ"].map(p => (
            <button key={p} onClick={() => navigateTo('app', 'page-exam-session')} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold border border-border/50 bg-background hover:bg-primary hover:text-white hover:border-primary h-10 md:h-11 px-4 md:px-6 shadow-sm hover:shadow-md transition-all">{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const FastPractice = () => {
  const { navigateTo } = useApp();
  return (
    <div className="max-w-3xl mx-auto pb-6 md:pb-10">
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-xl p-6 md:p-12 relative overflow-hidden text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-purple-500/30">
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3">র‍্যাপিড ফায়ার প্র্যাকটিস</h3>
        <p className="text-sm md:text-base font-medium text-muted-foreground mb-8 md:mb-10 max-w-sm mx-auto">বিষয় ও অধ্যায় নির্বাচন করে দ্রুত উত্তর দিন এবং নিজের স্পিড বাড়ান</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-10 text-left">
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">বিষয় নির্বাচন</label>
            <select className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all font-semibold">
              <option>পদার্থবিজ্ঞান ১ম পত্র</option>
              <option>রসায়ন ১ম পত্র</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">অধ্যায় নির্বাচন</label>
            <select className="flex h-12 md:h-14 w-full rounded-2xl border border-input bg-background/50 px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all font-semibold">
              <option>র‍্যান্ডম (সকল অধ্যায়)</option>
              <option>ভেক্টর</option>
            </select>
          </div>
        </div>
        <button onClick={() => navigateTo('app', 'page-practice-session')} className="inline-flex items-center justify-center rounded-2xl text-base md:text-lg font-black bg-primary text-primary-foreground h-14 px-8 md:px-10 shadow-lg md:hover:shadow-xl md:hover:-translate-y-1 transition-all w-full sm:w-auto"><Play className="w-5 h-5 md:w-6 md:h-6 mr-2" /> প্র্যাকটিস শুরু করুন</button>
      </div>
    </div>
  );
};

const SubjectDetail = () => {
  const { pageProps, navigateTo, db } = useApp();
  const subjectId = pageProps.subjectId;
  const title = pageProps.subjectTitle || "পদার্থবিজ্ঞান";
  const paper = pageProps.paper || "১ম পত্র";
  const chapters = db.chapters.filter(ch => ch.subject_id === subjectId).sort((a,b) => a.order_index - b.order_index);

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-0">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 h-6" /></button>
        <div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight">{title}</h2>
          <p className="text-muted-foreground font-bold text-xs md:text-sm mt-0.5">অধ্যায় বা ইউনিট নির্বাচন করুন</p>
        </div>
      </div>

      <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-r from-primary to-emerald-600 text-white p-6 md:p-10 flex items-center justify-between relative overflow-hidden shadow-lg">
        <div className="relative z-10">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-5 bg-white/20 backdrop-blur-md shadow-inner">
            <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-2">{title} প্রশ্নব্যাংক</h3>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-lg leading-relaxed">{title} বিষয়ের সকল অধ্যায়ের সমাধান এখানে পাবেন। নিজের দক্ষতা যাচাই করতে প্র্যাকটিস শুরু করুন।</p>
        </div>
        <BookOpen className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-40 h-40 md:w-64 md:h-64 text-white/10 pointer-events-none transform -rotate-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {chapters.map((ch) => (
          <div key={ch.id} onClick={() => navigateTo('app', 'page-questions-list', { chapterId: ch.id, title: ch.title, sub: `${title} ${paper}` })} className="rounded-[1.25rem] md:rounded-[1.5rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md md:hover:border-primary/50 p-4 md:p-6 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all group md:hover:-translate-y-0.5">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <BookOpenText className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg leading-tight mb-1">{ch.title}</h4>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">অধ্যায় {String(ch.order_index).padStart(2, '0')}</p>
              </div>
            </div>
            <ArrowRight className="text-muted-foreground w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
          </div>
        ))}
        {chapters.length === 0 && <p className="text-muted-foreground font-medium col-span-full">কোনো অধ্যায় পাওয়া যায়নি।</p>}
      </div>
    </div>
  );
};

const UnivDetail = () => {
  const { pageProps, navigateTo } = useApp();
  const uni = pageProps.uni || "ঢাকা বিশ্ববিদ্যালয়";
  const units = [
    { name: "A", desc: "বিজ্ঞান ইউনিট", color: "from-purple-500 to-indigo-600" },
    { name: "B", desc: "মানবিক ইউনিট", color: "from-pink-500 to-rose-600" },
    { name: "C", desc: "বাণিজ্য ইউনিট", color: "from-orange-500 to-amber-600" },
    { name: "D", desc: "সম্মিলিত ইউনিট", color: "from-teal-500 to-emerald-600" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-0">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <div><h3 className="text-xl md:text-3xl font-black leading-tight">{uni}</h3><p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">ইউনিটসমূহ নির্বাচন করুন</p></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {units.map((u, i) => (
          <div key={i} onClick={() => navigateTo('app', 'page-questions-list', { title: `${u.name} ইউনিট`, sub: uni })} className={`rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 cursor-pointer flex flex-col items-center justify-center text-center text-white min-h-[140px] md:min-h-[160px] bg-gradient-to-br ${u.color} shadow-md active:scale-95 md:hover:shadow-xl md:hover:-translate-y-1 transition-all group`}>
            <h4 className="text-4xl md:text-5xl font-black mb-1 md:mb-2 md:group-hover:scale-110 transition-transform">{u.name}</h4>
            <p className="text-xs md:text-sm font-bold opacity-90">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuestionsList = () => {
  const { pageProps, db, showToast, dbInsert, currentUser, navigateTo } = useApp();
  const [qType, setQType] = useState('mcq');
  const [selectedTopicId, setSelectedTopicId] = useState('all');
  const [showAnswers, setShowAnswers] = useState({});
  const katexRef = useRef(null);

  const chapterId = pageProps.chapterId;
  const topics = db.topics.filter(t => t.chapter_id === chapterId);
  const questions = db.questions.filter(q => (chapterId ? q.chapter_id === chapterId : true) && q.type === qType && (selectedTopicId === 'all' ? true : q.topic_id === selectedTopicId));

  useEffect(() => {
    if (window.renderMathInElement && katexRef.current) {
      window.renderMathInElement(katexRef.current, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false });
    }
  }, [qType, showAnswers, questions, selectedTopicId]);

  const toggleAnswer = (id) => setShowAnswers(prev => ({...prev, [id]: !prev[id]}));

  return (
    <div className="max-w-4xl mx-auto" ref={katexRef}>
      <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
        <button onClick={() => navigateTo('app', 'page-qbank')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <div>
          <h2 className="text-xl md:text-2xl font-black leading-tight">{pageProps.title || 'প্রশ্নব্যাংক'}</h2>
          <p className="text-xs md:text-sm font-bold text-muted-foreground mt-0.5">{pageProps.sub || ''}</p>
        </div>
      </div>

      <div className="flex justify-center mb-6 md:mb-8">
        <div className="bg-muted/50 p-1.5 rounded-2xl inline-flex gap-1 border border-border/50 w-full md:max-w-md shadow-inner">
          <button onClick={() => setQType('mcq')} className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${qType === 'mcq' ? 'bg-card shadow-md text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>MCQ</button>
          <button onClick={() => setQType('cq')} className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${qType === 'cq' ? 'bg-card shadow-md text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>লিখিত / CQ</button>
        </div>
      </div>

      {topics.length > 0 && (
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 md:pb-6 mb-2 -mx-4 px-4 md:mx-0 md:px-0">
           <button onClick={() => setSelectedTopicId('all')} className={`px-5 py-2 rounded-xl text-sm font-bold border whitespace-nowrap transition-colors ${selectedTopicId === 'all' ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-card text-foreground border-border/50 hover:bg-accent'}`}>সকল টপিক</button>
           {topics.map(t => (
              <button key={t.id} onClick={() => setSelectedTopicId(t.id)} className={`px-5 py-2 rounded-xl text-sm font-bold border whitespace-nowrap transition-colors ${selectedTopicId === t.id ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-card text-foreground border-border/50 hover:bg-accent'}`}>{t.title}</button>
           ))}
        </div>
      )}

      <div className="space-y-4 md:space-y-5">
        {questions.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-card rounded-[2rem] border border-border/50">
            <Database className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground font-bold text-sm md:text-base">কোনো প্রশ্ন পাওয়া যায়নি।</p>
          </div>
        )}
        {questions.map((q, i) => (
          <div key={q.id} className="rounded-[1.5rem] border border-border/50 bg-card text-card-foreground shadow-sm p-5 md:p-8 relative transition-all md:hover:shadow-md">
             {q.type === 'cq' && <span className="absolute top-0 right-4 md:right-6 bg-success text-success-foreground px-3 py-1.5 rounded-b-lg md:rounded-b-xl text-[10px] font-black uppercase tracking-widest shadow-sm">সৃজনশীল</span>}
             
             <div className="flex items-center justify-between gap-4 mb-4 md:mb-5 border-b border-border/50 pb-3 md:pb-4">
                <span className="bg-info/10 text-info font-black px-2.5 py-1 rounded-md md:rounded-lg text-[10px] md:text-[11px] uppercase tracking-wider">{q.source || 'Standard'}</span>
                <div className="flex gap-2.5 md:gap-3">
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-warning hover:bg-warning/10 transition-colors"><Flag className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><Bookmark className="w-4 h-4" /></button>
                </div>
             </div>

             <h4 className={`text-base md:text-lg font-bold leading-relaxed mb-5 md:mb-6 whitespace-pre-wrap ${q.type === 'cq' ? 'mt-4' : ''}`}>{i+1}. {q.question}</h4>
             
             {q.type === 'mcq' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {q.options.map((opt, idx) => (
                      <div key={idx} onClick={() => toggleAnswer(q.id)} className={`flex items-center gap-3 md:gap-4 p-3.5 md:p-4 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all active:scale-[0.99] ${showAnswers[q.id] && q.correct_answer === idx ? 'border-success bg-success/5 text-success shadow-sm' : 'border-border/50 bg-background md:hover:border-primary/50'}`}>
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg border-2 flex items-center justify-center text-xs md:text-sm font-black shrink-0 ${showAnswers[q.id] && q.correct_answer === idx ? 'border-success bg-success/10' : 'border-muted-foreground/30'}`}>{String.fromCharCode(2453 + idx)}</div>
                        <span className="text-sm md:text-base font-semibold">{opt}</span>
                      </div>
                    ))}
                  </div>
                  {showAnswers[q.id] && q.explanation && (
                     <div className="mt-4 md:mt-6 p-4 md:p-5 bg-primary/5 border border-primary/10 rounded-xl text-xs md:text-sm leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2"><span className="text-primary font-black block mb-1">ব্যাখ্যা:</span> {q.explanation}</div>
                  )}
                </>
             )}

             {q.type === 'cq' && (
                <>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => toggleAnswer(q.id)} className={`inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold h-10 md:h-11 px-5 md:px-6 transition-all ${showAnswers[q.id] ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                      {showAnswers[q.id] ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />} {showAnswers[q.id] ? 'উত্তর লুকান' : 'উত্তর দেখুন'}
                    </button>
                  </div>
                  {showAnswers[q.id] && (
                    <div className="mt-4 md:mt-6 p-4 md:p-6 bg-muted/30 rounded-2xl border border-border/50 animate-in fade-in slide-in-from-top-2">
                      <div className="text-sm md:text-base font-medium leading-relaxed whitespace-pre-wrap">
                        {q.explanation}
                      </div>
                    </div>
                  )}
                </>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PracticeSession = () => {
  const { navigateTo, db, showToast } = useApp();
  const [selected, setSelected] = useState(null);
  const katexRef = useRef(null);
  const mcqs = db.questions.filter(q => q.type === 'mcq');
  const question = mcqs[0]; 

  useEffect(() => {
    if (window.renderMathInElement && katexRef.current) {
      window.renderMathInElement(katexRef.current, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false });
    }
  }, [selected]);

  const handleSelect = (idx, isCorrect) => {
    if (selected !== null) return;
    setSelected({ idx, isCorrect });
  };

  return (
    <div className="max-w-3xl mx-auto min-h-[80vh] flex flex-col justify-center pb-12 md:pb-0" ref={katexRef}>
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-xl p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-primary to-info"></div>
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <span className="bg-secondary px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground">প্রশ্ন ১ / ২০</span>
          <button className="text-muted-foreground hover:text-warning transition-colors"><AlertCircle className="w-5 h-5" /></button>
        </div>
        <h3 className="text-xl md:text-2xl font-black leading-relaxed mb-6 md:mb-8">{question ? question.question : 'নিচের কোনটি ভেক্টর রাশি নয়?'}</h3>
        <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
          {(question ? question.options : ["সরণ", "কাজ"]).map((opt, i) => {
            const isCorrect = question ? question.correct_answer === i : i === 1;
            let stateClass = "border-border/50 bg-background md:hover:border-primary/50 md:hover:bg-accent/50";
            if (selected?.idx === i) {
              stateClass = isCorrect ? "border-success bg-success/10 text-success shadow-md shadow-success/10" : "border-destructive bg-destructive/10 text-destructive shadow-md shadow-destructive/10";
            } else if (selected !== null && isCorrect) {
              stateClass = "border-success bg-success/10 text-success shadow-md shadow-success/10";
            }
            
            return (
              <div key={i} onClick={() => handleSelect(i, isCorrect)} className={`flex items-center gap-3 md:gap-4 p-3.5 md:p-4 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all active:scale-[0.99] ${stateClass}`}>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl border-2 flex items-center justify-center shrink-0 font-black text-sm md:text-lg ${stateClass.includes('border-border') ? 'border-muted-foreground/30 text-muted-foreground' : 'border-current'}`}>{String.fromCharCode(2453 + i)}</div>
                <span className="text-sm md:text-lg font-bold">{opt}</span>
              </div>
            );
          })}
        </div>
        {selected !== null && question?.explanation && (
           <div className="p-4 md:p-5 bg-primary/5 border border-primary/10 rounded-xl md:rounded-2xl text-xs md:text-base font-medium leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2 mb-6 md:mb-8"><span className="text-primary font-black block mb-1">ব্যাখ্যা:</span> {question.explanation}</div>
        )}
        <div className="flex justify-between items-center pt-5 md:pt-6 border-t border-border/50">
          <button onClick={() => navigateTo('app', 'page-dashboard')} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-secondary hover:bg-secondary/80 h-10 md:h-12 px-6 md:px-8 transition-colors">শেষ করুন</button>
          {selected !== null && <button className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-10 md:h-12 px-6 md:px-8 shadow-md transition-all">পরের প্রশ্ন <ArrowRight className="w-4 h-4 ml-2" /></button>}
        </div>
      </div>
    </div>
  );
};

const BatchesPage = () => {
  const { navigateTo, db } = useApp();
  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {db.batches.map(b => (
          <div key={b.id} className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all p-6 md:p-8 flex flex-col group md:hover:-translate-y-1 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 md:h-1.5 ${b.color}`}></div>
            <div className="flex justify-between items-start mb-5 md:mb-6">
              <div>
                <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg mb-2 md:mb-3 uppercase tracking-wider">{b.tag}</span>
                <h4 className="font-black text-lg md:text-xl leading-tight">{b.title}</h4>
              </div>
              <div className="text-right shrink-0 ml-2 md:ml-3 bg-muted/50 p-2 md:p-3 rounded-xl">
                <p className="text-xl md:text-2xl font-black text-primary">৳{b.price}</p>
              </div>
            </div>
            <div className="space-y-3 mb-6 md:mb-8 flex-1 text-xs md:text-sm font-semibold">
              <p className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> {b.exam_count}+ লাইভ পরীক্ষা</p>
              <p className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> বিস্তারিত লিডারবোর্ড</p>
              <p className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> এক্সক্লুসিভ ম্যাটেরিয়াল</p>
            </div>
            <button onClick={() => navigateTo('app', 'page-checkout')} className="inline-flex w-full items-center justify-center rounded-xl text-sm md:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-12 px-4 shadow-md md:group-hover:shadow-lg transition-all active:scale-[0.98] md:active:scale-100">ব্যাচে এনরোল করুন</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const { navigateTo, showToast } = useApp();
  return (
    <div className="max-w-3xl mx-auto pb-6 md:pb-10 space-y-6 md:space-y-8">
      <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-8">
        <button onClick={() => navigateTo('app', 'page-batches')} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-card flex items-center justify-center hover:bg-accent shadow-sm shrink-0"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6" /></button>
        <h2 className="text-xl md:text-3xl font-black">পেমেন্ট ও চেকআউট</h2>
      </div>
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-sm p-6 md:p-10">
        <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6 border-b border-border/50 pb-3 md:pb-4">অর্ডার সারাংশ</h3>
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 bg-muted/30 p-4 md:p-6 rounded-2xl border border-border/50">
          <div className="flex justify-between items-center text-sm md:text-base font-semibold"><span>ঢাবি 'ক' ইউনিট স্পেশাল ২০২৬</span><span className="font-black">৳১৫০০</span></div>
          <div className="flex justify-between items-center text-xs md:text-sm font-semibold text-muted-foreground"><span>প্রোমো কোড</span><span className="text-success font-black">-৳০</span></div>
          <div className="flex justify-between items-center text-lg md:text-xl font-black border-t border-border/50 pt-3 md:pt-4 mt-1 md:mt-2 text-primary"><span>সর্বমোট</span><span>৳১৫০০</span></div>
        </div>
        <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5">পেমেন্ট মেথড নির্বাচন করুন</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-10">
          <button className="p-4 md:p-6 border-2 border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:border-primary hover:bg-primary/5 text-sm font-bold transition-all"><Smartphone className="w-6 h-6 md:w-8 md:h-8 text-pink-600" /> বিকাশ</button>
          <button className="p-4 md:p-6 border-2 border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:border-primary hover:bg-primary/5 text-sm font-bold transition-all"><Smartphone className="w-6 h-6 md:w-8 md:h-8 text-orange-500" /> নগদ</button>
          <button className="p-4 md:p-6 border-2 border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:border-primary hover:bg-primary/5 text-sm font-bold transition-all"><CreditCard className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> কার্ড</button>
        </div>
        <button onClick={() => { showToast('পেমেন্ট সফল!', 'আপনি ব্যাচে যুক্ত হয়েছেন।'); navigateTo('app', 'page-dashboard'); }} className="inline-flex w-full items-center justify-center rounded-xl md:rounded-2xl text-base md:text-lg font-black bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 px-8 shadow-lg md:hover:shadow-xl md:hover:-translate-y-1 transition-all active:scale-[0.98]">পেমেন্ট সম্পন্ন করুন</button>
      </div>
    </div>
  );
};

const ExamsPage = () => {
  const { navigateTo, db, currentUser } = useApp();
  const enrolledBatchIds = db.enrollments.filter(e => e.user_id === currentUser?.id).map(e => e.batch_id);
  const myExams = db.batch_exams
    .filter(be => enrolledBatchIds.includes(be.batch_id))
    .map(be => {
      const exam = db.exams.find(ex => ex.id === be.exam_id);
      const batch = db.batches.find(b => b.id === be.batch_id);
      return { ...exam, batchName: batch?.title };
    }).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
      <div className="flex items-center justify-between bg-card p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm mb-2">
         <h3 className="text-xl md:text-2xl font-black">আমার পরীক্ষাসমূহ</h3>
         <span className="bg-primary/10 text-primary px-3 py-1 md:px-4 md:py-1.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm">{myExams.length} টি পরীক্ষা</span>
      </div>
      
      {myExams.length === 0 && (
        <div className="text-center py-12 md:py-16 bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
          <FileText className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
          <p className="text-muted-foreground font-bold text-sm md:text-lg">আপনার কোনো পরীক্ষা নির্ধারিত নেই।</p>
        </div>
      )}
      
      {myExams.map(ex => (
        <div key={ex.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 rounded-[1.5rem] border border-border/50 bg-card shadow-sm hover:shadow-md transition-all gap-4 md:gap-5 group">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary text-primary rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 md:group-hover:scale-110 transition-transform"><FileText className="w-6 h-6 md:w-7 md:h-7" /></div>
            <div>
              <span className="inline-block px-2.5 py-1 bg-muted rounded-md text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 md:mb-2">{ex.batchName || ex.tag}</span>
              <h4 className="font-black text-base md:text-lg leading-tight mb-2">{ex.title}</h4>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-muted-foreground">
                 <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {ex.exam_date}</span>
                 <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {ex.duration_minutes} মিনিট</span>
                 <span className="flex items-center gap-1.5"><Sigma className="w-3.5 h-3.5" /> {ex.marks} মার্কস</span>
              </div>
            </div>
          </div>
          <button onClick={() => navigateTo('app', 'page-exam-session')} className={`inline-flex items-center justify-center rounded-xl text-sm font-bold h-11 md:h-12 px-6 md:px-8 w-full md:w-auto shrink-0 transition-all ${ex.status === 'completed' ? 'border-2 border-border/50 bg-background hover:bg-accent hover:border-primary/50 text-foreground' : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md md:group-hover:shadow-lg md:hover:-translate-y-0.5 active:scale-[0.98]'}`}>
            {ex.status === 'completed' ? 'ফলাফল দেখুন' : 'পরীক্ষা দিন'}
          </button>
        </div>
      ))}
    </div>
  );
};

const ExamSession = () => {
  const { navigateTo, showConfirmModal, showToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (submitted) return;
    const interval = setInterval(() => setTimeLeft(t => t > 0 ? t - 1 : 0), 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

  const handleSubmit = () => {
    showConfirmModal("পরীক্ষা সাবমিট করবেন?", "আপনার এখনো ৫টি প্রশ্নের উত্তর দেওয়া বাকি আছে। নিশ্চিত সাবমিট করবেন?", () => {
      setSubmitted(true);
      showToast('পরীক্ষা সম্পন্ন!', 'আপনার পরীক্ষার খাতা মূল্যায়ন করা হয়েছে।');
      window.scrollTo(0, 0);
    });
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto flex flex-col justify-center min-h-[80vh] pb-12 md:pb-0">
        <div className="rounded-[2rem] border border-border/50 bg-card text-card-foreground shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-success"></div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-inner"><CheckCircle className="w-10 h-10 md:w-12 md:h-12" /></div>
          <h2 className="text-2xl md:text-3xl font-black mb-3">পরীক্ষা সম্পন্ন হয়েছে!</h2>
          <p className="text-muted-foreground font-medium text-sm md:text-lg mb-8 md:mb-10 max-w-md mx-auto">আপনার খাতা মূল্যায়ন করা হয়েছে। বিস্তারিত রেজাল্ট শিট ড্যাশবোর্ডে পাবেন।</p>
          <button onClick={() => navigateTo('app', 'page-results')} className="inline-flex items-center justify-center rounded-xl md:rounded-2xl text-sm md:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 px-8 md:px-10 shadow-lg md:hover:-translate-y-1 transition-all w-full sm:w-auto">রেজাল্ট দেখুন</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-border/50 bg-card/95 backdrop-blur-md p-3 md:p-4 flex items-center justify-between mb-6 md:mb-8 sticky top-16 md:top-24 z-20 shadow-lg">
         <div className="flex items-center gap-3 md:gap-4 bg-muted/50 px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
            <Timer className={`w-5 h-5 md:w-6 md:h-6 ${timeLeft < 300 ? 'text-destructive animate-pulse' : 'text-primary'}`} />
            <div>
              <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase block tracking-widest">সময় বাকি</span>
              <span className={`font-mono text-lg md:text-xl font-black leading-none ${timeLeft < 300 ? 'text-destructive' : 'text-foreground'}`}>{mins}:{secs}</span>
            </div>
         </div>
         <button onClick={handleSubmit} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 md:h-11 px-4 md:px-6 shadow-md transition-all active:scale-95">সাবমিট</button>
      </div>

      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card shadow-sm p-6 md:p-12 relative">
         <div className="absolute top-0 left-0 w-[4%] h-1 md:h-1.5 bg-primary rounded-tr-full"></div>
         <div className="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-border/50">
            <h3 className="text-sm md:text-base font-black text-muted-foreground">প্রশ্ন ১ / ২৫</h3>
            <span className="bg-secondary text-[10px] md:text-xs font-black px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg tracking-wider">মার্ক: ১.০</span>
         </div>
         <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 leading-relaxed">নিচের কোনটি ভেক্টর রাশি?</h4>
         <div className="space-y-3 md:space-y-4">
           {['কাজ', 'বল', 'তাপমাত্রা', 'দ্রুতি'].map((opt, i) => (
             <div key={i} onClick={() => setSelected(i)} className={`flex items-center gap-3 md:gap-4 p-3.5 md:p-4 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.99] ${selected === i ? 'border-primary bg-primary/5 text-primary shadow-sm' : 'border-border/50 bg-background hover:border-primary/30'}`}>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selected === i ? 'border-primary' : 'border-muted-foreground/50'}`}>
                   {selected === i && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary" />}
                </div>
                <span className="text-sm md:text-base font-bold">{opt}</span>
             </div>
           ))}
         </div>
         
         {/* Fixed Bottom Controls on Mobile, inline on Desktop */}
         <div className="fixed bottom-0 left-0 right-0 p-4 bg-card/90 backdrop-blur-md border-t border-border/50 md:relative md:bg-transparent md:border-t md:border-border/50 md:mt-10 md:pt-6 md:p-0 flex justify-between items-center z-30 pb-safe">
            <button disabled className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold border-2 border-border/50 bg-background opacity-50 h-11 md:h-12 px-5 md:px-6 cursor-not-allowed">আগের প্রশ্ন</button>
            <button className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold border-2 border-border/50 bg-background hover:bg-accent hover:border-primary/50 h-11 md:h-12 px-5 md:px-6 transition-all active:scale-95">পরের প্রশ্ন</button>
         </div>
      </div>
    </div>
  );
};

const ResultsPage = () => {
  const { db, currentUser } = useApp();
  const myResults = db.results.filter(r => r.user_id === currentUser?.id);

  return (
    <div className="max-w-5xl mx-auto pb-10 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between bg-card p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm mb-2 md:mb-4">
         <h3 className="text-xl md:text-2xl font-black">রেজাল্ট হিস্ট্রি</h3>
         <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary"><Trophy className="w-5 h-5 md:w-6 md:h-6" /></div>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        {myResults.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
            <History className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground font-bold text-sm md:text-base">কোনো পরীক্ষার রেজাল্ট পাওয়া যায়নি।</p>
          </div>
        )}
        {myResults.map(r => {
          const exam = db.exams.find(e => e.id === r.exam_id);
          return (
            <div key={r.id} className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card shadow-sm p-5 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6 mb-5 md:mb-8">
                <div>
                  <h4 className="text-lg md:text-2xl font-black leading-tight mb-1.5 md:mb-2">{exam?.title || 'Unknown Exam'}</h4>
                  <p className="text-xs md:text-sm font-semibold text-muted-foreground">{new Date(r.submitted_at).toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between sm:block bg-primary/5 border border-primary/20 p-3 md:p-4 rounded-xl md:rounded-2xl min-w-[120px] md:min-w-[140px] md:text-right">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-0.5 md:mb-1">প্রাপ্ত স্কোর</p>
                  <div className="text-2xl md:text-3xl font-black text-foreground">{r.score} <span className="text-sm md:text-lg text-muted-foreground">/ {r.total}</span></div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-border/50">
                <div className="text-center p-3 md:p-4 rounded-xl bg-success/10 border border-success/20 text-success"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">সঠিক</p><p className="text-lg md:text-2xl font-black">{r.correct}</p></div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">ভুল</p><p className="text-lg md:text-2xl font-black">{r.wrong}</p></div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-secondary border border-border/50 text-muted-foreground"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">স্কিপড</p><p className="text-lg md:text-2xl font-black">{r.skipped}</p></div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-info/10 border border-info/20 text-info"><p className="text-[10px] md:text-xs uppercase font-black tracking-wider mb-0.5 md:mb-1">অ্যাকুরেসি</p><p className="text-lg md:text-2xl font-black">{r.accuracy}%</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StudyRoomPage = () => {
  const [isStudying, setIsStudying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isStudying) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isStudying]);

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="rounded-[2rem] md:rounded-[2.5rem] border border-border/50 bg-card p-8 md:p-16 text-center flex flex-col items-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[6px] flex items-center justify-center mb-6 md:mb-8 relative transition-colors duration-500 ${isStudying ? 'border-primary shadow-[0_0_40px_rgba(16,185,129,0.2)]' : 'border-border/80'}`}>
          {isStudying && <div className="absolute inset-[-6px] rounded-full border-[6px] border-primary border-t-transparent animate-spin opacity-40"></div>}
          <span className={`text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight ${isStudying ? 'text-primary' : 'text-foreground'}`}>{formatTime(time)}</span>
        </div>
        <button onClick={() => setIsStudying(!isStudying)} className={`inline-flex items-center justify-center rounded-2xl text-base md:text-lg font-black h-12 md:h-14 px-8 md:px-10 shadow-lg hover:-translate-y-1 transition-all active:scale-95 w-full sm:w-auto ${isStudying ? 'bg-warning text-warning-foreground hover:bg-warning/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
          {isStudying ? <><Timer className="w-5 h-5 mr-2" /> বিরতি নিন</> : <><Play className="w-5 h-5 mr-2" /> ফোকাস শুরু করুন</>}
        </button>
      </div>

      <div className="bg-card p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm">
        <div className="flex items-center justify-between mb-5 md:mb-6">
           <h3 className="text-lg md:text-xl font-black">লাইভ স্কোয়াড</h3>
           <span className="bg-success/10 text-success px-2.5 py-1 md:px-3 md:py-1 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-1.5"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-success animate-pulse"></div> ৩ জন লাইভ</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {[
            { name: "Arif Hasan", time: "০২:৪৫:১০", status: "ফোকাসিং" },
            { name: "Nusrat Jahan", time: "০১:২০:০০", status: "বিরতিতে" },
            { name: "Rahim Ali", time: "০০:৪৫:৩০", status: "ফোকাসিং" }
          ].map((user, i) => (
            <div key={i} className="rounded-xl border border-border/50 bg-background p-4 md:p-5 flex items-center gap-3 md:gap-4 shadow-sm hover:border-primary/30 transition-colors">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg ${user.status === 'ফোকাসিং' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-secondary text-muted-foreground'}`}>{user.name.charAt(0)}</div>
              <div>
                 <h4 className="font-bold text-sm md:text-base mb-0.5 md:mb-1">{user.name}</h4>
                 <p className={`text-[10px] md:text-xs font-black uppercase tracking-wider ${user.status === 'ফোকাসিং' ? 'text-success' : 'text-warning'}`}>{user.status} • {user.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TasksPage = () => {
  const { db, dbUpdate, currentUser } = useApp();
  const myTasks = db.tasks.filter(t => t.user_id === currentUser?.id);
  const completedCount = myTasks.filter(t => t.completed).length;
  const progress = myTasks.length > 0 ? Math.round((completedCount / myTasks.length) * 100) : 0;

  const toggleTask = (task) => {
    dbUpdate('tasks', task.id, { completed: !task.completed });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card p-5 md:p-8 shadow-sm">
        <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6">ডেইলি টাস্কস</h3>
        <div className="bg-success/5 border border-success/20 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4 md:mb-5 relative z-10"><h4 className="text-base md:text-lg font-bold">আজকের অগ্রগতি</h4><span className="text-xl md:text-2xl font-black text-success">{progress}%</span></div>
          <div className="w-full bg-background/50 rounded-full h-2.5 md:h-3 border border-border/50 relative z-10 overflow-hidden"><div className="bg-success h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div></div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {myTasks.map(task => (
            <div key={task.id} onClick={() => toggleTask(task)} className={`rounded-xl md:rounded-2xl border-2 p-4 md:p-5 flex items-center gap-3 md:gap-4 cursor-pointer transition-all active:scale-[0.98] md:hover:-translate-y-0.5 group ${task.completed ? 'bg-muted/50 border-border/50 text-muted-foreground' : 'bg-background border-border hover:border-primary/50 shadow-sm'}`}>
              <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center border-2 shrink-0 transition-colors ${task.completed ? 'bg-success border-success text-white' : 'border-muted-foreground/30 text-transparent md:group-hover:border-primary/50'}`}><Check className="w-3.5 h-3.5 md:w-4 md:h-4" /></div>
              <span className={`text-sm md:text-base font-semibold ${task.completed ? 'line-through opacity-70' : ''}`}>{task.title}</span>
            </div>
          ))}
          {myTasks.length === 0 && <p className="text-muted-foreground font-medium p-4 text-center text-sm md:text-base">আজকের কোনো টাস্ক নেই।</p>}
        </div>
      </div>
    </div>
  );
};

const DimPetPage = () => {
  const { currentUser } = useApp();
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-[3] rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-gradient-to-br from-card to-info/5 p-6 md:p-10 flex flex-col items-center justify-center relative shadow-sm overflow-hidden">
          <h2 className="absolute top-4 left-5 md:top-6 md:left-8 text-lg md:text-xl font-black">আমার DIM</h2>
          <div className="absolute top-4 right-5 md:top-6 md:right-8 flex items-center gap-1.5 md:gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 rounded-lg md:rounded-xl text-xs md:text-sm font-black shadow-sm"><Coins className="w-3.5 h-3.5 md:w-4 md:h-4" /> {currentUser?.coins || 0}</div>
          
          <div className="relative mt-8 md:mt-8 mb-6 md:mb-10">
            <div className="absolute inset-0 bg-primary/20 blur-[40px] md:blur-[60px] rounded-full"></div>
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl text-6xl md:text-8xl relative z-10 animate-float">🐣</div>
          </div>
          
          <div className="w-full max-w-sm bg-card p-4 md:p-6 rounded-2xl border border-border/50 shadow-sm z-10">
            <div className="flex justify-between items-end mb-2 md:mb-3">
              <div>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">বর্তমান লেভেল</p>
                <p className="text-lg md:text-xl font-black text-primary">লেভেল {currentUser?.level || 1}</p>
              </div>
              <span className="text-xs md:text-sm font-bold text-muted-foreground">EXP: 450/1000</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5 md:h-3 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-primary to-info h-full w-[45%] rounded-full"></div></div>
          </div>
        </div>
        
        <div className="flex-[2] rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card p-5 md:p-8 shadow-sm">
          <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 flex items-center gap-2"><ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-primary"/> স্টোর</h3>
          <div className="space-y-3 md:space-y-4">
            {[
              { title: 'খাবার কিনুন', price: 50, icon: '🍕' },
              { title: 'নতুন টুপি', price: 150, icon: '🎩' },
              { title: 'প্রিমিয়াম থিম', price: 300, icon: '✨' }
            ].map((item, i) => (
              <div key={i} className="rounded-xl md:rounded-2xl border border-border/50 bg-background p-3 md:p-4 flex items-center justify-between group md:hover:border-primary/30 transition-colors active:bg-muted md:active:bg-background">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted flex items-center justify-center text-xl md:text-2xl md:group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-bold text-sm md:text-base">{item.title}</span>
                </div>
                <button className="px-2.5 py-1.5 md:px-3 md:py-1.5 bg-yellow-500/10 text-yellow-600 font-bold text-[10px] md:text-xs rounded-lg hover:bg-yellow-500/20 transition-colors flex items-center gap-1 active:scale-95"><Coins className="w-3 h-3"/> {item.price}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BookmarksPage = () => {
  const { db, currentUser } = useApp();
  const bookmarked = db.bookmarked_questions.filter(b => b.user_id === currentUser?.id);

  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
      <div className="flex gap-2 md:gap-3 mb-4 md:mb-8 bg-card p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-border/50 w-full md:w-fit shadow-sm">
        <button className="flex-1 md:flex-none inline-flex items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-bold bg-primary text-primary-foreground h-10 px-4 md:px-6 shadow-sm">বুকমার্ক</button>
        <button className="flex-1 md:flex-none inline-flex items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-bold hover:bg-muted text-muted-foreground h-10 px-4 md:px-6 transition-colors">আমার ভুলসমূহ</button>
      </div>
      
      <div className="space-y-4 md:space-y-5">
        {bookmarked.length === 0 ? (
          <div className="text-center py-12 md:py-16 bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
            <Bookmark className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground font-bold text-sm md:text-base">কোনো বুকমার্ক করা প্রশ্ন নেই।</p>
          </div>
        ) : (
          bookmarked.map(b => {
            const q = db.questions.find(qu => qu.id === b.question_id);
            if(!q) return null;
            return (
              <div key={b.id} className="rounded-[1.5rem] border border-border/50 bg-card p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                   <span className="bg-info/10 text-info font-black px-2.5 py-1 md:px-3 md:py-1 rounded-md md:rounded-lg text-[10px] uppercase tracking-widest">{q.source || 'Standard'}</span>
                   <Bookmark className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary cursor-pointer md:hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-sm md:text-base mb-4 md:mb-5 leading-relaxed">{q.question}</h4>
                <div className="p-3 md:p-4 bg-success/5 border border-success/20 rounded-xl">
                   <span className="text-xs md:text-sm font-black text-success flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4"/> সঠিক উত্তর: {q.type === 'mcq' ? q.options[q.correct_answer] : 'লিখিত উত্তর'}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const CommunityPage = () => {
  const { db, currentUser, dbInsert } = useApp();
  const [content, setContent] = useState('');

  const handlePost = () => {
    if(!content) return;
    dbInsert('discussions', { user_id: currentUser.id, title: 'Question', content, is_resolved: false });
    setContent('');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
      <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-card p-5 md:p-6 shadow-sm">
        <div className="flex gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-primary/20 to-info/20 flex items-center justify-center font-black text-primary shrink-0 border border-primary/20 text-base md:text-lg">{currentUser?.name?.charAt(0) || 'U'}</div>
          <div className="flex-1 space-y-3 md:space-y-4 pt-1">
            <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="আপনার প্রশ্ন বা মতামত শেয়ার করুন..." className="w-full bg-transparent border-none outline-none resize-none min-h-[60px] md:min-h-[80px] text-sm md:text-base font-medium placeholder:text-muted-foreground/60" />
            <div className="flex justify-between items-center pt-3 border-t border-border/50">
              <div className="flex gap-1 md:gap-2">
                 <button className="p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"><ImageIcon className="w-4 h-4 md:w-5 md:h-5" /></button>
                 <button className="p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"><LinkIcon className="w-4 h-4 md:w-5 md:h-5" /></button>
              </div>
              <button onClick={handlePost} className="inline-flex items-center justify-center rounded-xl text-xs md:text-sm font-bold bg-primary text-primary-foreground h-9 md:h-10 px-5 md:px-6 shadow-md hover:bg-primary/90 transition-all active:scale-95">পোস্ট করুন</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-5">
        {db.discussions.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map(d => {
          const user = db.users.find(u => u.id === d.user_id);
          return (
            <div key={d.id} className="rounded-[1.5rem] border border-border/50 bg-card p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center font-black text-muted-foreground text-sm md:text-base">{user?.name?.charAt(0) || 'A'}</div>
                <div><h4 className="font-bold text-sm md:text-base leading-tight">{user?.name || 'Unknown'}</h4><p className="text-[10px] md:text-xs text-muted-foreground font-semibold mt-0.5">Just now</p></div>
              </div>
              <p className="text-sm md:text-base font-medium text-foreground mb-4 md:mb-5 leading-relaxed">{d.content}</p>
              <div className="flex items-center gap-5 md:gap-6 pt-3 md:pt-4 border-t border-border/50 text-muted-foreground">
                <button className="flex items-center gap-1.5 md:gap-2 hover:text-pink-500 text-xs md:text-sm font-bold transition-colors"><Heart className="w-4 h-4" /> ০</button>
                <button className="flex items-center gap-1.5 md:gap-2 hover:text-info text-xs md:text-sm font-bold transition-colors"><MessageSquare className="w-4 h-4" /> ০</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const { db } = useApp();
  const topUsers = db.leaderboards.filter(l => l.period === 'weekly').sort((a,b) => a.rank - b.rank);

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <div className="flex justify-center mb-6 md:mb-10">
        <div className="bg-muted/50 p-1 md:p-1.5 rounded-xl md:rounded-2xl inline-flex gap-1 border border-border/50 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Daily</button>
          <button className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm bg-card shadow-md text-foreground transition-colors">Weekly</button>
          <button className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">All Time</button>
        </div>
      </div>

      <TableWrapper>
        <thead className="bg-muted/50 text-muted-foreground border-b border-border/50">
          <tr><th className="p-4 md:p-5 font-bold">Rank</th><th className="p-4 md:p-5 font-bold">Student</th><th className="p-4 md:p-5 font-bold hidden sm:table-cell">Focus Time</th><th className="p-4 md:p-5 font-bold text-right">XP</th></tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {topUsers.map((u, index) => (
            <tr key={u.id} className={`transition-colors ${index < 3 ? 'bg-primary/5' : 'hover:bg-muted/30'}`}>
              <td className="p-4 md:p-5 font-black text-lg md:text-xl w-16 md:w-20 text-center">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${u.rank}`}
              </td>
              <td className="p-4 md:p-5 font-bold text-sm md:text-base whitespace-nowrap">
                {u.name}
                <div className="sm:hidden text-xs text-muted-foreground mt-1 font-semibold flex items-center gap-1"><Clock className="w-3 h-3"/>{u.time_spent}</div>
              </td>
              <td className="p-4 md:p-5 text-muted-foreground font-semibold hidden sm:table-cell"><Clock className="w-4 h-4 inline mr-2 text-primary/70"/> {u.time_spent}</td>
              <td className="p-4 md:p-5 text-right font-black text-primary text-base md:text-lg">{u.xp} XP</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="pt-4 md:pt-6">
        <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6">Badges & Achievements</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {db.badges.map(b => (
            <div key={b.id} className="rounded-[1.5rem] border border-border/50 bg-card p-5 md:p-6 text-center shadow-sm md:hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-warning/10 border border-warning/20 text-warning rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 md:group-hover:scale-110 transition-transform"><DynamicIcon iconStr={b.icon_url} className="w-6 h-6 md:w-8 md:h-8" /></div>
              <h4 className="font-bold text-sm md:text-base mb-1 md:mb-1.5">{b.name}</h4>
              <p className="text-[10px] md:text-xs font-medium text-muted-foreground line-clamp-2">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIChatPage = () => {
  const { db, dbInsert, currentUser } = useApp();
  const [messages, setMessages] = useState(db.ai_chat_messages.filter(m => m.session_id === 'sess1'));
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(!input.trim()) return;
    const newMsg = { session_id: 'sess1', user_id: currentUser.id, role: 'user', content: input };
    const inserted = dbInsert('ai_chat_messages', newMsg);
    setMessages([...messages, inserted]);
    setInput('');
    
    setTimeout(() => {
      const reply = { session_id: 'sess1', user_id: currentUser.id, role: 'assistant', content: 'This is a mock response from the AI Mentor. In the future, this will connect to Gemini/ChatGPT API.' };
      const insReply = dbInsert('ai_chat_messages', reply);
      setMessages(prev => [...prev, insReply]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[70vh] md:h-[75vh] flex flex-col border border-border/50 rounded-[1.5rem] md:rounded-[2rem] bg-card shadow-lg overflow-hidden relative">
      <div className="p-4 md:p-5 border-b border-border/50 bg-muted/30 flex items-center gap-3 md:gap-4 shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20"><Bot className="w-6 h-6 md:w-7 md:h-7" /></div>
        <div>
          <h3 className="font-black text-base md:text-lg leading-tight">AI Science Tutor</h3>
          <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5 md:mt-1"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-success inline-block mr-1"></div> Online</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 bg-background/50 hide-scrollbar pb-20">
        {messages.map((m, idx) => (
          <div key={m.id || idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[75%] p-3 md:p-4 rounded-2xl text-sm md:text-[15px] font-medium leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-card border border-border/50 rounded-tl-sm'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 border-t border-border/50 bg-card/90 backdrop-blur-md">
        <div className="flex items-center gap-2 md:gap-3">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&handleSend()} placeholder="আপনার প্রশ্নটি লিখুন..." className="flex-1 h-12 md:h-14 rounded-xl md:rounded-2xl border border-input bg-background px-4 md:px-5 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
          <button onClick={handleSend} className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 shadow-md transition-all active:scale-95"><Send className="w-5 h-5 md:w-6 md:h-6 ml-0.5 md:ml-1" /></button>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPage = () => {
  return (
    <div className="max-w-5xl mx-auto pb-10 text-center space-y-8 md:space-y-10">
      <div>
         <h2 className="text-3xl md:text-4xl font-black mb-3 md:mb-4">Upgrade to PRO</h2>
         <p className="text-muted-foreground font-medium text-sm md:text-lg max-w-xl mx-auto px-4 md:px-0">Get unlimited access to AI Mentor, Advanced Analytics, and Exclusive Pro Batches.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto text-left">
        <div className="rounded-[2rem] border border-border/50 bg-card p-8 md:p-10 shadow-sm flex flex-col">
          <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2">Free Plan</h3>
          <div className="text-3xl md:text-4xl font-black mb-6 md:mb-8">৳0 <span className="text-sm md:text-lg font-bold text-muted-foreground">/ forever</span></div>
          <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm md:text-base font-semibold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> Standard Question Bank</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-semibold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" /> Basic Study Lounge</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-semibold text-muted-foreground"><Minus className="w-4 h-4 md:w-5 md:h-5" /> Limited AI Chat</li>
          </ul>
          <button disabled className="w-full h-12 rounded-xl border-2 border-border/50 font-bold text-sm md:text-base text-muted-foreground bg-muted/50 cursor-not-allowed">Current Plan</button>
        </div>
        
        <div className="rounded-[2rem] border-[3px] border-primary bg-gradient-to-b from-primary/5 to-transparent p-8 md:p-10 shadow-xl relative flex flex-col md:transform md:hover:-translate-y-1 transition-transform">
          <div className="absolute -top-3.5 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] md:text-xs font-black px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest shadow-md">Most Popular</div>
          <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2 text-primary">Pro Student</h3>
          <div className="text-3xl md:text-4xl font-black mb-6 md:mb-8">৳500 <span className="text-sm md:text-lg font-bold text-muted-foreground">/ month</span></div>
          <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Full Question Bank Access</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Unlimited Custom Exams</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Unlimited AI Tutor Chat</li>
            <li className="flex items-center gap-3 text-sm md:text-base font-bold"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Pro Badge & Custom DIM Themes</li>
          </ul>
          <button className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-black text-sm md:text-base shadow-lg hover:shadow-xl transition-all active:scale-95">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

const RootSwitcher = () => {
  const { activeRoot, appPage, navigateTo, currentUser } = useApp();

  const studentSidebarItems = [
    { label: "লার্নিং হাব", items: [
      { id: 'page-dashboard', label: 'ড্যাশবোর্ড', icon: LayoutDashboard, active: appPage === 'page-dashboard' },
      { id: 'page-qbank', label: 'প্রশ্নব্যাংক', icon: BookOpen, active: ['page-qbank', 'page-subject-detail', 'page-univ-detail', 'page-questions-list', 'page-custom-exam'].includes(appPage) },
      { id: 'page-fast-practice', label: 'কুইক প্র্যাকটিস', icon: Zap, active: ['page-fast-practice', 'page-practice-session'].includes(appPage) },
      { id: 'page-batches', label: 'ব্যাচসমূহ', icon: Presentation, active: ['page-batches', 'page-checkout'].includes(appPage) },
      { id: 'page-exam', label: 'পরীক্ষা', icon: FileText, active: ['page-exam', 'page-exam-session'].includes(appPage) },
      { id: 'page-results', label: 'রেজাল্ট হিস্ট্রি', icon: History, active: appPage === 'page-results' },
    ]},
    { label: "ফোকাস ও ম্যানেজমেন্ট", items: [
      { id: 'page-study-room', label: 'স্টাডি লাউঞ্জ', icon: Timer, active: appPage === 'page-study-room' },
      { id: 'page-tasks', label: 'ডেইলি টাস্ক', icon: CheckSquare, active: appPage === 'page-tasks' },
      { id: 'page-bookmarks', label: 'বুকমার্কস ও ভুল', icon: Bookmark, active: appPage === 'page-bookmarks' },
    ]},
    { label: "স্মার্ট টুলস", items: [
      { id: 'page-leaderboard', label: 'লিডারবোর্ড', icon: Trophy, active: appPage === 'page-leaderboard' },
      { id: 'page-ai-chat', label: 'AI মেন্টর', icon: Bot, active: appPage === 'page-ai-chat' },
      { id: 'page-dim-pet', label: 'আমার DIM', icon: Egg, active: appPage === 'page-dim-pet' },
      { id: 'page-community', label: 'কমিউনিটি', icon: MessageSquare, active: appPage === 'page-community' },
    ]},
    { label: "অ্যাকাউন্ট", items: [
      { id: 'page-subscription', label: 'Pro সাবস্ক্রিপশন', icon: Crown, colorClass: 'text-warning', active: appPage === 'page-subscription' },
    ]}
  ];

  const adminSidebarItems = [
    { label: "অ্যাডমিন ম্যানেজমেন্ট", items: [
      { id: 'page-admin-dashboard', label: 'ওভারভিউ', icon: LayoutDashboard, active: appPage === 'page-admin-dashboard' },
      { id: 'page-admin-qbank', label: 'প্রশ্নব্যাংক', icon: Database, active: appPage === 'page-admin-qbank' },
      { id: 'page-admin-batches', label: 'ব্যাচ ও কোর্স', icon: Library, active: appPage === 'page-admin-batches' },
      { id: 'page-admin-exams', label: 'পরীক্ষাসমূহ', icon: FileText, active: appPage === 'page-admin-exams' },
      { id: 'page-admin-coupons', label: 'কুপন', icon: Ticket, active: appPage === 'page-admin-coupons' },
      { id: 'page-admin-users', label: 'ইউজার ম্যানেজমেন্ট', icon: Users, active: appPage === 'page-admin-users' }
    ]}
  ];

  const renderAppView = () => {
    switch(appPage) {
      // Student Pages
      case 'page-dashboard': return <DashboardOverview />;
      case 'page-qbank': return <QBankPage />;
      case 'page-custom-exam': return <CustomExam />;
      case 'page-subject-detail': return <SubjectDetail />;
      case 'page-univ-detail': return <UnivDetail />;
      case 'page-questions-list': return <QuestionsList />;
      case 'page-fast-practice': return <FastPractice />;
      case 'page-practice-session': return <PracticeSession />;
      case 'page-batches': return <BatchesPage />;
      case 'page-checkout': return <CheckoutPage />;
      case 'page-exam': return <ExamsPage />;
      case 'page-exam-session': return <ExamSession />;
      case 'page-results': return <ResultsPage />;
      case 'page-study-room': return <StudyRoomPage />;
      case 'page-tasks': return <TasksPage />;
      case 'page-dim-pet': return <DimPetPage />;
      case 'page-bookmarks': return <BookmarksPage />;
      case 'page-community': return <CommunityPage />;
      case 'page-leaderboard': return <LeaderboardPage />;
      case 'page-ai-chat': return <AIChatPage />;
      case 'page-subscription': return <SubscriptionPage />;
      // Admin Pages
      case 'page-admin-dashboard': return <AdminOverview />;
      case 'page-admin-batches': return <AdminBatches />;
      case 'page-admin-exams': return <AdminExams />;
      case 'page-admin-coupons': return <AdminCoupons />;
      case 'page-admin-users': return <AdminUsers />;
      case 'page-admin-qbank': return <AdminQBankQuestions />;
      default: return <DashboardOverview />;
    }
  };

  const getAppHeader = () => {
    const map = {
      'page-dashboard': { t: 'ওভারভিউ', s: 'আপনার আজকের প্রস্তুতির আপডেট' },
      'page-qbank': { t: 'প্রশ্নব্যাংক', s: 'বিগত বছরের প্রশ্ন ও সমাধান' },
      'page-fast-practice': { t: 'কুইক প্র্যাকটিস', s: 'অ্যাডাপটিভ লার্নিং মোড' },
      'page-batches': { t: 'ব্যাচসমূহ', s: 'কোর্স এবং ব্যাচে এনরোল করুন' },
      'page-exam': { t: 'পরীক্ষা', s: 'আমার ব্যাচের পরীক্ষাসমূহ' },
      'page-results': { t: 'রেজাল্ট হিস্ট্রি', s: 'আপনার অতীত পরীক্ষার ফলাফল' },
      'page-study-room': { t: 'স্টাডি লাউঞ্জ', s: 'ফোকাস ধরে রাখুন' },
      'page-tasks': { t: 'ডেইলি টাস্ক', s: 'আপনার প্রাত্যহিক লক্ষ্যসমূহ' },
      'page-dim-pet': { t: 'আমার DIM', s: 'আপনার ভার্চুয়াল স্টাডি পেট' },
      'page-bookmarks': { t: 'বুকমার্কস ও ভুল', s: 'সংরক্ষিত প্রশ্ন ও সমাধান' },
      'page-community': { t: 'কমিউনিটি', s: 'প্রশ্ন করুন এবং আলোচনায় যোগ দিন' },
      'page-leaderboard': { t: 'লিডারবোর্ড', s: 'র‍্যাংকিং এবং ব্যাজসমূহ' },
      'page-ai-chat': { t: 'AI মেন্টর', s: 'আপনার যেকোনো প্রশ্নের উত্তর পান' },
      'page-subscription': { t: 'Pro আপগ্রেড', s: 'প্রিমিয়াম ফিচার আনলক করুন' },
      'page-admin-dashboard': { t: 'অ্যাডমিন প্যানেল', s: 'সিস্টেম ওভারভিউ' },
      'page-admin-batches': { t: 'ব্যাচ ম্যানেজমেন্ট', s: 'নতুন ব্যাচ তৈরি ও এডিট করুন' },
      'page-admin-exams': { t: 'পরীক্ষা ম্যানেজমেন্ট', s: 'পরীক্ষার শিডিউল ও প্রশ্ন যুক্ত করুন' },
      'page-admin-coupons': { t: 'কুপন ম্যানেজমেন্ট', s: 'প্রোমো কোড তৈরি করুন' },
      'page-admin-users': { t: 'ইউজার ম্যানেজমেন্ট', s: 'রোল পরিবর্তন ও নিয়ন্ত্রণ' },
      'page-admin-qbank': { t: 'প্রশ্নব্যাংক ম্যানেজমেন্ট', s: 'নতুন প্রশ্ন যুক্ত করুন' }
    };
    return map[appPage] || { t: '', s: '' };
  };

  if (activeRoot === 'auth') return <Auth />;
  if (activeRoot === 'app') {
    const header = getAppHeader();
    const isAdmin = currentUser?.role === 'admin';
    return <AppLayout sidebarItems={isAdmin ? adminSidebarItems : studentSidebarItems} title={header.t} subTitle={header.s}>{renderAppView()}</AppLayout>;
  }
  return null;
};

export default function App() {
  return (
    <AppProvider>
      <GlobalOverlays />
      <RootSwitcher />
    </AppProvider>
  );
}



