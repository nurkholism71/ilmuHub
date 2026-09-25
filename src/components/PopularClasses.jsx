import React from 'react';
import { Star, BookOpen, BarChart2, ArrowRight } from 'lucide-react';

export const classesData = [
  {
    id: 1,
    title: 'Nahwu for Beginners',
    subtitle: 'Dasar-dasar Nahwu secara sistematis',
    category: 'nahwu',
    price: 'Free',
    isFree: true,
    image: '/images/class_nahwu.jpg',
    tutor: {
      name: 'Ahmed Mohamed',
      avatar: '/images/tutor_ahmed.jpg',
      rating: 4.9,
      reviewsCount: '1.2k',
    },
    lessons: '12 Lessons',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Sharaf Intermediate',
    subtitle: 'Pembahasan mendalam Ilmu Sharaf',
    category: 'sharaf',
    price: '150 EGP',
    isFree: false,
    image: '/images/class_sharaf.jpg',
    tutor: {
      name: 'Omar Hassan',
      avatar: '/images/tutor_omar.jpg',
      rating: 4.8,
      reviewsCount: '850',
    },
    lessons: '18 Lessons',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Quran Tajweed',
    subtitle: 'Belajar tajwid dari dasar',
    category: 'quran',
    price: 'Free',
    isFree: true,
    image: '/images/class_tajweed.jpg',
    tutor: {
      name: 'Fatimah Zahra',
      avatar: '/images/tutor_fatimah.jpg',
      rating: 4.9,
      reviewsCount: '2.1k',
    },
    lessons: '24 Lessons',
    level: 'Beginner',
  },
  {
    id: 4,
    title: 'Arabic Grammar Mastery',
    subtitle: 'Nahwu & Sharaf terintegrasi',
    category: 'arabic',
    price: '200 EGP',
    isFree: false,
    image: '/images/class_arabic.jpg',
    tutor: {
      name: 'Mohamed Ali',
      avatar: '/images/tutor_ahmed.jpg',
      rating: 4.8,
      reviewsCount: '450',
    },
    lessons: '20 Lessons',
    level: 'Advanced',
  },
  {
    id: 5,
    title: 'English for University',
    subtitle: 'Academic English for Students',
    category: 'english',
    price: 'Free',
    isFree: true,
    image: '/images/class_english.jpg',
    tutor: {
      name: 'Sara Ahmed',
      avatar: '/images/tutor_sara.jpg',
      rating: 4.9,
      reviewsCount: '1.5k',
    },
    lessons: '16 Lessons',
    level: 'Intermediate',
  },
];

export default function PopularClasses({ onSelectClass, activeCategory, searchQuery }) {
  const filteredClasses = classesData.filter((cls) => {
    const matchCategory = !activeCategory || activeCategory === 'all' || cls.category === activeCategory;
    const matchSearch = !searchQuery || 
      cls.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.tutor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const displayList = filteredClasses.length > 0 ? filteredClasses : classesData;

  return (
    <section id="classes" className="py-14 bg-[#FAF9F6] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Popular Classes
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Kelas pilihan dan banyak diminati oleh mahasiswa di Mesir
            </p>
          </div>

          <a 
            href="#all-classes" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[#114B44] group transition-colors"
          >
            <span>View all classes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {displayList.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectClass(item)}
              className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Card Image with badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Price / Free Badge */}
                <div className="absolute top-2.5 right-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
                      item.isFree
                        ? 'bg-[#10B981] text-white'
                        : 'bg-[#1E293B]/90 backdrop-blur-xs text-white'
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-gray-900 truncate group-hover:text-[#114B44] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Tutor info */}
                <div className="pt-2.5 mt-2.5 border-t border-gray-100">
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

                  {/* Meta tags */}
                  <div className="flex items-center gap-3 text-[10px] font-medium text-gray-500 mb-2">
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <BookOpen className="w-3 h-3 text-gray-400 shrink-0" />
                      <span>{item.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <BarChart2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item.level}</span>
                    </div>
                  </div>

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
      </div>
    </section>
  );
}
