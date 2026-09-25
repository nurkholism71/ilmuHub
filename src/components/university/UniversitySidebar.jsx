import React from 'react';

export default function UniversitySidebar({
  selectedUnis,
  onToggleUni,
  selectedSubjectAreas,
  onToggleSubjectArea,
  selectedLevels,
  onToggleLevel,
  priceFilter,
  onChangePriceFilter,
  priceRange,
  onChangePriceRange,
  onClearAll
}) {
  const uniList = [
    { id: 'cairo', label: 'Cairo University', count: '1,240' },
    { id: 'ain_shams', label: 'Ain Shams University', count: '980' },
    { id: 'alexandria', label: 'Alexandria University', count: '760' },
    { id: 'mansoura', label: 'Mansoura University', count: '620' },
    { id: 'zagazig', label: 'Zagazig University', count: '540' },
    { id: 'assiut', label: 'Assiut University', count: '480' },
    { id: 'tanta', label: 'Tanta University', count: '420' },
    { id: 'suez', label: 'Suez Canal University', count: '390' },
    { id: 'helwan', label: 'Helwan University', count: '360' },
    { id: 'benha', label: 'Benha University', count: '320' },
  ];

  const subjectAreas = [
    { id: 'engineering', label: 'Engineering', count: '1,230' },
    { id: 'medicine', label: 'Medicine', count: '980' },
    { id: 'science', label: 'Science', count: '760' },
    { id: 'business', label: 'Business & Economics', count: '640' },
    { id: 'law', label: 'Law', count: '520' },
    { id: 'computer_science', label: 'Computer & IT', count: '510' },
    { id: 'pharmacy', label: 'Pharmacy', count: '420' },
    { id: 'arts', label: 'Arts & Humanities', count: '310' },
    { id: 'education', label: 'Education', count: '280' },
    { id: 'agriculture', label: 'Agriculture', count: '210' },
  ];

  const levelsList = [
    { id: 'First Year', label: 'First Year', count: '1,080' },
    { id: 'Second Year', label: 'Second Year', count: '980' },
    { id: 'Third Year', label: 'Third Year', count: '840' },
    { id: 'Fourth Year', label: 'Fourth Year', count: '620' },
    { id: 'Postgraduate', label: 'Postgraduate', count: '320' },
  ];

  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 space-y-5 text-xs text-gray-700 shadow-2xs">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <span className="font-bold text-sm text-gray-900">Filter</span>
        <button
          onClick={onClearAll}
          className="text-xs text-[#114B44] hover:underline font-semibold cursor-pointer"
        >
          Clear all
        </button>
      </div>

      {/* University */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-900 text-xs">University</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {uniList.map((item) => (
            <label key={item.id} className="flex items-center justify-between hover:text-gray-900 cursor-pointer select-none">
              <div className="flex items-center gap-2 min-w-0">
                <input
                  type="checkbox"
                  checked={selectedUnis.includes(item.id)}
                  onChange={() => onToggleUni(item.id)}
                  className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer shrink-0"
                />
                <span className="text-gray-600 font-medium truncate">{item.label}</span>
              </div>
              <span className="text-gray-400 text-[10px] shrink-0">({item.count})</span>
            </label>
          ))}
        </div>
        <button className="text-[11px] text-[#114B44] hover:underline font-medium block pt-1">
          Show more
        </button>
      </div>

      {/* Subject Area */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Subject Area</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {subjectAreas.map((item) => (
            <label key={item.id} className="flex items-center justify-between hover:text-gray-900 cursor-pointer select-none">
              <div className="flex items-center gap-2 min-w-0">
                <input
                  type="checkbox"
                  checked={selectedSubjectAreas.includes(item.id)}
                  onChange={() => onToggleSubjectArea(item.id)}
                  className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer shrink-0"
                />
                <span className="text-gray-600 font-medium truncate">{item.label}</span>
              </div>
              <span className="text-gray-400 text-[10px] shrink-0">({item.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Level */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 text-xs">Level</h4>
        <div className="space-y-1.5">
          {levelsList.map((level) => (
            <label key={level.id} className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer select-none">
              <div className="flex items-center gap-2 min-w-0">
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level.id)}
                  onChange={() => onToggleLevel(level.id)}
                  className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer shrink-0"
                />
                <span className="font-medium truncate">{level.label}</span>
              </div>
              <span className="text-gray-400 text-[10px] shrink-0">({level.count})</span>
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
            <span>Free (420)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={priceFilter.paid}
              onChange={() => onChangePriceFilter('paid')}
              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44]"
            />
            <span>Paid (2,340)</span>
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

    </aside>
  );
}
