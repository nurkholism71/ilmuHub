import React, { useState } from 'react';
import { Star, Users, GraduationCap, CheckCircle, Heart, ArrowRight, ChevronRight, MessageSquare } from 'lucide-react';

export const featuredTutorsData = [
  {
    id: 1,
    name: 'Ahmed Mohamed',
    title: 'Arabic & Nahwu Tutor',
    avatar: '/images/tutor_ahmed.jpg',
    bgImage: '/images/class_nahwu.jpg',
    rating: 4.9,
    reviewsCount: '1.2K',
    students: '1.2K',
    classesCount: 24,
    tags: ['Nahwu', 'Sharaf', 'Arabic Grammar'],
    bio: 'Lulusan Fakultas Bahasa Arab Universitas Al-Azhar Kairo dengan pengalaman lebih dari 6 tahun.',
    specialties: ['Nahwu Dasar & Lanjut', 'Jurumiyyah', 'Alfiyyah Ibnu Malik'],
  },
  {
    id: 2,
    name: 'Fatimah Zahra',
    title: 'Quran & Tajweed Tutor',
    avatar: '/images/tutor_fatimah.jpg',
    bgImage: '/images/class_tajweed.jpg',
    rating: 4.9,
    reviewsCount: '980',
    students: '980',
    classesCount: 18,
    tags: ['Quran', 'Tajweed', 'Islamic Studies'],
    bio: 'Pemegang Sanad Qiraat Hafs & Syu’bah. Mengkhususkan diri dalam pengajaran Makharijul Huruf dan Tahsin Al-Quran.',
    specialties: ['Tajwid Praktis', 'Sanad Tahsin', 'Matan Jazariyyah'],
  },
  {
    id: 3,
    name: 'Omar Hassan',
    title: 'Sharaf & Arabic Tutor',
    avatar: '/images/tutor_omar.jpg',
    bgImage: '/images/class_sharaf.jpg',
    rating: 4.8,
    reviewsCount: '750',
    students: '750',
    classesCount: 16,
    tags: ['Sharaf', 'Arabic Language', 'Fiqh'],
    bio: 'Pengajar aktif di markaz bahasa Kairo dengan pendekatan praktis memahami pola wazan.',
    specialties: ['Tashrif Luqhawi', 'I’lal & Idgham', 'Balaghah'],
  },
  {
    id: 4,
    name: 'Sara Ahmed',
    title: 'English & Academic Tutor',
    avatar: '/images/tutor_sara.jpg',
    bgImage: '/images/class_english.jpg',
    rating: 4.9,
    reviewsCount: '1.1K',
    students: '1.1K',
    classesCount: 20,
    tags: ['English', 'University', 'Writing'],
    bio: 'Master of Applied Linguistics di Kairo. Membantu mahasiswa universitas menguasai Academic Writing dan IELTS.',
    specialties: ['Academic English', 'IELTS Prep', 'Thesis Consultation'],
  },
];

export default function FeaturedTutorsSection({ onSelectTutor, onOpenMessage }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            Featured Tutors
          </h2>
          <p className="text-xs text-gray-500">
            Tutor pilihan dengan pengalaman dan rating terbaik.
          </p>
        </div>

        <a 
          href="#all-tutors" 
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#114B44] hover:underline"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Cards Grid / Carousel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 relative">
        {featuredTutorsData.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
          >
            {/* Top Banner Image with Badges */}
            <div className="relative h-24 w-full bg-gray-100 overflow-hidden">
              <img
                src={tutor.bgImage}
                alt={tutor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Top Tutor Badge */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#10B981] text-white shadow-xs">
                  Top Tutor
                </span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => toggleFavorite(tutor.id, e)}
                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Heart className={`w-3.5 h-3.5 ${favorites[tutor.id] ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
            </div>

            {/* Avatar & Content */}
            <div className="p-3.5 pt-0 flex-1 flex flex-col justify-between -mt-8 relative z-10">
              {/* Avatar */}
              <div className="flex flex-col items-center text-center mb-2">
                <div className="relative mb-1.5">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 text-white" />
                  </div>
                </div>

                <h3 className="font-bold text-sm text-gray-900 truncate max-w-full group-hover:text-[#114B44] transition-colors">
                  {tutor.name}
                </h3>
                <p className="text-[11px] text-gray-500 truncate max-w-full">
                  {tutor.title}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-[11px] text-gray-700 font-bold mt-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{tutor.rating}</span>
                  <span className="text-gray-400 font-normal">({tutor.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-1 py-2 border-t border-b border-gray-100 text-[10px] text-gray-600 mb-3">
                <div className="flex items-center justify-center gap-1">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span>{tutor.students} students</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <GraduationCap className="w-3 h-3 text-gray-400" />
                  <span>{tutor.classesCount} classes</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap items-center justify-center gap-1 mb-3">
                {tutor.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-[#FAF7F2] border border-[#EFE8DC] rounded-md text-[10px] font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onSelectTutor(tutor)}
                  className="w-full py-2 px-3 rounded-xl bg-[#114B44] hover:bg-[#0c3732] text-white text-[11px] font-bold shadow-xs transition-all cursor-pointer text-center"
                >
                  View Profile
                </button>
                <button
                  onClick={() => onSelectTutor(tutor)}
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-[11px] font-bold shadow-2xs transition-all cursor-pointer text-center"
                >
                  Message
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
