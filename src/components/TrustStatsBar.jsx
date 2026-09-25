import React from 'react';
import { Users, GraduationCap, BookOpen, ThumbsUp } from 'lucide-react';

export default function TrustStatsBar() {
  return (
    <section className="bg-[#112F2B] text-white py-6 border-y border-[#184640]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Title */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center justify-center lg:justify-start gap-2">
              <span>Trusted by students & tutors</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
              Bergabunglah dengan ribuan mahasiswa dan tutor di seluruh Mesir.
            </p>
          </div>

          {/* Right Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white">10K+</div>
                <div className="text-[11px] text-emerald-200/70 font-medium">Students</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/15 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white">500+</div>
                <div className="text-[11px] text-emerald-200/70 font-medium">Tutors</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/15 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white">1K+</div>
                <div className="text-[11px] text-emerald-200/70 font-medium">Classes</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/15 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                <ThumbsUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white">95%</div>
                <div className="text-[11px] text-emerald-200/70 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
