import React from 'react';
import { LayoutGrid, Building, Landmark, School, MoreHorizontal } from 'lucide-react';

export const universitiesList = [
  { id: 'all', name: 'All Universities', icon: LayoutGrid },
  { id: 'cairo', name: 'Cairo University', code: 'CU', icon: Landmark },
  { id: 'ain_shams', name: 'Ain Shams University', code: 'ASU', icon: Building },
  { id: 'alexandria', name: 'Alexandria University', code: 'AU', icon: Landmark },
  { id: 'mansoura', name: 'Mansoura University', code: 'MU', icon: School },
  { id: 'zagazig', name: 'Zagazig University', code: 'ZU', icon: Building },
  { id: 'assiut', name: 'Assiut University', code: 'ASST', icon: Landmark },
  { id: 'tanta', name: 'Tanta University', code: 'TU', icon: School },
  { id: 'suez', name: 'Suez Canal University', code: 'SCU', icon: Building },
  { id: 'helwan', name: 'Helwan University', code: 'HU', icon: Landmark },
  { id: 'benha', name: 'Benha University', code: 'BU', icon: School },
  { id: 'others', name: 'Others', icon: MoreHorizontal },
];

export default function UniversityNav({ activeUni, onSelectUni }) {
  return (
    <div className="bg-[#FAF9F6] border-b border-gray-200/80 py-3.5 px-4 lg:px-8 overflow-x-auto no-scrollbar">
      <div className="max-w-[1440px] mx-auto flex items-center gap-2 sm:gap-2.5 min-w-max">
        {universitiesList.map((uni) => {
          const isSelected = (activeUni === uni.id) || (!activeUni && uni.id === 'all');
          const Icon = uni.icon;

          return (
            <button
              key={uni.id}
              onClick={() => onSelectUni(uni.id)}
              className={`flex flex-col items-center justify-center px-4 py-2.5 rounded-xl border text-center transition-all duration-150 cursor-pointer min-w-[84px] sm:min-w-[96px] ${
                isSelected
                  ? 'bg-[#114B44] text-white border-[#114B44] shadow-xs'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200/90'
              }`}
            >
              <div className="h-5 flex items-center justify-center mb-1">
                {uni.code ? (
                  <span className={`font-black text-[11px] tracking-tight ${isSelected ? 'text-emerald-200' : 'text-[#114B44]'}`}>
                    {uni.code}
                  </span>
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </div>
              <span className="text-[11px] font-semibold whitespace-nowrap leading-tight">
                {uni.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
