import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

export default function TutorsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F0E7] border-b border-[#E8DFC8] min-h-[230px] sm:min-h-[260px] flex items-center">
      
      {/* Background Image: Cairo mosques and minarets seamlessly blended */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/cairo_skyline.jpg"
          alt="Cairo historic architecture and skyline"
          className="w-full h-full object-cover object-[70%_40%] opacity-35 scale-105"
        />
        {/* Soft seamless gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F0E7] via-[#F6F0E7]/95 via-35% to-transparent lg:via-[#F6F0E7]/80 lg:via-25%"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#F6F0E7]/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F0E7]/80 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 sm:py-10 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Title, Subtitle & Stats */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 leading-tight mb-1">
              Tutors
            </h1>

            <p className="text-sm sm:text-base font-bold text-[#114B44] mb-2">
              Learn from the best tutors in Egypt
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mb-5 font-medium">
              Temukan tutor berpengalaman untuk berbagai mata pelajaran mulai dari Nahwu, Sharaf, Bahasa Arab, studi Islam, hingga mata kuliah universitas.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-5 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">500+</div>
                  <div className="text-[10px] text-gray-500 font-medium">Tutors</div>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300/80"></div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">10K+</div>
                  <div className="text-[10px] text-gray-500 font-medium">Students</div>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300/80"></div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">50+</div>
                  <div className="text-[10px] text-gray-500 font-medium">Subjects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Calligraphy with Hadith quote */}
          <div className="text-right hidden sm:block pt-1 pr-2 select-none">
            <div className="font-arabic text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-wide leading-normal drop-shadow-md">
              خَيْرُ النَّاسِ مَنْ يَنْفَعُ النَّاسَ
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-serif italic mt-1 drop-shadow-xs font-medium">
              "The best of people are those who benefit others."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
