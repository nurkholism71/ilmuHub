import React from 'react';
import { ArrowRight, Star, GraduationCap, Scroll, BookMarked, Building2, Laptop, FlaskConical } from 'lucide-react';

export default function ClassesRightWidgets({ onSelectSubject, onSelectClass, onExploreFree }) {
  const topCategories = [
    { id: 'nahwu', name: 'Nahwu', count: '324 classes', icon: GraduationCap },
    { id: 'sharaf', name: 'Sharaf', count: '218 classes', icon: Scroll },
    { id: 'arabic', name: 'Arabic Language', count: '412 classes', arabic: 'عربي' },
    { id: 'quran', name: 'Quran', count: '186 classes', icon: BookMarked },
    { id: 'hadith', name: 'Hadith', count: '120 classes', icon: Scroll },
    { id: 'university', name: 'University', count: '341 classes', icon: GraduationCap },
    { id: 'english', name: 'English', count: '310 classes', flag: '🇬🇧' },
    { id: 'mathematics', name: 'Mathematics', count: '198 classes', math: '√Y' },
    { id: 'computer', name: 'Computer', count: '276 classes', icon: Laptop },
    { id: 'science', name: 'Science', count: '164 classes', icon: FlaskConical },
  ];

  const popularClassesList = [
    {
      id: 1,
      rank: 1,
      title: 'Nahwu for Beginners',
      tutor: 'Ahmed Mohamed',
      rating: 4.9,
      students: '1.2k',
      price: 'Free',
      isFree: true,
      image: '/images/class_nahwu.jpg',
    },
    {
      id: 3,
      rank: 2,
      title: 'Quran Tajweed',
      tutor: 'Fatimah Zahra',
      rating: 4.9,
      students: '2.1k',
      price: 'Free',
      isFree: true,
      image: '/images/class_tajweed.jpg',
    },
    {
      id: 4,
      rank: 3,
      title: 'Arabic Grammar Mastery',
      tutor: 'Mohamed Ali',
      rating: 4.8,
      students: '450',
      price: '200 EGP',
      isFree: false,
      image: '/images/class_arabic.jpg',
    },
    {
      id: 5,
      rank: 4,
      title: 'English for University',
      tutor: 'Sara Ahmed',
      rating: 4.9,
      students: '1.5k',
      price: 'Free',
      isFree: true,
      image: '/images/class_english.jpg',
    },
    {
      id: 6,
      rank: 5,
      title: 'Fiqh for Students',
      tutor: 'Dr. Khalid Ibrahim',
      rating: 4.7,
      students: '320',
      price: '180 EGP',
      isFree: false,
      image: '/images/class_fiqh.jpg',
    },
  ];

  return (
    <aside className="w-full space-y-6">
      
      {/* Widget 1: Free Classes Banner */}
      <div className="relative rounded-2xl bg-[#EAF3F1] border border-[#CDE3DD] p-5 overflow-hidden shadow-2xs">
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

      {/* Widget 2: Top Categories */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h4 className="font-bold text-gray-900 text-sm">Top Categories</h4>
          <a href="#all-categories" className="text-xs text-[#114B44] hover:underline font-semibold flex items-center gap-1">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {topCategories.map((sub) => {
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

      {/* Widget 3: Most Popular Classes */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h4 className="font-bold text-gray-900 text-sm">Most Popular Classes</h4>
          <a href="#all-popular" className="text-xs text-[#114B44] hover:underline font-semibold flex items-center gap-1">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-3.5">
          {popularClassesList.map((cls) => (
            <div
              key={cls.id}
              onClick={() => onSelectClass(cls)}
              className="flex items-center justify-between gap-3 p-1.5 rounded-xl hover:bg-[#FAF9F6] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-bold text-gray-400 w-3 text-center">{cls.rank}</span>
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-10 h-10 rounded-lg object-cover border border-gray-200 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-gray-900 truncate group-hover:text-[#114B44]">
                    {cls.title}
                  </p>
                  <p className="text-[10px] text-gray-500 truncate">
                    {cls.tutor}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-amber-500 font-medium mt-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-500" />
                    <span>{cls.rating}</span>
                    <span className="text-gray-400">({cls.students})</span>
                  </div>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                cls.isFree ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {cls.price}
              </span>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
