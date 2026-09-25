import React from 'react';
import { ArrowRight, Laptop, Calendar, Building2, Coins, Headphones, ShieldCheck } from 'lucide-react';

export default function TutorsRightWidgets({ onStartTeaching, onLearnVerification }) {
  const benefits = [
    { icon: Laptop, text: 'Create your own classes' },
    { icon: Calendar, text: 'Set your own schedule' },
    { icon: Building2, text: 'Teach students across Egypt' },
    { icon: Coins, text: 'Earn competitive income' },
    { icon: Headphones, text: 'Get full support from our team' },
  ];

  return (
    <aside className="w-full space-y-5">
      
      {/* Widget 1: Become a Tutor Card */}
      <div className="bg-[#FAF7F2] rounded-2xl border border-[#EBE3D5] p-5 relative overflow-hidden shadow-2xs">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="max-w-[170px]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-[#114B44] text-white flex items-center justify-center text-xs font-bold">
                🎓
              </span>
              <h4 className="font-bold text-gray-900 text-sm">Become a Tutor</h4>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Share your knowledge, inspire students, and earn income.
            </p>
          </div>

          <img
            src="/images/banner_tutor.jpg"
            alt="Become a tutor"
            className="w-16 h-16 rounded-xl object-cover shadow-xs border-2 border-white shrink-0"
          />
        </div>

        <button
          onClick={onStartTeaching}
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#114B44] hover:bg-[#0c3732] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Start Teaching</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Widget 2: Why teach with us? */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs">
        <h4 className="font-bold text-gray-900 text-sm mb-3.5 pb-2 border-b border-gray-100">
          Why teach with us?
        </h4>

        <ul className="space-y-3">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                <div className="w-6 h-6 rounded-lg bg-[#FAF7F2] text-[#114B44] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Widget 3: Verified Tutors */}
      <div className="bg-gradient-to-br from-[#114B44] to-[#0D3833] text-white rounded-2xl p-5 shadow-sm border border-[#165049]">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-emerald-300" />
          <h4 className="font-bold text-white text-sm">Verified Tutors</h4>
        </div>

        <p className="text-[11px] text-emerald-100/90 leading-relaxed mb-4">
          All tutors go through a verification process to ensure quality and safety.
        </p>

        <button
          onClick={onLearnVerification}
          className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-lg bg-white hover:bg-emerald-50 text-[#114B44] text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </aside>
  );
}
