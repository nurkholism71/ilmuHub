import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Compass, 
  Video, 
  Calendar, 
  FileText, 
  HelpCircle, 
  Award, 
  MessageSquare, 
  DollarSign, 
  BarChart2, 
  Settings, 
  Search, 
  Bell, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  PlayCircle, 
  Radio, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Star, 
  Users, 
  Download, 
  CalendarPlus, 
  Plus, 
  Play, 
  Check, 
  Trophy, 
  MoreVertical, 
  Globe, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  LogOut, 
  User,
  Heart,
  Filter,
  Gift,
  Crown,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function StudentDashboard({ user, onJoinLive, onExploreCourses, onBackToHome, onLogout, onSwitchRole }) {
  const [activeNav, setActiveNav] = useState('browse'); // default or switch to 'browse'
  const [classTabFilter, setClassTabFilter] = useState('all'); // 'all' (8) | 'in_progress' (5) | 'completed' (2) | 'upcoming' (1) | 'saved' (0)
  const [classSearchQuery, setClassSearchQuery] = useState('');
  const [classSortOrder, setClassSortOrder] = useState('Newest First');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(25); // 25 Sep 2026 selected by default
  const [selectedCalendarMonth, setSelectedCalendarMonth] = useState('September 2026');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Browse Classes View States (matching media_1790726478349.jpg)
  const [browseCategory, setBrowseCategory] = useState('all'); // 'all', 'islamic', 'language', 'academic', 'professional', 'personal', 'kids'
  const [browseSearchQuery, setBrowseSearchQuery] = useState('');
  const [browseLevelFilter, setBrowseLevelFilter] = useState('All Levels');
  const [browseLanguageFilter, setBrowseLanguageFilter] = useState('All Languages');
  const [browseTypeFilter, setBrowseTypeFilter] = useState('All Types');
  const [browseSortBy, setBrowseSortBy] = useState('Newest First');
  const [wishlist, setWishlist] = useState(['feat-1', 'all-2']);

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const studentName = user?.name || 'Aisha Rahman';
  const studentEmail = user?.email || 'aisha@example.com';
  const studentAvatar = user?.avatar || '/images/student_aisha.jpg';

  // Left Sidebar Navigation Items matching media_1790725449767.jpg
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'My Classes', icon: BookOpen },
    { id: 'browse', label: 'Browse Classes', icon: Compass },
    { id: 'live', label: 'Live Classroom', icon: Video },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '5' },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Full detailed class cards matching media_1790725449767.jpg
  const studentClassesList = [
    {
      id: 'cls-1',
      title: 'Nahwu for Beginners',
      tutor: 'Ustadz Ahmad Fauzi',
      image: '/images/class_nahwu.jpg',
      status: 'in_progress',
      progress: 85,
      completedLessons: 12,
      totalLessons: 14,
      primaryTag: 'Arabic',
      levelTag: 'Beginner',
      featureTag: { label: 'Live + Recorded', icon: '🎥', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
      nextClassInfo: 'Tomorrow, 10:00 AM',
      isCompleted: false
    },
    {
      id: 'cls-2',
      title: 'Sharaf Basic',
      tutor: 'Ustadzah Fatimah Zahra',
      image: '/images/class_conversation.jpg',
      status: 'in_progress',
      progress: 60,
      completedLessons: 9,
      totalLessons: 15,
      primaryTag: 'Arabic',
      levelTag: 'Beginner',
      featureTag: { label: 'Assignments', icon: '📄', color: 'bg-purple-50 text-purple-700 border-purple-100' },
      nextClassInfo: 'Wed, 25 Sep, 2:00 PM',
      isCompleted: false
    },
    {
      id: 'cls-3',
      title: 'Arabic Conversation',
      tutor: 'Ustadz Omar Hassan',
      image: '/images/class_nahwu.jpg',
      status: 'in_progress',
      progress: 42,
      completedLessons: 5,
      totalLessons: 12,
      primaryTag: 'Arabic',
      levelTag: 'Intermediate',
      featureTag: { label: 'Live Class', icon: '🔴', color: 'bg-rose-50 text-rose-700 border-rose-100' },
      nextClassInfo: 'Thu, 26 Sep, 4:00 PM',
      isCompleted: false
    },
    {
      id: 'cls-4',
      title: 'Academic Writing',
      tutor: 'Dr. Layla Ahmad',
      image: '/images/class_conversation.jpg',
      status: 'in_progress',
      progress: 28,
      completedLessons: 4,
      totalLessons: 14,
      primaryTag: 'Writing',
      levelTag: 'All Levels',
      featureTag: { label: 'Materials', icon: '📚', color: 'bg-blue-50 text-blue-700 border-blue-100' },
      nextClassInfo: 'Sat, 28 Sep, 11:00 AM',
      isCompleted: false
    },
    {
      id: 'cls-5',
      title: 'Islamic History',
      tutor: 'Ustadz Ali Khan',
      image: '/images/class_nahwu.jpg',
      status: 'completed',
      progress: 100,
      completedLessons: 10,
      totalLessons: 10,
      primaryTag: 'History',
      levelTag: 'Beginner',
      featureTag: { label: 'Readings', icon: '📖', color: 'bg-purple-50 text-purple-700 border-purple-100' },
      completedDate: '20 Sep 2026',
      isCompleted: true
    },
    {
      id: 'cls-6',
      title: 'Environmental Management',
      tutor: 'Dr. Sara Nabilah',
      image: '/images/class_conversation.jpg',
      status: 'in_progress',
      progress: 15,
      completedLessons: 2,
      totalLessons: 13,
      primaryTag: 'Science',
      levelTag: 'Intermediate',
      featureTag: { label: 'Project', icon: '💼', color: 'bg-sky-50 text-sky-700 border-sky-100' },
      nextClassInfo: 'Mon, 30 Sep, 9:00 AM',
      isCompleted: false
    },
    {
      id: 'cls-7',
      title: 'Quran Tajweed Mastery',
      tutor: 'Ustadzah Fatimah Zahra',
      image: '/images/class_tajweed.jpg',
      status: 'completed',
      progress: 100,
      completedLessons: 16,
      totalLessons: 16,
      primaryTag: 'Quran',
      levelTag: 'Beginner',
      featureTag: { label: 'Talaqqi Live', icon: '🎙️', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
      completedDate: '10 Sep 2026',
      isCompleted: true
    },
    {
      id: 'cls-8',
      title: 'Fiqh Ibadah Praktis',
      tutor: 'Ustadz Ahmad Fauzi',
      image: '/images/class_nahwu.jpg',
      status: 'upcoming',
      progress: 0,
      completedLessons: 0,
      totalLessons: 10,
      primaryTag: 'Fiqh',
      levelTag: 'All Levels',
      featureTag: { label: 'Starts Next Week', icon: '⏳', color: 'bg-amber-50 text-amber-700 border-amber-100' },
      nextClassInfo: 'Starts 5 Oct 2026',
      isCompleted: false
    }
  ];

  const recommendedCourses = [
    {
      id: 'rc-1',
      title: 'Arabic Writing Skills',
      tutor: 'Dr. Layla Ahmad',
      rating: 4.9,
      students: 320,
      price: 'Free',
      avatar: '/images/student_layla.jpg',
    },
    {
      id: 'rc-2',
      title: 'Islamic History & Civilizations',
      tutor: 'Ustadz Ali Khan',
      rating: 4.9,
      students: 210,
      price: '150 EGP',
      avatar: '/images/student_ali.jpg',
    },
    {
      id: 'rc-3',
      title: 'English for Academic Studies',
      tutor: 'Dr. Sara Nabilah',
      rating: 4.8,
      students: 540,
      price: 'Free',
      avatar: '/images/student_fatimah.jpg',
    },
  ];

  // Browse Classes View Datasets (Matching media_1790726478349.jpg)
  const featuredBrowseClasses = [
    {
      id: 'feat-1',
      title: 'Nahwu for Beginners',
      tutor: 'Ustadz Ahmad Fauzi',
      image: '/images/class_nahwu.jpg',
      badge: { text: 'Bestseller', color: 'bg-amber-400 text-amber-950' },
      primaryTag: { label: 'Arabic', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.9,
      reviews: 328,
      students: '2.1K',
      lessons: 12,
      duration: '3h 20m',
      category: 'language',
      level: 'Beginner',
      language: 'Arabic',
      type: 'Live Classes'
    },
    {
      id: 'feat-2',
      title: 'Sharaf Basic',
      tutor: 'Ustadzah Fatimah Zahra',
      image: '/images/class_conversation.jpg',
      badge: { text: 'Popular', color: 'bg-purple-500 text-white' },
      primaryTag: { label: 'Arabic', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.8,
      reviews: 214,
      students: '1.6K',
      lessons: 15,
      duration: '4h 10m',
      category: 'language',
      level: 'Beginner',
      language: 'Arabic',
      type: 'Self-Paced'
    },
    {
      id: 'feat-3',
      title: 'Arabic Conversation',
      tutor: 'Ustadz Omar Hassan',
      image: '/images/class_nahwu.jpg',
      badge: { text: 'New', color: 'bg-emerald-500 text-white' },
      primaryTag: { label: 'Arabic', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Intermediate', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      rating: 4.7,
      reviews: 186,
      students: '980',
      lessons: 12,
      duration: '3h 5m',
      category: 'language',
      level: 'Intermediate',
      language: 'Arabic',
      type: 'Live Classes'
    },
    {
      id: 'feat-4',
      title: 'Academic Writing',
      tutor: 'Dr. Layla Ahmad',
      image: '/images/class_conversation.jpg',
      badge: { text: 'Trending', color: 'bg-rose-500 text-white' },
      primaryTag: { label: 'Writing', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      levelTag: { label: 'All Levels', color: 'bg-gray-100 text-gray-700 border-gray-200' },
      rating: 4.6,
      reviews: 142,
      students: '760',
      lessons: 14,
      duration: '4h 30m',
      category: 'academic',
      level: 'All Levels',
      language: 'English',
      type: 'With Certificate'
    }
  ];

  const allBrowseClassesList = [
    {
      id: 'all-1',
      title: 'Islamic History',
      tutor: 'Ustadz Ali Khan',
      image: '/images/class_nahwu.jpg',
      primaryTag: { label: 'History', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.8,
      reviews: 192,
      students: '1.2K',
      lessons: 10,
      duration: '2h 40m',
      category: 'islamic',
      level: 'Beginner',
      language: 'Arabic',
      type: 'Self-Paced'
    },
    {
      id: 'all-2',
      title: "Qur'an Tajweed",
      tutor: 'Ustadz Yusuf Rahman',
      image: '/images/class_conversation.jpg',
      primaryTag: { label: "Qur'an", color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      levelTag: { label: 'Intermediate', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      rating: 4.9,
      reviews: 256,
      students: '1.5K',
      lessons: 16,
      duration: '4h 20m',
      category: 'islamic',
      level: 'Intermediate',
      language: 'Arabic',
      type: 'Live Classes'
    },
    {
      id: 'all-3',
      title: 'Environmental Management',
      tutor: 'Dr. Sara Nabilah',
      image: '/images/hero_student.jpg',
      primaryTag: { label: 'Science', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Intermediate', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      rating: 4.5,
      reviews: 98,
      students: '540',
      lessons: 13,
      duration: '3h 10m',
      category: 'academic',
      level: 'Intermediate',
      language: 'English',
      type: 'With Certificate'
    },
    {
      id: 'all-4',
      title: 'Python for Data Analysis',
      tutor: 'Mr. Ali Rahman',
      image: '/images/login_lms_desk_bg.jpg',
      primaryTag: { label: 'IT & Data', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.7,
      reviews: 176,
      students: '1.1K',
      lessons: 18,
      duration: '5h 30m',
      category: 'professional',
      level: 'Beginner',
      language: 'English',
      type: 'Self-Paced'
    },
    {
      id: 'all-5',
      title: 'Personal Finance',
      tutor: 'Dr. Tariq Mansoor',
      image: '/images/class_conversation.jpg',
      primaryTag: { label: 'Finance', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'All Levels', color: 'bg-gray-100 text-gray-700 border-gray-200' },
      rating: 4.8,
      reviews: 145,
      students: '890',
      lessons: 8,
      duration: '2h 15m',
      category: 'professional',
      level: 'All Levels',
      language: 'English',
      type: 'Free Classes'
    },
    {
      id: 'all-6',
      title: 'Kids Islamic Stories',
      tutor: 'Ustadzah Maryam',
      image: '/images/class_nahwu.jpg',
      primaryTag: { label: 'Kids', color: 'bg-amber-50 text-amber-700 border-amber-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.9,
      reviews: 310,
      students: '1.8K',
      lessons: 20,
      duration: '3h 45m',
      category: 'kids',
      level: 'Beginner',
      language: 'Indonesian',
      type: 'Self-Paced'
    },
    {
      id: 'all-7',
      title: 'English for Professionals',
      tutor: 'Prof. David Miller',
      image: '/images/class_conversation.jpg',
      primaryTag: { label: 'Language', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      levelTag: { label: 'Intermediate', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      rating: 4.7,
      reviews: 220,
      students: '940',
      lessons: 14,
      duration: '4h 00m',
      category: 'language',
      level: 'Intermediate',
      language: 'English',
      type: 'Premium Classes'
    },
    {
      id: 'all-8',
      title: 'Productivity & Time Management',
      tutor: 'Coach Zainab Bilal',
      image: '/images/login_lms_desk_bg.jpg',
      primaryTag: { label: 'Productivity', color: 'bg-rose-50 text-rose-700 border-rose-200' },
      levelTag: { label: 'All Levels', color: 'bg-gray-100 text-gray-700 border-gray-200' },
      rating: 4.8,
      reviews: 185,
      students: '1.3K',
      lessons: 10,
      duration: '2h 30m',
      category: 'personal',
      level: 'All Levels',
      language: 'English',
      type: 'With Certificate'
    }
  ];

  const popularTopicsList = [
    { id: 'top-1', label: "Qur'an & Tajweed", count: '48 classes', icon: '📖', iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100', category: 'islamic' },
    { id: 'top-2', label: 'Arabic Language', count: '36 classes', icon: '🔤', iconBg: 'bg-purple-50 text-purple-700 border-purple-100', category: 'language' },
    { id: 'top-3', label: 'Islamic History', count: '28 classes', icon: '🏛️', iconBg: 'bg-pink-50 text-pink-700 border-pink-100', category: 'islamic' },
    { id: 'top-4', label: 'Academic Writing', count: '24 classes', icon: '✍️', iconBg: 'bg-blue-50 text-blue-700 border-blue-100', category: 'academic' },
    { id: 'top-5', label: 'Data & Technology', count: '22 classes', icon: '💻', iconBg: 'bg-cyan-50 text-cyan-700 border-cyan-100', category: 'professional' },
    { id: 'top-6', label: 'Personal Development', count: '20 classes', icon: '🌿', iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100', category: 'personal' },
    { id: 'top-7', label: 'Kids & Family', count: '18 classes', icon: '👶', iconBg: 'bg-amber-50 text-amber-700 border-amber-100', category: 'kids' },
    { id: 'top-8', label: 'Business & Finance', count: '16 classes', icon: '💼', iconBg: 'bg-rose-50 text-rose-700 border-rose-100', category: 'professional' },
  ];

  const topTeachersList = [
    { id: 'tch-1', name: 'Ustadz Ahmad Fauzi', rating: 4.9, reviews: 328, students: '2.1K', avatar: '/images/tutor_ahmed.jpg' },
    { id: 'tch-2', name: 'Ustadzah Fatimah Zahra', rating: 4.8, reviews: 214, students: '1.6K', avatar: '/images/student_fatimah.jpg' },
    { id: 'tch-3', name: 'Ustadz Omar Hassan', rating: 4.7, reviews: 186, students: '980', avatar: '/images/student_ali.jpg' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans text-gray-800 antialiased selection:bg-[#114B44] selection:text-white overflow-hidden">
      
      {/* TOP HEADER BAR (Matching media_1790725449767.jpg) */}
      <header className="shrink-0 z-40 bg-white border-b border-gray-200/90 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left Logo */}
        <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={onBackToHome}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#114B44] to-[#0A302B] flex items-center justify-center shadow-xs">
            <svg className="w-5 h-5 text-[#E6F4F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M12 6c1.5-1.5 3-1.5 4.5 0" strokeLinecap="round" />
              <circle cx="12" cy="11" r="2" fill="currentColor" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-[#0F172A]">IlmHub</span>
            <p className="text-[9px] text-gray-400 font-medium -mt-0.5">Learn • Teach • Grow</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search classes, teachers, or materials..."
              className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Right Header Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Notification Bell with red badge 3 */}
          <button 
            onClick={() => alert('Notifikasi Siswa: Anda memiliki 3 pengingat kelas!')}
            className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
              3
            </span>
          </button>

          {/* Chat Icon */}
          <button 
            onClick={() => setActiveNav('messages')}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <button 
            onClick={() => alert('Bahasa: العربية / English')}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>العربية</span>
          </button>

          {/* User Profile Capsule on Top Right with Interactive Role Switcher & Logout */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 pl-2 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shadow-2xs shrink-0">
                <img 
                  src={studentAvatar} 
                  alt={studentName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/student_aisha.jpg';
                  }}
                />
              </div>
              <div className="hidden sm:block text-left">
                <span className="block text-xs font-extrabold text-gray-900 leading-tight">{studentName}</span>
                <span className="block text-[10px] text-emerald-700 font-bold uppercase tracking-wider -mt-0.5">Student</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown Popup */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 text-xs animate-fadeIn">
                <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl mb-2 flex items-center gap-2.5 border border-emerald-100">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shrink-0">
                    <img
                      src={studentAvatar}
                      alt={studentName}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/images/student_aisha.jpg'; }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-xs text-gray-900 truncate">{studentName}</h4>
                    <p className="text-[10px] text-gray-500 truncate">{studentEmail}</p>
                    <span className="inline-block mt-0.5 text-[9px] font-black px-2 py-0.2 bg-emerald-100 text-[#114B44] rounded-full">
                      🎓 Student Account
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  {/* Switch to Teacher Dashboard */}
                  {onSwitchRole && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSwitchRole('teacher');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#114B44] flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">Switch to Teacher Mode</span>
                    </button>
                  )}

                  {/* Back to IlmHub Portal */}
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      onBackToHome();
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-gray-50 text-gray-700 font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">Back to Public Site</span>
                  </button>

                  <div className="my-1 border-t border-gray-100"></div>

                  {/* Logout */}
                  {onLogout && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-rose-50 text-rose-600 font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN DASHBOARD LAYOUT: Locked Left Sidebar + Scrollable Canvas */}
      <div className="flex-1 flex overflow-hidden max-w-[1600px] w-full mx-auto">
        
        {/* FIXED LOCKED LEFT SIDEBAR (Matching media_1790725449767.jpg) */}
        <aside className="w-60 lg:w-64 bg-white border-r border-gray-200/90 p-4 shrink-0 hidden md:flex flex-col h-full overflow-y-auto no-scrollbar select-none justify-between">
          
          <div className="space-y-4">
            
            {/* User Profile Card at Top of Sidebar */}
            <div className="p-2.5 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={studentAvatar}
                  alt={studentName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 shadow-2xs"
                  onError={(e) => { e.target.src = '/images/student_aisha.jpg'; }}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[7px] text-white font-black">
                  ✓
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="font-extrabold text-xs text-gray-900 truncate">{studentName}</h3>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[8px] font-black shrink-0">✓</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium">Student</p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500 mt-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal text-[9px]">(12 classes)</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu Items */}
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      if (item.id === 'browse') {
                        onExploreCourses();
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-2xs'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-rose-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Left Sidebar Banner: Keep Learning! */}
          <div className="pt-4 border-t border-gray-100">
            <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-gray-900 leading-tight">Keep Learning!</h4>
                </div>
              </div>

              <p className="text-[10px] text-gray-600 leading-relaxed">
                Complete more classes to get certificates and unlock new opportunities.
              </p>

              {/* Progress bar */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[9px] font-bold text-gray-500">
                  <span>Progress</span>
                  <span className="text-gray-800">3/5</span>
                </div>
                <div className="w-full h-1.5 bg-amber-200/60 rounded-full overflow-hidden">
                  <div className="h-full bg-[#114B44] rounded-full w-[60%]"></div>
                </div>
              </div>

              <button
                onClick={onExploreCourses}
                className="w-full bg-white hover:bg-amber-100/50 border border-amber-300 text-[#114B44] py-1.5 rounded-xl text-[11px] font-bold transition-all shadow-2xs flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Explore Classes</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </aside>

        {/* MAIN SCROLLABLE CANVAS */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-7 min-w-0 pb-16 space-y-6">
          
          {activeNav === 'browse' ? (
            /* ========================================================= */
            /* VIEW: BROWSE CLASSES (MATCHING media_1790726478349.jpg)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Browse Classes</h1>
                    <p className="text-xs text-gray-500 font-medium">Discover classes from expert teachers. Learn new skills, deepen your knowledge, and grow with IlmHub.</p>
                  </div>
                </div>
              </div>

              {/* 2. CATEGORY FILTER PILLS */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All Classes' },
                  { id: 'islamic', label: 'Islamic Studies' },
                  { id: 'language', label: 'Language' },
                  { id: 'academic', label: 'Academic' },
                  { id: 'professional', label: 'Professional Skills' },
                  { id: 'personal', label: 'Personal Development' },
                  { id: 'kids', label: 'Kids & Teens' },
                ].map((cat) => {
                  const isActive = browseCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setBrowseCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* 3. SEARCH & DROPDOWN FILTERS TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={browseSearchQuery}
                    onChange={(e) => setBrowseSearchQuery(e.target.value)}
                    placeholder="Search classes by title, teacher, or keyword..."
                    className="w-full bg-[#F8FAFC] border border-gray-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs font-medium"
                  />
                </div>

                {/* 4 Dropdown Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Levels Dropdown */}
                  <div className="relative">
                    <select
                      value={browseLevelFilter}
                      onChange={(e) => setBrowseLevelFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Levels">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Languages Dropdown */}
                  <div className="relative">
                    <select
                      value={browseLanguageFilter}
                      onChange={(e) => setBrowseLanguageFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Languages">All Languages</option>
                      <option value="Arabic">Arabic</option>
                      <option value="English">English</option>
                      <option value="Indonesian">Indonesian</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Class Types Dropdown */}
                  <div className="relative">
                    <select
                      value={browseTypeFilter}
                      onChange={(e) => setBrowseTypeFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Types">All Class Types</option>
                      <option value="Live Classes">Live Classes</option>
                      <option value="Self-Paced">Self-Paced</option>
                      <option value="With Certificate">With Certificate</option>
                      <option value="Free Classes">Free Classes</option>
                      <option value="Premium Classes">Premium Classes</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={browseSortBy}
                      onChange={(e) => setBrowseSortBy(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="Newest First">Newest First</option>
                      <option value="Highest Rated">Highest Rated</option>
                      <option value="Most Popular">Most Popular</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4. MAIN BROWSE LAYOUT: 2 Columns (Center Feed + Right Widgets) */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                {/* LEFT & CENTER FEED (9 Cols) */}
                <div className="xl:col-span-9 space-y-7 min-w-0">
                  
                  {/* Hero Wide Banner: Deepen Your Knowledge */}
                  <div className="relative rounded-3xl overflow-hidden min-h-[160px] p-6 sm:p-8 text-white flex flex-col justify-between shadow-md bg-gradient-to-r from-[#0F2F2B] via-[#114B44] to-[#1E3A34]">
                    <img
                      src="/images/login_lms_desk_bg.jpg"
                      alt="Mosque Silhouette Banner"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35"
                    />
                    <div className="relative z-10 space-y-2 max-w-xl">
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                        Deepen Your Knowledge
                      </h2>
                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                        Explore Islamic knowledge, languages, academic subjects, and practical skills with expert teachers.
                      </p>
                    </div>

                    <div className="relative z-10 pt-4">
                      <button
                        onClick={() => {
                          const el = document.getElementById('featured-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-100 border border-emerald-400/40 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer backdrop-blur-xs"
                      >
                        <span>Explore Featured Classes</span>
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-300" />
                      </button>
                    </div>
                  </div>

                  {/* SECTION 1: Featured Classes */}
                  <div id="featured-section" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base sm:text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
                        <span>Featured Classes</span>
                      </h2>
                      <button 
                        onClick={() => setBrowseCategory('all')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {featuredBrowseClasses.map((item) => {
                        const isLiked = wishlist.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                          >
                            <div>
                              {/* Thumbnail with Badge & Heart Button */}
                              <div className="relative h-36 w-full bg-gray-100 overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                                />
                                {/* Top Badge */}
                                {item.badge && (
                                  <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider shadow-2xs ${item.badge.color}`}>
                                    {item.badge.text}
                                  </span>
                                )}
                                {/* Heart Button */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(item.id);
                                  }}
                                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                                >
                                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                                </button>
                              </div>

                              {/* Card Body */}
                              <div className="p-3.5 space-y-2">
                                <div>
                                  <h3 className="font-extrabold text-xs text-gray-900 group-hover:text-[#114B44] transition-colors line-clamp-1">
                                    {item.title}
                                  </h3>
                                  <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                    {item.tutor}
                                  </p>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.primaryTag.color}`}>
                                    {item.primaryTag.label}
                                  </span>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.levelTag.color}`}>
                                    {item.levelTag.label}
                                  </span>
                                </div>

                                {/* Rating & Students */}
                                <div className="flex items-center justify-between text-[11px] pt-1">
                                  <div className="flex items-center gap-1 font-bold text-amber-500">
                                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                                    <span>{item.rating}</span>
                                    <span className="text-gray-400 font-normal text-[10px]">({item.reviews})</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-500 text-[10px] font-medium">
                                    <Users className="w-3 h-3 text-gray-400" />
                                    <span>{item.students} students</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-3.5 py-2.5 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3 text-gray-400" />
                                <span>{item.lessons} lessons</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span>{item.duration}</span>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 2: All Classes */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base sm:text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
                        <span>All Classes</span>
                      </h2>
                      <button 
                        onClick={() => setBrowseCategory('all')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* 8 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allBrowseClassesList.map((item) => {
                        const isLiked = wishlist.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                          >
                            <div>
                              {/* Thumbnail */}
                              <div className="relative h-36 w-full bg-gray-100 overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                                />
                                {/* Heart Wishlist Button */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(item.id);
                                  }}
                                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                                >
                                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                                </button>
                              </div>

                              {/* Body */}
                              <div className="p-3.5 space-y-2">
                                <div>
                                  <h3 className="font-extrabold text-xs text-gray-900 group-hover:text-[#114B44] transition-colors line-clamp-1">
                                    {item.title}
                                  </h3>
                                  <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                    {item.tutor}
                                  </p>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.primaryTag.color}`}>
                                    {item.primaryTag.label}
                                  </span>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.levelTag.color}`}>
                                    {item.levelTag.label}
                                  </span>
                                </div>

                                {/* Rating & Students */}
                                <div className="flex items-center justify-between text-[11px] pt-1">
                                  <div className="flex items-center gap-1 font-bold text-amber-500">
                                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                                    <span>{item.rating}</span>
                                    <span className="text-gray-400 font-normal text-[10px]">({item.reviews})</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-500 text-[10px] font-medium">
                                    <Users className="w-3 h-3 text-gray-400" />
                                    <span>{item.students} students</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="px-3.5 py-2.5 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3 text-gray-400" />
                                <span>{item.lessons} lessons</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span>{item.duration}</span>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR WIDGETS (3 Cols) */}
                <div className="xl:col-span-3 space-y-6">
                  
                  {/* 1. Popular Topics Card */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Popular Topics</h3>
                      <button 
                        onClick={() => setBrowseCategory('all')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      {popularTopicsList.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => setBrowseCategory(topic.category)}
                          className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group text-left"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-emerald-50 border border-gray-100 flex items-center justify-center text-xs shrink-0 transition-colors">
                              {topic.icon}
                            </span>
                            <span className="text-xs font-bold text-gray-800 group-hover:text-[#114B44] transition-colors truncate">
                              {topic.label}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-gray-400 shrink-0">
                            {topic.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Class Levels Card */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                    <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Class Levels</h3>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => {
                        const isSelected = browseLevelFilter === lvl;
                        return (
                          <button
                            key={lvl}
                            onClick={() => setBrowseLevelFilter(lvl)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-50 text-[#114B44] border-2 border-emerald-600 shadow-2xs'
                                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                            }`}
                          >
                            {lvl}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Class Type Card */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                    <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Class Type</h3>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'All Types', label: 'All Types', icon: MessageSquare, color: 'text-emerald-700' },
                        { id: 'Live Classes', label: 'Live Classes', icon: Video, color: 'text-rose-500' },
                        { id: 'Self-Paced', label: 'Self-Paced', icon: Play, color: 'text-blue-500' },
                        { id: 'With Certificate', label: 'With Certificate', icon: Award, color: 'text-indigo-500' },
                        { id: 'Free Classes', label: 'Free Classes', icon: Gift, color: 'text-emerald-600' },
                        { id: 'Premium Classes', label: 'Premium Classes', icon: Crown, color: 'text-amber-500' },
                      ].map((t) => {
                        const Icon = t.icon;
                        const isSelected = browseTypeFilter === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setBrowseTypeFilter(t.id)}
                            className={`p-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer text-left ${
                              isSelected
                                ? 'bg-emerald-50 text-[#114B44] border-2 border-emerald-600 shadow-2xs'
                                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${t.color} shrink-0`} />
                            <span className="text-[11px] truncate leading-tight">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Top Teachers Card */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Top Teachers</h3>
                      <button 
                        onClick={() => setActiveNav('browse')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="space-y-3">
                      {topTeachersList.map((tch) => (
                        <div key={tch.id} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-emerald-300 shrink-0">
                            <img 
                              src={tch.avatar} 
                              alt={tch.name}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-xs text-gray-900 truncate leading-tight">{tch.name}</h4>
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 mt-0.5">
                              <span className="font-bold text-amber-500 flex items-center gap-0.5">
                                ⭐ {tch.rating}
                              </span>
                              <span className="text-gray-400">({tch.reviews})</span>
                              <span className="text-gray-300">•</span>
                              <span>{tch.students} students</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'classes' ? (
            /* ========================================================= */
            /* VIEW: MY CLASSES (MATCHING media_1790725449767.jpg)       */
            /* ========================================================= */
            <div className="space-y-5">
              
              {/* PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">My Classes</h1>
                    <p className="text-xs text-gray-500 font-medium">Kelola kelas yang Anda ikuti, lihat progres, akses materi, tugas, dan jadwal kelas.</p>
                  </div>
                </div>
              </div>

              {/* FILTER PILLS & CONTROLS TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Tabs Pills */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                  {[
                    { id: 'all', label: 'All Classes', count: 8 },
                    { id: 'in_progress', label: 'In Progress', count: 5 },
                    { id: 'completed', label: 'Completed', count: 2 },
                    { id: 'upcoming', label: 'Upcoming', count: 1 },
                    { id: 'saved', label: 'Saved', count: 0 },
                  ].map((tab) => {
                    const isActive = classTabFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setClassTabFilter(tab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'bg-[#114B44] text-white shadow-2xs'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {tab.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Search & Sort Controls */}
                <div className="flex items-center gap-2.5">
                  <div className="relative flex-1 md:w-56">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={classSearchQuery}
                      onChange={(e) => setClassSearchQuery(e.target.value)}
                      placeholder="Search my classes..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="relative shrink-0">
                    <select
                      value={classSortOrder}
                      onChange={(e) => setClassSortOrder(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                    >
                      <option>Newest First</option>
                      <option>Highest Progress</option>
                      <option>Lowest Progress</option>
                      <option>Oldest First</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4 TOP SUMMARY KPI CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                
                {/* 1. Total Classes */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">8</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">Total Classes</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 2 new this month</p>
                  </div>
                </div>

                {/* 2. In Progress */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 fill-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">5</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">In Progress</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">62% average progress</p>
                  </div>
                </div>

                {/* 3. Completed */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">2</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">Completed</p>
                    <p className="text-[10px] font-bold text-purple-600 mt-0.5">Certificates earned</p>
                  </div>
                </div>

                {/* 4. Upcoming */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">1</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">Upcoming</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">Next class tomorrow</p>
                  </div>
                </div>

              </div>

              {/* MAIN CONTENT 2-COLUMN GRID (6 Class Cards List + Right Sidebar) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* LEFT COLUMN: 6 Detailed Class Cards (8 of 12 Cols) */}
                <div className="lg:col-span-8 space-y-3.5">
                  {studentClassesList
                    .filter((c) => {
                      if (classTabFilter === 'in_progress') return c.status === 'in_progress';
                      if (classTabFilter === 'completed') return c.status === 'completed';
                      if (classTabFilter === 'upcoming') return c.status === 'upcoming';
                      if (classTabFilter === 'saved') return false;
                      return true;
                    })
                    .filter((c) => {
                      if (classSearchQuery) {
                        const q = classSearchQuery.toLowerCase();
                        return c.title.toLowerCase().includes(q) || c.tutor.toLowerCase().includes(q);
                      }
                      return true;
                    })
                    .map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs hover:border-emerald-300 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          
                          {/* Thumbnail & Class Info */}
                          <div className="flex items-center gap-3.5 min-w-0">
                            <div className="relative aspect-[16/10] w-28 sm:w-32 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = '/images/class_nahwu.jpg';
                                }}
                              />
                            </div>

                            <div className="min-w-0 space-y-1">
                              <h3 className="font-extrabold text-sm text-gray-900 leading-snug truncate">{course.title}</h3>
                              <p className="text-[11px] text-gray-500 font-medium">{course.tutor}</p>
                              
                              {/* Tags Row */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                <span className="text-[9px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                                  {course.primaryTag}
                                </span>
                                <span className="text-[9px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                                  {course.levelTag}
                                </span>
                                {course.featureTag && (
                                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border flex items-center gap-1 ${course.featureTag.color}`}>
                                    <span>{course.featureTag.icon}</span>
                                    <span>{course.featureTag.label}</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Progress Column */}
                          <div className="w-full sm:w-44 space-y-1.5 shrink-0">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[10px] font-bold text-gray-400">Progress</span>
                              <span className="font-black text-gray-900 text-xs">{course.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#114B44] rounded-full transition-all"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <p className="text-[10px] text-gray-400 font-medium">
                              {course.completedLessons} / {course.totalLessons} lessons completed
                            </p>
                          </div>

                          {/* Action Button & Next Class Info */}
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto gap-2 shrink-0">
                            {course.isCompleted ? (
                              <>
                                <button
                                  onClick={() => alert(`Membuka sertifikat resmi untuk kelas ${course.title}!`)}
                                  className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                                >
                                  View Certificate
                                </button>
                                <span className="text-[9px] text-emerald-700 font-bold flex items-center gap-1">
                                  <span>✓ Completed</span>
                                  <span className="text-gray-400 font-normal">{course.completedDate}</span>
                                </span>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => onJoinLive({
                                    title: course.title,
                                    tutor: { name: course.tutor, avatar: '/images/tutor_ahmed.jpg' },
                                    image: course.image
                                  })}
                                  className="w-full sm:w-auto bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                                >
                                  Continue Learning
                                </button>
                                {course.nextClassInfo && (
                                  <span className="text-[9px] text-gray-500 font-medium flex items-center gap-1">
                                    <span>📅 Next Class:</span>
                                    <span className="font-bold text-gray-800">{course.nextClassInfo}</span>
                                  </span>
                                )}
                              </>
                            )}
                          </div>

                          {/* 3 Dots Menu */}
                          <button
                            onClick={() => alert(`Opsi kelas: ${course.title}`)}
                            className="hidden sm:block p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                        </div>
                      </div>
                    ))}
                </div>

                {/* RIGHT SIDEBAR COLUMN: 4 Stacked Cards (4 of 12 Cols) */}
                <div className="lg:col-span-4 space-y-4">
                  
                  {/* CARD 1: Class Schedule (Interactive Mini Calendar) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Class Schedule</h3>
                      <button
                        onClick={() => setActiveNav('schedule')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Month bar */}
                    <div className="flex items-center justify-between px-1 text-xs font-bold text-gray-800">
                      <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer">
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <span>{selectedCalendarMonth}</span>
                      <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Calendar grid */}
                    <div className="text-[11px]">
                      {/* Day Names */}
                      <div className="grid grid-cols-7 gap-1 text-center font-bold text-gray-400 text-[10px] pb-1 border-b border-gray-100">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>

                      {/* Day Cells */}
                      <div className="grid grid-cols-7 gap-1 text-center pt-2 font-semibold">
                        {[
                          { day: 24, isCurrMonth: false },
                          { day: 25, isCurrMonth: true, isSelected: true },
                          { day: 26, isCurrMonth: true, hasClass: true },
                          { day: 27, isCurrMonth: true },
                          { day: 28, isCurrMonth: true, hasClass: true },
                          { day: 29, isCurrMonth: true },
                          { day: 30, isCurrMonth: true, hasClass: true },
                          { day: 1, isCurrMonth: true },
                          { day: 2, isCurrMonth: true },
                          { day: 3, isCurrMonth: true },
                          { day: 4, isCurrMonth: true },
                          { day: 5, isCurrMonth: true },
                          { day: 6, isCurrMonth: true },
                          { day: 7, isCurrMonth: true },
                          { day: 8, isCurrMonth: true },
                          { day: 9, isCurrMonth: true },
                          { day: 10, isCurrMonth: true },
                          { day: 11, isCurrMonth: true },
                          { day: 12, isCurrMonth: true },
                          { day: 13, isCurrMonth: true },
                          { day: 14, isCurrMonth: true },
                        ].map((c, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedCalendarDate(c.day)}
                            className={`p-1.5 rounded-xl cursor-pointer transition-all relative flex flex-col items-center justify-center ${
                              c.isSelected
                                ? 'bg-[#114B44] text-white font-black shadow-xs'
                                : c.isCurrMonth
                                ? 'text-gray-800 hover:bg-gray-100'
                                : 'text-gray-300'
                            }`}
                          >
                            <span>{c.day}</span>
                            {c.hasClass && !c.isSelected && (
                              <span className="w-1 h-1 rounded-full bg-emerald-500 absolute bottom-1"></span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: Upcoming Classes */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Upcoming Classes</h3>
                      <button
                        onClick={() => setActiveNav('schedule')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { title: 'Nahwu for Beginners', time: 'Tomorrow, 10:00 AM', icon: BookOpen, color: 'text-emerald-700 bg-emerald-50' },
                        { title: 'Arabic Conversation', time: 'Thu, 26 Sep, 4:00 PM', icon: Video, color: 'text-rose-700 bg-rose-50' },
                        { title: 'Academic Writing', time: 'Sat, 28 Sep, 11:00 AM', icon: BookOpen, color: 'text-blue-700 bg-blue-50' },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-xs truncate">{item.title}</p>
                              <p className="text-[10px] text-gray-400">{item.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CARD 3: Recent Activity */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Recent Activity</h3>
                      <button
                        onClick={() => alert('Membuka seluruh riwayat aktivitas belajar...')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      {[
                        { title: "Completed lesson: Isim Ma'rifah", sub: 'Nahwu for Beginners • 2 hours ago', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
                        { title: 'Submitted assignment: Bab 2', sub: 'Sharaf Basic • 1 day ago', icon: FileText, color: 'text-purple-600 bg-purple-50' },
                        { title: 'Joined live class', sub: 'Arabic Conversation • 2 days ago', icon: Video, color: 'text-rose-600 bg-rose-50' },
                        { title: 'Earned certificate', sub: 'Islamic History • 5 days ago', icon: Award, color: 'text-amber-600 bg-amber-50' },
                      ].map((act, idx) => {
                        const Icon = act.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className={`w-6 h-6 rounded-lg ${act.color} flex items-center justify-center shrink-0 mt-0.5`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] truncate">{act.title}</p>
                              <p className="text-[9px] text-gray-400 truncate">{act.sub}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CARD 4: Quick Actions */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-2.5">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider px-1">Quick Actions</h3>

                    <div className="grid grid-cols-4 gap-1 text-center">
                      <button
                        onClick={() => onJoinLive({
                          title: 'Nahwu for Beginners',
                          tutor: { name: 'Ustadz Ahmad Fauzi', avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_nahwu.jpg'
                        })}
                        className="p-2 rounded-xl bg-purple-50/60 hover:bg-purple-100/60 text-purple-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-purple-100"
                      >
                        <Video className="w-4 h-4 text-purple-700" />
                        <span className="text-[8px] font-bold">Join Live</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('assignments')}
                        className="p-2 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/60 text-emerald-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-emerald-100"
                      >
                        <FileText className="w-4 h-4 text-emerald-700" />
                        <span className="text-[8px] font-bold">Submit Task</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('quizzes')}
                        className="p-2 rounded-xl bg-sky-50/60 hover:bg-sky-100/60 text-sky-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-sky-100"
                      >
                        <HelpCircle className="w-4 h-4 text-sky-700" />
                        <span className="text-[8px] font-bold">Take Quiz</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('certificates')}
                        className="p-2 rounded-xl bg-amber-50/60 hover:bg-amber-100/60 text-amber-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-amber-100"
                      >
                        <Award className="w-4 h-4 text-amber-700" />
                        <span className="text-[8px] font-bold">Certificates</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW: DEFAULT STUDENT OVERVIEW DASHBOARD (FULL & RICH)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* Top Greeting Header with Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Welcome back, {studentName.split(' ')[0]}!
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Continue your learning journey and explore upcoming classes.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3.5 py-2 rounded-xl shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Wednesday, 24 Sep 2026</span>
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Enrolled Classes</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">8</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Completed</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">12 Lessons</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Certificates</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">3</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Learning Streak</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">15 Days</div>
                  </div>
                </div>
              </div>

              {/* Section 1: Continue Learning (Left 2 Cols) & Next Class (Right 1 Col) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Continue Learning Big Card */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="p-6 pb-3 flex items-center justify-between">
                      <h2 className="text-base font-extrabold text-gray-900">Continue Learning</h2>
                      <span className="text-xs font-bold text-[#114B44] bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span>📊 85% Completed</span>
                      </span>
                    </div>

                    <div className="px-6 space-y-4">
                      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                        <img 
                          src="/images/class_nahwu.jpg" 
                          alt="Nahwu for Beginners" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-extrabold text-lg text-gray-900">Nahwu for Beginners</h3>
                        <p className="text-xs text-gray-500 mt-0.5">by Ustadz Ahmad Fauzi</p>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-3">
                          <div className="h-full bg-[#114B44] rounded-full w-[85%]"></div>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">Lesson 12 of 14: <strong className="text-gray-700">Kaidah Maf'ul Bih dan Contoh Kalimat</strong></p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-4">
                    <button
                      onClick={() => onJoinLive({
                        title: 'Nahwu for Beginners',
                        tutor: { name: 'Ustadz Ahmad Fauzi', avatar: '/images/tutor_ahmed.jpg' },
                        image: '/images/class_nahwu.jpg'
                      })}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95 transition-all"
                    >
                      <span>Continue Learning</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Next Class & Upcoming Classes */}
                <div className="space-y-4">
                  
                  {/* Next Class Card */}
                  <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-extrabold text-gray-900">Next Class</h2>
                      <button 
                        onClick={() => setActiveNav('classes')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 shrink-0">
                        <span className="block text-base font-extrabold text-gray-900">24</span>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase">Sep</span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-xs text-gray-900">Sharaf Basic</h4>
                        <span className="text-[11px] text-gray-500 block">🕒 13:00 - 14:30 (GMT+2)</span>
                        <span className="text-[11px] text-gray-400 block">with Ustadzah Fatimah Zahra</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onJoinLive({
                          title: 'Sharaf Basic',
                          tutor: { name: 'Ustadzah Fatimah Zahra', avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_conversation.jpg'
                        })}
                        className="flex-1 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        Join Class
                      </button>
                      <button 
                        onClick={() => alert('Jadwal kelas berhasil disinkronkan ke kalender Anda!')}
                        className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        <CalendarPlus className="w-3.5 h-3.5" />
                        <span>Add to Calendar</span>
                      </button>
                    </div>
                  </div>

                  {/* Upcoming Classes */}
                  <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-extrabold text-gray-900">Upcoming Classes</h2>
                      <button 
                        onClick={() => setActiveNav('classes')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs">
                        <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-10">
                          <span className="block font-bold text-gray-900">26</span>
                          <span className="block text-[9px] text-gray-400 uppercase">Sep</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Arabic Conversation</h5>
                          <p className="text-[11px] text-gray-400">18:00 - 20:30 • with Ustadz Omar Hassan</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-10">
                          <span className="block font-bold text-gray-900">28</span>
                          <span className="block text-[9px] text-gray-400 uppercase">Sep</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Academic Writing</h5>
                          <p className="text-[11px] text-gray-400">10:00 - 11:30 • with Dr. Layla Ahmad</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Section 2: My Active Classes (4 Horizontal Cards) */}
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-extrabold text-gray-900">My Active Classes</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Kelas-kelas yang sedang aktif Anda pelajari.</p>
                  </div>

                  <button 
                    onClick={() => setActiveNav('classes')}
                    className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-center"
                  >
                    <span>View All (8 Classes)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {studentClassesList.slice(0, 4).map((c) => (
                    <div 
                      key={c.id}
                      onClick={() => onJoinLive({
                        title: c.title,
                        tutor: { name: c.tutor, avatar: '/images/tutor_ahmed.jpg' },
                        image: c.image
                      })}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between cursor-pointer group"
                    >
                      <div>
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                          <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <span className="absolute top-2 right-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                            {c.primaryTag}
                          </span>
                        </div>
                        <div className="p-3.5 space-y-1">
                          <h4 className="font-extrabold text-xs text-gray-900 truncate group-hover:text-[#114B44] transition-colors">{c.title}</h4>
                          <p className="text-[11px] text-gray-400">{c.tutor}</p>
                        </div>
                      </div>

                      <div className="p-3.5 pt-0 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-bold">
                          <span className="text-gray-400">{c.completedLessons}/{c.totalLessons} Lessons</span>
                          <span className="text-emerald-700">{c.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#114B44] rounded-full" style={{ width: `${c.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Learning Progress Chart & Recommended for You */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Learning Progress (Left 2 Cols) */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">Learning Progress</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Grafik jam belajar dan penyelesaian materi.</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                      <span>September 2026</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>

                  {/* Visual Learning Progress Chart Canvas */}
                  <div className="pt-2">
                    <div className="flex items-end gap-2 h-44 w-full">
                      {/* Y-Axis scale */}
                      <div className="flex flex-col justify-between h-full text-[9px] font-bold text-gray-400 pr-1 shrink-0 pb-5 select-none">
                        <span>100%</span>
                        <span>75%</span>
                        <span>50%</span>
                        <span>25%</span>
                        <span>0%</span>
                      </div>

                      {/* Chart Area with Gridlines & Columns */}
                      <div className="relative flex-1 h-full flex flex-col justify-end">
                        {/* Background Gridlines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 pb-5">
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-200 w-full"></div>
                        </div>

                        {/* Bars */}
                        <div className="relative z-0 h-[82%] flex items-end justify-between gap-1.5 sm:gap-2 px-1">
                          {[
                            { label: '1 Sep', val: 45, hours: '1.5h' },
                            { label: '4 Sep', val: 65, hours: '2.5h' },
                            { label: '7 Sep', val: 35, hours: '1.2h' },
                            { label: '10 Sep', val: 85, hours: '3.5h' },
                            { label: '13 Sep', val: 50, hours: '2.0h' },
                            { label: '16 Sep', val: 95, hours: '4.0h' },
                            { label: '19 Sep', val: 70, hours: '2.8h' },
                            { label: '22 Sep', val: 80, hours: '3.2h' },
                            { label: '25 Sep', val: 90, hours: '3.8h', isToday: true },
                            { label: '28 Sep', val: 60, hours: '2.4h' },
                            { label: '30 Sep', val: 75, hours: '3.0h' },
                          ].map((item, i) => (
                            <div key={i} className="flex-1 h-full flex flex-col items-center justify-end group relative cursor-pointer">
                              {/* Hover Tooltip */}
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-10 pointer-events-none">
                                {item.hours} ({item.val}%)
                              </div>
                              <div 
                                className={`w-full rounded-t-lg transition-all duration-300 shadow-2xs ${
                                  item.isToday ? 'bg-[#114B44] ring-2 ring-[#114B44]/20' : 'bg-[#114B44] hover:bg-emerald-600'
                                }`}
                                style={{ height: `${item.val}%` }}
                              ></div>
                              <span className="text-[9px] font-semibold text-gray-400 mt-2 truncate">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Lessons Completed</span>
                      <span className="text-base font-black text-gray-900">12</span>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Study Time</span>
                      <span className="text-base font-black text-gray-900">18 hours</span>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Average Score</span>
                      <span className="text-base font-black text-emerald-600">92%</span>
                    </div>
                  </div>
                </div>

                {/* Recommended for You (Right 1 Col) */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-gray-900">Recommended for You</h3>
                  </div>

                  <div className="space-y-3">
                    {recommendedCourses.map((rc) => (
                      <div key={rc.id} className="flex items-center justify-between gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img 
                            src={rc.avatar} 
                            alt={rc.tutor} 
                            className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0" 
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/student_aisha.jpg';
                            }}
                          />
                          <div className="min-w-0">
                            <h5 className="font-extrabold text-xs text-gray-900 truncate">{rc.title}</h5>
                            <p className="text-[10px] text-gray-400 truncate">{rc.tutor}</p>
                            <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                              <span>{rc.rating} ({rc.students} students)</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-black text-[#114B44] shrink-0">{rc.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Section 4: Explore More Classes Banner + Your Certificates */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Explore More Classes Wide Banner */}
                <div className="lg:col-span-2 relative rounded-3xl overflow-hidden p-6 text-white flex flex-col justify-between shadow-md">
                  <img 
                    src="/images/login_lms_desk_bg.jpg" 
                    alt="Explore Background" 
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                  />
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-extrabold">Explore More Classes</h3>
                    <p className="text-xs text-gray-200">Temukan ribuan kelas dan materi dari tutor berpengalaman di seluruh dunia.</p>
                  </div>

                  <div className="relative z-10 mt-6 max-w-md">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search classes, subjects, or tutors..."
                        className="w-full bg-white/95 text-gray-900 rounded-full pl-4 pr-10 py-2.5 text-xs placeholder-gray-400 focus:outline-none shadow-xs"
                      />
                      <button 
                        onClick={onExploreCourses}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-full flex items-center justify-center cursor-pointer shadow-xs"
                      >
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Your Certificates */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">Your Certificates</h3>
                    <button 
                      onClick={() => setActiveNav('classes')}
                      className="text-xs font-bold text-[#114B44] hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-xs text-gray-900">Islamic History</h5>
                        <p className="text-[10px] text-gray-400">Completed on 20 Sep 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-xs text-gray-900">Quran Tajweed Mastery</h5>
                        <p className="text-[10px] text-gray-400">Completed on 10 Sep 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}
