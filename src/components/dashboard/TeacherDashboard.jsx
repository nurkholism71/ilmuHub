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
  Share2
} from 'lucide-react';

export default function TeacherDashboard({ user, onStartLive, onManageCourses, onBackToHome }) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selectedPeriod, setSelectedPeriod] = useState('Sep 2026');
  const [classFilter, setClassFilter] = useState('all');

  const teacherName = user?.name || 'Ahmed Mohamed';
  const teacherEmail = user?.email || 'ahmed.mohamed@ilmhub.com';

  // Navigation Items matching the left sidebar in reference
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'My Classes', icon: BookOpen },
    { id: 'create', label: 'Create Class', icon: PlusCircle },
    { id: 'live', label: 'Live Classroom', icon: Video, badge: 'LIVE' },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '3' },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Today's Scheduled Classes
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
      image: '/images/class_balaghah.jpg',
    },
    {
      id: 'tc-3',
      timeStart: '19:00',
      timeEnd: '20:30',
      title: 'Arabic Conversation',
      studentsCount: 32,
      type: 'Live Class',
      image: '/images/class_quran.jpg',
    },
  ];

  // My Classes catalog
  const myClasses = [
    {
      id: 'c-1',
      title: 'Nahwu for Beginners',
      status: 'Published',
      students: 320,
      rating: 4.9,
      reviews: 86,
      price: 'Free',
      image: '/images/class_nahwu.jpg',
      category: 'all',
    },
    {
      id: 'c-2',
      title: 'Sharaf Intermediate',
      status: 'Published',
      students: 280,
      rating: 4.8,
      reviews: 64,
      price: '200 EGP',
      image: '/images/class_balaghah.jpg',
      category: 'live',
    },
    {
      id: 'c-3',
      title: 'Arabic Conversation',
      status: 'Published',
      students: 450,
      rating: 4.9,
      reviews: 102,
      price: '150 EGP',
      image: '/images/class_quran.jpg',
      category: 'live',
    },
  ];

  const recentStudents = [
    { name: 'Omar Hassan', classEnrolled: 'Joined Nahwu Intermediate', time: '2 hours ago', avatar: '/images/student_omar.jpg' },
    { name: 'Fatimah Ali', classEnrolled: 'Joined Sharaf Basic', time: '5 hours ago', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { name: 'Youssef Tarek', classEnrolled: 'Joined Arabic Conversation', time: '1 day ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  ];

  const recentReviews = [
    { name: 'Sara Ahmad', rating: '5.0', comment: 'Ustadz sangat jelas dalam menjelaskan. Barakallah.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
    { name: 'Ali Mahmoud', rating: '4.8', comment: 'Kelasnya sangat bermanfaat dan terstruktur.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Aisha Khaled', rating: '5.0', comment: 'Penjelasan mudah dipahami, sangat membantu.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-gray-800">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
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
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search students, classes..."
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all"
            />
          </div>
        </div>

        {/* Right Actions: Notifications, Messages, User Profile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Messages */}
          <button className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Profile Capsule */}
          <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
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
              <span className="block text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Tutor</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout with Left Sidebar + Expanded Main Canvas */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-56 lg:w-64 bg-white border-r border-gray-200 p-4 shrink-0 hidden md:block">
          <div className="space-y-1">
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
                        title: 'Nahwu Intermediate (Live Class)',
                        tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                        image: '/images/class_nahwu.jpg'
                      });
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                        : isActive ? 'bg-white/20 text-white' : 'bg-emerald-100 text-[#114B44]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* MAIN CANVAS (BESAR & RAPI) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 overflow-y-auto">
          
          {/* Top Greeting Header with Month Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Welcome back, {teacherName.split(' ')[0]}!
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Here's an overview of your teaching activity.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 cursor-pointer">
                <span>{selectedPeriod}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>
              <button 
                onClick={() => alert('Filter data mengajar')}
                className="p-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 shadow-2xs cursor-pointer"
                title="Filter Options"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Primary Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Total Students */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium">Total Students</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">1,240</div>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <span>+12% this month</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
            </div>

            {/* Active Classes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium">Active Classes</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">8</div>
                <span className="text-[11px] font-bold text-blue-600 flex items-center gap-1 mt-1">
                  <span>+2 new</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>

            {/* Total Earnings */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium">Total Earnings</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">18,450 EGP</div>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <span>+8% this month</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>

            {/* Class Reviews */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium">Class Reviews</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 flex items-center gap-1.5">
                  <span>4.9</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
                </div>
                <span className="text-[11px] text-gray-400 font-medium mt-1 block">
                  (234 reviews)
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
            </div>

          </div>

          {/* Section 1: Today's Classes (Left) & Quick Actions (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Today's Classes */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-extrabold text-gray-900">Today's Classes</h2>
                <button 
                  onClick={() => setActiveNav('schedule')}
                  className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All</span>
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
                      {/* Time Capsule */}
                      <div className="text-center shrink-0 w-14 bg-white p-2 rounded-xl border border-gray-200">
                        <span className="block text-xs font-extrabold text-gray-900 leading-tight">{cls.timeStart}</span>
                        <span className="block text-[10px] text-gray-400 leading-tight">{cls.timeEnd}</span>
                      </div>

                      {/* Course Thumbnail */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                        <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
                      </div>

                      {/* Info */}
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

                    {/* Action Buttons */}
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

          {/* Section 2: My Classes Catalog */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-extrabold text-gray-900">My Classes</h2>
                <div className="flex items-center gap-2 mt-2">
                  {['All (8)', 'Live (3)', 'Draft (1)', 'Archived (0)'].map((tab, idx) => (
                    <button
                      key={tab}
                      onClick={() => setClassFilter(idx === 0 ? 'all' : idx === 1 ? 'live' : 'draft')}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                        idx === 0 
                          ? 'bg-[#114B44] text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={onManageCourses}
                className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-center"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3 Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {myClasses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        {course.status}
                      </span>
                    </div>

                    <div className="p-4 space-y-2.5">
                      <h3 className="font-extrabold text-sm text-gray-900 line-clamp-1">{course.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-gray-400" />
                          <span>{course.students} students</span>
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-gray-700">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{course.rating} ({course.reviews})</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex items-center justify-between border-t border-gray-100 mt-2">
                    <span className="text-xs font-extrabold text-[#114B44]">{course.price}</span>
                    <button 
                      onClick={() => alert(`Kelola materi & murid kelas ${course.title}`)}
                      className="text-xs font-bold text-gray-700 hover:text-[#114B44] hover:underline cursor-pointer"
                    >
                      Manage Class
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Charts (Student Growth & Earnings Overview) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Student Growth Chart */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">Student Growth</h3>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                  <span>Last 6 months</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>
              </div>

              {/* Bar Chart Visualization */}
              <div className="pt-4">
                <div className="relative h-44 flex items-end justify-between gap-2 sm:gap-4 px-2">
                  {[
                    { month: 'Jan', val: 500 },
                    { month: 'Feb', val: 650 },
                    { month: 'Mar', val: 750 },
                    { month: 'Apr', val: 820 },
                    { month: 'May', val: 900 },
                    { month: 'Jun', val: 980 },
                    { month: 'Jul', val: 1050 },
                    { month: 'Aug', val: 1150 },
                    { month: 'Sep', val: 1240, active: true },
                  ].map((bar, i) => (
                    <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group relative">
                      {bar.active && (
                        <div className="absolute -top-10 bg-gray-900 text-white text-[10px] font-extrabold px-2 py-1 rounded-md shadow-md whitespace-nowrap z-10 animate-bounce">
                          Sep 2026: 1,240 students
                        </div>
                      )}
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-500 ${
                          bar.active ? 'bg-[#114B44]' : 'bg-emerald-100 hover:bg-emerald-200'
                        }`}
                        style={{ height: `${(bar.val / 1300) * 100}%` }}
                      ></div>
                      <span className="text-[10px] text-gray-400 font-semibold">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Earnings Overview Chart */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">Earnings Overview</h3>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                  <span>Last 6 months</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>
              </div>

              {/* Line/Area Chart Visualization */}
              <div className="pt-4">
                <div className="relative h-44 flex flex-col justify-between">
                  <div className="absolute top-0 right-12 bg-gray-900 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-md">
                    Sep 2026: 18,450 EGP
                  </div>
                  
                  {/* Stylized SVG Chart */}
                  <svg className="w-full h-36 overflow-visible" viewBox="0 0 500 120">
                    <defs>
                      <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#114B44" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#114B44" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 100 Q 80 85, 140 75 T 280 50 T 420 30 T 500 15 L 500 120 L 0 120 Z"
                      fill="url(#earnGrad)"
                    />
                    <path
                      d="M 0 100 Q 80 85, 140 75 T 280 50 T 420 30 T 500 15"
                      fill="none"
                      stroke="#114B44"
                      strokeWidth="3.5"
                    />
                    <circle cx="500" cy="15" r="5" fill="#114B44" stroke="#ffffff" strokeWidth="2" />
                  </svg>

                  <div className="flex justify-between text-[10px] text-gray-400 font-semibold px-1">
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

          {/* Section 4: Recent Students & Recent Reviews */}
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

        </main>
      </div>

    </div>
  );
}
