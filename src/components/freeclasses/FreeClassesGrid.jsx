import React, { useState } from 'react';
import { Star, BookOpen, BarChart2, LayoutGrid, List, Heart } from 'lucide-react';

export const allFreeCoursesCatalog = [
  {
    id: 201,
    title: 'Nahwu for Beginners',
    subtitle: 'Dasar-dasar Nahwu secara sistematis',
    category: 'nahwu',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Live Class',
    image: '/images/class_nahwu.jpg',
    tutor: {
      name: 'Ahmed Mohamed',
      avatar: '/images/tutor_ahmed.jpg',
      rating: 4.9,
      reviewsCount: '1.2K',
    },
    lessons: '12 Lessons',
    tags: ['Nahwu', 'Bahasa Arab', 'Grammar'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 202,
    title: 'Sharaf Introduction',
    subtitle: 'Pengenalan ilmu Sharaf untuk pemula',
    category: 'sharaf',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Recorded Class',
    image: '/images/class_sharaf.jpg',
    tutor: {
      name: 'Omar Hassan',
      avatar: '/images/tutor_omar.jpg',
      rating: 4.8,
      reviewsCount: '850',
    },
    lessons: '10 Lessons',
    tags: ['Sharaf', 'Morphology', 'Arabic'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 203,
    title: 'Quran Tajweed Basics',
    subtitle: 'Belajar tajwid dari dasar',
    category: 'quran',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Live Class',
    image: '/images/class_tajweed.jpg',
    tutor: {
      name: 'Fatimah Zahra',
      avatar: '/images/tutor_fatimah.jpg',
      rating: 4.9,
      reviewsCount: '2.1K',
    },
    lessons: '14 Lessons',
    tags: ['Quran', 'Tajweed', 'Tilawah'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 204,
    title: 'Arabic Conversation',
    subtitle: 'Percakapan Bahasa Arab sehari-hari',
    category: 'arabic',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Live Class',
    image: '/images/class_conversation.jpg',
    tutor: {
      name: 'Mohamed Ali',
      avatar: '/images/tutor_ahmed.jpg',
      rating: 4.8,
      reviewsCount: '1.5K',
    },
    lessons: '16 Lessons',
    tags: ['Arabic', 'Conversation', 'Daily Life'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 205,
    title: 'English for University',
    subtitle: 'Academic English for Students',
    category: 'english',
    level: 'Intermediate',
    language: 'English',
    classType: 'Recorded Class',
    image: '/images/class_english.jpg',
    tutor: {
      name: 'Sara Ahmed',
      avatar: '/images/tutor_sara.jpg',
      rating: 4.9,
      reviewsCount: '1.3K',
    },
    lessons: '18 Lessons',
    tags: ['English', 'Academic', 'Writing'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 206,
    title: 'Hadith Studies Basic',
    subtitle: 'Kajian Hadith untuk pemula',
    category: 'hadith',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Recorded Class',
    image: '/images/class_hadith.jpg',
    tutor: {
      name: 'Dr. Khalid Ibrahim',
      avatar: '/images/tutor_khalid.jpg',
      rating: 4.9,
      reviewsCount: '980',
    },
    lessons: '20 Lessons',
    tags: ['Hadith', 'Islamic Studies', 'Sunnah'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 207,
    title: 'Mathematics Fundamentals',
    subtitle: 'Matematika untuk mahasiswa',
    category: 'mathematics',
    level: 'Beginner',
    language: 'English',
    classType: 'Recorded Class',
    image: '/images/class_math.jpg',
    tutor: {
      name: 'Youssef Tarek',
      avatar: '/images/tutor_youssef.jpg',
      rating: 4.7,
      reviewsCount: '1.1K',
    },
    lessons: '24 Lessons',
    tags: ['Mathematics', 'Algebra', 'Calculus'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 208,
    title: 'Computer Skills Basics',
    subtitle: 'Dasar-dasar komputer untuk mahasiswa',
    category: 'computer',
    level: 'Beginner',
    language: 'English',
    classType: 'Hybrid',
    image: '/images/class_computer.jpg',
    tutor: {
      name: 'Mona Ali',
      avatar: '/images/tutor_mona.jpg',
      rating: 4.8,
      reviewsCount: '1.0K',
    },
    lessons: '15 Lessons',
    tags: ['Computer', 'MS Office', 'Internet'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 209,
    title: 'Fiqh untuk Pemula',
    subtitle: 'Dasar-dasar Fiqh dalam kehidupan sehari-hari',
    category: 'fiqh',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Live Class',
    image: '/images/class_fiqh.jpg',
    tutor: {
      name: 'Dr. Omar Farouk',
      avatar: '/images/tutor_farouk.jpg',
      rating: 4.8,
      reviewsCount: '920',
    },
    lessons: '16 Lessons',
    tags: ['Fiqh', 'Islamic Law', 'Daily Life'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 210,
    title: 'Study Skills for University',
    subtitle: 'Teknik belajar efektif untuk mahasiswa',
    category: 'university',
    level: 'Beginner',
    language: 'English',
    classType: 'Recorded Class',
    image: '/images/class_studyskills.jpg',
    tutor: {
      name: 'Layla Hassan',
      avatar: '/images/tutor_layla.jpg',
      rating: 4.7,
      reviewsCount: '860',
    },
    lessons: '12 Lessons',
    tags: ['Study Skills', 'Productivity', 'University'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 211,
    title: 'Islamic History',
    subtitle: 'Sejarah Islam dari masa ke masa',
    category: 'islamic_studies',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Live Class',
    image: '/images/class_history.jpg',
    tutor: {
      name: 'Ahmed Saeed',
      avatar: '/images/tutor_saeed.jpg',
      rating: 4.8,
      reviewsCount: '1.1K',
    },
    lessons: '18 Lessons',
    tags: ['History', 'Islamic Civilization', 'Timeline'],
    price: 'Free',
    isFree: true,
  },
  {
    id: 212,
    title: 'Arabic Writing Skills',
    subtitle: 'Latihan menulis Bahasa Arab',
    category: 'arabic',
    level: 'Beginner',
    language: 'Arabic',
    classType: 'Recorded Class',
    image: '/images/class_writing.jpg',
    tutor: {
      name: 'Huda Mahmoud',
      avatar: '/images/tutor_huda.jpg',
      rating: 4.7,
      reviewsCount: '780',
    },
    lessons: '14 Lessons',
    tags: ['Arabic', 'Writing', 'Practice'],
    price: 'Free',
    isFree: true,
  },
];

export default function FreeClassesGrid({
  courses = allFreeCoursesCatalog,
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
    return 0;
  });

  return (
    <div className="w-full">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-2xs">
        <div>
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            Free Classes
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Ribuan kelas gratis untuk mengembangkan ilmu dan keterampilanmu. ({sortedCourses.length} kelas)
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
          <p className="font-bold text-base text-gray-800">Tidak ada kelas yang cocok dengan filter</p>
          <p className="text-xs mt-1">Coba sesuaikan pilihan filter di panel sebelah kiri.</p>
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
              {/* Image with Free Badge & Heart Button */}
              <div className={`relative overflow-hidden bg-gray-100 ${
                viewMode === 'grid' ? 'aspect-[16/10] w-full' : 'w-40 h-24 shrink-0 rounded-xl'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Free Badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#10B981] text-white shadow-xs">
                    Free
                  </span>
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

                  {/* Skill Tag Pills */}
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
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-extrabold bg-emerald-100 text-emerald-700 border border-emerald-300">
                      Free
                    </span>

                    <span className="text-[11px] font-bold text-[#114B44] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Join Free →
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
