import React from 'react';
import { ArrowRight, Star, GraduationCap, BookOpen, Home, Clock, Sparkles } from 'lucide-react';

export default function FreeClassesRightWidgets({ onSelectClass, onExploreAllPaid }) {
  const whyFreeItems = [
    { icon: GraduationCap, text: 'Diajar tutor berpengalaman' },
    { icon: BookOpen, text: 'Materi lengkap dan terstruktur' },
    { icon: Home, text: 'Cocok untuk semua level' },
    { icon: Clock, text: 'Dapat diakses kapan saja' },
  ];

  const topFreeClasses = [
    {
      id: 1,
      rank: 1,
      title: 'Nahwu for Beginners',
      tutor: 'Ahmed Mohamed',
      rating: 4.9,
      students: '1.2k',
      image: '/images/class_nahwu.jpg',
    },
    {
      id: 3,
      rank: 2,
      title: 'Quran Tajweed Basics',
      tutor: 'Fatimah Zahra',
      rating: 4.9,
      students: '2.1k',
      image: '/images/class_tajweed.jpg',
    },
    {
      id: 4,
      rank: 3,
      title: 'Arabic Conversation',
      tutor: 'Mohamed Ali',
      rating: 4.8,
      students: '1.5k',
      image: '/images/class_conversation.jpg',
    },
    {
      id: 5,
      rank: 4,
      title: 'English for University',
      tutor: 'Sara Ahmed',
      rating: 4.9,
      students: '1.3k',
      image: '/images/class_english.jpg',
    },
    {
      id: 6,
      rank: 5,
      title: 'Hadith Studies Basic',
      tutor: 'Dr. Khalid Ibrahim',
      rating: 4.9,
      students: '980',
      image: '/images/class_hadith.jpg',
    },
  ];

  return (
    <aside className="w-full space-y-5">
      
      {/* Widget 1: Why Free Classes? */}
      <div className="bg-[#FAF7F2] rounded-2xl border border-[#EBE3D5] p-5 shadow-2xs relative overflow-hidden">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-lg bg-[#114B44] text-white flex items-center justify-center text-xs font-bold">
                🎁
              </span>
              <h4 className="font-bold text-gray-900 text-sm">Why Free Classes?</h4>
            </div>
            <p className="text-[11px] text-gray-600">
              Belajar gratis dengan kualitas terjamin.
            </p>
          </div>

          <img
            src="/images/books_plant_badge.jpg"
            alt="Free classes"
            className="w-14 h-14 rounded-xl object-cover shadow-xs border-2 border-white shrink-0"
          />
        </div>

        <ul className="space-y-2.5 pt-2 border-t border-[#E8DFC8]/60">
          {whyFreeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                <div className="w-5 h-5 rounded-md bg-[#114B44]/10 text-[#114B44] flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="font-medium">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Widget 2: Top Free Classes */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h4 className="font-bold text-gray-900 text-sm">Top Free Classes</h4>
          <a href="#all-free" className="text-xs text-[#114B44] hover:underline font-semibold flex items-center gap-1">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-3">
          {topFreeClasses.map((cls) => (
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

              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                Free
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Widget 3: Ingin lebih banyak kelas? */}
      <div className="bg-gradient-to-br from-[#0F3B36] to-[#0A2622] text-white rounded-2xl p-5 shadow-sm border border-[#165049]">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5 text-emerald-300" />
          <h4 className="font-bold text-white text-sm">Ingin lebih banyak kelas?</h4>
        </div>

        <p className="text-[11px] text-emerald-100/90 leading-relaxed mb-4">
          Jelajahi kelas berbayar dengan materi lebih mendalam dan sertifikat.
        </p>

        <button
          onClick={onExploreAllPaid}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-white hover:bg-emerald-50 text-[#0F3B36] text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Explore All Classes</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </aside>
  );
}
