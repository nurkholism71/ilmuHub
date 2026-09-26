import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Radio, 
  Calendar, 
  PlusCircle, 
  Star, 
  MessageSquare, 
  Layers, 
  Video, 
  Award,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Settings
} from 'lucide-react';

export default function TeacherDashboard({ user, onStartLive, onManageCourses }) {
  const [activeTab, setActiveTab] = useState('courses'); // 'courses' | 'students' | 'earnings' | 'schedule'

  const teacherName = user?.name || 'Ustadz Ahmed Mohamed';
  const teacherEmail = user?.email || 'ahmed.mohamed@ilmhub.com';

  const myCourses = [
    {
      id: 'nahwu-1',
      title: 'Nahwu for Beginners (الجملة الإسمية)',
      studentsCount: 312,
      priceEgp: 350,
      totalRevenue: '109,200 EGP',
      rating: 4.9,
      reviewsCount: 128,
      status: 'Active Live',
      image: '/images/class_nahwu.jpg',
      schedule: 'Mon & Wed @ 19:30 CLT',
    },
    {
      id: 'sharf-mastery',
      title: 'Sharf Foundations: Tasrif & Wazan',
      studentsCount: 180,
      priceEgp: 300,
      totalRevenue: '54,000 EGP',
      rating: 5.0,
      reviewsCount: 74,
      status: 'Active Live',
      image: '/images/class_balaghah.jpg',
      schedule: 'Tue & Thu @ 17:00 CLT',
    },
    {
      id: 'balaghah-intro',
      title: 'Balaghah & Arabic Eloquence',
      studentsCount: 95,
      priceEgp: 400,
      totalRevenue: '38,000 EGP',
      rating: 4.8,
      reviewsCount: 39,
      status: 'Scheduled',
      image: '/images/class_quran.jpg',
      schedule: 'Starting Oct 2026',
    },
  ];

  const recentStudents = [
    { name: 'Omar Farouk', email: 'omar@ilmhub.com', enrolledIn: 'Nahwu for Beginners', date: 'Today' },
    { name: 'Fatimah Az-Zahra', email: 'fatimah@student.com', enrolledIn: 'Nahwu for Beginners', date: 'Yesterday' },
    { name: 'Ali Al-Husseini', email: 'ali@cairo.edu.eg', enrolledIn: 'Sharf Foundations', date: '2 days ago' },
    { name: 'Aisha Mansour', email: 'aisha@azhar.eg', enrolledIn: 'Balaghah & Arabic Eloquence', date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Teacher Hero Banner */}
        <div className="bg-gradient-to-r from-[#114B44] via-[#0E3D37] to-[#0A2E2A] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-md shrink-0 bg-white/10">
                <img
                  src="/images/tutor_ahmed.jpg"
                  alt={teacherName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-400/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-300" />
                    Verified Teacher
                  </span>
                  <span className="text-xs text-emerald-200/80">Al-Azhar University</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Ahlan wa Sahlan, {teacherName}! 👨‍🏫
                </h1>
                <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                  {teacherEmail} • Your classes are impacting hundreds of students!
                </p>
              </div>
            </div>

            {/* Launch Instant Live Room */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onStartLive({
                  title: 'Nahwu for Beginners (الجملة الإسمية)',
                  tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                  image: '/images/class_nahwu.jpg'
                })}
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-6 py-3 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-2 text-sm cursor-pointer active:scale-95"
              >
                <Radio className="w-4 h-4 animate-pulse text-white" />
                <span>Start Live Classroom</span>
              </button>
            </div>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Total Students</div>
              <div className="text-2xl font-black text-white mt-0.5">587 Active</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Published Classes</div>
              <div className="text-2xl font-black text-white mt-0.5">3 Courses</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Total Revenue</div>
              <div className="text-2xl font-black text-emerald-300 mt-0.5">201,200 EGP</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Average Rating</div>
              <div className="text-2xl font-black text-amber-300 mt-0.5 flex items-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'courses'
                  ? 'bg-[#114B44] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>My Classes ({myCourses.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'students'
                  ? 'bg-[#114B44] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Enrolled Students</span>
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'earnings'
                  ? 'bg-[#114B44] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Earnings & Payouts</span>
            </button>
          </div>

          <button 
            onClick={() => alert('Fitur tambah materi kelas baru akan segera dibuka.')}
            className="bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Create New Course</span>
          </button>
        </div>

        {/* Tab Content: My Courses */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#114B44] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                      {course.status}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{course.rating} ({course.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-base text-gray-900 leading-snug line-clamp-1">
                      {course.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 bg-gray-50 rounded-xl p-2.5 border border-gray-100">
                      <div>
                        <span className="text-gray-400 block text-[10px]">Students</span>
                        <span className="font-bold text-gray-800">{course.studentsCount} Active</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Total Revenue</span>
                        <span className="font-bold text-[#114B44]">{course.totalRevenue}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Schedule: <strong className="text-gray-700">{course.schedule}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => onStartLive({
                      title: course.title,
                      tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                      image: course.image
                    })}
                    className="flex-1 bg-[#114B44] hover:bg-[#0E3D37] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>Open Live Room</span>
                  </button>
                  <button 
                    onClick={() => alert(`Pengaturan kelas "${course.title}"`)}
                    className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors cursor-pointer"
                    title="Course settings"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Enrolled Students */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-extrabold text-gray-900">Recently Enrolled Students</h3>
            <div className="divide-y divide-gray-100">
              {recentStudents.map((student, idx) => (
                <div key={idx} className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900">{student.name}</h4>
                      <p className="text-[11px] text-gray-400">{student.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#114B44] bg-emerald-50 px-2 py-0.5 rounded-md">
                      {student.enrolledIn}
                    </span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">{student.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Earnings */}
        {activeTab === 'earnings' && (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Available Balance for Payout</span>
                <h2 className="text-3xl font-black text-[#114B44] mt-1">201,200 EGP</h2>
                <p className="text-xs text-gray-600 mt-1">Payout via Vodafone Cash, InstaPay, or Bank Misr Transfer</p>
              </div>
              <button 
                onClick={() => alert('Permintaan penarikan dana diproses (InstaPay / Bank Misr).')}
                className="bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow text-xs cursor-pointer"
              >
                Request Payout
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
