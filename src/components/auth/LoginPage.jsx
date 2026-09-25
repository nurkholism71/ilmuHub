import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Globe, 
  ChevronDown,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export default function LoginPage({ onLoginSuccess, onBackToHome, initialRole = 'admin' }) {
  const [role, setRole] = useState(initialRole); // 'admin' | 'teacher' | 'student'
  const [email, setEmail] = useState('admin@ilmhub.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [isLoading, setIsLoading] = useState(false);

  // Handle role switch and update default credentials
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    if (newRole === 'admin') {
      setEmail('admin@ilmhub.com');
    } else if (newRole === 'teacher') {
      setEmail('ahmed.mohamed@ilmhub.com');
    } else {
      setEmail('student@ilmhub.com');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        role,
        email,
        name: role === 'admin' ? 'Admin Portal' : role === 'teacher' ? 'Ustadz Ahmed Mohamed' : 'Omar Farouk',
      });
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F7F6] flex flex-col justify-between relative overflow-hidden font-sans">
      
      {/* Top Floating Language Selector and Back Button */}
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-20">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#114B44] transition-colors cursor-pointer bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/80 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to IlmHub</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white shadow-xs transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>{currentLang}</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          {langMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 text-xs">
              <button
                onClick={() => { setCurrentLang('English'); setLangMenuOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 font-medium"
              >
                English
              </button>
              <button
                onClick={() => { setCurrentLang('العربية'); setLangMenuOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-gray-50 font-arabic text-sm text-gray-700 font-medium"
              >
                العربية
              </button>
              <button
                onClick={() => { setCurrentLang('Indonesia'); setLangMenuOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 font-medium"
              >
                Indonesia
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Two-Column Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 my-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10">
        
        {/* LEFT COLUMN: Brand Hero & Platform Showcase */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          
          {/* IlmHub Green Emblem & Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#114B44] to-[#0A302B] flex items-center justify-center shadow-md text-white">
              <svg className="w-7 h-7 text-[#E6F4F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M12 6c1.5-1.5 3-1.5 4.5 0" strokeLinecap="round" />
                <circle cx="12" cy="11" r="2" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="text-3xl font-extrabold tracking-tight text-[#0F172A]">IlmHub</span>
              <p className="text-xs tracking-wider text-gray-500 font-medium -mt-0.5">
                Learn • Teach • Grow
              </p>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Knowledge <br />
              <span className="text-[#114B44]">for a Better Tomorrow</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
              A complete platform for learning, teaching, managing classes, and growing your community.
            </p>
          </div>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            
            {/* Learn */}
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col items-start gap-2 hover:shadow-sm transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Learn</h4>
                <p className="text-[11px] text-gray-500 leading-tight">Access quality content</p>
              </div>
            </div>

            {/* Teach */}
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col items-start gap-2 hover:shadow-sm transition-all">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Teach</h4>
                <p className="text-[11px] text-gray-500 leading-tight">Share your knowledge</p>
              </div>
            </div>

            {/* Manage */}
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col items-start gap-2 hover:shadow-sm transition-all">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Manage</h4>
                <p className="text-[11px] text-gray-500 leading-tight">Organize classes & users</p>
              </div>
            </div>

            {/* Grow */}
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col items-start gap-2 hover:shadow-sm transition-all">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Grow</h4>
                <p className="text-[11px] text-gray-500 leading-tight">Track progress & impact</p>
              </div>
            </div>

          </div>

          {/* Realistic Laptop with LMS Dashboard & Minaret Scene */}
          <div className="relative pt-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <img
                  src="/images/login_lms_desk_bg.jpg"
                  alt="IlmHub Learning Experience"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating Book Badges Stack as in Reference */}
                <div className="absolute bottom-3 right-3 flex flex-col items-end gap-1 select-none">
                  <span className="bg-[#1E293B]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-md">
                    Knowledge
                  </span>
                  <span className="bg-[#334155]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-md">
                    Community
                  </span>
                  <span className="bg-[#475569]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-md">
                    Technology
                  </span>
                  <span className="bg-[#114B44]/95 backdrop-blur-md text-emerald-200 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-emerald-400/40 shadow-lg">
                    A Better Tomorrow
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sign In Card */}
        <div className="w-full lg:w-[460px] shrink-0">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 sm:p-9 relative">
            
            {/* IlmHub Mosque Dome Logo Centered */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#114B44] to-[#0A302B] flex items-center justify-center shadow-md mb-3">
                <svg className="w-8 h-8 text-[#E6F4F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M12 6c1.5-1.5 3-1.5 4.5 0" strokeLinecap="round" />
                  <circle cx="12" cy="11" r="2" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">Welcome Back</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Sign in to your IlmHub account
              </p>
            </div>

            {/* Role Switcher Tabs */}
            <div className="bg-gray-100/90 p-1 rounded-xl flex items-center gap-1 mb-6">
              <button
                type="button"
                onClick={() => handleRoleChange('admin')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
                  role === 'admin'
                    ? 'bg-[#114B44] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange('teacher')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
                  role === 'teacher'
                    ? 'bg-[#114B44] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Teacher
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange('student')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
                  role === 'student'
                    ? 'bg-[#114B44] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Student
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@ilmhub.com"
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all font-medium"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#114B44] focus:ring-[#114B44] border-gray-300 accent-[#114B44]"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => { e.preventDefault(); alert('Password reset link sent to ' + email); }}
                  className="font-bold text-[#114B44] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold py-3 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm mt-2 disabled:opacity-75"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

            {/* OR CONTINUE WITH */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                Or Continue With
              </span>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-3 gap-2.5">
              
              {/* Google */}
              <button
                type="button"
                onClick={() => handleSubmit({ preventDefault: () => {} })}
                className="flex items-center justify-center gap-1.5 py-2 px-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-xs font-semibold text-gray-700 cursor-pointer shadow-2xs"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google</span>
              </button>

              {/* Microsoft */}
              <button
                type="button"
                onClick={() => handleSubmit({ preventDefault: () => {} })}
                className="flex items-center justify-center gap-1.5 py-2 px-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-xs font-semibold text-gray-700 cursor-pointer shadow-2xs"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 21 21">
                  <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                  <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                  <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                  <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                </svg>
                <span>Microsoft</span>
              </button>

              {/* GitHub */}
              <button
                type="button"
                onClick={() => handleSubmit({ preventDefault: () => {} })}
                className="flex items-center justify-center gap-1.5 py-2 px-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-xs font-semibold text-gray-700 cursor-pointer shadow-2xs"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </button>

            </div>

            {/* Footer Text */}
            <p className="text-center text-xs text-gray-500 mt-6">
              Don't have an account?{' '}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); alert('Please contact admin@ilmhub.com to create your school account.'); }}
                className="font-bold text-[#114B44] hover:underline"
              >
                Contact your administrator
              </a>
            </p>

          </div>
        </div>

      </div>

      {/* Footer copyright */}
      <div className="w-full text-center py-4 text-xs text-gray-500 z-10">
        © 2026 IlmHub. All rights reserved. Knowledge • Community • Technology
      </div>

    </div>
  );
}
