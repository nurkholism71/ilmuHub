import React, { useRef } from 'react';
import { 
  BookOpen, 
  Scroll, 
  PenTool, 
  BookMarked, 
  Scale, 
  GraduationCap, 
  Calculator, 
  Laptop, 
  FlaskConical, 
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';

export const subjects = [
  { id: 'nahwu', name: 'Nahwu', icon: BookOpen, active: true, color: 'bg-[#114B44] text-white border-[#114B44]' },
  { id: 'sharaf', name: 'Sharaf', icon: Scroll, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'arabic', name: 'Arabic', arabicText: 'عَرَبِي', icon: PenTool, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'quran', name: 'Quran', icon: BookMarked, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'hadith', name: 'Hadith', icon: Scroll, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'fiqh', name: 'Fiqh', icon: Scale, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'university', name: 'University', icon: GraduationCap, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'english', name: 'English', isFlag: true, flag: '🇬🇧', color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'mathematics', name: 'Mathematics', icon: Calculator, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'computer', name: 'Computer', icon: Laptop, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
  { id: 'science', name: 'Science', icon: FlaskConical, color: 'bg-[#F4EFE6] text-[#4A3E31] border-[#E8DFC8]' },
];

export default function SubjectCategories({ selectedSubject, onSelectSubject }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="explore" className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              What do you want to learn?
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Pilih mata pelajaran yang kamu minati
            </p>
          </div>

          <a 
            href="#all-subjects" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[#114B44] group transition-colors"
          >
            <span>View all subjects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Horizontal Category Cards / Carousel */}
        <div className="relative group/carousel">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Previous subjects"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div 
            ref={scrollRef}
            className="flex items-center gap-3.5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {subjects.map((item) => {
              const isSelected = selectedSubject === item.id || (!selectedSubject && item.id === 'nahwu');
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectSubject(item.id)}
                  className={`flex flex-col items-center justify-center min-w-[92px] sm:min-w-[104px] py-4 px-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#114B44] text-white border-[#114B44] shadow-md shadow-[#114B44]/25 scale-105'
                      : 'bg-[#FAF7F2] hover:bg-[#F3EFE6] text-gray-800 border-[#EFE8DC] hover:border-[#DFD5C2]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#114B44] shadow-2xs'
                  }`}>
                    {item.isFlag ? (
                      <span className="text-xl leading-none">{item.flag}</span>
                    ) : item.arabicText ? (
                      <span className="font-arabic font-bold text-sm">{item.arabicText}</span>
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next subjects"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
