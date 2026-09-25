import React, { useState } from 'react';
import { ArrowRight, Star, GraduationCap, Scroll, BookMarked, Building2, Binary, Laptop, FlaskConical, Check } from 'lucide-react';

export default function ExploreRightWidgets({ onSelectSubject, onSelectTutor, onExploreFree }) {
  const [following, setFollowing] = useState({});

  const toggleFollow = (id, e) => {
    e.stopPropagation();
    setFollowing(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const topSubjects = [
    { id: 'nahwu', name: 'Nahwu', count: '324 classes', icon: GraduationCap },
    { id: 'sharaf', name: 'Sharaf', count: '218 classes', icon: Scroll },
    { id: 'arabic', name: 'Arabic Language', count: '412 classes', arabic: 'عربي' },
    { id: 'quran', name: 'Quran', count: '186 classes', icon: BookMarked },
    { id: 'islamic_studies', name: 'Islamic Studies', count: '256 classes', icon: Building2 },
    { id: 'university', name: 'University', count: '341 classes', icon: GraduationCap },
    { id: 'english', name: 'English', count: '310 classes', flag: '🇬🇧' },
    { id: 'mathematics', name: 'Mathematics', count: '198 classes', math: '√Y' },
    { id: 'computer', name: 'Computer', count: '276 classes', icon: Laptop },
    { id: 'science', name: 'Science', count: '164 classes', icon: FlaskConical },
  ];

  const featuredTutors = [
    {
      id: 1,
      name: 'Ahmed Mohamed',
      title: 'Arabic & Nahwu Tutor',
      avatar: '/images/tutor_ahmed.jpg',
      rating: 4.9,
      students: '1.2k',
      classes: '24 classes'
    },
    {
      id: 2,
      name: 'Fatimah Zahra',
      title: 'Quran & Tajweed Tutor',
      avatar: '/images/tutor_fatimah.jpg',
      rating: 4.9,
      students: '980',
      classes: '18 classes'
    },
    {
      id: 3,
      name: 'Omar Hassan',
      title: 'Sharaf & Arabic Tutor',
      avatar: '/images/tutor_omar.jpg',
      rating: 4.8,
      students: '750',
      classes: '16 classes'
    }
  ];

  return (
    <aside className="w-full space-y-6">
      
      {/* Widget 1: Free Classes Banner */}
      <div className="relative rounded-2xl bg-[#EAF3F1] border border-[#CDE3DD] p-5 overflow-hidden">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#114B44] text-white flex items-center justify-center text-xs font-bold">
              📚
            </span>
            <h4 className="font-bold text-gray-900 text-sm">Free Classes</h4>
          </div>
          
          <img
            src="/images/books_stack_badge.jpg"
            alt="Free books"
            className="w-14 h-12 rounded-lg object-cover shadow-xs border border-white"
          />
        </div>

        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          Akses ribuan kelas gratis dari tutor pilihan.
        </p>

        <button
          onClick={onExploreFree}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#114B44] hover:bg-[#0c3732] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Explore Free Classes</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Widget 2: Top Subjects */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h4 className="font-bold text-gray-900 text-sm">Top Subjects</h4>
          <a href="#all-subjects" className="text-xs text-[#114B44] hover:underline font-semibold flex items-center gap-1">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {topSubjects.map((sub) => {
            const Icon = sub.icon;
            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubject(sub.id)}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 text-left transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-md bg-[#FAF7F2] text-[#114B44] flex items-center justify-center shrink-0">
                  {sub.flag ? (
                    <span className="text-xs">{sub.flag}</span>
                  ) : sub.arabic ? (
                    <span className="font-arabic font-bold text-[10px]">{sub.arabic}</span>
                  ) : sub.math ? (
                    <span className="font-mono font-bold text-[10px]">{sub.math}</span>
                  ) : (
                    <Icon className="w-3.5 h-3.5" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 text-[11px] truncate group-hover:text-[#114B44]">
                    {sub.name}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">
                    {sub.count}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Widget 3: Featured Tutors */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h4 className="font-bold text-gray-900 text-sm">Featured Tutors</h4>
          <a href="#all-tutors" className="text-xs text-[#114B44] hover:underline font-semibold flex items-center gap-1">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-3.5">
          {featuredTutors.map((tutor) => (
            <div
              key={tutor.id}
              onClick={() => onSelectTutor(tutor)}
              className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-[#FAF9F6] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-gray-900 truncate">
                    {tutor.name}
                  </p>
                  <p className="text-[10px] text-gray-500 truncate">
                    {tutor.title}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-amber-500 font-medium mt-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-500" />
                    <span>{tutor.rating}</span>
                    <span className="text-gray-400">({tutor.students})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => toggleFollow(tutor.id, e)}
                className={`px-3 py-1 rounded-full text-xs font-bold border transition-all shrink-0 cursor-pointer ${
                  following[tutor.id]
                    ? 'bg-[#114B44] text-white border-[#114B44]'
                    : 'border-gray-300 text-gray-700 hover:border-[#114B44] hover:text-[#114B44]'
                }`}
              >
                {following[tutor.id] ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Following</span>
                  </span>
                ) : (
                  'Follow'
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
