import React from 'react';
import { 
  Settings, 
  Stethoscope, 
  Briefcase, 
  Scale, 
  Laptop, 
  Pill, 
  FlaskConical, 
  TrendingUp, 
  BookOpen, 
  GraduationCap, 
  Wheat, 
  ArrowRight 
} from 'lucide-react';

export const uniSubjects = [
  { id: 'engineering', name: 'Engineering', icon: Settings },
  { id: 'medicine', name: 'Medicine', icon: Stethoscope },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'law', name: 'Law', icon: Scale },
  { id: 'computer_science', name: 'Computer Science', icon: Laptop },
  { id: 'pharmacy', name: 'Pharmacy', icon: Pill },
  { id: 'science', name: 'Science', icon: FlaskConical },
  { id: 'economics', name: 'Economics', icon: TrendingUp },
  { id: 'arts', name: 'Arts & Humanities', icon: BookOpen },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'agriculture', name: 'Agriculture', icon: Wheat },
];

export default function PopularUniSubjects({ activeSubject, onSelectSubject }) {
  return (
    <div className="mb-8 bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
            Popular University Subjects
          </h2>
          <p className="text-xs text-gray-500">
            Pilih mata kuliah universitas yang ingin kamu pelajari.
          </p>
        </div>

        <a 
          href="#all-subjects" 
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#114B44] hover:underline"
        >
          <span>View all subjects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Horizontal grid/carousel of subjects */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2">
        {uniSubjects.map((sub) => {
          const isSelected = activeSubject === sub.id;
          const Icon = sub.icon;

          return (
            <button
              key={sub.id}
              onClick={() => onSelectSubject(sub.id === activeSubject ? 'all' : sub.id)}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#114B44] text-white border-[#114B44] shadow-xs'
                  : 'bg-[#FAF9F6] hover:bg-white text-gray-700 border-gray-200/80 hover:border-gray-300'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 ${
                isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#114B44] shadow-2xs'
              }`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-semibold leading-tight line-clamp-1">
                {sub.name}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
