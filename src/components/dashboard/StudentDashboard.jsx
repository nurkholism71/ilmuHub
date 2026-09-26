import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Award, 
  Radio, 
  PlayCircle, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Sparkles,
  Download,
  Video,
  Star,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function StudentDashboard({ user, onJoinLive, onExploreCourses }) {
  const [activeTab, setActiveTab] = useState('courses'); // 'courses' | 'schedule' | 'certificates'

  const studentName = user?.name || 'Omar Farouk';
  const studentEmail = user?.email || 'student@ilmhub.com';

  // Sample enrolled courses data
  const enrolledCourses = [
    {
      id: 'nahwu-101',
      title: 'Nahwu for Beginners (الجملة الإسمية)',
      tutor: 'Ahmed Mohamed',
      tutorAvatar: '/images/tutor_ahmed.jpg',
      image: '/images/class_nahwu.jpg',
      progress: 68,
      completedLessons: 8,
      totalLessons: 12,
      nextSession: 'Today at 19:30 CLT',
      isLiveNow: true,
      category: 'Arabic Grammar',
    },
    {
      id: 'usul-fiqh',
      title: 'Ushul Fiqh: Al-Waraqat',
      tutor: 'Dr. Mahmoud El-Sayed',
      tutorAvatar: '/images/tutor_mahmoud.jpg',
      image: '/images/class_ushul.jpg',
      progress: 40,
      completedLessons: 4,
      totalLessons: 10,
      nextSession: 'Tomorrow at 16:00 CLT',
      isLiveNow: false,
      category: 'Islamic Jurisprudence',
    },
    {
      id: 'cairo-med-anat',
      title: 'Human Anatomy & Physiology',
      tutor: 'Dr. Tarek Al-Ghamdi',
      tutorAvatar: '/images/tutor_tarek.jpg',
      image: '/images/class_anatomy.jpg',
      progress: 85,
      completedLessons: 17,
      totalLessons: 20,
      nextSession: 'Thursday at 20:00 CLT',
      isLiveNow: false,
      category: 'Cairo University Medicine',
    },
  ];

  const upcomingSchedule = [
    {
      id: 's-1',
      title: 'Interactive Live Session: Nahwu Bab Al-Mubtada',
      course: 'Nahwu for Beginners',
      tutor: 'Ahmed Mohamed',
      time: 'Today, 19:30 - 21:00 CLT',
      isLive: true,
    },
    {
      id: 's-2',
      title: 'Q&A Discussion on Dalalah Al-Alfaz',
      course: 'Ushul Fiqh: Al-Waraqat',
      tutor: 'Dr. Mahmoud El-Sayed',
      time: 'Tomorrow, 16:00 - 17:30 CLT',
      isLive: false,
    },
    {
      id: 's-3',
      title: 'Cardiovascular System Clinical Cases',
      course: 'Human Anatomy & Physiology',
      tutor: 'Dr. Tarek Al-Ghamdi',
      time: 'Thu 28 Sep, 20:00 - 21:30 CLT',
      isLive: false,
    },
  ];

  const certificates = [
    {
      id: 'cert-1',
      title: 'Certificate of Arabic Foundations & Sharf',
      issuer: 'IlmHub Academic Board & Al-Azhar Tutors',
      date: 'August 2026',
      grade: 'Grade: Mumtaz (94%)',
      code: 'ILM-AZ-84920'
    },
    {
      id: 'cert-2',
      title: 'Musthalah Al-Hadith: Bayquniyyah Mastery',
      issuer: 'Faculty of Usuluddin Mentors',
      date: 'July 2026',
      grade: 'Grade: Mumtaz (98%)',
      code: 'ILM-AZ-73911'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Top Banner */}
        <div className="bg-gradient-to-r from-[#114B44] via-[#0E3D37] to-[#0A2E2A] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-md shrink-0 bg-white/10">
                <img
                  src="/images/student_omar.jpg"
                  alt={studentName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-400/30">
                    Student Portal
                  </span>
                  <span className="text-xs text-emerald-200/80">Active Enrolled</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Ahlan wa Sahlan, {studentName}! 🎓
                </h1>
                <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                  {studentEmail} • Keep up the great learning streak!
                </p>
              </div>
            </div>

            {/* Quick Live Classroom CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onJoinLive({
                  title: 'Nahwu for Beginners',
                  tutor: { name: 'Ahmed Mohamed', avatar: '/images/tutor_ahmed.jpg' },
                  image: '/images/class_nahwu.jpg'
                })}
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-2 text-sm cursor-pointer active:scale-95"
              >
                <Radio className="w-4 h-4 animate-pulse text-white" />
                <span>Enter Live Classroom</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Enrolled Courses</div>
              <div className="text-2xl font-black text-white mt-0.5">3 Classes</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Hours Learned</div>
              <div className="text-2xl font-black text-white mt-0.5">34.5 Hrs</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Completed Lessons</div>
              <div className="text-2xl font-black text-white mt-0.5">29 / 42</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 font-medium">Certificates Earned</div>
              <div className="text-2xl font-black text-white mt-0.5">2 Verified</div>
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
              <span>My Enrolled Courses ({enrolledCourses.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'schedule'
                  ? 'bg-[#114B44] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Live Schedule ({upcomingSchedule.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'certificates'
                  ? 'bg-[#114B44] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificates ({certificates.length})</span>
            </button>
          </div>

          <button
            onClick={onExploreCourses}
            className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Explore More Courses</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tab Content: Enrolled Courses */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail & Live tag */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1584697964190-7bb077b9d799?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {course.category}
                    </div>
                    {course.isLiveNow && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        LIVE NOW
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-base text-gray-900 leading-snug line-clamp-1">
                      {course.title}
                    </h3>

                    {/* Tutor Profile */}
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={course.tutorAvatar} 
                        alt={course.tutor} 
                        className="w-7 h-7 rounded-full object-cover border border-gray-200"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80';
                        }}
                      />
                      <span className="text-xs text-gray-600 font-medium">{course.tutor}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                        <span>Progress ({course.completedLessons}/{course.totalLessons} lessons)</span>
                        <span className="font-bold text-[#114B44]">{course.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#114B44] rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Next: <strong className="text-gray-700">{course.nextSession}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onJoinLive({
                      title: course.title,
                      tutor: { name: course.tutor, avatar: course.tutorAvatar },
                      image: course.image
                    })}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      course.isLiveNow 
                        ? 'bg-[#114B44] hover:bg-[#0E3D37] text-white shadow-sm'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-[#114B44]'
                    }`}
                  >
                    {course.isLiveNow ? <Radio className="w-3.5 h-3.5 animate-pulse" /> : <PlayCircle className="w-3.5 h-3.5" />}
                    <span>{course.isLiveNow ? 'Join Live Room Now' : 'Continue Learning'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Live Schedule */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-extrabold text-gray-900">Upcoming Live Class Schedule</h3>
            <div className="divide-y divide-gray-100">
              {upcomingSchedule.map((item) => (
                <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                      item.isLive ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {item.isLive ? <Radio className="w-5 h-5 animate-pulse" /> : <Calendar className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Course: <span className="font-semibold text-gray-700">{item.course}</span> • Tutor: {item.tutor}
                      </p>
                      <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1.5">
                        🕒 {item.time}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onJoinLive({
                      title: item.course,
                      tutor: { name: item.tutor, avatar: '/images/tutor_ahmed.jpg' },
                      image: '/images/class_nahwu.jpg'
                    })}
                    className="bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap self-start sm:self-center"
                  >
                    {item.isLive ? 'Enter Live Room' : 'Set Reminder'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Certificates */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs flex flex-col justify-between gap-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                        {cert.grade}
                      </span>
                      <span className="text-[11px] text-gray-400">Issued {cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                  <span className="text-gray-400 font-mono text-[10px]">ID: {cert.code}</span>
                  <button 
                    onClick={() => alert(`Mengunduh sertifikat digital ${cert.code}...`)}
                    className="text-[#114B44] hover:text-[#0D3B35] font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
