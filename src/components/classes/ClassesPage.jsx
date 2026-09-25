import React, { useState } from 'react';
import ClassesHero from './ClassesHero';
import ExploreSubjectNav from '../explore/ExploreSubjectNav';
import ClassesSidebar from './ClassesSidebar';
import ClassesGrid, { allClassesCatalog } from './ClassesGrid';
import ClassesRightWidgets from './ClassesRightWidgets';

export default function ClassesPage({ onSelectClass, onExploreFree }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedClassTypes, setSelectedClassTypes] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ free: false, paid: false });
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [minRating, setMinRating] = useState(0);

  // Toggle handlers
  const handleToggleSubject = (subId) => {
    setSelectedSubjects(prev => 
      prev.includes(subId) ? prev.filter(x => x !== subId) : [...prev, subId]
    );
  };

  const handleToggleLevel = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(x => x !== level) : [...prev, level]
    );
  };

  const handleToggleClassType = (type) => {
    setSelectedClassTypes(prev => 
      prev.includes(type) ? prev.filter(x => x !== type) : [...prev, type]
    );
  };

  const handlePriceFilterChange = (type) => {
    setPriceFilter(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleToggleLanguage = (lang) => {
    setSelectedLanguages(prev => 
      prev.includes(lang) ? prev.filter(x => x !== lang) : [...prev, lang]
    );
  };

  const handleClearAll = () => {
    setActiveCategory('all');
    setSelectedSubjects([]);
    setSelectedLevels([]);
    setSelectedClassTypes([]);
    setPriceFilter({ free: false, paid: false });
    setPriceRange(1000);
    setSelectedLanguages([]);
    setMinRating(0);
  };

  // Filter calculation
  const filteredCourses = allClassesCatalog.filter(course => {
    if (activeCategory && activeCategory !== 'all' && activeCategory !== 'others') {
      if (course.category !== activeCategory) return false;
    }

    if (selectedSubjects.length > 0 && !selectedSubjects.includes(course.category)) {
      return false;
    }

    if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
      return false;
    }

    if (selectedClassTypes.length > 0 && !selectedClassTypes.includes(course.classType)) {
      return false;
    }

    if (priceFilter.free && !priceFilter.paid && !course.isFree) return false;
    if (priceFilter.paid && !priceFilter.free && course.isFree) return false;

    if (course.priceValue > priceRange) return false;

    if (selectedLanguages.length > 0 && !selectedLanguages.includes(course.language) && course.language !== 'Both') {
      return false;
    }

    if (minRating > 0 && course.tutor.rating < minRating) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-full bg-[#FAF9F6] pb-16 overflow-x-hidden">
      
      {/* 1. Classes Hero Banner */}
      <ClassesHero />

      {/* 2. Horizontal Category Bar */}
      <ExploreSubjectNav
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          if (catId !== 'all') {
            setSelectedSubjects([catId]);
          } else {
            setSelectedSubjects([]);
          }
        }}
      />

      {/* 3. Main 3-Column Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          
          {/* Left Sidebar Filter (~230px) */}
          <div className="w-full lg:w-56 xl:w-60 shrink-0">
            <ClassesSidebar
              selectedSubjects={selectedSubjects}
              onToggleSubject={handleToggleSubject}
              selectedLevels={selectedLevels}
              onToggleLevel={handleToggleLevel}
              selectedClassTypes={selectedClassTypes}
              onToggleClassType={handleToggleClassType}
              priceFilter={priceFilter}
              onChangePriceFilter={handlePriceFilterChange}
              priceRange={priceRange}
              onChangePriceRange={setPriceRange}
              selectedLanguages={selectedLanguages}
              onToggleLanguage={handleToggleLanguage}
              minRating={minRating}
              onChangeMinRating={setMinRating}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Center Main Content: All Classes Grid */}
          <div className="flex-1 min-w-0 w-full">
            <ClassesGrid
              courses={filteredCourses}
              onSelectClass={onSelectClass}
            />
          </div>

          {/* Right Widgets (~260px) */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <ClassesRightWidgets
              onSelectSubject={(subId) => {
                setActiveCategory(subId);
                setSelectedSubjects([subId]);
              }}
              onSelectClass={onSelectClass}
              onExploreFree={onExploreFree}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
