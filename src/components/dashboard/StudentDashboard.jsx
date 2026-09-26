import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Compass, 
  Calendar, 
  FileText, 
  Award, 
  Bookmark, 
  MessageSquare, 
  Settings, 
  Search, 
  Bell, 
  ChevronRight, 
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
  Plus
} from 'lucide-react';

export default function StudentDashboard({ user, onJoinLive, onExploreCourses, onBackToHome }) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [classFilter, setClassFilter] = useState('all');

  const studentName = user?.name || 'Omar Hassan';
  const studentEmail = user?.email || 'student@ilmhub.com';

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'My Classes', icon: BookOpen },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'saved', label: 'Saved Tutors', icon: Bookmark },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '2' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const myClasses = [
    {
      id: 'sc-1',
      title: 'Nahwu Intermediate',
      tutor: 'Ahmed Mohamed',
      progress: 64,
      image: '/images/class_nahwu.jpg',
    },
    {
      id: 'sc-2',
      title: 'Sharaf Basic',
      tutor: 'Ahmed Mohamed',
      progress: 40,
      image: '/images/class_balaghah.jpg',
    },
    {
      id: 'sc-3',
      title: 'Quran Tajweed',
      tutor: 'Fatimah Zahra',
      progress: 80,
      image: '/images/class_quran.jpg',
    },
    {
      id: 'sc-4',
      title: 'Arabic Conversation',
      tutor: 'Sara Ahmed',
      progress: 25,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const recommendedCourses = [
    {
      id: 'rc-1',
      title: 'Arabic Writing Skills',
      tutor: 'Huda Mahmoud',
      rating: 4.9,
      students: 320,
      price: 'Free',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 'rc-2',
      title: 'Islamic History',
      tutor: 'Dr. Omar Farouk',
      rating: 4.9,
      students: 210,
      price: '150 EGP',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 'rc-3',
      title: 'English for University',
      tutor: 'Sara Ahmed',
      rating: 4.9,
      students: 540,
      price: 'Free',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    },
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
              placeholder="Search classes, tutors, subjects..."
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          <button className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Profile Capsule */}
          <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300">
              <img 
                src="/images/student_omar.jpg" 
                alt={studentName} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80';
                }}
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-xs font-bold text-gray-900 leading-tight">{studentName}</span>
              <span className="block text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Student</span>
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
                    if (item.id === 'explore') {
                      onExploreCourses();
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
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-[#114B44]">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* MAIN CANVAS */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 overflow-y-auto">
          
          {/* Top Greeting Header with Date */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Welcome back, {studentName.split(' ')[0]}!
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Continue your learning journey.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3.5 py-2 rounded-xl shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              <span>Wednesday, 24 Sep 2026</span>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Enrolled Classes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium">Enrolled Classes</span>
                <div className="text-2xl font-extrabold text-gray-900 mt-0.5">5</div>
              </div>
            </div>

            {/* Completed Lessons */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium">Completed</span>
                <div className="text-2xl font-extrabold text-gray-900 mt-0.5">12 Lessons</div>
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium">Certificates</span>
                <div className="text-2xl font-extrabold text-gray-900 mt-0.5">3</div>
              </div>
            </div>

            {/* Learning Streak */}
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

          {/* Section: Continue Learning (Left Big Card) & Next Class (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Continue Learning Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between">
              <div>
                <div className="p-6 pb-3 flex items-center justify-between">
                  <h2 className="text-base font-extrabold text-gray-900">Continue Learning</h2>
                  <span className="text-xs font-bold text-[#114B44] bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span>📊 64%</span>
                  </span>
                </div>

                <div className="px-6 space-y-4">
                  <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gray-100">
                    <img 
                      src="/images/class_nahwu.jpg" 
                      alt="Nahwu Intermediate" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-lg text-gray-900">Nahwu Intermediate</h3>
                    <p className="text-xs text-gray-500 mt-0.5">by Ahmed Mohamed</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-3">
                      <div className="h-full bg-[#114B44] rounded-full w-[64%]"></div>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">Lesson 4 of 12: <strong className="text-gray-700">Kana and its Sisters</strong></p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4">
                <button
                  onClick={() => onJoinLive({
                    title: 'Nahwu Intermediate',
                    tutor: { name: 'Ahmed Mohamed', avatar: '/images/tutor_ahmed.jpg' },
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
                  <button className="text-[11px] font-bold text-[#114B44] hover:underline">View All</button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 shrink-0">
                    <span className="block text-base font-extrabold text-gray-900">24</span>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase">Sep</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-gray-900">Sharaf Basic</h4>
                    <span className="text-[11px] text-gray-500 block">🕒 13:00 - 14:30 (GMT+2)</span>
                    <span className="text-[11px] text-gray-400 block">with Ahmed Mohamed</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => onJoinLive({
                      title: 'Sharaf Basic',
                      tutor: { name: 'Ahmed Mohamed', avatar: '/images/tutor_ahmed.jpg' },
                      image: '/images/class_balaghah.jpg'
                    })}
                    className="flex-1 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Join Class
                  </button>
                  <button 
                    onClick={() => alert('Jadwal ditambahkan ke kalender!')}
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
                  <button className="text-[11px] font-bold text-[#114B44] hover:underline">View All</button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-10">
                      <span className="block font-bold text-gray-900">26</span>
                      <span className="block text-[9px] text-gray-400 uppercase">Sep</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Arabic Conversation</h5>
                      <p className="text-[11px] text-gray-400">18:00 - 20:30 • with Sara Ahmed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-10">
                      <span className="block font-bold text-gray-900">28</span>
                      <span className="block text-[9px] text-gray-400 uppercase">Sep</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Quran Tajweed</h5>
                      <p className="text-[11px] text-gray-400">10:00 - 11:30 • with Fatimah Zahra</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Section: My Classes (4 Horizontal Cards) */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-extrabold text-gray-900">My Classes</h2>
                <div className="flex items-center gap-2 mt-2">
                  {['All (5)', 'Ongoing (3)', 'Completed (1)', 'Saved (1)'].map((tab, idx) => (
                    <button
                      key={tab}
                      onClick={() => setClassFilter(idx === 0 ? 'all' : idx === 1 ? 'ongoing' : 'completed')}
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
                onClick={onExploreCourses}
                className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-center"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {myClasses.map((c) => (
                <div 
                  key={c.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3.5 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-extrabold text-xs text-gray-900 truncate">{c.title}</h4>
                        <button className="text-gray-400 hover:text-gray-600 font-bold">+</button>
                      </div>
                      <p className="text-[11px] text-gray-400">{c.tutor}</p>
                    </div>
                  </div>

                  <div className="p-3.5 pt-0">
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#114B44] rounded-full" style={{ width: `${c.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Learning Progress Chart & Recommended for You */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Learning Progress (Left 2 Cols) */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-gray-900">Learning Progress</h3>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                  <span>This Month</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>
              </div>

              {/* Bar Chart */}
              <div className="pt-2">
                <div className="h-32 flex items-end justify-between gap-3 px-2">
                  {[40, 65, 30, 85, 45, 95, 60, 75, 90, 70, 80].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div 
                        className="w-full bg-[#114B44] rounded-t-md hover:bg-[#0D3B35] transition-all"
                        style={{ height: `${val}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                <div className="p-2 bg-gray-50 rounded-xl">
                  <span className="text-[10px] text-gray-400 block">Lessons Completed</span>
                  <span className="text-base font-extrabold text-gray-900">12</span>
                </div>
                <div className="p-2 bg-gray-50 rounded-xl">
                  <span className="text-[10px] text-gray-400 block">Study Time</span>
                  <span className="text-base font-extrabold text-gray-900">18 hours</span>
                </div>
                <div className="p-2 bg-gray-50 rounded-xl">
                  <span className="text-[10px] text-gray-400 block">Average Score</span>
                  <span className="text-base font-extrabold text-emerald-600">92%</span>
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
                    <div className="flex items-center gap-2.5">
                      <img src={rc.avatar} alt={rc.tutor} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                      <div>
                        <h5 className="font-extrabold text-xs text-gray-900 line-clamp-1">{rc.title}</h5>
                        <p className="text-[10px] text-gray-400">{rc.tutor}</p>
                        <div className="flex items-center gap-1 text-[10px] text-gray-500">
                          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                          <span>{rc.rating} ({rc.students} students)</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-[#114B44]">{rc.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row: Explore More Classes Banner + Your Certificates */}
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
                <p className="text-xs text-gray-200">Temukan ribuan kelas dari tutor berpengalaman.</p>
              </div>

              <div className="relative z-10 mt-6 max-w-md">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search classes, subjects, or tutors..."
                    className="w-full bg-white/95 text-gray-900 rounded-full pl-4 pr-10 py-2.5 text-xs placeholder-gray-400 focus:outline-none"
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
                <button className="text-xs font-bold text-[#114B44] hover:underline">View All</button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-gray-900">Nahwu for Beginners</h5>
                    <p className="text-[10px] text-gray-400">Completed on 12 Aug 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-gray-900">Arabic Conversation</h5>
                    <p className="text-[10px] text-gray-400">Completed on 5 Sep 2026</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
}
