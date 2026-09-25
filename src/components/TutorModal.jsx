import React, { useState } from 'react';
import { X, Star, Users, GraduationCap, Calendar, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export default function TutorModal({ tutor, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);

  if (!tutor) return null;

  const availableSlots = [
    'Senin, 16:00 CLT (Kairo)',
    'Rabu, 19:30 CLT (Kairo)',
    'Jumat, 14:00 CLT (Kairo)',
    'Sabtu, 10:00 CLT (Kairo)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-gray-100 text-center sm:text-left">
          <div className="relative">
            <img
              src={tutor.avatar}
              alt={tutor.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#114B44]/20 shadow-md"
            />
            <div className="absolute bottom-0 right-1 bg-white rounded-full p-0.5 shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-600 fill-emerald-600 text-white" />
            </div>
          </div>

          <div className="space-y-1 flex-1">
            <h3 className="text-xl font-bold text-gray-900">{tutor.name}</h3>
            <p className="text-xs font-semibold text-[#114B44]">{tutor.title}</p>
            
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-gray-500">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <span>{tutor.rating}</span>
                <span className="text-gray-400 font-normal">({tutor.reviews} ulasan)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                <span>{tutor.students} mahasiswa</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                <span>{tutor.classesCount} kelas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio & Credentials */}
        <div className="py-5 space-y-4">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Profil & Pengalaman</h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-[#FAF9F6] p-3.5 rounded-2xl border border-gray-100">
              {tutor.bio}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Keahlian Utama</h4>
            <div className="flex flex-wrap gap-2">
              {tutor.specialties.map((item, idx) => (
                <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200/60">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Slots */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Jadwal Sesi Private 1-on-1</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-2 transition-all ${
                    selectedSlot === slot
                      ? 'bg-[#114B44] text-white border-[#114B44] shadow-sm'
                      : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                  }`}
                >
                  <Clock className={`w-3.5 h-3.5 ${selectedSlot === slot ? 'text-white' : 'text-[#114B44]'}`} />
                  <span>{slot}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Tutup
          </button>

          {booked ? (
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-4 py-2.5 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span>Sesi Berhasil Dijadwalkan!</span>
            </div>
          ) : (
            <button
              disabled={!selectedSlot}
              onClick={() => setBooked(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-all ${
                selectedSlot
                  ? 'bg-[#114B44] hover:bg-[#0c3732] text-white cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Booking Konsultasi Privat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
