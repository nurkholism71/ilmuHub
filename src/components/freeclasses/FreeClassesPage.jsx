import React, { useState } from 'react';
import FreeClassesHero from './FreeClassesHero';
import ExploreSubjectNav from '../explore/ExploreSubjectNav';
import FreeClassesSidebar from './FreeClassesSidebar';
import FreeClassesGrid, { allFreeCoursesCatalog } from './FreeClassesGrid';
import FreeClassesRightWidgets from './FreeClassesRightWidgets';

export default function FreeClassesPage({ onSelectClass, onExploreAllPaid }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedClassTypes, setSelectedClassTypes] = useState([]);
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
    setSelectedLanguages([]);
    setMinRating(0);
  };

  // Filter calculation
  const filteredCourses = allFreeCoursesCatalog.filter(course => {
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
      
      {/* 1. Free Classes Hero Banner */}
      <FreeClassesHero />

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
            <FreeClassesSidebar
              selectedSubjects={selectedSubjects}
              onToggleSubject={handleToggleSubject}
              selectedLevels={selectedLevels}
              onToggleLevel={handleToggleLevel}
              selectedClassTypes={selectedClassTypes}
              onToggleClassType={handleToggleClassType}
              selectedLanguages={selectedLanguages}
              onToggleLanguage={handleToggleLanguage}
              minRating={minRating}
              onChangeMinRating={setMinRating}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Center Main Content: Free Classes Grid */}
          <div className="flex-1 min-w-0 w-full">
            <FreeClassesGrid
              courses={filteredCourses}
              onSelectClass={onSelectClass}
            />
          </div>

          {/* Right Widgets (~260px) */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <FreeClassesRightWidgets
              onSelectClass={onSelectClass}
              onExploreAllPaid={onExploreAllPaid}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
