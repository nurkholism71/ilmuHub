import React from 'react';
import { 
  Laptop, 
  Users, 
  MonitorPlay, 
  Layers, 
  MessageSquare, 
  TrendingUp 
} from 'lucide-react';

export const features = [
  {
    icon: Laptop,
    title: 'Learn Anywhere',
    description: 'Akses kelas kapan saja di mana saja melalui laptop maupun smartphone.',
  },
  {
    icon: Users,
    title: 'Real Tutors',
    description: 'Belajar langsung dari tutor berpengalaman lulusan universitas ternama di Mesir.',
  },
  {
    icon: MonitorPlay,
    title: 'Virtual Classroom',
    description: 'Ruang belajar interaktif dengan fitur papan tulis digital dan share screen berkualitas tinggi.',
  },
  {
    icon: Layers,
    title: 'Structured Courses',
    description: 'Materi tersusun rapi dari dasar hingga tingkat lanjut dengan kurikulum terstandar.',
  },
  {
    icon: MessageSquare,
    title: 'Live Learning',
    description: 'Diskusi langsung tanya jawab dengan tutor dan komunitas sesama mahasiswa.',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Pantau perkembangan belajarmu secara berkala dengan evaluasi dan kuis terstruktur.',
  },
];

export default function WhyLearnWithUs() {
  return (
    <section className="py-16 bg-[#FAF9F6] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Why learn with us?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Platform belajar online yang dirancang untuk mahasiswa, oleh komunitas pendidikan.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-[#114B44]/30 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E6F0EE] text-[#114B44] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#114B44] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
