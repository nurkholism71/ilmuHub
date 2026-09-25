import React from 'react';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';

export default function HeroSection({ onExplore, onBecomeTutor }) {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE6] min-h-[520px] lg:min-h-[580px] flex items-center border-b border-[#EADFCB]">
      
      {/* Background Image: Person shifted towards center-right, leaving top-right sky clear for Arabic text */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/hero_student.jpg"
          alt="Student studying with Cairo mosques and minarets view"
          className="w-full h-full object-cover object-[70%_25%] sm:object-[68%_30%] lg:object-[64%_35%] scale-105"
        />
        {/* Seamless Gradients: Fade to left, fade to top, fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/90 via-35% to-transparent lg:via-[#F5EFE6]/80 lg:via-28%"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#F5EFE6]/35 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE6]/80 via-transparent to-transparent lg:hidden"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full relative z-10">
        
        {/* Top Right Arabic Calligraphy & Quote */}
        <div className="absolute top-6 sm:top-8 right-4 sm:right-8 lg:right-12 text-right hidden sm:block z-20 select-none">
          <div className="font-arabic text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-wide leading-normal pt-1 pr-1 drop-shadow-md">
            طَلَبُ الْعِلْمِ نُوْرٌ
          </div>
          <div className="text-xs sm:text-sm text-gray-700 font-serif italic mt-1 drop-shadow-xs font-medium">
            "Seeking knowledge is a light."
          </div>
        </div>

        {/* Left Side Main Hero Content */}
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-3">
            Learn. Connect. <br className="hidden sm:inline" />Grow.
          </h1>

          {/* Arabic Subtitle */}
          <div className="font-arabic text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-wider leading-relaxed mb-4">
            تَعَلَّمْ • تَوَاصَلْ • تَطَوَّرْ
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-lg mb-8 font-medium">
            Belajar dari tutor pilihanmu. Temukan kelas Nahwu, Sharaf, Bahasa Arab, studi Islam, dan berbagai mata kuliah universitas di Mesir.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#114B44] hover:bg-[#0c3732] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#114B44]/20 hover:shadow-xl transition-all group cursor-pointer"
            >
              <span>Explore Classes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBecomeTutor}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm sm:text-base border border-gray-300 shadow-xs hover:shadow transition-all cursor-pointer"
            >
              Become a Tutor
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#DFCDB4] max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">10K+</div>
                <div className="text-xs text-gray-600 font-medium">Students</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">500+</div>
                <div className="text-xs text-gray-600 font-medium">Tutors</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#114B44]/10 text-[#114B44] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">1K+</div>
                <div className="text-xs text-gray-600 font-medium">Classes</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
