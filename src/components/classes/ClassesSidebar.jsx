import React from 'react';
import { Star } from 'lucide-react';

export default function ClassesSidebar({
  selectedSubjects,
  onToggleSubject,
  selectedLevels,
  onToggleLevel,
  selectedClassTypes,
  onToggleClassType,
  priceFilter,
  onChangePriceFilter,
  priceRange,
  onChangePriceRange,
  selectedLanguages,
  onToggleLanguage,
  minRating,
  onChangeMinRating,
  onClearAll
}) {
  const subjectsList = [
    { id: 'nahwu', label: 'Nahwu', count: 324 },
    { id: 'sharaf', label: 'Sharaf', count: 218 },
    { id: 'arabic', label: 'Arabic Language', count: 412 },
    { id: 'quran', label: 'Quran', count: 186 },
    { id: 'hadith', label: 'Hadith', count: 120 },
    { id: 'fiqh', label: 'Fiqh', count: 98 },
    { id: 'islamic_studies', label: 'Islamic Studies', count: 256 },
    { id: 'university', label: 'University Subjects', count: 341 },
    { id: 'english', label: 'English', count: 310 },
    { id: 'mathematics', label: 'Mathematics', count: 198 },
  ];

  const levelsList = [
    { id: 'Beginner', label: 'Beginner', count: 520 },
    { id: 'Intermediate', label: 'Intermediate', count: 410 },
    { id: 'Advanced', label: 'Advanced', count: 280 },
  ];

  const classTypesList = [
    { id: 'Live Class', label: 'Live Class', count: 420 },
    { id: 'Recorded Class', label: 'Recorded Class', count: 380 },
    { id: 'Hybrid', label: 'Hybrid', count: 120 },
  ];

  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 space-y-5 text-xs text-gray-700 shadow-2xs">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <span className="font-bold text-sm text-gray-900">Filters</span>
        <button
          onClick={onClearAll}
          className="text-xs text-[#114B44] hover:underline font-semibold cursor-pointer"
        >
          Clear all
        </button>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-900 text-xs">Subject</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {subjectsList.map((item) => (
            <label key={item.id} className="flex items-center justify-between hover:text-gray-900 cursor-pointer select-none">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(item.id)}
                  onChange={() => onToggleSubject(item.id)}
                  className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                />
                <span className="text-gray-600 font-medium">{item.label}</span>
              </div>
              <span className="text-gray-400 text-[10px]">({item.count})</span>
            </label>
          ))}
        </div>
        <button className="text-[11px] text-[#114B44] hover:underline font-medium block pt-1">
          Show more
        </button>
      </div>

      {/* Level */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Level</h4>
        <div className="space-y-1.5">
          {levelsList.map((level) => (
            <label key={level.id} className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer select-none">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level.id)}
                  onChange={() => onToggleLevel(level.id)}
                  className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                />
                <span className="font-medium">{level.label}</span>
              </div>
              <span className="text-gray-400 text-[10px]">({level.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Class Type */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Class Type</h4>
        <div className="space-y-1.5">
          {classTypesList.map((type) => (
            <label key={type.id} className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer select-none">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedClassTypes.includes(type.id)}
                  onChange={() => onToggleClassType(type.id)}
                  className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                />
                <span className="font-medium">{type.label}</span>
              </div>
              <span className="text-gray-400 text-[10px]">({type.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2.5 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Price</h4>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={priceFilter.free}
              onChange={() => onChangePriceFilter('free')}
              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44]"
            />
            <span>Free (550)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={priceFilter.paid}
              onChange={() => onChangePriceFilter('paid')}
              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44]"
            />
            <span>Paid (680)</span>
          </label>
        </div>

        {/* Range Slider */}
        <div className="pt-1.5">
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange}
            onChange={(e) => onChangePriceRange(Number(e.target.value))}
            className="w-full accent-[#114B44] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
            <span>0 EGP</span>
            <span>{priceRange >= 1000 ? '1000+ EGP' : `${priceRange} EGP`}</span>
          </div>
        </div>
      </div>

      {/* Language */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Language</h4>
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedLanguages.includes('Arabic')}
              onChange={() => onToggleLanguage('Arabic')}
              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44]"
            />
            <span>Arabic (780)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedLanguages.includes('English')}
              onChange={() => onToggleLanguage('English')}
              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44]"
            />
            <span>English (320)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedLanguages.includes('Both')}
              onChange={() => onToggleLanguage('Both')}
              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44]"
            />
            <span>Both (130)</span>
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Rating</h4>
        <div className="space-y-1.5">
          <label 
            onClick={() => onChangeMinRating(4.5)}
            className={`flex items-center gap-1.5 cursor-pointer p-1 rounded-lg ${minRating === 4.5 ? 'bg-amber-50 font-bold' : ''}`}
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-500" />
              ))}
            </div>
            <span className="text-gray-700 text-xs">4.5 & up</span>
          </label>

          <label 
            onClick={() => onChangeMinRating(4.0)}
            className={`flex items-center gap-1.5 cursor-pointer p-1 rounded-lg ${minRating === 4.0 ? 'bg-amber-50 font-bold' : ''}`}
          >
            <div className="flex text-amber-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-500" />
              ))}
            </div>
            <span className="text-gray-700 text-xs">4.0 & up</span>
          </label>

          <label 
            onClick={() => onChangeMinRating(3.5)}
            className={`flex items-center gap-1.5 cursor-pointer p-1 rounded-lg ${minRating === 3.5 ? 'bg-amber-50 font-bold' : ''}`}
          >
            <div className="flex text-amber-500">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-500" />
              ))}
            </div>
            <span className="text-gray-700 text-xs">3.5 & up</span>
          </label>
        </div>
      </div>

    </aside>
  );
}
