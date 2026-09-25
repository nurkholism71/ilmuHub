import React from 'react';
import { BookOpen, UserPlus, ArrowRight } from 'lucide-react';

export default function PromoBanners({ onExploreFree, onStartTeaching }) {
  return (
    <section id="free-classes" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Banner 1: Free Learning */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0F3B36] to-[#0A2622] text-white overflow-hidden shadow-xl border border-[#165049] flex flex-col justify-between p-6 sm:p-8 group min-h-[260px]">
            {/* Background image blended on right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-2/5 overflow-hidden pointer-events-none">
              <img
                src="/images/banner_free.jpg"
                alt="Free Islamic and academic learning library"
                className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F3B36] via-[#0F3B36]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Free Learning
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6">
                Akses ribuan materi pembelajaran gratis dari tutor pilihan. Mulai belajar tanpa biaya kapan saja.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onExploreFree}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-emerald-50 text-[#0F3B36] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group/btn"
              >
                <span>Explore Free Classes</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Banner 2: Become a Tutor */}
          <div className="relative rounded-3xl bg-[#F6F1E8] text-gray-900 overflow-hidden shadow-xl border border-[#E9DECD] flex flex-col justify-between p-6 sm:p-8 group min-h-[260px]">
            {/* Background image with teacher at whiteboard */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-2/5 overflow-hidden pointer-events-none">
              <img
                src="/images/banner_tutor.jpg"
                alt="Teacher explaining Arabic grammar on whiteboard"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E8] via-[#F6F1E8]/70 to-transparent"></div>
              
              {/* Arabic grammar whiteboard text visual badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-amber-200/60 shadow-xs hidden sm:block">
                <span className="font-arabic font-bold text-sm text-[#0F3B36]">المُبْتَدَأُ وَالْخَبَرُ</span>
              </div>
            </div>

            <div className="relative z-10 max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0F3B36]/10 flex items-center justify-center text-[#0F3B36] mb-4">
                <UserPlus className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mb-2">
                Become a Tutor
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Bagikan ilmu dan pengalamanmu. Buat kelas sendiri dan ajar mahasiswa di Mesir dengan komisi transparan.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onStartTeaching}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F3B36] hover:bg-[#092824] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group/btn"
              >
                <span>Start Teaching</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
