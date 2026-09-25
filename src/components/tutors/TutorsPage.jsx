import React, { useState } from 'react';
import TutorsHero from './TutorsHero';
import ExploreSubjectNav from '../explore/ExploreSubjectNav';
import TutorsSidebar from './TutorsSidebar';
import FeaturedTutorsSection from './FeaturedTutorsSection';
import AllTutorsGrid, { allTutorsData } from './AllTutorsGrid';
import TutorsRightWidgets from './TutorsRightWidgets';

export default function TutorsPage({ onSelectTutor, onStartTeaching }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [teachingType, setTeachingType] = useState('All Types');
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
    setTeachingType('All Types');
    setPriceFilter({ free: false, paid: false });
    setPriceRange(1000);
    setSelectedLanguages([]);
    setMinRating(0);
  };

  // Filter calculation for All Tutors
  const filteredTutors = allTutorsData.filter(tutor => {
    if (activeCategory && activeCategory !== 'all' && activeCategory !== 'others') {
      if (tutor.category !== activeCategory) return false;
    }

    if (selectedSubjects.length > 0 && !selectedSubjects.includes(tutor.category)) {
      return false;
    }

    if (selectedLevels.length > 0 && !selectedLevels.includes(tutor.level)) {
      return false;
    }

    if (teachingType !== 'All Types' && tutor.teachingType !== teachingType) {
      return false;
    }

    if (priceFilter.free && !priceFilter.paid && !tutor.isFree) return false;
    if (priceFilter.paid && !priceFilter.free && tutor.isFree) return false;

    if (tutor.priceValue > priceRange) return false;

    if (selectedLanguages.length > 0 && !selectedLanguages.includes(tutor.language) && tutor.language !== 'Both') {
      return false;
    }

    if (minRating > 0 && tutor.rating < minRating) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-full bg-[#FAF9F6] pb-16 overflow-x-hidden">
      
      {/* 1. Tutors Hero Banner */}
      <TutorsHero />

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
            <TutorsSidebar
              selectedSubjects={selectedSubjects}
              onToggleSubject={handleToggleSubject}
              selectedLevels={selectedLevels}
              onToggleLevel={handleToggleLevel}
              teachingType={teachingType}
              onChangeTeachingType={setTeachingType}
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

          {/* Center Main Content: Featured Tutors + All Tutors Grid */}
          <div className="flex-1 min-w-0 w-full">
            {/* Featured Tutors (4 Top Cards) */}
            <FeaturedTutorsSection
              onSelectTutor={onSelectTutor}
            />

            {/* All Tutors (12 Grid Cards) */}
            <AllTutorsGrid
              tutors={filteredTutors}
              onSelectTutor={onSelectTutor}
            />
          </div>

          {/* Right Widgets (~260px) */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <TutorsRightWidgets
              onStartTeaching={onStartTeaching}
              onLearnVerification={() => alert('Semua tutor di IlmHub telah melalui verifikasi ijazah dan uji kompetensi pengajaran.')}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
