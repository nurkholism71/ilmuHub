import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Share2,
  Edit3,
  Hand,
  MessageSquare,
  Users,
  MoreHorizontal,
  Settings,
  Grid,
  LogOut,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Circle,
  Lock,
  BookOpen,
  Folder,
  FileText,
  HelpCircle,
  Plus,
  Minus,
  Maximize2,
  Smile,
  Paperclip,
  Send,
  Heart,
  ThumbsUp,
  Radio,
  Sparkles,
  Volume2
} from 'lucide-react';

export default function LiveClassroomPage({ 
  courseTitle = 'Nahwu for Beginners', 
  tutorName = 'Ahmed Mohamed',
  courseThumbnail = '/images/class_nahwu.jpg',
  tutorAvatar = '/images/tutor_ahmed.jpg',
  onLeaveClass 
}) {
  // Navigation & Tool State
  const [activeCurriculumTab, setActiveCurriculumTab] = useState('lessons'); // 'lessons' | 'materials' | 'assignments' | 'quizzes'
  const [activeBoardTab, setActiveBoardTab] = useState('whiteboard'); // 'whiteboard' | 'screen' | 'presentation' | 'pdf' | 'youtube'
  const [activeRightTab, setActiveRightTab] = useState('chat'); // 'chat' | 'participants' | 'notes'
  
  // Accordion state
  const [expandedSections, setExpandedSections] = useState({
    'sec-1': true,
    'sec-2': false,
    'sec-3': false,
    'sec-4': false
  });

  // Whiteboard drawing tools
  const [selectedTool, setSelectedTool] = useState('pen'); // 'pen' | 'highlighter' | 'eraser' | 'text' | 'shape' | 'image'
  const [selectedColor, setSelectedColor] = useState('black'); // 'black' | 'red' | 'blue' | 'yellow'
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  // Meeting Controls State
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(2536); // 00:42:16 in seconds

  // Live Timer Tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Chat Messages State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Omar',
      avatar: '/images/student_omar.jpg',
      role: 'student',
      time: '10:14 AM',
      text: 'Ustadz, apa semua mubtada harus isim mufrad?',
      reactions: []
    },
    {
      id: 2,
      sender: 'Ahmed Mohamed (Tutor)',
      avatar: '/images/tutor_ahmed.jpg',
      role: 'tutor',
      time: '10:15 AM',
      text: 'Tidak, mubtada bisa mufrad, mutsanna, atau jamak. Contohnya:\n- الطالبُ (mufrad)\n- الطالبانِ (mutsanna)\n- الطلابُ (jamak)',
      reactions: [{ type: 'heart', count: 5 }]
    },
    {
      id: 3,
      sender: 'Fatimah',
      avatar: '/images/student_fatimah.jpg',
      role: 'student',
      time: '10:16 AM',
      text: 'Bisa beri contoh jumlah ismiyah lagi ustadz?',
      reactions: []
    },
    {
      id: 4,
      sender: 'Ahmed Mohamed (Tutor)',
      avatar: '/images/tutor_ahmed.jpg',
      role: 'tutor',
      time: '10:17 AM',
      text: 'Tentu, contoh lain:\n1. الكِتَابُ مُفِيدٌ\n2. الطُّلابُ مُجْتَهِدُونَ\n3. المَدْرَسَةُ كَبِيرَةٌ',
      reactions: [{ type: 'thumbs', count: 8 }, { type: 'heart', count: 3 }]
    },
    {
      id: 5,
      sender: 'Ali',
      avatar: '/images/student_ali.jpg',
      role: 'student',
      time: '10:18 AM',
      text: 'Jazakallahu khairan ustadz 🙏',
      reactions: []
    },
    {
      id: 6,
      sender: 'Aisha',
      avatar: '/images/student_aisha.jpg',
      role: 'student',
      time: '10:18 AM',
      text: 'Bisa jelaskan perbedaan mubtada dengan fa\'il?',
      reactions: []
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const chatBottomRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'You',
      avatar: '/images/student_omar.jpg',
      role: 'student',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: inputMessage,
      reactions: []
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage('');
    setTimeout(() => {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleSection = (secKey) => {
    setExpandedSections(prev => ({ ...prev, [secKey]: !prev[secKey] }));
  };

  return (
    <div className="h-screen w-screen bg-[#0E131F] text-slate-100 flex flex-col overflow-hidden font-sans select-none">
      
      {/* 1. TOP HEADER BAR */}
      <header className="h-14 bg-[#121829] border-b border-slate-800 px-4 flex items-center justify-between shrink-0 z-30">
        
        {/* Left: Brand & Course Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#114B44] to-[#0A302B] flex items-center justify-center text-white shadow-xs">
              <svg className="w-5 h-5 text-[#E6F4F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M12 6c1.5-1.5 3-1.5 4.5 0" strokeLinecap="round" />
                <circle cx="12" cy="11" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white tracking-tight hidden sm:inline">IlmHub</span>
          </div>

          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <h1 className="text-sm sm:text-base font-bold text-slate-100 truncate max-w-[200px] sm:max-w-xs">
              {courseTitle}
            </h1>
            
            {/* LIVE Badge */}
            <span className="flex items-center gap-1.5 bg-red-500/20 text-red-400 border border-red-500/40 text-[11px] font-bold px-2 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              LIVE
            </span>

            {/* Timer */}
            <span className="text-xs font-mono text-slate-400 hidden md:inline">
              {formatTimer(timerSeconds)}
            </span>

            {/* Attendees count */}
            <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full hidden lg:flex">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>24</span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Recording Badge */}
          <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="hidden sm:inline font-medium">Recording...</span>
          </div>

          {/* Layout button */}
          <button 
            className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            onClick={() => alert('Grid layout toggled')}
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-medium">Layout</span>
          </button>

          {/* Settings button */}
          <button 
            className="p-1.5 text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 rounded-lg transition-colors cursor-pointer"
            title="Class Settings"
            onClick={() => alert('Classroom settings')}
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Leave Class */}
          <button
            onClick={onLeaveClass}
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all cursor-pointer active:scale-95 ml-1"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Leave Class</span>
          </button>

        </div>
      </header>

      {/* 2. MAIN 3-COLUMN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: Course Curriculum & Progress Sidebar (~270px) */}
        <aside className="w-64 xl:w-72 bg-[#121829] border-r border-slate-800 flex flex-col shrink-0 hidden md:flex">
          
          {/* Mini Course Header Card */}
          <div className="p-3.5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={courseThumbnail}
                alt={courseTitle}
                className="w-12 h-12 rounded-lg object-cover border border-slate-700"
              />
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-white truncate">{courseTitle}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <img src={tutorAvatar} alt={tutorName} className="w-4 h-4 rounded-full object-cover" />
                  <span className="text-[11px] text-slate-400 truncate">{tutorName}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>Progress</span>
                <span className="font-bold text-emerald-400">33%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
          </div>

          {/* 4 Curriculum Navigation Tabs */}
          <div className="grid grid-cols-4 border-b border-slate-800 p-1 bg-[#0E131F]/60 text-xs">
            <button
              onClick={() => setActiveCurriculumTab('lessons')}
              className={`flex flex-col items-center py-2 rounded-lg transition-colors cursor-pointer ${
                activeCurriculumTab === 'lessons'
                  ? 'bg-slate-800 text-emerald-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Lessons</span>
            </button>
            <button
              onClick={() => setActiveCurriculumTab('materials')}
              className={`flex flex-col items-center py-2 rounded-lg transition-colors cursor-pointer ${
                activeCurriculumTab === 'materials'
                  ? 'bg-slate-800 text-emerald-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Folder className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Materials</span>
            </button>
            <button
              onClick={() => setActiveCurriculumTab('assignments')}
              className={`flex flex-col items-center py-2 rounded-lg transition-colors cursor-pointer ${
                activeCurriculumTab === 'assignments'
                  ? 'bg-slate-800 text-emerald-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Assignments</span>
            </button>
            <button
              onClick={() => setActiveCurriculumTab('quizzes')}
              className={`flex flex-col items-center py-2 rounded-lg transition-colors cursor-pointer ${
                activeCurriculumTab === 'quizzes'
                  ? 'bg-slate-800 text-emerald-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4 mb-0.5" />
              <span className="text-[10px]">Quizzes</span>
            </button>
          </div>

          {/* Accordion Curriculum List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 no-scrollbar text-xs">
            
            {/* Section 01 */}
            <div className="rounded-xl border border-slate-800 bg-[#0E131F]/50 overflow-hidden">
              <button
                onClick={() => toggleSection('sec-1')}
                className="w-full px-3 py-2.5 flex items-center justify-between font-bold text-slate-200 hover:bg-slate-800/40 text-left transition-colors cursor-pointer"
              >
                <span>01 Introduction to Nahwu</span>
                {expandedSections['sec-1'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>

              {expandedSections['sec-1'] && (
                <div className="p-2 space-y-1 bg-[#121829]/90 border-t border-slate-800 text-[11px]">
                  <div className="flex items-center gap-2 p-1.5 rounded-lg text-slate-400 hover:text-slate-200 cursor-pointer">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>1. What is Nahwu?</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg text-slate-400 hover:text-slate-200 cursor-pointer">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>2. Importance of Nahwu</span>
                  </div>
                  {/* Current Active Live Lesson */}
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span>3. Arabic Sentence Structure</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg text-slate-400 hover:text-slate-200 cursor-pointer">
                    <Circle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>4. Types of Words</span>
                  </div>
                </div>
              )}
            </div>

            {/* Section 02 */}
            <div className="rounded-xl border border-slate-800 bg-[#0E131F]/50 overflow-hidden">
              <button
                onClick={() => toggleSection('sec-2')}
                className="w-full px-3 py-2.5 flex items-center justify-between font-bold text-slate-300 hover:bg-slate-800/40 text-left transition-colors cursor-pointer"
              >
                <span>02 Al-Kalimah (Types of Words)</span>
                {expandedSections['sec-2'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>

              {expandedSections['sec-2'] && (
                <div className="p-2 space-y-1 bg-[#121829]/90 border-t border-slate-800 text-[11px]">
                  <div className="flex items-center gap-2 p-1.5 text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>5. Ism (Noun)</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>6. Fi'l (Verb)</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>7. Harf (Particle)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Section 03 */}
            <div className="rounded-xl border border-slate-800 bg-[#0E131F]/50 overflow-hidden">
              <button
                onClick={() => toggleSection('sec-3')}
                className="w-full px-3 py-2.5 flex items-center justify-between font-bold text-slate-300 hover:bg-slate-800/40 text-left transition-colors cursor-pointer"
              >
                <span>03 Al-Jumlah (The Sentence)</span>
                {expandedSections['sec-3'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>

              {expandedSections['sec-3'] && (
                <div className="p-2 space-y-1 bg-[#121829]/90 border-t border-slate-800 text-[11px]">
                  <div className="flex items-center gap-2 p-1.5 text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>8. Jumlah Ismiyah</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>9. Jumlah Fi'liyah</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>10. Exercises</span>
                  </div>
                </div>
              )}
            </div>

            {/* Section 04 */}
            <div className="rounded-xl border border-slate-800 bg-[#0E131F]/50 overflow-hidden">
              <button
                onClick={() => toggleSection('sec-4')}
                className="w-full px-3 py-2.5 flex items-center justify-between font-bold text-slate-300 hover:bg-slate-800/40 text-left transition-colors cursor-pointer"
              >
                <span>04 I'rab Basics</span>
                {expandedSections['sec-4'] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>

              {expandedSections['sec-4'] && (
                <div className="p-2 space-y-1 bg-[#121829]/90 border-t border-slate-800 text-[11px]">
                  <div className="flex items-center gap-2 p-1.5 text-slate-400">
                    <Circle className="w-3.5 h-3.5 text-slate-500" />
                    <span>11. Signs of I'rab</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 text-slate-400">
                    <Circle className="w-3.5 h-3.5 text-slate-500" />
                    <span>12. Practice & Review</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* CENTER COLUMN: Top Video Feeds + Whiteboard Canvas + Bottom Controls */}
        <main className="flex-1 flex flex-col bg-[#0B0F19] overflow-hidden relative">
          
          {/* A. TOP VIDEO FEEDS ROW */}
          <div className="p-2 sm:p-3 bg-[#0B0F19] border-b border-slate-800/80">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-5xl mx-auto">
              
              {/* Tile 1: Ahmed Mohamed (Tutor) */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border-2 border-emerald-500 shadow-md group">
                <img
                  src={tutorAvatar}
                  alt={tutorName}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-1.5">
                  <div className="self-end">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-white bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded truncate">
                    <Mic className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{tutorName} (Tutor)</span>
                  </div>
                </div>
              </div>

              {/* Tile 2: Omar */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-sm group">
                <img
                  src="/images/student_omar.jpg"
                  alt="Omar"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-medium text-white bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded truncate">
                    <MicOff className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">Omar</span>
                  </div>
                </div>
              </div>

              {/* Tile 3: Fatimah */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-sm group">
                <img
                  src="/images/student_fatimah.jpg"
                  alt="Fatimah"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-medium text-white bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded truncate">
                    <MicOff className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">Fatimah</span>
                  </div>
                </div>
              </div>

              {/* Tile 4: Ali */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-sm group">
                <img
                  src="/images/student_ali.jpg"
                  alt="Ali"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-medium text-white bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded truncate">
                    <MicOff className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">Ali</span>
                  </div>
                </div>
              </div>

              {/* Tile 5: Aisha */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-sm group">
                <img
                  src="/images/student_aisha.jpg"
                  alt="Aisha"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-medium text-white bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded truncate">
                    <MicOff className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">Aisha</span>
                  </div>
                </div>
              </div>

              {/* Tile 6: +19 Participants */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800/90 border border-slate-700/80 flex flex-col items-center justify-center text-center p-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 text-white font-bold text-xs flex items-center justify-center mb-1">
                  +19
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Participants</span>
              </div>

            </div>
          </div>

          {/* B. PRESENTATION & WHITEBOARD BAR (Horizontal Single Line Scroll) */}
          <div className="h-11 bg-[#121829] border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between text-xs shrink-0 gap-2">
            {/* Left mode selector: 1 horizontal line with smooth side-scrolling */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 flex-1 min-w-0">
              <button
                onClick={() => setActiveBoardTab('whiteboard')}
                className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeBoardTab === 'whiteboard'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                Whiteboard
              </button>
              <button
                onClick={() => setActiveBoardTab('screen')}
                className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeBoardTab === 'screen'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                Screen Share
              </button>
              <button
                onClick={() => setActiveBoardTab('presentation')}
                className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeBoardTab === 'presentation'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                Presentation
              </button>
              <button
                onClick={() => setActiveBoardTab('pdf')}
                className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeBoardTab === 'pdf'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                PDF
              </button>
              <button
                onClick={() => setActiveBoardTab('youtube')}
                className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeBoardTab === 'youtube'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                YouTube
              </button>
              <button className="text-slate-400 hover:text-slate-200 px-2 py-1 rounded-lg hover:bg-slate-800/50 cursor-pointer whitespace-nowrap shrink-0">
                More ▾
              </button>
            </div>

            {/* Right page controls & zoom */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400 shrink-0 pl-1.5 border-l border-slate-800/80">
              <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded-lg">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="hover:text-white cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono px-1">{currentPage}/5</span>
                <button
                  onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                  className="hover:text-white cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded-lg hidden sm:flex">
                <button
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
                  className="hover:text-white cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-[11px] font-mono px-1">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
                  className="hover:text-white cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <button
                onClick={() => alert('Toggle fullscreen whiteboard')}
                className="p-1 hover:text-white cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* C. INTERACTIVE WHITEBOARD CANVAS & TOOLBAR */}
          <div className="flex-1 relative flex overflow-hidden bg-[#FAF9F5] select-text">
            
            {/* Whiteboard Floating Left Toolbar */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/80 p-1.5 flex flex-col items-center gap-2 z-20 text-gray-700">
              
              {/* Pen */}
              <button
                onClick={() => setSelectedTool('pen')}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  selectedTool === 'pen' ? 'bg-[#114B44] text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Pen"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                </svg>
              </button>

              {/* Eraser */}
              <button
                onClick={() => setSelectedTool('eraser')}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  selectedTool === 'eraser' ? 'bg-[#114B44] text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Eraser"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                  <path d="M22 21H7" />
                </svg>
              </button>

              {/* Text */}
              <button
                onClick={() => setSelectedTool('text')}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  selectedTool === 'text' ? 'bg-[#114B44] text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Text"
              >
                <span className="font-serif font-bold text-sm">T</span>
              </button>

              {/* Shapes */}
              <button
                onClick={() => setSelectedTool('shape')}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  selectedTool === 'shape' ? 'bg-[#114B44] text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Shapes"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
              </button>

              {/* Image */}
              <button
                onClick={() => setSelectedTool('image')}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  selectedTool === 'image' ? 'bg-[#114B44] text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Add Image"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </button>

              <div className="w-full h-px bg-gray-200 my-1"></div>

              {/* Colors */}
              <button
                onClick={() => setSelectedColor('black')}
                className={`w-4 h-4 rounded-full bg-black ring-offset-2 transition-all ${
                  selectedColor === 'black' ? 'ring-2 ring-emerald-600' : ''
                }`}
              ></button>
              <button
                onClick={() => setSelectedColor('red')}
                className={`w-4 h-4 rounded-full bg-red-500 ring-offset-2 transition-all ${
                  selectedColor === 'red' ? 'ring-2 ring-emerald-600' : ''
                }`}
              ></button>
              <button
                onClick={() => setSelectedColor('blue')}
                className={`w-4 h-4 rounded-full bg-blue-500 ring-offset-2 transition-all ${
                  selectedColor === 'blue' ? 'ring-2 ring-emerald-600' : ''
                }`}
              ></button>
              <button
                onClick={() => setSelectedColor('yellow')}
                className={`w-4 h-4 rounded-full bg-amber-400 ring-offset-2 transition-all ${
                  selectedColor === 'yellow' ? 'ring-2 ring-emerald-600' : ''
                }`}
              ></button>
            </div>

            {/* WHITEBOARD REAL CONTENT CANVAS */}
            <div className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start p-3 sm:p-5 lg:p-6 bg-white select-text">
              <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-start relative">
                
                {/* Board Main Title with Highlighter Background */}
                <div className="text-center mb-5 sm:mb-6 relative shrink-0">
                  <div className="inline-block relative">
                    <span className="absolute inset-x-0 bottom-0 top-2 sm:top-3 bg-amber-200/80 -rotate-1 rounded-sm -z-0"></span>
                    <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-arabic tracking-wide px-4 py-0.5">
                      الجملة الإسمية
                    </h2>
                  </div>
                </div>

                {/* Main Grammar Equation & Explanation Box */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center mb-5 sm:mb-6">
                  
                  {/* Left: Equation (الطالبُ + مجتهدٌ) with hand-drawn style markers */}
                  <div className="flex flex-col items-center justify-center py-2">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 text-lg sm:text-2xl font-bold font-arabic">
                      {/* Khabar */}
                      <div className="text-center flex flex-col items-center">
                        <span className="bg-emerald-100/95 text-emerald-900 px-3.5 py-1.5 rounded-xl border border-emerald-300 font-extrabold shadow-2xs">
                          مُجْتَهِدٌ
                        </span>
                        <div className="text-center mt-1">
                          <p className="text-xs text-emerald-700 font-bold font-arabic leading-tight">خبر</p>
                          <p className="text-[10px] text-gray-500 font-sans leading-tight">(مرفوع)</p>
                        </div>
                      </div>

                      <span className="text-gray-400 text-2xl font-light mb-4">+</span>

                      {/* Mubtada */}
                      <div className="text-center flex flex-col items-center">
                        <span className="bg-blue-100/95 text-blue-900 px-3.5 py-1.5 rounded-xl border border-blue-300 font-extrabold shadow-2xs">
                          الطَّالِبُ
                        </span>
                        <div className="text-center mt-1">
                          <p className="text-xs text-blue-700 font-bold font-arabic leading-tight">مبتدأ</p>
                          <p className="text-[10px] text-gray-500 font-sans leading-tight">(مرفوع)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Definition Box */}
                  <div className="border-2 border-slate-700/80 rounded-2xl p-3.5 sm:p-4 bg-slate-50/60 text-right font-arabic shadow-2xs">
                    <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-bold">
                      الجملة الإسمية هي الجملة التي تبدأ باسم وتتكون من: <br />
                      <span className="text-[#114B44] font-extrabold text-base sm:text-lg">المبتدأ + الخبر</span>
                    </p>
                  </div>

                </div>

                {/* Bottom Two Detail Boxes: Mubtada & Khabar */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1">
                  
                  {/* Mubtada Card (Red Border) */}
                  <div className="border-2 border-red-400 rounded-2xl p-4 sm:p-5 bg-red-50/20 relative shadow-2xs">
                    <div className="absolute -top-3 right-5 bg-white px-3 py-0.5 border border-red-300 rounded-full text-xs font-bold text-red-600 font-arabic">
                      المبتدأ
                    </div>
                    <div className="text-right font-arabic space-y-1.5 pt-1 text-xs sm:text-sm text-gray-800 leading-relaxed">
                      <p>• اسم مرفوع</p>
                      <p>• يكون في بداية الجملة</p>
                      <p>• يدل على المتحدث عنه</p>
                      <div className="mt-2.5 pt-2 border-t border-red-200/60 flex items-center justify-between text-xs font-sans">
                        <span className="font-bold text-red-700 font-arabic text-sm bg-red-100/90 px-2.5 py-0.5 rounded-md border border-red-200">
                          الطَّالِبُ
                        </span>
                        <span className="text-gray-500 font-medium">مثال :</span>
                      </div>
                    </div>
                  </div>

                  {/* Khabar Card (Green Border) */}
                  <div className="border-2 border-emerald-500 rounded-2xl p-4 sm:p-5 bg-emerald-50/20 relative shadow-2xs">
                    <div className="absolute -top-3 right-5 bg-white px-3 py-0.5 border border-emerald-300 rounded-full text-xs font-bold text-emerald-700 font-arabic">
                      الخبر
                    </div>
                    <div className="text-right font-arabic space-y-1.5 pt-1 text-xs sm:text-sm text-gray-800 leading-relaxed">
                      <p>• اسم مرفوع</p>
                      <p>• يتمم معنى المبتدأ</p>
                      <p>• يخبر عن المبتدأ</p>
                      <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-xs font-sans">
                        <span className="font-bold text-emerald-800 font-arabic text-sm bg-emerald-100/90 px-2.5 py-0.5 rounded-md border border-emerald-200">
                          مُجْتَهِدٌ
                        </span>
                        <span className="text-gray-500 font-medium">مثال :</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* D. BOTTOM FLOATING MEETING CONTROLS DOCK */}
          <div className="h-16 bg-[#121829] border-t border-slate-800 px-4 flex items-center justify-center shrink-0 z-30">
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Mute / Unmute */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-all cursor-pointer ${
                  isMuted ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
                title={isMuted ? 'Unmute Mic' : 'Mute Mic'}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-emerald-400" />}
                <span className="text-[9px] mt-0.5">{isMuted ? 'Mute' : 'Unmute'}</span>
              </button>

              {/* Stop Video */}
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-all cursor-pointer ${
                  isVideoOff ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
                title="Camera Toggle"
              >
                {isVideoOff ? <VideoOff className="w-5 h-5 text-red-400" /> : <Video className="w-5 h-5" />}
                <span className="text-[9px] mt-0.5">{isVideoOff ? 'Start Video' : 'Stop Video'}</span>
              </button>

              {/* Share Screen */}
              <button
                onClick={() => alert('Screen sharing activated')}
                className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer hidden sm:flex"
                title="Share Screen"
              >
                <Share2 className="w-5 h-5" />
                <span className="text-[9px] mt-0.5">Share</span>
              </button>

              {/* Whiteboard (Active) */}
              <button
                onClick={() => setActiveBoardTab('whiteboard')}
                className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-[#114B44] text-white shadow-md transition-all cursor-pointer"
                title="Whiteboard"
              >
                <Edit3 className="w-5 h-5" />
                <span className="text-[9px] mt-0.5">Board</span>
              </button>

              {/* Raise Hand */}
              <button
                onClick={() => setIsHandRaised(!isHandRaised)}
                className={`flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-all cursor-pointer ${
                  isHandRaised ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-bounce' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
                title="Raise Hand"
              >
                <Hand className="w-5 h-5" />
                <span className="text-[9px] mt-0.5">{isHandRaised ? 'Hand Up' : 'Raise Hand'}</span>
              </button>

              {/* Chat Toggle */}
              <button
                onClick={() => setChatOpen(!chatOpen)}
                className={`flex flex-col items-center justify-center w-11 h-11 rounded-xl relative transition-all cursor-pointer ${
                  chatOpen ? 'bg-slate-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
                title="Toggle Chat"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-[9px] mt-0.5">Chat</span>
              </button>

              {/* Participants */}
              <button
                onClick={() => { setChatOpen(true); setActiveRightTab('participants'); }}
                className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer hidden sm:flex"
                title="Participants"
              >
                <Users className="w-5 h-5" />
                <span className="text-[9px] mt-0.5">Users</span>
              </button>

              {/* More Options */}
              <button
                onClick={() => alert('Additional tools & reactions')}
                className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
                title="More"
              >
                <MoreHorizontal className="w-5 h-5" />
                <span className="text-[9px] mt-0.5">More</span>
              </button>

            </div>
          </div>

        </main>

        {/* RIGHT COLUMN: Live Chat & Interactivity Sidebar (~320px) */}
        {chatOpen && (
          <aside className="w-80 xl:w-96 bg-[#121829] border-l border-slate-800 flex flex-col shrink-0 z-20">
            
            {/* Header Tabs */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2 bg-[#0E131F]/80">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveRightTab('chat')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeRightTab === 'chat'
                      ? 'bg-slate-800 text-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => setActiveRightTab('participants')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeRightTab === 'participants'
                      ? 'bg-slate-800 text-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Participants (24)
                </button>
                <button
                  onClick={() => setActiveRightTab('notes')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeRightTab === 'notes'
                      ? 'bg-slate-800 text-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Notes
                </button>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="text-slate-500 hover:text-slate-300 p-1 text-xs"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            {activeRightTab === 'chat' && (
              <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Messages stream */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3.5 no-scrollbar text-xs">
                  {messages.map((msg) => (
                    <div key={msg.id} className="flex items-start gap-2.5">
                      <img
                        src={msg.avatar}
                        alt={msg.sender}
                        className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 border border-slate-700"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className={`font-bold truncate text-[11px] ${
                            msg.role === 'tutor' ? 'text-emerald-400' : 'text-slate-300'
                          }`}>
                            {msg.sender}
                          </span>
                          <span className="text-[10px] text-slate-500 shrink-0">{msg.time}</span>
                        </div>

                        <div className={`p-2.5 rounded-2xl text-[12px] leading-relaxed whitespace-pre-line ${
                          msg.role === 'tutor'
                            ? 'bg-[#152B28] text-emerald-100 border border-emerald-700/50'
                            : 'bg-[#1A2238] text-slate-200 border border-slate-700/50'
                        }`}>
                          {msg.text}
                        </div>

                        {/* Reactions if any */}
                        {msg.reactions && msg.reactions.length > 0 && (
                          <div className="flex items-center gap-1.5 mt-1">
                            {msg.reactions.map((rx, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 bg-slate-800/80 border border-slate-700 text-[10px] px-2 py-0.5 rounded-full text-slate-300 font-medium"
                              >
                                {rx.type === 'heart' ? '❤️' : '👍'} {rx.count}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={chatBottomRef} />
                </div>

                {/* Live Message Input */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-[#0E131F]/80">
                  <div className="flex items-center gap-2 bg-[#1A2238] border border-slate-700 rounded-xl px-3 py-1.5">
                    <button
                      type="button"
                      className="text-slate-400 hover:text-slate-200 transition-colors"
                      title="Emoji"
                      onClick={() => setInputMessage(prev => prev + ' 🤲')}
                    >
                      <Smile className="w-4 h-4" />
                    </button>
                    
                    <button
                      type="button"
                      className="text-slate-400 hover:text-slate-200 transition-colors"
                      title="Attach file"
                    >
                      <Paperclip className="w-4 h-4" />
                    </button>

                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent border-none text-xs text-white placeholder-slate-400 focus:outline-none py-1"
                    />

                    <button
                      type="submit"
                      disabled={!inputMessage.trim()}
                      className="w-7 h-7 rounded-lg bg-[#114B44] hover:bg-emerald-600 disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

              </div>
            )}

            {/* Participants Tab */}
            {activeRightTab === 'participants' && (
              <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Host & Tutors (1)
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/60 border border-slate-700">
                  <div className="flex items-center gap-2">
                    <img src={tutorAvatar} alt="Tutor" className="w-7 h-7 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-emerald-400">{tutorName} (Tutor)</p>
                      <p className="text-[10px] text-slate-400">Host</p>
                    </div>
                  </div>
                  <Mic className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
                  Students (23)
                </div>
                {[
                  { name: 'Omar', avatar: '/images/student_omar.jpg' },
                  { name: 'Fatimah', avatar: '/images/student_fatimah.jpg' },
                  { name: 'Ali', avatar: '/images/student_ali.jpg' },
                  { name: 'Aisha', avatar: '/images/student_aisha.jpg' },
                  { name: 'Khalid Mansour', avatar: '/images/tutor_khalid.jpg' },
                  { name: 'Layla Hasan', avatar: '/images/tutor_layla.jpg' },
                  { name: 'Zainab Qasim', avatar: '/images/tutor_zainab.jpg' },
                ].map((st, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-800/40">
                    <div className="flex items-center gap-2">
                      <img src={st.avatar} alt={st.name} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-slate-200">{st.name}</span>
                    </div>
                    <MicOff className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                ))}
              </div>
            )}

            {/* Notes Tab */}
            {activeRightTab === 'notes' && (
              <div className="flex-1 p-3 flex flex-col text-xs">
                <p className="text-[11px] text-slate-400 mb-2 font-semibold">Your Personal Class Notes:</p>
                <textarea
                  className="flex-1 w-full bg-[#1A2238] border border-slate-700 rounded-xl p-3 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 resize-none font-sans"
                  placeholder="Take notes during the live lecture here... (auto-saved)"
                  defaultValue={`• Jumlah Ismiyah = Mubtada + Khabar\n• Mubtada: isim marfu' di awal kalimat\n• Khabar: penyempurna makna mubtada`}
                ></textarea>
              </div>
            )}

          </aside>
        )}

      </div>

    </div>
  );
}
