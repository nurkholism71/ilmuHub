import React, { useState } from 'react';
import { Star, BookOpen, BarChart2, LayoutGrid, List, Heart } from 'lucide-react';

export const allUniClassesCatalog = [
  {
    id: 301,
    title: 'Engineering Mathematics I',
    subtitle: 'Calculus, Linear Algebra, and Applications',
    university: 'Cairo University',
    uniId: 'cairo',
    subjectArea: 'engineering',
    level: 'First Year',
    badge: 'Bestseller',
    badgeColor: 'bg-[#0F766E] text-white',
    price: '150 EGP',
    priceValue: 150,
    isFree: false,
    image: '/images/class_math.jpg',
    tutor: {
      name: 'Dr. Ahmed Nabil',
      avatar: '/images/tutor_ahmed.jpg',
      rating: 4.9,
      reviewsCount: '1.2K',
    },
    lessons: '24 Lessons',
    tags: ['Engineering', 'Mathematics', 'First Year'],
  },
  {
    id: 302,
    title: 'Anatomy for Medical Students',
    subtitle: 'Human Body Structure and System',
    university: 'Ain Shams University',
    uniId: 'ain_shams',
    subjectArea: 'medicine',
    level: 'First Year',
    badge: 'Free',
    badgeColor: 'bg-[#10B981] text-white',
    price: 'Free',
    priceValue: 0,
    isFree: true,
    image: '/images/class_anatomy.jpg',
    tutor: {
      name: 'Dr. Sara Hassan',
      avatar: '/images/tutor_fatimah.jpg',
      rating: 4.8,
      reviewsCount: '980',
    },
    lessons: '32 Lessons',
    tags: ['Medicine', 'Anatomy', 'First Year'],
  },
  {
    id: 303,
    title: 'Introduction to Egyptian Law',
    subtitle: 'Civil Law Basics and Case Studies',
    university: 'Alexandria University',
    uniId: 'alexandria',
    subjectArea: 'law',
    level: 'Second Year',
    badge: 'Bestseller',
    badgeColor: 'bg-[#0F766E] text-white',
    price: '200 EGP',
    priceValue: 200,
    isFree: false,
    image: '/images/class_law.jpg',
    tutor: {
      name: 'Dr. Omar Farouk',
      avatar: '/images/tutor_farouk.jpg',
      rating: 4.7,
      reviewsCount: '760',
    },
    lessons: '18 Lessons',
    tags: ['Law', 'Egyptian Law', 'Second Year'],
  },
  {
    id: 304,
    title: 'Programming Fundamentals',
    subtitle: 'Python and Algorithm for University Students',
    university: 'Mansoura University',
    uniId: 'mansoura',
    subjectArea: 'computer_science',
    level: 'First Year',
    badge: 'New',
    badgeColor: 'bg-[#059669] text-white',
    price: 'Free',
    priceValue: 0,
    isFree: true,
    image: '/images/class_computer.jpg',
    tutor: {
      name: 'Youssef Tarek',
      avatar: '/images/tutor_youssef.jpg',
      rating: 4.8,
      reviewsCount: '620',
    },
    lessons: '28 Lessons',
    tags: ['Computer Science', 'Python', 'First Year'],
  },
  {
    id: 305,
    title: 'General Chemistry',
    subtitle: 'Basic Concepts and Problem Solving',
    university: 'Tanta University',
    uniId: 'tanta',
    subjectArea: 'science',
    level: 'First Year',
    badge: 'Free',
    badgeColor: 'bg-[#10B981] text-white',
    price: 'Free',
    priceValue: 0,
    isFree: true,
    image: '/images/class_chemistry.jpg',
    tutor: {
      name: 'Dr. Mona Ali',
      avatar: '/images/tutor_mona.jpg',
      rating: 4.7,
      reviewsCount: '520',
    },
    lessons: '20 Lessons',
    tags: ['Science', 'Chemistry', 'First Year'],
  },
  {
    id: 306,
    title: 'Architectural Design Basics',
    subtitle: 'Design Principles and Structural Drawing',
    university: 'Helwan University',
    uniId: 'helwan',
    subjectArea: 'engineering',
    level: 'Second Year',
    badge: 'Bestseller',
    badgeColor: 'bg-[#0F766E] text-white',
    price: '180 EGP',
    priceValue: 180,
    isFree: false,
    image: '/images/class_architecture.jpg',
    tutor: {
      name: 'Ahmed Saeed',
      avatar: '/images/tutor_saeed.jpg',
      rating: 4.8,
      reviewsCount: '480',
    },
    lessons: '26 Lessons',
    tags: ['Architecture', 'Design', 'Second Year'],
  },
  {
    id: 307,
    title: 'Microeconomics for Students',
    subtitle: 'Theory and Practical Applications',
    university: 'Assiut University',
    uniId: 'assiut',
    subjectArea: 'economics',
    level: 'First Year',
    badge: 'New',
    badgeColor: 'bg-[#059669] text-white',
    price: 'Free',
    priceValue: 0,
    isFree: true,
    image: '/images/class_english.jpg',
    tutor: {
      name: 'Layla Hassan',
      avatar: '/images/tutor_layla.jpg',
      rating: 4.7,
      reviewsCount: '410',
    },
    lessons: '18 Lessons',
    tags: ['Economics', 'Microeconomics', 'First Year'],
  },
  {
    id: 308,
    title: 'Pharmacology Basics',
    subtitle: 'Drugs, Mechanisms and Clinical Effects',
    university: 'Zagazig University',
    uniId: 'zagazig',
    subjectArea: 'pharmacy',
    level: 'Second Year',
    badge: 'Bestseller',
    badgeColor: 'bg-[#0F766E] text-white',
    price: '200 EGP',
    priceValue: 200,
    isFree: false,
    image: '/images/class_pharmacology.jpg',
    tutor: {
      name: 'Dr. Khalid Ibrahim',
      avatar: '/images/tutor_khalid.jpg',
      rating: 4.8,
      reviewsCount: '380',
    },
    lessons: '24 Lessons',
    tags: ['Pharmacy', 'Pharmacology', 'Second Year'],
  },
];

export default function FeaturedUniClasses({
  courses = allUniClassesCatalog,
  onSelectClass
}) {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortBy === 'rating') return b.tutor.rating - a.tutor.rating;
    if (sortBy === 'price_low') return a.priceValue - b.priceValue;
    if (sortBy === 'price_high') return b.priceValue - a.priceValue;
    return 0;
  });

  return (
    <div className="w-full">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-2xs">
        <div>
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            Featured University Classes
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Kelas pilihan untuk mahasiswa dari berbagai universitas di Mesir. ({sortedCourses.length} kelas)
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
          {/* Sort dropdown */}
          <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-xl">
            <span className="text-gray-400 text-[11px]">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-semibold text-gray-800 focus:outline-none cursor-pointer text-xs"
            >
              <option value="popular">Popular</option>
              <option value="rating">Highest Rating</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-gray-100 p-0.5 rounded-xl border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#114B44] text-white shadow-xs' : 'text-gray-500 hover:text-gray-900'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'list' ? 'bg-[#114B44] text-white shadow-xs' : 'text-gray-500 hover:text-gray-900'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Courses Cards Grid */}
      {sortedCourses.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500">
          <BookOpen className="w-10 h-10 mx-auto text-gray-300 mb-3" />
          <p className="font-bold text-base text-gray-800">Tidak ada kelas universitas yang cocok dengan filter</p>
          <p className="text-xs mt-1">Coba sesuaikan pilihan filter universitas atau bidang studi di sebelah kiri.</p>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3.5' 
          : 'flex flex-col gap-3'
        }>
          {sortedCourses.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectClass(item)}
              className={`group bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex cursor-pointer ${
                viewMode === 'grid' ? 'flex-col' : 'flex-row items-center p-3 gap-3.5'
              }`}
            >
              {/* Image with University badge & Status Badge */}
              <div className={`relative overflow-hidden bg-gray-100 ${
                viewMode === 'grid' ? 'aspect-[16/10] w-full' : 'w-40 h-24 shrink-0 rounded-xl'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* University Name Pill Top Left */}
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/95 text-[#0F172A] shadow-xs">
                    {item.university}
                  </span>
                  {item.badge && (
                    <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-bold shadow-xs ${item.badgeColor || 'bg-[#114B44] text-white'}`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Heart Top Right */}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Heart className={`w-3.5 h-3.5 ${favorites[item.id] ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

              {/* Details */}
              <div className={`flex-1 flex flex-col justify-between ${viewMode === 'grid' ? 'p-3' : ''}`}>
                <div>
                  <h3 className="font-bold text-xs sm:text-[13px] text-gray-900 truncate group-hover:text-[#114B44] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Tutor & Meta */}
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={item.tutor.avatar}
                      alt={item.tutor.name}
                      className="w-6 h-6 rounded-full object-cover border border-gray-200 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-gray-800 truncate">
                        {item.tutor.name}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 whitespace-nowrap">
                        <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500 shrink-0" />
                        <span className="font-bold text-gray-800">{item.tutor.rating}</span>
                        <span className="text-gray-400">({item.tutor.reviewsCount} students)</span>
                      </div>
                    </div>
                  </div>

                  {/* Meta row: Lessons & Level */}
                  <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-2">
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <BookOpen className="w-3 h-3 text-gray-400 shrink-0" />
                      <span>{item.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <BarChart2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item.level}</span>
                    </div>
                  </div>

                  {/* Skill / Year Tag Pills */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 bg-[#FAF7F2] border border-[#EFE8DC] rounded text-[9px] font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Dedicated Bottom Price & Action Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      {item.isFree ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-extrabold bg-emerald-100 text-emerald-700 border border-emerald-300">
                          Free
                        </span>
                      ) : (
                        <span className="text-xs sm:text-sm font-extrabold text-[#114B44]">
                          {item.price}
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-bold text-[#114B44] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Enroll →
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
