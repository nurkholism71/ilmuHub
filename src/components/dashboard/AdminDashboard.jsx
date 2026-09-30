import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Video, 
  Calendar, 
  FileText, 
  HelpCircle, 
  Award, 
  MessageSquare, 
  DollarSign, 
  BarChart2, 
  Layers, 
  Settings, 
  Link2, 
  FileBarChart, 
  LifeBuoy, 
  Search, 
  Bell, 
  Globe, 
  ChevronDown, 
  ChevronRight, 
  TrendingUp, 
  Download, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  LogOut, 
  UserCheck, 
  Coins, 
  MoreVertical, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Plus, 
  Eye, 
  Filter, 
  Check, 
  Radio
} from 'lucide-react';

export default function AdminDashboard({ user, onNavigateToLive, onBackToHome, onLogout, onSwitchRole }) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [dateRangeFilter, setDateRangeFilter] = useState('1 Sep 2026 - 30 Sep 2026');
  const [isDateRangeDropdownOpen, setIsDateRangeDropdownOpen] = useState(false);
  const [revenuePeriodFilter, setRevenuePeriodFilter] = useState('All Time');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [contentManagementOpen, setContentManagementOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);

  const adminName = user?.name || 'Admin';
  const adminRole = 'Super Admin';
  const adminEmail = user?.email || 'admin@ilmhub.com';
  const adminAvatar = user?.avatar || '/images/tutor_ahmed.jpg';

  // Navigation Items matching media_1790730977291.jpg
  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: GraduationCap },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'live', label: 'Live Classrooms', icon: Video },
    { id: 'schedules', label: 'Schedules', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  ];

  const systemNavItems = [
    { id: 'integrations', label: 'Integrations', icon: Link2 },
    { id: 'reports', label: 'Reports', icon: FileBarChart },
    { id: 'help', label: 'Help & Support', icon: LifeBuoy },
  ];

  // Top 4 Main KPI Cards Data
  const topMetrics = [
    {
      id: 'users',
      title: 'Total Users',
      value: '12,548',
      change: '12% from last month',
      isPositive: true,
      icon: Users,
      iconColor: 'bg-blue-100 text-blue-600',
      graphColor: 'text-blue-500'
    },
    {
      id: 'classes',
      title: 'Total Classes',
      value: '248',
      change: '18% from last month',
      isPositive: true,
      icon: GraduationCap,
      iconColor: 'bg-emerald-100 text-emerald-600',
      graphColor: 'text-emerald-500'
    },
    {
      id: 'enrollments',
      title: 'Total Enrollments',
      value: '3,862',
      change: '24% from last month',
      isPositive: true,
      icon: FileText,
      iconColor: 'bg-purple-100 text-purple-600',
      graphColor: 'text-purple-500'
    },
    {
      id: 'earnings',
      title: 'Total Earnings',
      value: '$5,482.00',
      change: '32% from last month',
      isPositive: true,
      icon: Coins,
      iconColor: 'bg-amber-100 text-amber-600',
      graphColor: 'text-amber-500'
    }
  ];

  // Secondary 4 Operational Mini KPI Cards Data
  const secondaryMetrics = [
    {
      id: 'live',
      title: 'Live Classes Today',
      value: '12',
      subtext: '2 ongoing now',
      change: '↑ 33%',
      icon: BookOpen,
      iconColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'assignments',
      title: 'Assignments Submitted',
      value: '284',
      change: '↑ 21%',
      icon: FileText,
      iconColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'quizzes',
      title: 'Quizzes Completed',
      value: '512',
      change: '↑ 28%',
      icon: HelpCircle,
      iconColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'certificates',
      title: 'Certificates Issued',
      value: '176',
      change: '↑ 40%',
      icon: Award,
      iconColor: 'bg-amber-100 text-amber-700'
    }
  ];

  // User Distribution Data
  const userDistributionList = [
    { label: 'Students', pct: '65%', count: '8,156', color: 'bg-blue-500', dot: 'bg-blue-500' },
    { label: 'Teachers', pct: '18%', count: '2,259', color: 'bg-emerald-500', dot: 'bg-emerald-500' },
    { label: 'Admins', pct: '5%', count: '627', color: 'bg-purple-500', dot: 'bg-purple-500' },
    { label: 'Others', pct: '12%', count: '1,506', color: 'bg-amber-400', dot: 'bg-amber-400' },
  ];

  // Daily Revenue Bars Data (Sep 1 to Sep 30)
  const dailyRevenueBars = [
    { day: 1, val: 35 }, { day: 2, val: 55 }, { day: 3, val: 40 }, { day: 4, val: 65 }, { day: 5, val: 50 },
    { day: 6, val: 75 }, { day: 7, val: 95 }, { day: 8, val: 60 }, { day: 9, val: 70 }, { day: 10, val: 80 },
    { day: 11, val: 100 }, { day: 12, val: 85 }, { day: 13, val: 70 }, { day: 14, val: 60 }, { day: 15, val: 75 },
    { day: 16, val: 90 }, { day: 17, val: 80 }, { day: 18, val: 70 }, { day: 19, val: 65 }, { day: 20, val: 85 },
    { day: 21, val: 95 }, { day: 22, val: 70 }, { day: 23, val: 60 }, { day: 24, val: 75 }, { day: 25, val: 85 },
    { day: 26, val: 65 }, { day: 27, val: 70 }, { day: 28, val: 55 }, { day: 29, val: 75 }, { day: 30, val: 90 },
  ];

  // Recent Activities Data
  const recentActivitiesList = [
    {
      id: 'act-1',
      title: 'New user registered',
      sub: 'Aisha Rahman joined as a student',
      time: '10 minutes ago',
      avatar: '/images/student_aisha.jpg',
      icon: null
    },
    {
      id: 'act-2',
      title: 'Class created',
      sub: 'Dr. Layla Ahmad created "Academic Writing"',
      time: '25 minutes ago',
      icon: GraduationCap,
      iconBg: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'act-3',
      title: 'Assignment submitted',
      sub: 'Omar Hassan submitted Week 3 assignment',
      time: '1 hour ago',
      icon: FileText,
      iconBg: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'act-4',
      title: 'Quiz completed',
      sub: 'Fatimah Ali completed "Arabic Vocabulary Quiz"',
      time: '2 hours ago',
      icon: HelpCircle,
      iconBg: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'act-5',
      title: 'Certificate issued',
      sub: 'Muhammad Khan earned certificate for "Islamic History"',
      time: '3 hours ago',
      icon: Award,
      iconBg: 'bg-amber-100 text-amber-700'
    }
  ];

  // Top Classes Data
  const topClassesList = [
    {
      id: 'tc-1',
      rank: 1,
      title: 'Nahwu for Beginners',
      students: '342 students',
      revenue: '$687.00',
      image: '/images/class_nahwu.jpg'
    },
    {
      id: 'tc-2',
      rank: 2,
      title: 'Arabic Conversation',
      students: '287 students',
      revenue: '$574.00',
      image: '/images/class_conversation.jpg'
    },
    {
      id: 'tc-3',
      rank: 3,
      title: 'Academic Writing',
      students: '254 students',
      revenue: '$508.00',
      image: '/images/class_sharaf.jpg'
    },
    {
      id: 'tc-4',
      rank: 4,
      title: 'Islamic History',
      students: '221 students',
      revenue: '$442.00',
      image: '/images/class_tajweed.jpg'
    },
    {
      id: 'tc-5',
      rank: 5,
      title: 'Environmental Management',
      students: '198 students',
      revenue: '$396.00',
      image: '/images/class_balaghah.jpg'
    }
  ];

  // System Status Data
  const systemStatusList = [
    { name: 'Website', status: 'Operational' },
    { name: 'Live Classroom', status: 'Operational' },
    { name: 'Database', status: 'Operational' },
    { name: 'Payment Gateway', status: 'Operational' },
    { name: 'Email Service', status: 'Operational' },
    { name: 'File Storage', status: 'Operational' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans text-gray-800 antialiased selection:bg-[#114B44] selection:text-white overflow-hidden">
      
      {/* 1. TOP NAVBAR (Matching media_1790730977291.jpg) */}
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

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search users, classes, content, or reports..."
              className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Notifications Bell */}
          <button 
            onClick={() => alert('Notifikasi Admin: 5 laporan sistem baru menunggu tinjauan!')}
            className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
              5
            </span>
          </button>

          {/* Messages */}
          <button 
            onClick={() => setActiveNav('messages')}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <button 
            onClick={() => alert('Language: English / العربية')}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>English</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>

          {/* User Profile Capsule with Interactive Role Switcher & Logout */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 pl-2 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shadow-2xs shrink-0">
                <img 
                  src={adminAvatar} 
                  alt={adminName} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                />
              </div>
              <div className="hidden sm:block text-left">
                <span className="block text-xs font-extrabold text-gray-900 leading-tight">{adminName}</span>
                <span className="block text-[10px] text-gray-400 font-bold -mt-0.5">{adminRole}</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 text-xs animate-fadeIn">
                <div className="p-3 bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-xl mb-2 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-white/20 border border-white/30 shrink-0">
                    <img src={adminAvatar} alt={adminName} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-xs text-white truncate">{adminName}</h4>
                    <p className="text-[10px] text-gray-300 truncate">{adminEmail}</p>
                    <span className="inline-block mt-0.5 text-[9px] font-black px-2 py-0.2 bg-emerald-500 text-white rounded-full">
                      👑 Super Admin
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  {/* Switch to Teacher Mode */}
                  {onSwitchRole && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSwitchRole('teacher');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4 text-[#114B44]" />
                      <span>Switch to Teacher Mode</span>
                    </button>
                  )}

                  {/* Switch to Student Mode */}
                  {onSwitchRole && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSwitchRole('student');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-[#114B44]" />
                      <span>Switch to Student Mode</span>
                    </button>
                  )}

                  {/* Back to Public Site */}
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      onBackToHome();
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-gray-50 text-gray-700 font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                    <span>Back to Public Site</span>
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

      {/* 2. MAIN LAYOUT: Dark Left Sidebar + Spacious Scrollable Canvas */}
      <div className="flex-1 flex overflow-hidden w-full max-w-[1750px] mx-auto">
        
        {/* DARK THEMED LEFT SIDEBAR (Matching media_1790730977291.jpg) */}
        <aside className="w-60 lg:w-64 bg-[#0A1822] text-gray-300 p-3.5 shrink-0 hidden md:flex flex-col justify-between h-full overflow-y-auto no-scrollbar select-none">
          <div className="space-y-4">
            
            {/* ADMIN PANEL SECTION */}
            <div className="space-y-1">
              <span className="px-3 text-[10px] font-black uppercase tracking-wider text-gray-400 block pb-1">
                Admin Panel
              </span>

              {adminNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'live') {
                        onNavigateToLive({
                          title: 'Nahwu for Beginners (Super Admin Monitoring)',
                          tutor: { name: 'Ahmed Mohamed', avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_nahwu.jpg'
                        });
                        return;
                      }
                      setActiveNav(item.id);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}

              {/* Expandable Content Management */}
              <button
                onClick={() => setContentManagementOpen(!contentManagementOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-gray-400" />
                  <span>Content Management</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${contentManagementOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Expandable Settings */}
              <button
                onClick={() => setSettingsMenuOpen(!settingsMenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span>Settings</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${settingsMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* SYSTEM SECTION */}
            <div className="space-y-1 pt-2 border-t border-white/10">
              <span className="px-3 text-[10px] font-black uppercase tracking-wider text-gray-400 block pb-1">
                System
              </span>

              {systemNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </aside>

        {/* 3. SPACIOUS RIGHT MAIN CONTENT (Matching media_1790730977291.jpg) */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 pb-24">
          
          {/* HEADER GREETING & DATE FILTER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                <span>Welcome, Admin</span>
                <span>👋</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Here's an overview of your platform activity.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Date Filter */}
              <div className="relative">
                <button
                  onClick={() => setIsDateRangeDropdownOpen(!isDateRangeDropdownOpen)}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>{dateRangeFilter}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {isDateRangeDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-30 text-xs animate-fadeIn space-y-1">
                    {[
                      '1 Sep 2026 - 30 Sep 2026',
                      '1 Aug 2026 - 31 Aug 2026',
                      'Last 30 Days',
                      'Year to Date (2026)',
                      'All Time'
                    ].map((range) => (
                      <button
                        key={range}
                        onClick={() => {
                          setDateRangeFilter(range);
                          setIsDateRangeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                          dateRangeFilter === range ? 'bg-[#114B44] text-white' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{range}</span>
                        {dateRangeFilter === range && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Export Report Button */}
              <button
                onClick={() => setIsExportModalOpen(true)}
                className="flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-gray-500" />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* 4 PRIMARY STATS KPI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topMetrics.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.id} className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-xl ${card.iconColor} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">{card.title}</span>
                    </div>

                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">{card.value}</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>{card.change}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Sparkline Bar Indicator */}
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-gray-200 rounded-full h-4"></div>
                    <div className="w-1.5 bg-gray-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-gray-200 rounded-full h-5"></div>
                    <div className="w-1.5 bg-gray-200 rounded-full h-8"></div>
                    <div className={`w-1.5 rounded-full h-10 ${card.iconColor.split(' ')[0]}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MIDDLE SECTION: PLATFORM OVERVIEW MULTI-LINE CHART + USER DISTRIBUTION DONUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* PLATFORM OVERVIEW MULTI-LINE CHART (2 Cols) */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-extrabold text-base text-gray-900 tracking-tight">Platform Overview</h3>
                
                {/* 4 Multi-Line Legends */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs font-bold text-gray-600 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-[11px]">Users</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px]">Enrollments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                    <span className="text-[11px]">Classes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="text-[11px]">Earnings</span>
                  </div>
                </div>
              </div>

              {/* Multi-Line SVG Chart */}
              <div className="pt-2">
                <div className="flex items-end gap-2 h-56 w-full">
                  {/* Y-Axis Scale (0 to 800) */}
                  <div className="flex flex-col justify-between h-full text-[10px] font-bold text-gray-400 pr-1 shrink-0 pb-6 select-none">
                    <span>800</span>
                    <span>600</span>
                    <span>400</span>
                    <span>200</span>
                    <span>0</span>
                  </div>

                  {/* SVG Chart Area */}
                  <div className="relative flex-1 h-full flex flex-col justify-end">
                    {/* Horizontal Gridlines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 pb-6">
                      <div className="border-b border-gray-200 w-full"></div>
                      <div className="border-b border-gray-100 w-full"></div>
                      <div className="border-b border-gray-100 w-full"></div>
                      <div className="border-b border-gray-100 w-full"></div>
                      <div className="border-b border-gray-200 w-full"></div>
                    </div>

                    <svg className="w-full h-[80%] overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                      {/* 1: Users Curve (Blue) */}
                      <polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="10,170 80,140 160,110 240,125 320,85 400,105 480,70 560,95 640,60 690,75"
                      />
                      {/* Dots on Users curve */}
                      {[
                        [10,170], [80,140], [160,110], [240,125], [320,85], [400,105], [480,70], [560,95], [640,60], [690,75]
                      ].map(([cx, cy], i) => (
                        <circle key={`u-${i}`} cx={cx} cy={cy} r="3.5" fill="#ffffff" stroke="#3B82F6" strokeWidth="2" className="hover:scale-150 transition-transform cursor-pointer" />
                      ))}

                      {/* 2: Enrollments Curve (Green) */}
                      <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="10,180 80,165 160,135 240,145 320,115 400,130 480,95 560,110 640,85 690,90"
                      />
                      {/* Dots on Enrollments curve */}
                      {[
                        [10,180], [80,165], [160,135], [240,145], [320,115], [400,130], [480,95], [560,110], [640,85], [690,90]
                      ].map(([cx, cy], i) => (
                        <circle key={`e-${i}`} cx={cx} cy={cy} r="3.5" fill="#ffffff" stroke="#10B981" strokeWidth="2" className="hover:scale-150 transition-transform cursor-pointer" />
                      ))}

                      {/* 3: Classes Curve (Purple) */}
                      <polyline
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="10,190 80,182 160,170 240,175 320,155 400,165 480,140 560,150 640,130 690,135"
                      />
                      {/* Dots on Classes curve */}
                      {[
                        [10,190], [80,182], [160,170], [240,175], [320,155], [400,165], [480,140], [560,150], [640,130], [690,135]
                      ].map(([cx, cy], i) => (
                        <circle key={`c-${i}`} cx={cx} cy={cy} r="3.5" fill="#ffffff" stroke="#8B5CF6" strokeWidth="2" className="hover:scale-150 transition-transform cursor-pointer" />
                      ))}

                      {/* 4: Earnings Curve (Amber) */}
                      <polyline
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="10,195 80,190 160,185 240,188 320,175 400,180 480,160 560,170 640,155 690,160"
                      />
                      {/* Dots on Earnings curve */}
                      {[
                        [10,195], [80,190], [160,185], [240,188], [320,175], [400,180], [480,160], [560,170], [640,155], [690,160]
                      ].map(([cx, cy], i) => (
                        <circle key={`ea-${i}`} cx={cx} cy={cy} r="3.5" fill="#ffffff" stroke="#F59E0B" strokeWidth="2" className="hover:scale-150 transition-transform cursor-pointer" />
                      ))}
                    </svg>

                    {/* X-Axis Labels */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 pt-2 px-1 border-t border-gray-200 select-none">
                      <span>Sep 1</span>
                      <span>Sep 5</span>
                      <span>Sep 10</span>
                      <span>Sep 15</span>
                      <span>Sep 20</span>
                      <span>Sep 25</span>
                      <span>Sep 30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* USER DISTRIBUTION DONUT CHART (1 Col) */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <h3 className="font-extrabold text-base text-gray-900 tracking-tight">User Distribution</h3>

              {/* Donut Chart SVG Canvas */}
              <div className="flex flex-col items-center justify-center py-2">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                    
                    {/* Students (65% = 155.19) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      strokeDasharray="155.19 238.76"
                      strokeDashoffset="0"
                    />
                    
                    {/* Teachers (18% = 42.97) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="12"
                      strokeDasharray="42.97 238.76"
                      strokeDashoffset="-155.19"
                    />

                    {/* Admins (5% = 11.93) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="12"
                      strokeDasharray="11.93 238.76"
                      strokeDashoffset="-198.16"
                    />

                    {/* Others (12% = 28.65) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="12"
                      strokeDasharray="28.65 238.76"
                      strokeDashoffset="-210.09"
                    />
                  </svg>

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-base font-black text-gray-900 leading-tight">12,548</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Users</span>
                  </div>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                {userDistributionList.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.dot} shrink-0`}></span>
                      <span className="font-bold text-gray-700">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-gray-900">{item.pct}</span>
                      <span className="text-gray-400 font-semibold w-12 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SECONDARY ROW: 4 OPERATIONAL MINI CARDS (Left 2 Cols) + REVENUE OVERVIEW BAR CHART (Right 1 Col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* 4 MINI OPERATIONAL CARDS (2 Cols) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryMetrics.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.id} className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl ${card.iconColor} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 block">{card.title}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-gray-900 leading-tight">{card.value}</span>
                        {card.subtext && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md">
                            {card.subtext}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 block mt-0.5">{card.change}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* REVENUE OVERVIEW BAR CHART (1 Col) */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Revenue Overview</h3>
                <select
                  value={revenuePeriodFilter}
                  onChange={(e) => setRevenuePeriodFilter(e.target.value)}
                  className="bg-[#F8FAFC] border border-gray-200 rounded-lg px-2 py-1 text-[10.5px] font-bold text-gray-700 focus:outline-none cursor-pointer"
                >
                  <option value="All Time">All Time</option>
                  <option value="This Month">This Month</option>
                  <option value="This Year">This Year</option>
                </select>
              </div>

              {/* Bar Chart Canvas */}
              <div className="pt-2">
                <div className="flex items-end gap-1.5 h-36 w-full">
                  {/* Y-Axis scale */}
                  <div className="flex flex-col justify-between h-full text-[9px] font-bold text-gray-400 pr-1 shrink-0 pb-4 select-none">
                    <span>$600</span>
                    <span>$400</span>
                    <span>$200</span>
                    <span>$0</span>
                  </div>

                  <div className="relative flex-1 h-full flex flex-col justify-end">
                    {/* Gridlines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30 pb-4">
                      <div className="border-b border-gray-200 w-full"></div>
                      <div className="border-b border-gray-100 w-full"></div>
                      <div className="border-b border-gray-100 w-full"></div>
                      <div className="border-b border-gray-200 w-full"></div>
                    </div>

                    {/* Bars */}
                    <div className="relative z-0 h-[80%] flex items-end justify-between gap-1 px-0.5">
                      {dailyRevenueBars.map((bar, i) => (
                        <div
                          key={i}
                          className="flex-1 h-full flex flex-col items-center justify-end group cursor-pointer relative"
                        >
                          <div
                            className="w-full bg-emerald-400 hover:bg-emerald-600 rounded-t-xs transition-all duration-200"
                            style={{ height: `${bar.val}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    {/* X-Axis */}
                    <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 pt-1 border-t border-gray-200 select-none">
                      <span>Sep 1</span>
                      <span>Sep 5</span>
                      <span>Sep 10</span>
                      <span>Sep 15</span>
                      <span>Sep 20</span>
                      <span>Sep 25</span>
                      <span>Sep 30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM SECTION: 3 EQUAL COLUMNS (Recent Activities, Top Classes, System Status) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* COLUMN 1: RECENT ACTIVITIES */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Recent Activities</h3>
                <button
                  onClick={() => alert('Melihat seluruh riwayat log aktivitas...')}
                  className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>View All</span>
                  <span>→</span>
                </button>
              </div>

              <div className="space-y-3">
                {recentActivitiesList.map((act) => {
                  const Icon = act.icon;
                  return (
                    <div key={act.id} className="flex items-center gap-3">
                      {act.avatar ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-300 shrink-0">
                          <img src={act.avatar} alt="User" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h5 className="font-bold text-xs text-gray-900 truncate leading-snug">{act.title}</h5>
                        <p className="text-[10px] text-gray-400 truncate">{act.sub}</p>
                      </div>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap shrink-0">{act.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2: TOP CLASSES */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Top Classes</h3>
                <button
                  onClick={() => alert('Melihat peringkat seluruh kelas...')}
                  className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>View All</span>
                  <span>→</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {topClassesList.map((cls) => (
                  <div key={cls.id} className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-extrabold text-xs text-gray-400 w-3">{cls.rank}</span>
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                        <img
                          src={cls.image}
                          alt={cls.title}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                        />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-extrabold text-xs text-gray-900 truncate leading-tight">{cls.title}</h5>
                        <span className="text-[10px] text-gray-400 block">{cls.students}</span>
                      </div>
                    </div>

                    <span className="text-xs font-black text-emerald-700 shrink-0">{cls.revenue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3: SYSTEM STATUS */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">System Status</h3>
                <button
                  onClick={() => alert('Melihat detail infrastruktur & server...')}
                  className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <span>→</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {systemStatusList.map((sys, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-bold text-gray-700">{sys.name}</span>
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {sys.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* EXPORT REPORT MODAL */}
          {isExportModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Export Platform Report</h3>
                      <p className="text-xs text-gray-500">Download analytics and activity data</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExportModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Report Type</label>
                    <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none">
                      <option value="complete">Complete Executive Summary (All Metrics)</option>
                      <option value="financial">Financial & Earnings Report</option>
                      <option value="users">User Growth & Retention</option>
                      <option value="classes">Classes & Enrollment Metrics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">File Format</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="p-2.5 rounded-xl border-2 border-[#114B44] bg-emerald-50 text-[#114B44] font-bold text-xs text-center">
                        PDF Document (.pdf)
                      </button>
                      <button className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-bold text-xs text-center hover:bg-gray-100">
                        Excel Spreadsheet (.xlsx)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => setIsExportModalOpen(false)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setIsExportModalOpen(false);
                      alert('Laporan platform berhasil diunduh!');
                    }}
                    className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                  >
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
