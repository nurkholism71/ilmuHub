import React, { useState } from 'react';
import { X, Star, BookOpen, Clock, Calendar, CheckCircle2, User, PlayCircle, ShieldCheck } from 'lucide-react';

export default function ClassModal({ course, onClose, onEnroll }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-gray-900">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                course.isFree ? 'bg-[#10B981] text-white' : 'bg-amber-500 text-white'
              }`}>
                {course.price}
              </span>
              <h2 className="text-2xl font-bold text-white mt-2 drop-shadow-md">
                {course.title}
              </h2>
              <p className="text-xs text-gray-200">{course.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Tutor & Quick Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={course.tutor.avatar}
                alt={course.tutor.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#114B44]"
              />
              <div>
                <p className="text-xs text-gray-400 font-medium">Instructor</p>
                <h4 className="text-sm font-bold text-gray-900">{course.tutor.name}</h4>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="font-bold">{course.tutor.rating}</span>
                  <span className="text-gray-400">({course.tutor.reviewsCount} students)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-600 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#114B44]" />
                <span className="font-semibold">{course.lessons}</span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#114B44]" />
                <span className="font-semibold">6 Minggu</span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#114B44]" />
                <span className="font-semibold">Sertifikat</span>
              </div>
            </div>
          </div>

          {/* Description & Syllabus */}
          <div className="py-5 space-y-4">
            <h4 className="font-bold text-sm text-gray-900">Tentang Kelas Ini</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Program komprehensif yang dirancang untuk membantu mahasiswa dan penuntut ilmu memahami kaidah bahasa & studi secara mendalam. Dilengkapi dengan sesi live tanya-jawab, latihan berkala, dan studi kasus kitab klasik.
            </p>

            <h4 className="font-bold text-sm text-gray-900 pt-2">Materi yang Dipelajari:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Konsep Dasar & Terminologi Penting',
                'Pembedahan Kaidah secara Praktis',
                'Praktik Membaca & I’rab Teks Arab',
                'Ujian Evaluasi & Konsultasi Langsung'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400">Total Biaya</span>
              <div className="text-xl font-extrabold text-[#114B44]">{course.price}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  if (onEnroll) onEnroll(course);
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#114B44] to-[#0A302B] hover:from-[#0c3732] hover:to-[#082420] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#114B44]/25 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
                <span>Masuk Ruang Live Belajar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
