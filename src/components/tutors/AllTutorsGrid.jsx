import React, { useState } from 'react';
import { Star, Heart, LayoutGrid, List, Users } from 'lucide-react';

export const allTutorsData = [
  {
    id: 101,
    name: 'Dr. Khalid Ibrahim',
    avatar: '/images/tutor_khalid.jpg',
    category: 'fiqh',
    level: 'Intermediate',
    teachingType: 'Live Class',
    language: 'Arabic',
    rating: 4.8,
    reviewsCount: 620,
    students: '320',
    tags: ['Fiqh', 'Islamic Studies'],
    price: '250 EGP / hour',
    priceValue: 250,
    isFree: false,
    bio: 'Dosen Fiqh Perbandingan Madzhab dengan pengalaman 10+ tahun membimbing mahasiswa internasional di Kairo.',
    specialties: ['Fiqh Muamalah', 'Ushul Fiqh', 'Qawaid Fiqhiyyah'],
  },
  {
    id: 102,
    name: 'Layla Hassan',
    avatar: '/images/tutor_layla.jpg',
    category: 'hadith',
    level: 'Beginner',
    teachingType: 'Recorded Class',
    language: 'Arabic',
    rating: 4.9,
    reviewsCount: 770,
    students: '410',
    tags: ['Hadith', 'Islamic Studies'],
    price: '200 EGP / hour',
    priceValue: 200,
    isFree: false,
    bio: 'Pengajar ilmu Hadith dan Musthalah Hadith dengan sanad Kutubus Sittah.',
    specialties: ['Musthalah Hadith', 'Takhrij Hadith', 'Syarah Nawawi'],
  },
  {
    id: 103,
    name: 'Youssef Tarek',
    avatar: '/images/tutor_youssef.jpg',
    category: 'mathematics',
    level: 'Beginner',
    teachingType: 'Hybrid',
    language: 'English',
    rating: 4.7,
    reviewsCount: 540,
    students: '280',
    tags: ['Mathematics', 'Physics'],
    price: '180 EGP / hour',
    priceValue: 180,
    isFree: false,
    bio: 'Tutor matematika dan fisika dasar untuk mahasiswa teknik dan sains di Mesir.',
    specialties: ['Kalkulus', 'Aljabar Linier', 'Fisika Dasar'],
  },
  {
    id: 104,
    name: 'Mona Ali',
    avatar: '/images/tutor_mona.jpg',
    category: 'science',
    level: 'Beginner',
    teachingType: 'Recorded Class',
    language: 'English',
    rating: 4.8,
    reviewsCount: 980,
    students: '620',
    tags: ['Science', 'Biology'],
    price: '220 EGP / hour',
    priceValue: 220,
    isFree: false,
    bio: 'Dosen Biologi & Sains Medis di universitas Kairo dengan ribuan alumni bimbingan.',
    specialties: ['Biologi Sel', 'Genetika', 'Anatomi'],
  },
  {
    id: 105,
    name: 'Nour Ahmed',
    avatar: '/images/tutor_nour.jpg',
    category: 'computer',
    level: 'Intermediate',
    teachingType: 'Hybrid',
    language: 'English',
    rating: 4.6,
    reviewsCount: 390,
    students: '300',
    tags: ['Computer', 'Programming'],
    price: '150 EGP / hour',
    priceValue: 150,
    isFree: false,
    bio: 'Software engineer dan mentor coding bahasa Python, C++, dan Web Development.',
    specialties: ['Python', 'Algoritma & Struktur Data', 'React & Web'],
  },
  {
    id: 106,
    name: 'Huda Mahmoud',
    avatar: '/images/tutor_huda.jpg',
    category: 'arabic',
    level: 'Beginner',
    teachingType: 'Live Class',
    language: 'Arabic',
    rating: 4.9,
    reviewsCount: 860,
    students: '510',
    tags: ['Arabic Language', 'Nahwu'],
    price: 'Free',
    priceValue: 0,
    isFree: true,
    bio: 'Pengajar Bahasa Arab dasar untuk pemula dengan metode interaktif dan kelas gratis.',
    specialties: ['Percakapan Sehari-hari', 'Kaidah Imla', 'Kosakata Tematik'],
  },
  {
    id: 107,
    name: 'Dr. Omar Farouk',
    avatar: '/images/tutor_farouk.jpg',
    category: 'quran',
    level: 'Advanced',
    teachingType: 'Live Class',
    language: 'Arabic',
    rating: 4.9,
    reviewsCount: 430,
    students: '290',
    tags: ['Quran', 'Tajweed'],
    price: '300 EGP / hour',
    priceValue: 300,
    isFree: false,
    bio: 'Doktor Ilmu Qiraat dan Tafsir Al-Quran dari Al-Azhar dengan sanad muttashil.',
    specialties: ['Qiraat Sab’ah', 'Tafsir Ayat Ahkam', 'Tahsin Lanjutan'],
  },
  {
    id: 108,
    name: 'Aisha Khaled',
    avatar: '/images/tutor_aisha.jpg',
    category: 'sharaf',
    level: 'Intermediate',
    teachingType: 'Live Class',
    language: 'Arabic',
    rating: 4.7,
    reviewsCount: 360,
    students: '200',
    tags: ['Sharaf', 'Arabic Grammar'],
    price: '180 EGP / hour',
    priceValue: 180,
    isFree: false,
    bio: 'Tutor Sharaf dan morfologi bahasa Arab dengan bagan visual yang mudah dipahami.',
    specialties: ['Wazan Tashrif', 'I’lal & Idgham', 'I’rab Lanjutan'],
  },
  {
    id: 109,
    name: 'Ahmed Saeed',
    avatar: '/images/tutor_saeed.jpg',
    category: 'university',
    level: 'Intermediate',
    teachingType: 'Hybrid',
    language: 'Both',
    rating: 4.8,
    reviewsCount: 410,
    students: '350',
    tags: ['University', 'Economics'],
    price: '200 EGP / hour',
    priceValue: 200,
    isFree: false,
    bio: 'Konsultan akademik dan tutor ekonomi Islam serta bisnis internasional.',
    specialties: ['Ekonomi Mikro & Makro', 'Perbankan Syariah', 'Metodologi Penelitian'],
  },
  {
    id: 110,
    name: 'Rania Samir',
    avatar: '/images/tutor_rania.jpg',
    category: 'english',
    level: 'Intermediate',
    teachingType: 'Live Class',
    language: 'English',
    rating: 4.9,
    reviewsCount: 580,
    students: '420',
    tags: ['English', 'Writing'],
    price: '150 EGP / hour',
    priceValue: 150,
    isFree: false,
    bio: 'Spesialis Academic Writing dan TOEFL/IELTS preparation dengan sertifikasi CELTA.',
    specialties: ['Essay Writing', 'IELTS Speaking & Writing', 'Grammar'],
  },
  {
    id: 111,
    name: 'Mahmoud Ali',
    avatar: '/images/tutor_mahmoud.jpg',
    category: 'computer',
    level: 'Advanced',
    teachingType: 'Recorded Class',
    language: 'Both',
    rating: 4.7,
    reviewsCount: 310,
    students: '260',
    tags: ['Computer', 'Web Development'],
    price: '180 EGP / hour',
    priceValue: 180,
    isFree: false,
    bio: 'Fullstack developer & mentor teknologi modern untuk project dan skripsi mahasiswa.',
    specialties: ['Fullstack JavaScript', 'Database Design', 'Cloud Deploy'],
  },
  {
    id: 112,
    name: 'Zainab Ibrahim',
    avatar: '/images/tutor_zainab.jpg',
    category: 'science',
    level: 'Advanced',
    teachingType: 'Live Class',
    language: 'Both',
    rating: 4.8,
    reviewsCount: 490,
    students: '380',
    tags: ['Science', 'Chemistry'],
    price: '200 EGP / hour',
    priceValue: 200,
    isFree: false,
    bio: 'Dosen Kimia Organik & Farmasi dengan pengalaman riset laboratorium di Kairo.',
    specialties: ['Kimia Organik', 'Biokimia', 'Bimbingan Tugas Akhir'],
  },
];

export default function AllTutorsGrid({
  tutors = allTutorsData,
  onSelectTutor
}) {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sortedTutors = [...tutors].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
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
            All Tutors
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Temukan tutor sesuai kebutuhanmu. Gunakan filter di sebelah kiri untuk hasil yang lebih spesifik. ({sortedTutors.length} tutor)
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

      {/* Grid of Compact Tutor Cards */}
      {sortedTutors.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500">
          <Users className="w-10 h-10 mx-auto text-gray-300 mb-3" />
          <p className="font-bold text-base text-gray-800">Tidak ada tutor yang cocok dengan filter</p>
          <p className="text-xs mt-1">Coba sesuaikan pilihan filter di panel sebelah kiri.</p>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-3.5' 
          : 'flex flex-col gap-3'
        }>
          {sortedTutors.map((tutor) => (
            <div
              key={tutor.id}
              onClick={() => onSelectTutor(tutor)}
              className={`bg-white rounded-2xl border border-gray-200/90 p-3.5 hover:border-gray-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group relative ${
                viewMode === 'list' ? 'sm:flex-row sm:items-center gap-4' : ''
              }`}
            >
              {/* Top Row: Avatar + Name + Favorite Button */}
              <div className="flex items-start justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs text-gray-900 truncate group-hover:text-[#114B44] transition-colors">
                      {tutor.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-0.5 whitespace-nowrap">
                      <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="font-bold text-gray-800">{tutor.rating}</span>
                      <span className="text-gray-400">({tutor.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => toggleFavorite(tutor.id, e)}
                  className="text-gray-300 hover:text-red-500 transition-colors shrink-0 p-0.5"
                >
                  <Heart className={`w-3.5 h-3.5 ${favorites[tutor.id] ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

              {/* Students count */}
              <div className="text-[10px] text-gray-500 flex items-center gap-1 mb-2">
                <Users className="w-3 h-3 text-gray-400 shrink-0" />
                <span>{tutor.students} students</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {tutor.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.5 bg-[#FAF7F2] border border-[#EFE8DC] rounded text-[9px] font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price / Rate at Bottom */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className={`text-[11px] font-extrabold ${tutor.isFree ? 'text-[#10B981]' : 'text-[#114B44]'}`}>
                  {tutor.price}
                </span>
                <span className="text-[10px] text-gray-400 group-hover:text-[#114B44] transition-colors font-bold">
                  View →
                </span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
