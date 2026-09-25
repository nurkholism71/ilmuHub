import React, { useState } from 'react';
import UniversityHero from './UniversityHero';
import UniversityNav from './UniversityNav';
import PopularUniSubjects from './PopularUniSubjects';
import UniversitySidebar from './UniversitySidebar';
import FeaturedUniClasses, { allUniClassesCatalog } from './FeaturedUniClasses';
import UniversityRightWidgets from './UniversityRightWidgets';

export default function UniversityCoursesPage({ onSelectClass, onRequestCourse }) {
  const [activeUni, setActiveUni] = useState('all');
  const [activeSubject, setActiveSubject] = useState('all');
  const [selectedUnis, setSelectedUnis] = useState([]);
  const [selectedSubjectAreas, setSelectedSubjectAreas] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ free: false, paid: false });
  const [priceRange, setPriceRange] = useState(1000);

  // Toggle handlers
  const handleToggleUni = (uniId) => {
    setSelectedUnis(prev => 
      prev.includes(uniId) ? prev.filter(x => x !== uniId) : [...prev, uniId]
    );
  };

  const handleToggleSubjectArea = (subId) => {
    setSelectedSubjectAreas(prev => 
      prev.includes(subId) ? prev.filter(x => x !== subId) : [...prev, subId]
    );
  };

  const handleToggleLevel = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(x => x !== level) : [...prev, level]
    );
  };

  const handlePriceFilterChange = (type) => {
    setPriceFilter(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleClearAll = () => {
    setActiveUni('all');
    setActiveSubject('all');
    setSelectedUnis([]);
    setSelectedSubjectAreas([]);
    setSelectedLevels([]);
    setPriceFilter({ free: false, paid: false });
    setPriceRange(1000);
  };

  // Filter calculation
  const filteredCourses = allUniClassesCatalog.filter(course => {
    // University nav filter
    if (activeUni && activeUni !== 'all' && activeUni !== 'others') {
      if (course.uniId !== activeUni) return false;
    }

    // Popular Subject pill filter
    if (activeSubject && activeSubject !== 'all') {
      if (course.subjectArea !== activeSubject) return false;
    }

    // Sidebar University filter
    if (selectedUnis.length > 0 && !selectedUnis.includes(course.uniId)) {
      return false;
    }

    // Sidebar Subject Area filter
    if (selectedSubjectAreas.length > 0 && !selectedSubjectAreas.includes(course.subjectArea)) {
      return false;
    }

    // Level filter (Year)
    if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
      return false;
    }

    // Price filter
    if (priceFilter.free && !priceFilter.paid && !course.isFree) return false;
    if (priceFilter.paid && !priceFilter.free && course.isFree) return false;

    if (course.priceValue > priceRange) return false;

    return true;
  });

  return (
    <div className="w-full bg-[#FAF9F6] pb-16 overflow-x-hidden">
      
      {/* 1. University Hero Banner */}
      <UniversityHero />

      {/* 2. Horizontal University Selector Bar */}
      <UniversityNav
        activeUni={activeUni}
        onSelectUni={(uniId) => {
          setActiveUni(uniId);
          if (uniId !== 'all') {
            setSelectedUnis([uniId]);
          } else {
            setSelectedUnis([]);
          }
        }}
      />

      {/* 3. Main 3-Column Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Popular University Subjects Bar */}
        <PopularUniSubjects
          activeSubject={activeSubject}
          onSelectSubject={(subId) => {
            setActiveSubject(subId);
            if (subId !== 'all') {
              setSelectedSubjectAreas([subId]);
            } else {
              setSelectedSubjectAreas([]);
            }
          }}
        />

        <div className="flex flex-col lg:flex-row items-start gap-6">
          
          {/* Left Sidebar Filter (~230px) */}
          <div className="w-full lg:w-56 xl:w-60 shrink-0">
            <UniversitySidebar
              selectedUnis={selectedUnis}
              onToggleUni={handleToggleUni}
              selectedSubjectAreas={selectedSubjectAreas}
              onToggleSubjectArea={handleToggleSubjectArea}
              selectedLevels={selectedLevels}
              onToggleLevel={handleToggleLevel}
              priceFilter={priceFilter}
              onChangePriceFilter={handlePriceFilterChange}
              priceRange={priceRange}
              onChangePriceRange={setPriceRange}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Center Main Content: Featured University Classes */}
          <div className="flex-1 min-w-0 w-full">
            <FeaturedUniClasses
              courses={filteredCourses}
              onSelectClass={onSelectClass}
            />
          </div>

          {/* Right Widgets (~260px) */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <UniversityRightWidgets
              onSelectUni={(uniId) => {
                setActiveUni(uniId);
                setSelectedUnis([uniId]);
              }}
              onRequestCourse={onRequestCourse}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
