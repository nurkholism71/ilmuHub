import React from 'react';

export default function FreeClassesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F0E7] border-b border-[#E8DFC8] min-h-[220px] sm:min-h-[250px] flex items-center">
      
      {/* Background Image: Cairo panoramic skyline with soft blending */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/cairo_skyline.jpg"
          alt="Cairo panoramic view and historic architecture"
          className="w-full h-full object-cover object-[70%_40%] opacity-35 scale-105"
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
              FREE CLASSES
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-1">
              Learn for Free
            </h1>

            <p className="text-base sm:text-lg font-bold text-[#114B44] mb-2">
              Knowledge for Everyone
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg font-medium">
              Akses ribuan kelas gratis dari tutor berpengalaman di Mesir. Pelajari Nahwu, Sharaf, Bahasa Arab, studi Islam, dan berbagai mata kuliah universitas tanpa biaya.
            </p>
          </div>

          {/* Top Right Calligraphy */}
          <div className="text-right hidden sm:block pt-1 pr-2 select-none">
            <div className="font-arabic text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0F172A] tracking-wide leading-normal drop-shadow-md">
              طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-serif italic mt-1 drop-shadow-xs font-medium">
              "Seeking knowledge is an obligation upon every Muslim."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
