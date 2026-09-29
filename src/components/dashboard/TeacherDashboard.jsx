import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  PlusCircle, 
  Video, 
  Users, 
  Calendar, 
  FileText, 
  HelpCircle, 
  DollarSign, 
  MessageSquare, 
  Star, 
  BarChart2, 
  User, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown, 
  ChevronRight, 
  Upload, 
  Radio, 
  ArrowUpRight, 
  CheckCircle2, 
  Edit3,
  TrendingUp,
  SlidersHorizontal,
  Share2,
  CalendarPlus,
  Award,
  Folder,
  MoreVertical,
  Layers,
  Globe,
  Sparkles,
  Clock,
  ArrowRight,
  Copy,
  RotateCcw,
  Check,
  Trophy,
  ExternalLink,
  BookMarked,
  Eye
} from 'lucide-react';

export default function TeacherDashboard({ user, onStartLive, onManageCourses, onBackToHome }) {
  const [activeNav, setActiveNav] = useState('classes'); // Default or switchable to 'classes'
  const [selectedPeriod, setSelectedPeriod] = useState('Sep 2026');
  const [classTabFilter, setClassTabFilter] = useState('all'); // all, ongoing, upcoming, completed, draft, archived
  const [subjectFilter, setSubjectFilter] = useState('All Subjects');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortBy, setSortBy] = useState('Newest');
  const [searchQuery, setSearchQuery] = useState('');

  const teacherName = user?.name || 'Ahmed Mohamed';
  const teacherEmail = user?.email || 'ahmed.mohamed@ilmhub.com';

  // Sidebar Items matching reference image media_1790719920914.jpg
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'My Classes', icon: BookOpen, badge: '6' },
    { id: 'create', label: 'Create Class', icon: PlusCircle },
    { id: 'live', label: 'Live Classroom', icon: Video, badge: 'LIVE' },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'materials', label: 'Materials', icon: Folder },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '5' },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Full detailed classes for "My Classes" view
  const myClassesDetailed = [
    {
      id: 'mc-1',
      title: 'Nahwu for Beginners',
      subject: 'Arabic Language',
      description: "Dasar-dasar Nahwu secara sistematis untuk pemula. Belajar mengidentifikasi jumlah ismiyah dan fi'liyah dengan mudah.",
      status: 'ongoing',
      statusLabel: 'Ongoing',
      isLiveNow: true,
      studentsCount: 32,
      time: '09:00 – 10:30 (GMT+2)',
      lessonInfo: {
        lessonText: 'Lesson 4 of 12',
        percent: 60,
        subtext: "Jumlah Ismiyah dan I'rabnya"
      },
      image: '/images/class_nahwu.jpg',
      primaryAction: { label: 'Enter Classroom', type: 'enter-live' }
    },
    {
      id: 'mc-2',
      title: 'Sharaf Basic',
      subject: 'Arabic Language',
      description: 'Pengenalan ilmu Sharaf untuk memahami perubahan kata dalam Bahasa Arab.',
      status: 'upcoming',
      statusLabel: 'Upcoming',
      startsIn: 'Starts in 2 hours',
      studentsCount: 28,
      time: 'Today, 13:00 – 14:30 (GMT+2)',
      image: '/images/class_sharaf.jpg',
      primaryAction: { label: 'Start Class', type: 'start' }
    },
    {
      id: 'mc-3',
      title: 'Quran Tajweed',
      subject: 'Quran',
      description: 'Belajar tajwid dari dasar dengan praktik bacaan yang benar.',
      status: 'upcoming',
      statusLabel: 'Upcoming',
      startsIn: 'Starts in 1 day',
      studentsCount: 15,
      time: 'Tomorrow, 16:00 – 17:30 (GMT+2)',
      image: '/images/class_tajweed.jpg',
      primaryAction: { label: 'Start Class', type: 'start' }
    },
    {
      id: 'mc-4',
      title: 'Arabic Conversation',
      subject: 'Arabic Language',
      description: 'Percakapan Bahasa Arab sehari-hari untuk meningkatkan kemampuan berbicara.',
      status: 'completed',
      statusLabel: 'Completed',
      studentsCount: 24,
      totalLessons: 12,
      completedDate: 'Completed: 20 Sep 2026',
      completionPercent: 100,
      image: '/images/class_conversation.jpg',
      primaryAction: { label: 'View Report', type: 'report' },
      secondaryAction: { label: 'Clone Class', type: 'clone' }
    },
    {
      id: 'mc-5',
      title: 'Academic Arabic Writing',
      subject: 'Arabic Language',
      description: 'Latihan menulis akademik dalam Bahasa Arab untuk mahasiswa.',
      status: 'draft',
      statusLabel: 'Draft',
      studentsCount: 0,
      time: 'Not scheduled',
      image: '/images/class_writing.jpg',
      primaryAction: { label: 'Publish Class', type: 'publish' }
    },
    {
      id: 'mc-6',
      title: 'Islamic History',
      subject: 'Islamic Studies',
      description: 'Sejarah Islam dari masa ke masa.',
      status: 'archived',
      statusLabel: 'Archived',
      studentsCount: 45,
      totalLessons: 10,
      archivedDate: 'Archived: 1 Aug 2026',
      image: '/images/class_history.jpg',
      primaryAction: { label: 'View Class', type: 'view' },
      secondaryAction: { label: 'Unarchive', type: 'unarchive' }
    }
  ];

  // Filter logic
  const filteredClasses = myClassesDetailed.filter((cls) => {
    if (classTabFilter !== 'all' && cls.status !== classTabFilter) return false;
    if (subjectFilter !== 'All Subjects' && cls.subject !== subjectFilter) return false;
    if (statusFilter !== 'All Status' && cls.status !== statusFilter.toLowerCase()) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return cls.title.toLowerCase().includes(q) || cls.description.toLowerCase().includes(q) || cls.subject.toLowerCase().includes(q);
    }
    return true;
  });

  // Filter counts
  const countAll = myClassesDetailed.length;
  const countOngoing = myClassesDetailed.filter(c => c.status === 'ongoing').length;
  const countUpcoming = myClassesDetailed.filter(c => c.status === 'upcoming').length;
  const countCompleted = myClassesDetailed.filter(c => c.status === 'completed').length;
  const countDraft = myClassesDetailed.filter(c => c.status === 'draft').length;
  const countArchived = myClassesDetailed.filter(c => c.status === 'archived').length;

  // Today's schedule items for right sidebar
  const todayScheduleItems = [
    {
      timeStart: '09:00',
      timeEnd: '10:30',
      title: 'Nahwu for Beginners',
      statusBadge: 'Live Now',
      subtext: '32 students',
      image: '/images/class_nahwu.jpg',
      hasJoin: true
    },
    {
      timeStart: '13:00',
      timeEnd: '14:30',
      title: 'Sharaf Basic',
      subtext: 'Start in 2 hours',
      image: '/images/class_sharaf.jpg'
    },
    {
      timeStart: '16:00',
      timeEnd: '17:30',
      title: 'Quran Tajweed',
      subtext: 'Start in 1 day',
      image: '/images/class_tajweed.jpg'
    },
    {
      timeStart: '19:00',
      timeEnd: '20:30',
      title: 'Arabic Conversation',
      subtext: 'Start in 1 day',
      image: '/images/class_conversation.jpg'
    }
  ];

  // Quick statistics
  const classStats = [
    { label: 'Total Students', value: '1,240', change: '+12%', icon: Users, color: 'text-emerald-700', bg: 'bg-emerald-50' },
    { label: 'Total Classes', value: '6', change: '+2', icon: BookOpen, color: 'text-blue-700', bg: 'bg-blue-50' },
    { label: 'Total Lessons', value: '48', change: '+8', icon: Clock, color: 'text-amber-700', bg: 'bg-amber-50' },
    { label: 'Average Rating', value: '4.9', change: '+0.1', icon: Star, color: 'text-purple-700', bg: 'bg-purple-50' },
  ];

  // Today's scheduled classes for Dashboard Overview
  const todaysClasses = [
    {
      id: 'tc-1',
      timeStart: '09:00',
      timeEnd: '10:30',
      title: 'Nahwu Intermediate',
      studentsCount: 45,
      type: 'Live Class',
      image: '/images/class_nahwu.jpg',
    },
    {
      id: 'tc-2',
      timeStart: '13:00',
      timeEnd: '14:30',
      title: 'Sharaf Basic',
      studentsCount: 28,
      type: 'Live Class',
      image: '/images/class_sharaf.jpg',
    },
    {
      id: 'tc-3',
      timeStart: '19:00',
      timeEnd: '20:30',
      title: 'Arabic Conversation',
      studentsCount: 32,
      type: 'Live Class',
      image: '/images/class_arabic.jpg',
    },
  ];

  const recentStudents = [
    { name: 'Omar Hassan', classEnrolled: 'Joined Nahwu Intermediate', time: '2 hours ago', avatar: '/images/student_omar.jpg' },
    { name: 'Fatimah Ali', classEnrolled: 'Joined Sharaf Basic', time: '5 hours ago', avatar: '/images/student_fatimah.jpg' },
    { name: 'Youssef Tarek', classEnrolled: 'Joined Arabic Conversation', time: '1 day ago', avatar: '/images/student_ali.jpg' },
  ];

  const recentReviews = [
    { name: 'Sara Ahmad', rating: '5.0', comment: 'Ustadz sangat jelas dalam menjelaskan. Barakallah.', avatar: '/images/student_aisha.jpg' },
    { name: 'Ali Mahmoud', rating: '4.8', comment: 'Kelasnya sangat bermanfaat dan terstruktur.', avatar: '/images/student_ali.jpg' },
    { name: 'Aisha Khaled', rating: '5.0', comment: 'Penjelasan mudah dipahami, sangat membantu.', avatar: '/images/student_fatimah.jpg' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans text-gray-800 antialiased selection:bg-[#114B44] selection:text-white overflow-hidden">
      
      {/* Top Fixed Header Bar */}
      <header className="shrink-0 z-40 bg-white border-b border-gray-200 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
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
            <span className="text-xl font-bold tracking-tight text-[#0F172A]">IlmHub</span>
            <p className="text-[9px] text-gray-400 font-medium -mt-0.5">Learn • Teach • Grow</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search classes, students, or materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all"
            />
          </div>
        </div>

        {/* Right Actions: Notifications, Messages, Language, User Profile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* Messages */}
          <button 
            onClick={() => setActiveNav('messages')}
            className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <button className="hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>العربية</span>
          </button>

          {/* User Profile Capsule */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300">
              <img 
                src="/images/tutor_ahmed.jpg" 
                alt={teacherName} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80';
                }}
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-xs font-bold text-gray-900 leading-tight">{teacherName}</span>
              <span className="block text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Teacher</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout: Fixed Locked Left Sidebar + Scrollable Spacious Canvas */}
      <div className="flex-1 flex overflow-hidden w-full max-w-[1700px] mx-auto">
        
        {/* FIXED LOCKED LEFT SIDEBAR (Mentok Tidak Ikut Scroll) */}
        <aside className="w-60 lg:w-64 bg-white border-r border-gray-200 p-4 shrink-0 hidden md:flex flex-col justify-between h-full overflow-y-auto no-scrollbar select-none">
          
          <div className="space-y-4">
            {/* Teacher Profile Card */}
            <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-300 shrink-0">
                <img 
                  src="/images/tutor_ahmed.jpg" 
                  alt={teacherName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80';
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <h3 className="text-xs font-bold text-gray-900 truncate">{teacherName}</h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                </div>
                <p className="text-[10px] text-gray-500 truncate">Arabic & Nahwu Tutor</p>
                <div className="flex items-center gap-1 text-[10px] text-amber-500 font-semibold mt-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal">(1.2k students)</span>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation Menu */}
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      if (item.id === 'live') {
                        onStartLive({
                          title: 'Nahwu for Beginners (Live Class)',
                          tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_nahwu.jpg'
                        });
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ${
                        item.badge === 'LIVE' 
                          ? 'bg-red-500 text-white animate-pulse' 
                          : isActive ? 'bg-white/20 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Card: "Become a Top Tutor" */}
          <div className="pt-4 border-t border-gray-100">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/70 p-3 rounded-2xl space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-amber-400/20 text-amber-600 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">Become a Top Tutor</h4>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    Complete your profile and create more classes to reach more students.
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-gray-400">Profile Strength</span>
                  <span className="text-amber-700">80%</span>
                </div>
                <div className="w-full h-1.5 bg-amber-200/50 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[80%]"></div>
                </div>
              </div>

              <button 
                onClick={() => alert('Membuka tips optimasi profil tutor')}
                className="w-full text-center text-[11px] font-bold text-gray-800 hover:text-[#114B44] transition-colors py-1 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Tips</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </aside>

        {/* RIGHT SPACIOUS MAIN CANVAS (Scrollable Area) */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 pb-20">
          
          {/* ========================================================= */}
          {/* VIEW 1: MY CLASSES VIEW (Matching media_1790719920914.jpg) */}
          {/* ========================================================= */}
          {activeNav === 'classes' ? (
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* LEFT / CENTER COLUMN: My Classes Catalog (2/3 width) */}
              <div className="flex-1 space-y-5 min-w-0">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#114B44] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">My Classes</h1>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        Kelola semua kelas yang kamu ajar. Buat kelas baru, atur jadwal, lihat siswa, dan mulai mengajar.
                      </p>
                    </div>
                  </div>

                  {/* Header Action Buttons */}
                  <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                    <button 
                      onClick={() => alert('Membuka form buat kelas baru')}
                      className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Create Class</span>
                    </button>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>Manage Schedule</span>
                    </button>
                  </div>
                </div>

                {/* Filter Tabs Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold">
                  {[
                    { id: 'all', label: 'All Classes', count: countAll },
                    { id: 'ongoing', label: 'Ongoing', count: countOngoing },
                    { id: 'upcoming', label: 'Upcoming', count: countUpcoming },
                    { id: 'completed', label: 'Completed', count: countCompleted },
                    { id: 'draft', label: 'Draft', count: countDraft },
                    { id: 'archived', label: 'Archived', count: countArchived },
                  ].map((tab) => {
                    const isActive = classTabFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setClassTabFilter(tab.id)}
                        className={`px-3.5 py-2 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                          isActive
                            ? 'bg-[#114B44] text-white shadow-xs'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Search & Filter Dropdowns Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Search my classes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44]"
                    />
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                    {/* Subject Filter */}
                    <select 
                      value={subjectFilter} 
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:outline-none cursor-pointer"
                    >
                      <option value="All Subjects">All Subjects</option>
                      <option value="Arabic Language">Arabic Language</option>
                      <option value="Quran">Quran</option>
                      <option value="Islamic Studies">Islamic Studies</option>
                    </select>

                    {/* Status Filter */}
                    <select 
                      value={statusFilter} 
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:outline-none cursor-pointer"
                    >
                      <option value="All Status">All Status</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Completed">Completed</option>
                      <option value="Draft">Draft</option>
                      <option value="Archived">Archived</option>
                    </select>

                    {/* Sort By */}
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:outline-none cursor-pointer"
                    >
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="Most Students">Most Students</option>
                    </select>
                  </div>
                </div>

                {/* Class Cards List */}
                <div className="space-y-3.5">
                  {filteredClasses.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-12 text-center space-y-3">
                      <BookOpen className="w-10 h-10 text-gray-300 mx-auto" />
                      <h4 className="text-sm font-bold text-gray-700">Tidak ada kelas yang sesuai filter</h4>
                      <p className="text-xs text-gray-400">Coba ubah kata kunci pencarian atau tab filter di atas.</p>
                      <button 
                        onClick={() => { setClassTabFilter('all'); setSubjectFilter('All Subjects'); setStatusFilter('All Status'); setSearchQuery(''); }}
                        className="text-xs font-bold text-[#114B44] hover:underline"
                      >
                        Reset Filter
                      </button>
                    </div>
                  ) : (
                    filteredClasses.map((cls) => (
                      <div 
                        key={cls.id}
                        className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                      >
                        {/* Left Details */}
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          {/* Thumbnail with Status Badge */}
                          <div className="relative w-28 h-20 sm:w-32 sm:h-22 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                            <img 
                              src={cls.image} 
                              alt={cls.title} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                            
                            {/* Badges on Thumbnail */}
                            <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                              <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md shadow-xs ${
                                cls.status === 'ongoing' ? 'bg-[#114B44] text-white' :
                                cls.status === 'upcoming' ? 'bg-blue-600 text-white' :
                                cls.status === 'completed' ? 'bg-gray-700 text-white' :
                                cls.status === 'draft' ? 'bg-amber-600 text-white' :
                                'bg-gray-500 text-white'
                              }`}>
                                {cls.statusLabel}
                              </span>
                            </div>

                            {cls.isLiveNow && (
                              <div className="absolute top-1.5 right-1.5 bg-red-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                <span>LIVE</span>
                              </div>
                            )}
                          </div>

                          {/* Info Text */}
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-snug">
                                {cls.title}
                              </h3>
                              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                                {cls.subject}
                              </span>
                            </div>

                            <p className="text-xs text-gray-500 line-clamp-1 leading-relaxed">
                              {cls.description}
                            </p>

                            {/* Metadata Row */}
                            <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-1">
                              <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5 text-gray-400" />
                                <span>{cls.studentsCount} students</span>
                              </span>

                              {cls.isLiveNow && (
                                <span className="flex items-center gap-1 text-red-600 font-bold">
                                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                  <span>Live Now</span>
                                </span>
                              )}

                              {cls.time && (
                                <span className="flex items-center gap-1 text-gray-500">
                                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                                  <span>{cls.time}</span>
                                </span>
                              )}

                              {cls.completedDate && (
                                <span className="text-gray-400">{cls.completedDate}</span>
                              )}

                              {cls.archivedDate && (
                                <span className="text-gray-400">{cls.archivedDate}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Middle: Progress / Countdown Capsule if any */}
                        <div className="shrink-0 flex md:flex-col items-center md:items-end gap-2 w-full md:w-44 border-t md:border-t-0 pt-2 md:pt-0 border-gray-100">
                          {cls.lessonInfo && (
                            <div className="w-full text-right space-y-1">
                              <div className="flex items-center justify-between text-[11px] font-bold">
                                <span className="text-gray-700">{cls.lessonInfo.lessonText}</span>
                                <span className="text-emerald-700">{cls.lessonInfo.percent}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#114B44] rounded-full" style={{ width: `${cls.lessonInfo.percent}%` }}></div>
                              </div>
                              <p className="text-[10px] text-gray-400 truncate">{cls.lessonInfo.subtext}</p>
                            </div>
                          )}

                          {cls.startsIn && (
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl">
                              <Clock className="w-3.5 h-3.5 text-blue-600" />
                              <span>{cls.startsIn}</span>
                            </div>
                          )}

                          {cls.completionPercent && (
                            <div className="w-full text-right space-y-1">
                              <div className="flex items-center justify-between text-[11px] font-bold">
                                <span className="text-gray-400">Completion</span>
                                <span className="text-emerald-600">{cls.completionPercent}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-600 rounded-full w-full"></div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right: Actions */}
                        <div className="shrink-0 flex items-center gap-2 w-full md:w-auto justify-end">
                          {cls.primaryAction?.type === 'enter-live' && (
                            <button
                              onClick={() => onStartLive({
                                title: cls.title,
                                tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                                image: cls.image
                              })}
                              className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                            >
                              <span>Enter Classroom</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {cls.primaryAction?.type === 'start' && (
                            <button
                              onClick={() => onStartLive({
                                title: cls.title,
                                tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                                image: cls.image
                              })}
                              className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                            >
                              Start Class
                            </button>
                          )}

                          {cls.primaryAction?.type === 'publish' && (
                            <button
                              onClick={() => alert(`Mempublikasikan kelas: ${cls.title}`)}
                              className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                            >
                              Publish Class
                            </button>
                          )}

                          {cls.primaryAction?.type === 'report' && (
                            <button
                              onClick={() => alert(`Laporan kelas: ${cls.title}`)}
                              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                            >
                              View Report
                            </button>
                          )}

                          {cls.primaryAction?.type === 'view' && (
                            <button
                              onClick={() => alert(`Lihat arsip kelas: ${cls.title}`)}
                              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                            >
                              View Class
                            </button>
                          )}

                          {cls.secondaryAction?.type === 'clone' && (
                            <button
                              onClick={() => alert(`Duplikasi kelas: ${cls.title}`)}
                              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                            >
                              Clone Class
                            </button>
                          )}

                          {cls.secondaryAction?.type === 'unarchive' && (
                            <button
                              onClick={() => alert(`Buka arsip kelas: ${cls.title}`)}
                              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                            >
                              Unarchive
                            </button>
                          )}

                          {/* Common secondary buttons */}
                          {!cls.secondaryAction && cls.status !== 'completed' && (
                            <>
                              <button 
                                onClick={() => alert(`Lihat detail kelas: ${cls.title}`)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                              >
                                View
                              </button>
                              <button 
                                onClick={() => alert(`Edit kelas: ${cls.title}`)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                              >
                                Edit
                              </button>
                            </>
                          )}

                          {/* More Options Dropdown */}
                          <button className="p-2 text-gray-400 hover:text-gray-700 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

              </div>

              {/* RIGHT SIDEBAR WIDGETS COLUMN (1/3 width) */}
              <div className="w-full lg:w-80 xl:w-88 space-y-6 shrink-0">
                
                {/* Widget 1: Today's Schedule */}
                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-extrabold text-gray-900">Today's Schedule</h2>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {todayScheduleItems.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-14">
                            <span className="block font-extrabold text-gray-900 text-[11px] leading-tight">{item.timeStart}</span>
                            <span className="block text-[9px] text-gray-400 leading-tight">{item.timeEnd}</span>
                          </div>
                          <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-gray-900 truncate leading-snug">{item.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate">
                              {item.statusBadge ? (
                                <span className="text-red-600 font-bold">{item.statusBadge} • {item.subtext}</span>
                              ) : (
                                item.subtext
                              )}
                            </p>
                          </div>
                        </div>

                        {item.hasJoin ? (
                          <button 
                            onClick={() => onStartLive({
                              title: item.title,
                              tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                              image: item.image
                            })}
                            className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
                          >
                            Join
                          </button>
                        ) : (
                          <button className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer shrink-0">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Widget 2: Class Statistics */}
                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-extrabold text-gray-900">Class Statistics</h2>
                    <select className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer focus:outline-none">
                      <option>Last 30 days</option>
                      <option>Last 6 months</option>
                      <option>This Year</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {classStats.map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div key={i} className="p-3 rounded-2xl bg-[#F8FAFC] border border-gray-100 flex items-start justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[10px] text-gray-400 font-medium">{stat.label}</span>
                            <div className="text-lg font-black text-gray-900">{stat.value}</div>
                            <span className="text-[10px] text-emerald-600 font-bold">{stat.change}</span>
                          </div>
                          <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Widget 3: Quick Actions */}
                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-3">
                  <h2 className="text-sm font-extrabold text-gray-900">Quick Actions</h2>
                  <div className="space-y-2">
                    <button 
                      onClick={() => alert('Membuka form buat kelas baru')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-emerald-700" />
                      <span>Create New Class</span>
                    </button>
                    <button 
                      onClick={() => alert('Membuka upload materi PDF / Video')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-blue-700" />
                      <span>Upload Material</span>
                    </button>
                    <button 
                      onClick={() => alert('Membuka form penugasan baru')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-purple-700" />
                      <span>Create Assignment</span>
                    </button>
                    <button 
                      onClick={() => alert('Membuka form kuis baru')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4 text-amber-700" />
                      <span>Create Quiz</span>
                    </button>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-emerald-700" />
                      <span>Manage Schedule</span>
                    </button>
                  </div>
                </div>

                {/* Widget 4: Schedule Promo Helper */}
                <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-3xl border border-emerald-100 p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600/10 text-[#114B44] flex items-center justify-center shrink-0">
                      <CalendarPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-900">Kelola jadwal dengan mudah</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">
                        Atur kelas recurring, tambah waktu tersedia, dan biarkan siswa booking kelasmu.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveNav('schedule')}
                    className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Open Schedule →
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW 2: DASHBOARD OVERVIEW CANVAS                         */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* Top Greeting Header with Month Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Welcome back, {teacherName.split(' ')[0]}!
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Here's what is happening with your classes today.
                  </p>
                </div>

                {/* Period Selector */}
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <div className="relative">
                    <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold text-xs px-4 py-2 rounded-xl shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{selectedPeriod}</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Total Students</span>
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">1,240</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12% this month</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Active Classes</span>
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">8</div>
                  <div className="flex items-center gap-1 text-[11px] text-blue-600 font-bold mt-1">
                    <span>+2 new</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Total Earnings</span>
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">18,450 <span className="text-xs font-bold text-gray-400">EGP</span></div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+8% from last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Average Rating</span>
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                      <Star className="w-4 h-4 fill-purple-600" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3 flex items-center gap-1">
                    <span>4.9</span>
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline -mt-1" />
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mt-1">
                    Based on 254 reviews
                  </div>
                </div>
              </div>

              {/* Section 1: Today's Scheduled Classes & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Cols: Today's Classes */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-extrabold text-gray-900">Today's Classes</h2>
                      <p className="text-xs text-gray-400 mt-0.5">3 live interactive sessions scheduled for today</p>
                    </div>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Schedule</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {todaysClasses.map((cls) => (
                      <div 
                        key={cls.id}
                        className="p-3.5 rounded-2xl border border-gray-100 hover:border-gray-200 bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="text-center shrink-0 w-14 bg-white p-2 rounded-xl border border-gray-200">
                            <span className="block text-xs font-extrabold text-gray-900 leading-tight">{cls.timeStart}</span>
                            <span className="block text-[10px] text-gray-400 leading-tight">{cls.timeEnd}</span>
                          </div>

                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-emerald-50 border border-emerald-100 shrink-0">
                            <img 
                              src={cls.image} 
                              alt={cls.title} 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                          </div>

                          <div>
                            <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-snug">{cls.title}</h4>
                            <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              <span>{cls.type}</span>
                              <span>•</span>
                              <span>{cls.studentsCount} students</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <button
                            onClick={() => onStartLive({
                              title: cls.title,
                              tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                              image: cls.image
                            })}
                            className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                          >
                            <Radio className="w-3 h-3 animate-pulse" />
                            <span>Start Class</span>
                          </button>
                          <button 
                            onClick={() => alert(`Edit materi kelas: ${cls.title}`)}
                            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 1 Col: Quick Actions */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <h2 className="text-base font-extrabold text-gray-900">Quick Actions</h2>
                  
                  <div className="space-y-2.5">
                    <button 
                      onClick={() => alert('Membuka form buat kelas baru')}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-all cursor-pointer shadow-xs"
                    >
                      <PlusCircle className="w-4 h-4 text-emerald-300" />
                      <span>Create New Class</span>
                    </button>

                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-emerald-700" />
                      <span>Schedule Class</span>
                    </button>

                    <button 
                      onClick={() => alert('Membuka upload materi PDF / Video')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-emerald-700" />
                      <span>Upload Material</span>
                    </button>

                    <button 
                      onClick={() => onStartLive({
                        title: 'Nahwu Intermediate (Live Class)',
                        tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                        image: '/images/class_nahwu.jpg'
                      })}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-all cursor-pointer shadow-xs"
                    >
                      <Video className="w-4 h-4 text-emerald-300" />
                      <span>Start Live Class</span>
                    </button>

                    <button 
                      onClick={() => setActiveNav('earnings')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <DollarSign className="w-4 h-4 text-emerald-700" />
                      <span>View Earnings</span>
                    </button>

                    <button 
                      onClick={() => setActiveNav('students')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>View Students</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Section 2: Charts (Student Growth & Earnings Overview) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Student Growth Chart */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">Student Growth</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">Total enrolled students over time</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                      <span>Last 6 months</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>

                  {/* Bar Chart Visualization */}
                  <div className="pt-6">
                    <div className="relative h-48">
                      {/* Horizontal Guide Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                      </div>

                      {/* Bars */}
                      <div className="relative h-full flex items-end justify-between gap-1.5 sm:gap-3 px-1 z-10">
                        {[
                          { month: 'Jan', val: 500, height: '40%' },
                          { month: 'Feb', val: 650, height: '50%' },
                          { month: 'Mar', val: 750, height: '58%' },
                          { month: 'Apr', val: 820, height: '65%' },
                          { month: 'May', val: 900, height: '72%' },
                          { month: 'Jun', val: 980, height: '78%' },
                          { month: 'Jul', val: 1050, height: '84%' },
                          { month: 'Aug', val: 1150, height: '90%' },
                          { month: 'Sep', val: 1240, height: '98%', active: true },
                        ].map((bar) => (
                          <div key={bar.month} className="flex-1 h-full flex flex-col justify-end items-center gap-2 group relative">
                            {bar.active && (
                              <div className="absolute -top-3 bg-[#0F172A] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap z-20 flex flex-col items-center">
                                <span>Sep 2026: 1,240 students</span>
                                <div className="w-2 h-2 bg-[#0F172A] rotate-45 -mb-1 mt-0.5"></div>
                              </div>
                            )}
                            <div className="w-full flex-1 flex items-end justify-center">
                              <div 
                                className={`w-full max-w-[32px] rounded-t-lg transition-all duration-500 cursor-pointer ${
                                  bar.active 
                                    ? 'bg-gradient-to-t from-[#0A302B] to-[#114B44] shadow-md' 
                                    : 'bg-[#D1FAE5] hover:bg-[#A7F3D0]'
                                }`}
                                style={{ height: bar.height }}
                              ></div>
                            </div>
                            <span className={`text-[10px] font-semibold ${bar.active ? 'text-[#114B44] font-bold' : 'text-gray-400'}`}>
                              {bar.month}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings Overview Chart */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">Earnings Overview</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">Monthly revenue in EGP</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                      <span>Last 6 months</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>

                  {/* Line/Area Chart Visualization */}
                  <div className="pt-6">
                    <div className="relative h-48 flex flex-col justify-between">
                      {/* Floating Tooltip */}
                      <div className="absolute -top-3 right-4 bg-[#0F172A] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg z-20 flex flex-col items-center">
                        <span>Sep 2026: 18,450 EGP</span>
                        <div className="w-2 h-2 bg-[#0F172A] rotate-45 -mb-1 mt-0.5"></div>
                      </div>

                      {/* Horizontal Guide Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">20k</div>
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">15k</div>
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">10k</div>
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">5k</div>
                      </div>
                      
                      {/* Stylized SVG Chart */}
                      <div className="relative flex-1 w-full flex items-end z-10">
                        <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="earnGradTeacherOverview" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#114B44" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#114B44" stopOpacity="0.02" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 95 Q 60 85, 120 72 T 250 50 T 380 32 T 500 10 L 500 120 L 0 120 Z"
                            fill="url(#earnGradTeacherOverview)"
                          />
                          <path
                            d="M 0 95 Q 60 85, 120 72 T 250 50 T 380 32 T 500 10"
                            fill="none"
                            stroke="#114B44"
                            strokeWidth="3.5"
                          />
                          <circle cx="500" cy="10" r="5" fill="#114B44" stroke="#ffffff" strokeWidth="2.5" />
                        </svg>
                      </div>

                      <div className="flex justify-between text-[10px] text-gray-400 font-semibold px-2 pt-2 border-t border-gray-100">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Section 3: Recent Students & Recent Reviews */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Students */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">Recent Students</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentStudents.map((s, i) => (
                      <div key={i} className="py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                            <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-xs text-gray-900">{s.name}</h4>
                            <p className="text-[11px] text-gray-400">{s.classEnrolled}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">Recent Reviews</h3>
                    <button 
                      onClick={() => alert('Semua review')}
                      className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentReviews.map((r, i) => (
                      <div key={i} className="py-3 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                          <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-extrabold text-xs text-gray-900">{r.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-xs font-bold text-gray-700">{r.rating}</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-500 italic">"{r.comment}"</p>
                        </div>
                      </div>
                    ))}
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
