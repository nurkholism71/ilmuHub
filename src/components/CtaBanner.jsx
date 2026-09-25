import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onExplore }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EFE6D5] via-[#FAF4E8] to-[#EFE6D5] py-16 border-b border-[#DFCDB2]">
      {/* Decorative Cairo Skyline & Pyramids Silhouette Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply flex items-end justify-between px-4">
        <img
          src="/images/cairo_skyline.jpg"
          alt="Cairo Skyline and Pyramids background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
          Ready to start learning?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Temukan kelas yang cocok untukmu. Bertemu dengan tutor terbaik. Mulai perjalanan belajarmu hari ini.
        </p>

        <button
          onClick={onExplore}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#114B44] hover:bg-[#0c3732] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#114B44]/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all group cursor-pointer"
        >
          <span>Explore Classes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
