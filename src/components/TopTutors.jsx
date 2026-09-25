import React from 'react';
import { CheckCircle, Star, Users, GraduationCap, ArrowRight } from 'lucide-react';

export const tutorsData = [
  {
    id: 1,
    name: 'Ahmed Mohamed',
    title: 'Arabic & Nahwu Tutor',
    avatar: '/images/tutor_ahmed.jpg',
    rating: 4.9,
    reviews: 234,
    students: '1.2K',
    classesCount: 24,
    bio: 'Lulusan Fakultas Bahasa Arab Universitas Al-Azhar Kairo. Berpengalaman 6+ tahun mengajar Nahwu & Sharaf untuk pelajar internasional.',
    specialties: ['Nahwu Dasar & Lanjut', 'Jurumiyyah', 'Alfiyyah Ibnu Malik'],
  },
  {
    id: 2,
    name: 'Fatimah Zahra',
    title: 'Quran & Tajweed Tutor',
    avatar: '/images/tutor_fatimah.jpg',
    rating: 4.9,
    reviews: 312,
    students: '980',
    classesCount: 18,
    bio: 'Pemegang Sanad Qiraat Hafs & Syu’bah. Mengkhususkan diri dalam pengajaran Makharijul Huruf dan Tahsin Al-Quran.',
    specialties: ['Tajwid Praktis', 'Sanad Tahsin', 'Matan Jazariyyah'],
  },
  {
    id: 3,
    name: 'Omar Hassan',
    title: 'Sharaf & Arabic Tutor',
    avatar: '/images/tutor_omar.jpg',
    rating: 4.8,
    reviews: 189,
    students: '750',
    classesCount: 16,
    bio: 'Pengajar aktif di markaz bahasa Kairo. Menggunakan pendekatan visual & rumus praktis untuk mempermudah pemahaman wazan Sharaf.',
    specialties: ['Tashrif Luqhawi', 'I’lal & Idgham', 'Balaghah'],
  },
  {
    id: 4,
    name: 'Sara Ahmed',
    title: 'English & Academic Tutor',
    avatar: '/images/tutor_sara.jpg',
    rating: 4.9,
    reviews: 267,
    students: '1.1K',
    classesCount: 20,
    bio: 'Master of Applied Linguistics di Kairo. Membantu mahasiswa universitas menguasai Academic Writing, IELTS, dan Presentasi Ilmiah.',
    specialties: ['Academic English', 'IELTS Prep', 'Thesis Consultation'],
  },
];

export default function TopTutors({ onSelectTutor }) {
  return (
    <section id="tutors" className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Top Tutors
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Belajar dari tutor berpengalaman dan terpercaya
            </p>
          </div>

          <a 
            href="#all-tutors" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[#114B44] group transition-colors"
          >
            <span>View all tutors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorsData.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-[#FAF9F6] hover:bg-white rounded-2xl border border-gray-200/90 p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-lg hover:border-emerald-700/30 transition-all duration-300 group"
            >
              {/* Avatar with verified badge */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1 bg-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 fill-emerald-600 text-white" />
                </div>
              </div>

              {/* Tutor Details */}
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="font-bold text-base text-gray-900 group-hover:text-[#114B44] transition-colors">
                  {tutor.name}
                </h3>
              </div>

              <p className="text-xs text-gray-500 font-medium mb-3">
                {tutor.title}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-xs font-semibold text-gray-800 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full mb-4">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{tutor.rating}</span>
                <span className="text-gray-400 font-normal">({tutor.reviews})</span>
              </div>

              {/* Stats */}
              <div className="w-full grid grid-cols-2 gap-2 py-3 border-t border-b border-gray-200/70 text-xs text-gray-600 mb-5">
                <div className="flex items-center justify-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gray-400" />
                  <span>{tutor.students} students</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                  <span>{tutor.classesCount} classes</span>
                </div>
              </div>

              {/* Profile Button */}
              <button
                onClick={() => onSelectTutor(tutor)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-gray-300 hover:border-[#114B44] text-xs font-semibold text-gray-800 hover:text-[#114B44] hover:bg-emerald-50/50 transition-all cursor-pointer group/btn"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
