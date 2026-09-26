import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  Database, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  Radio,
  Building,
  DollarSign,
  Activity
} from 'lucide-react';

export default function AdminDashboard({ user, onNavigateToLive, onBackToHome }) {
  const [activeTab, setActiveTab] = useState('overview');

  const adminEmail = user?.email || 'nurcholism51@gmail.com';
  const adminName = user?.name || 'Super Admin (Nur Kholis)';

  const platformStats = {
    totalUsers: '1,452',
    activeStudents: '1,280',
    verifiedTeachers: '64',
    totalCourses: '210',
    grossRevenue: '642,800 EGP',
    activeLiveRooms: 3,
    dbStatus: 'Connected & Healthy (Supabase PostgreSQL)',
  };

  const recentUsers = [
    { id: 'u1', name: 'Omar Farouk', email: 'omar@ilmhub.com', role: 'Student', date: 'Just now', status: 'Active' },
    { id: 'u2', name: 'Ustadz Ahmed Mohamed', email: 'ahmed.mohamed@ilmhub.com', role: 'Teacher', date: '10 min ago', status: 'Verified' },
    { id: 'u3', name: 'Fatimah Az-Zahra', email: 'fatimah@student.com', role: 'Student', date: '1 hour ago', status: 'Active' },
    { id: 'u4', name: 'Dr. Mahmoud El-Sayed', email: 'mahmoud@ilmhub.com', role: 'Teacher', date: '3 hours ago', status: 'Verified' },
    { id: 'u5', name: 'Nur Kholis', email: 'nurcholism51@gmail.com', role: 'Super Admin', date: 'Permanent', status: 'Owner' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header Banner */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#114B44] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-purple-600/30 border-2 border-purple-400/60 flex items-center justify-center text-purple-300 shadow-md shrink-0">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-purple-500/30 text-purple-300 text-xs px-2.5 py-0.5 rounded-full font-bold border border-purple-400/40 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Super Admin Console
                  </span>
                  <span className="text-xs text-emerald-300 flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    System Live
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {adminName}
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 font-mono">
                  {adminEmail} • Full Platform Privileges
                </p>
              </div>
            </div>

            {/* Quick Live Room Monitor */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigateToLive({
                  title: 'Nahwu for Beginners (Super Admin Monitoring)',
                  tutor: { name: 'Ahmed Mohamed', avatar: '/images/tutor_ahmed.jpg' },
                  image: '/images/class_nahwu.jpg'
                })}
                className="bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold px-5 py-3 rounded-2xl shadow-lg border border-emerald-500/40 transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer active:scale-95"
              >
                <Radio className="w-4 h-4 animate-pulse text-red-400" />
                <span>Monitor Active Live Room</span>
              </button>
            </div>
          </div>

          {/* 4 Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-gray-300 font-medium">Total Registered Users</div>
              <div className="text-2xl font-black text-white mt-0.5">{platformStats.totalUsers}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-gray-300 font-medium">Verified Tutors</div>
              <div className="text-2xl font-black text-white mt-0.5">{platformStats.verifiedTeachers}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-gray-300 font-medium">Published Classes</div>
              <div className="text-2xl font-black text-white mt-0.5">{platformStats.totalCourses}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-300 font-medium">Gross Platform Volume</div>
              <div className="text-2xl font-black text-emerald-400 mt-0.5">{platformStats.grossRevenue}</div>
            </div>
          </div>
        </div>

        {/* Database & Infrastructure Status */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900">Database & Realtime Status</h3>
              <p className="text-xs text-gray-500 mt-0.5">{platformStats.dbStatus}</p>
            </div>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full flex items-center gap-1.5 self-start md:self-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            PostgreSQL Operational
          </span>
        </div>

        {/* Recent Registered Users Table */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-gray-900">Recent User Registrations</h3>
            <span className="text-xs text-gray-400 font-medium">Live sync</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase text-[10px]">
                  <th className="pb-3">User</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50/50">
                    <td className="py-3 font-bold text-gray-900">{u.name}</td>
                    <td className="py-3 text-gray-500 font-mono text-[11px]">{u.email}</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                        u.role === 'Super Admin'
                          ? 'bg-purple-100 text-purple-800'
                          : u.role === 'Teacher'
                          ? 'bg-emerald-100 text-[#114B44]'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 text-emerald-600 font-semibold">{u.status}</td>
                    <td className="py-3 text-right text-gray-400">{u.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
