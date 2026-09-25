import React from 'react';
import { ArrowRight, Landmark, Building, School, BookOpen, ChevronDown } from 'lucide-react';

export default function UniversityRightWidgets({ onSelectUni, onRequestCourse }) {
  const topUnis = [
    { id: 'cairo', name: 'Cairo University', count: '1,240 classes', code: 'CU', icon: Landmark },
    { id: 'ain_shams', name: 'Ain Shams University', count: '980 classes', code: 'ASU', icon: Building },
    { id: 'alexandria', name: 'Alexandria University', count: '760 classes', code: 'AU', icon: Landmark },
    { id: 'mansoura', name: 'Mansoura University', count: '620 classes', code: 'MU', icon: School },
    { id: 'zagazig', name: 'Zagazig University', count: '540 classes', code: 'ZU', icon: Building },
  ];

  return (
    <aside className="w-full space-y-5">
      
      {/* Widget 1: Find Your University */}
      <div className="bg-[#FAF7F2] rounded-2xl border border-[#EBE3D5] p-4 sm:p-5 shadow-2xs">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-lg bg-[#114B44] text-white flex items-center justify-center text-xs font-bold">
                🏛️
              </span>
              <h4 className="font-bold text-gray-900 text-sm">Find Your University</h4>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Pilih universitasmu untuk melihat kelas yang relevan.
            </p>
          </div>

          <img
            src="/images/cairo_uni_thumbnail.jpg"
            alt="University campus"
            className="w-14 h-14 rounded-xl object-cover shadow-xs border-2 border-white shrink-0"
          />
        </div>

        {/* Dropdown Select */}
        <div className="relative pt-1">
          <select
            onChange={(e) => onSelectUni(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-800 font-semibold focus:outline-none focus:border-[#114B44] appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>Select your university</option>
            <option value="cairo">Cairo University</option>
            <option value="ain_shams">Ain Shams University</option>
            <option value="alexandria">Alexandria University</option>
            <option value="mansoura">Mansoura University</option>
            <option value="zagazig">Zagazig University</option>
            <option value="assiut">Assiut University</option>
            <option value="tanta">Tanta University</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 translate-y-[-2px] pointer-events-none" />
        </div>
      </div>

      {/* Widget 2: Top Universities */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h4 className="font-bold text-gray-900 text-sm">Top Universities</h4>
          <a href="#all-unis" className="text-xs text-[#114B44] hover:underline font-semibold flex items-center gap-1">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-3">
          {topUnis.map((uni) => (
            <button
              key={uni.id}
              onClick={() => onSelectUni(uni.id)}
              className="w-full flex items-center justify-between gap-3 p-1.5 rounded-xl hover:bg-[#FAF9F6] text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#114B44] flex items-center justify-center font-bold text-xs shrink-0 border border-gray-200/70">
                  {uni.code}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-gray-900 truncate group-hover:text-[#114B44]">
                    {uni.name}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">
                    {uni.count}
                  </p>
                </div>
              </div>

              <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#114B44] shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>

      {/* Widget 3: Need a Specific Course? */}
      <div className="bg-gradient-to-br from-[#0F3B36] to-[#0A2622] text-white rounded-2xl p-5 shadow-sm border border-[#165049]">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-emerald-300" />
          <h4 className="font-bold text-white text-sm">Need a Specific Course?</h4>
        </div>

        <p className="text-[11px] text-emerald-100/90 leading-relaxed mb-4">
          Tidak menemukan mata kuliah yang kamu cari? Ajukan permintaan kelas dan kami akan membantu.
        </p>

        <button
          onClick={onRequestCourse}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-white hover:bg-emerald-50 text-[#0F3B36] text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Request a Course</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </aside>
  );
}
