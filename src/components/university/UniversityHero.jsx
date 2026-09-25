import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

export default function UniversityHero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F0E7] border-b border-[#E8DFC8] min-h-[230px] sm:min-h-[260px] flex items-center">
      
      {/* Background Image: Cairo university campus and cheerful students */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/hero_uni_students.jpg"
          alt="University students studying on campus"
          className="w-full h-full object-cover object-[70%_35%] opacity-35 scale-105"
        />
        {/* Soft seamless gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F0E7] via-[#F6F0E7]/95 via-35% to-transparent lg:via-[#F6F0E7]/80 lg:via-25%"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#F6F0E7]/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F0E7]/80 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 sm:py-10 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Title & Description */}
          <div className="max-w-xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#114B44] block mb-1">
              FOR UNIVERSITIES
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-1">
              University Courses
            </h1>

            <p className="text-sm sm:text-base font-bold text-[#114B44] mb-2">
              Learn from experienced tutors for your university subjects
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mb-4 font-medium">
              Temukan ribuan kelas untuk mata kuliah universitas di Mesir. Dari sains, teknik, kedokteran, bisnis, hukum, hingga ilmu sosial, dibimbing oleh tutor berpengalaman.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-5 pt-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">1K+</div>
                  <div className="text-[10px] text-gray-500 font-medium">University Courses</div>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300/80"></div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">500+</div>
                  <div className="text-[10px] text-gray-500 font-medium">Expert Tutors</div>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300/80"></div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">50K+</div>
                  <div className="text-[10px] text-gray-500 font-medium">Students</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Calligraphy: Quran 20:114 */}
          <div className="text-right hidden sm:block pt-1 pr-2 select-none">
            <div className="font-arabic text-3xl lg:text-[42px] font-bold text-[#0F172A] tracking-wide leading-normal drop-shadow-md">
              وَقُلْ رَّبِّ زِدْنِي عِلْمًا
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-serif italic mt-1 drop-shadow-xs font-medium">
              "And say, 'My Lord, increase me in knowledge.' (Qur'an 20:114)"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
