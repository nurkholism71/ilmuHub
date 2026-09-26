import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Globe, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronDown, 
  MoreHorizontal, 
  GraduationCap, 
  Radio, 
  Gift, 
  BookOpen, 
  UserCheck, 
  Compass,
  LayoutDashboard,
  LogOut,
  User,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ 
  activeTab = 'explore', 
  onNavigate, 
  onOpenAuth, 
  onSearch, 
  searchQuery, 
  currentUser, 
  onLogout 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('العربية');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const moreDropdownRef = useRef(null);
  const langDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target)) {
        setMoreMenuOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary visible tabs
  const primaryTabs = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'tutors', label: 'Tutors', icon: UserCheck },
    { id: 'classes', label: 'Classes', icon: BookOpen },
  ];

  // Secondary tabs placed inside the More dropdown menu
  const secondaryTabs = [
    { id: 'free-classes', label: 'Free Classes', icon: Gift, desc: '100% free classes & workshops' },
    { id: 'universities', label: 'For Universities', icon: GraduationCap, desc: 'Egyptian faculty courses' },
    { id: 'live', label: 'Live Room', icon: Radio, desc: 'Interactive live whiteboard & study' },
  ];

  // All tabs for mobile menu
  const allNavItems = [...primaryTabs, ...secondaryTabs];

  // Check if an active tab is inside the More dropdown
  const isMoreActive = secondaryTabs.some(item => item.id === activeTab);
  const activeSecondaryItem = secondaryTabs.find(item => item.id === activeTab);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-3 sm:px-6 lg:px-8 py-2.5 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* LEFT: Logo & Main Nav Links */}
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 shrink-0">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#114B44] to-[#0A302B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E6F4F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M12 6c1.5-1.5 3-1.5 4.5 0" strokeLinecap="round" />
                <circle cx="12" cy="11" r="2" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">IlmHub</span>
              <p className="text-[9px] sm:text-[10px] tracking-wider text-gray-400 font-medium -mt-1 hidden xs:block">
                Learn • Teach • Grow
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-sm font-medium text-gray-600">
            
            {/* 1. Primary Nav Items */}
            {primaryTabs.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                    isActive ? 'text-[#114B44] font-bold' : 'hover:text-[#114B44]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#114B44] rounded-full"></span>
                  )}
                </button>
              );
            })}

            {/* Extra visible items on extra-large screens */}
            <button
              onClick={() => onNavigate('free-classes')}
              className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap hidden 2xl:inline ${
                activeTab === 'free-classes' ? 'text-[#114B44] font-bold' : 'hover:text-[#114B44]'
              }`}
            >
              Free Classes
              {activeTab === 'free-classes' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#114B44] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => onNavigate('universities')}
              className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap hidden 2xl:inline ${
                activeTab === 'universities' ? 'text-[#114B44] font-bold' : 'hover:text-[#114B44]'
              }`}
            >
              For Universities
              {activeTab === 'universities' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#114B44] rounded-full"></span>
              )}
            </button>

            {/* 2. More Dropdown Menu (...) */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full transition-all cursor-pointer text-xs font-semibold border ${
                  isMoreActive
                    ? 'bg-emerald-50 text-[#114B44] border-emerald-200 font-bold'
                    : 'text-gray-600 border-transparent hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span>{isMoreActive ? activeSecondaryItem?.label : 'More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* More Popup Menu */}
              {moreMenuOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 text-xs animate-fadeIn">
                  <div className="px-2.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    More Learning Rooms
                  </div>
                  
                  {secondaryTabs.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setMoreMenuOpen(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-colors cursor-pointer ${
                          isActive ? 'bg-emerald-50 text-[#114B44] font-bold' : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-[#114B44] text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold">{item.label}</span>
                            {item.id === 'live' && (
                              <span className="text-[9px] bg-red-100 text-red-600 px-1.5 py-0.2 rounded-full font-extrabold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                LIVE
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-400 font-normal truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* CENTER: Compact Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm mx-2">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search courses, tutors..."
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-3.5 pr-9 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all"
            />
            <button 
              type="button"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#114B44] hover:bg-[#0A302B] text-white rounded-full flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* RIGHT ACTIONS: Clean, compact and non-overflowing */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Language Switcher */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-gray-500" />
              <span className="hidden sm:inline">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 text-xs animate-fadeIn">
                <button
                  onClick={() => { setCurrentLang('العربية'); setLangMenuOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 font-arabic text-sm text-gray-700"
                >
                  العربية
                </button>
                <button
                  onClick={() => { setCurrentLang('English'); setLangMenuOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700"
                >
                  English
                </button>
                <button
                  onClick={() => { setCurrentLang('Indonesia'); setLangMenuOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700"
                >
                  Indonesia
                </button>
              </div>
            )}
          </div>

          {/* Theme mode toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Authenticated User Avatar & Dropdown OR Guest Login CTA */}
          {currentUser ? (
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full border border-gray-200 hover:border-[#114B44] bg-white hover:bg-emerald-50/50 transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shrink-0">
                  <img
                    src={
                      currentUser.role === 'teacher' 
                        ? '/images/tutor_ahmed.jpg' 
                        : currentUser.role === 'admin' 
                        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' 
                        : '/images/student_omar.jpg'
                    }
                    alt={currentUser.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80';
                    }}
                  />
                </div>
                <div className="text-left hidden sm:block">
                  <span className="block text-xs font-bold text-gray-900 leading-tight max-w-[120px] truncate">
                    {currentUser.name}
                  </span>
                  <span className="block text-[10px] text-emerald-700 font-semibold uppercase tracking-wider -mt-0.5">
                    {currentUser.role === 'admin' ? 'Super Admin' : currentUser.role === 'teacher' ? 'Teacher' : 'Student'}
                  </span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* User Dropdown Popup */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 text-xs animate-fadeIn">
                  
                  {/* Profile Header */}
                  <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl mb-2 flex items-center gap-3 border border-emerald-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shrink-0">
                      <img
                        src={
                          currentUser.role === 'teacher' 
                            ? '/images/tutor_ahmed.jpg' 
                            : currentUser.role === 'admin' 
                            ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' 
                            : '/images/student_omar.jpg'
                        }
                        alt={currentUser.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-extrabold text-sm text-gray-900 truncate">{currentUser.name}</h4>
                      <p className="text-[11px] text-gray-500 truncate font-mono">{currentUser.email}</p>
                      <span className={`inline-block mt-1 text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                        currentUser.role === 'admin' 
                          ? 'bg-purple-100 text-purple-800' 
                          : currentUser.role === 'teacher' 
                          ? 'bg-emerald-100 text-[#114B44]' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {currentUser.role === 'admin' ? '👑 Super Admin' : currentUser.role === 'teacher' ? '👨‍🏫 Teacher / Tutor' : '🎓 Student'}
                      </span>
                    </div>
                  </div>

                  {/* Menu Actions */}
                  <div className="space-y-1">
                    {/* Role-Specific Dashboard Button */}
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#114B44] flex items-center justify-center shrink-0">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block truncate">
                          {currentUser.role === 'admin' 
                            ? 'Super Admin Dashboard' 
                            : currentUser.role === 'teacher' 
                            ? 'Teacher Dashboard' 
                            : 'Student Dashboard'}
                        </span>
                        <p className="text-[10px] text-gray-400 font-normal truncate">
                          {currentUser.role === 'admin'
                            ? 'Overview sistem, pengguna & mata kuliah'
                            : currentUser.role === 'teacher'
                            ? 'Kelola kelas, live & pendapatan EGP'
                            : 'Kelas terdaftar, jadwal & sertifikat'}
                        </p>
                      </div>
                    </button>

                    {/* Live Room Button */}
                    <button
                      onClick={() => {
                        onNavigate('live');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-red-50 text-gray-700 hover:text-red-700 font-bold flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                        <Radio className="w-4 h-4 animate-pulse" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block truncate">Live Classroom</span>
                        <p className="text-[10px] text-gray-400 font-normal truncate">Papan tulis interaktif & video live</p>
                      </div>
                    </button>
                  </div>

                  <div className="my-1.5 border-t border-gray-100"></div>

                  {/* Sign Out Button */}
                  <button
                    onClick={() => {
                      onLogout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-red-50 text-red-600 font-bold flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Log In Button */}
              <button
                onClick={() => onOpenAuth('login')}
                className="text-xs font-bold text-gray-700 hover:text-[#114B44] px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                Log In
              </button>

              {/* Get Started Button */}
              <button
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-bold bg-[#114B44] hover:bg-[#0d3b35] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs hover:shadow transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                Get Started
              </button>
            </>
          )}

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-gray-600 hover:text-gray-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 pt-2 border-t border-gray-100 space-y-2 pb-2 animate-fadeIn">
          <div className="relative px-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search courses, tutors..."
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-3.5 pr-9 py-1.5 text-xs text-gray-800"
            />
            <button className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#114B44] text-white rounded-full flex items-center justify-center">
              <Search className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-2 text-xs font-semibold text-gray-700">
            {allNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-xl flex items-center justify-between ${
                    activeTab === item.id ? 'bg-emerald-50 text-[#114B44] font-bold' : 'hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-3.5 h-3.5 text-gray-500" />}
                    <span>{item.label}</span>
                  </span>
                  {item.id === 'live' && (
                    <span className="text-[9px] bg-red-100 text-red-600 px-1.5 py-0.2 rounded-full font-bold">
                      LIVE
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
