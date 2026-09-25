import React from 'react';
import { 
  LayoutGrid, 
  GraduationCap, 
  Scroll, 
  BookOpen, 
  BookMarked, 
  Scale, 
  Building2, 
  Binary, 
  Laptop, 
  FlaskConical, 
  MoreHorizontal 
} from 'lucide-react';

export const exploreCategories = [
  { id: 'all', name: 'All Subjects', icon: LayoutGrid },
  { id: 'nahwu', name: 'Nahwu', icon: GraduationCap },
  { id: 'sharaf', name: 'Sharaf', icon: Scroll },
  { id: 'arabic', name: 'Arabic Language', arabicText: 'عَرَبِي' },
  { id: 'quran', name: 'Quran', icon: BookMarked },
  { id: 'hadith', name: 'Hadith', icon: BookOpen },
  { id: 'fiqh', name: 'Fiqh', icon: Scale },
  { id: 'islamic_studies', name: 'Islamic Studies', icon: Building2 },
  { id: 'mathematics', name: 'Mathematics', mathSymbol: '√Y' },
  { id: 'computer', name: 'Computer', icon: Laptop },
  { id: 'english', name: 'English', flag: '🇬🇧' },
  { id: 'science', name: 'Science', icon: FlaskConical },
  { id: 'university', name: 'University', icon: GraduationCap },
  { id: 'others', name: 'Others', icon: MoreHorizontal },
];

export default function ExploreSubjectNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="bg-[#FAF9F6] border-b border-gray-200/80 py-3.5 px-4 lg:px-8 overflow-x-auto no-scrollbar">
      <div className="max-w-[1440px] mx-auto flex items-center gap-2 sm:gap-2.5 min-w-max">
        {exploreCategories.map((cat) => {
          const isSelected = (activeCategory === cat.id) || (!activeCategory && cat.id === 'all');
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center justify-center px-4 py-2.5 rounded-xl border text-center transition-all duration-150 cursor-pointer min-w-[76px] sm:min-w-[86px] ${
                isSelected
                  ? 'bg-[#114B44] text-white border-[#114B44] shadow-xs'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200/90'
              }`}
            >
              <div className="h-5 flex items-center justify-center mb-1">
                {cat.flag ? (
                  <span className="text-base leading-none">{cat.flag}</span>
                ) : cat.arabicText ? (
                  <span className="font-arabic font-bold text-xs leading-none">{cat.arabicText}</span>
                ) : cat.mathSymbol ? (
                  <span className="font-bold text-xs font-mono">{cat.mathSymbol}</span>
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </div>
              <span className="text-[11px] font-semibold whitespace-nowrap leading-tight">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
