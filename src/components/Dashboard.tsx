import React from 'react';
import { Sparkles, Users, ArrowRight, Star, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header Greeting */}
      <section className="flex justify-between items-center pt-4">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hoş Geldin,</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 font-headline tracking-tight">Selam Ahmet!</h1>
        </div>
        <button className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 md:hidden">
          <Bell size={24} />
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Active Goal & Suggestions */}
        <div className="lg:col-span-7 space-y-8">
          {/* Active Goal Card */}
          <section className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative w-40 h-40 shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#00647c" strokeWidth="3" strokeDasharray="45 100" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-black text-slate-800">%45</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Tamamlandı</p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-2xl font-black text-slate-800 font-headline mb-1">Paris 2026</h2>
              <p className="text-xs font-medium text-slate-400 italic mb-6">Hayallerine giden yol çiçeklerle dolu.</p>
              
              <div className="w-full space-y-2 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-black text-slate-800">₺12.400</span>
                  <span className="text-xs font-bold text-slate-400">/ ₺30.000</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00647c] w-[45%] rounded-full"></div>
                </div>
              </div>

              <button className="w-full md:w-fit px-8 bg-[#00647c] text-white h-14 rounded-2xl font-black uppercase tracking-widest text-sm shadow-lg shadow-primary/20 active:scale-95 transition-all cursor-pointer">
                Biriktirmeye Devam Et
              </button>
            </div>
          </section>

          {/* Smart Suggestion */}
          <section className="bg-[#00647c] rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Sparkles size={24} className="text-[#b7eaff]" />
            </div>
            
            <h3 className="text-xl font-black font-headline mb-6">Akıllı Tasarruf Önerisi</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Sana Uygun Tarih:</p>
                <p className="text-lg font-black mb-4">12-18 Eylül</p>
                <p className="text-xs text-white/70 leading-relaxed">Bu tarihlerde uçuş ve konaklama fiyatları sezon ortalamasının %20 altında.</p>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col justify-center">
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Potansiyel Kazanç:</p>
                <p className="text-2xl font-black text-[#b7eaff]">₺2.400 Tasarruf</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Contributions & Recommendations */}
        <div className="lg:col-span-5 space-y-8">
          {/* Contributions */}
          <section className="bg-slate-50 rounded-[2.5rem] p-8 space-y-6 h-fit">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-800 font-headline">Arkadaş Katkıları</h3>
              <Users size={20} className="text-slate-400" />
            </div>

            <div className="space-y-3">
              <ContributionItem name="Caner Y." amount="+₺250" img="https://i.pravatar.cc/100?img=11" />
              <ContributionItem name="Melis K." amount="+₺150" img="https://i.pravatar.cc/100?img=22" />
              <ContributionItem name="Burak T." amount="+₺100" img="https://i.pravatar.cc/100?img=33" />
            </div>
          </section>

          {/* Recommendation */}
          <section className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff43c63e1c2a?w=800&q=80" 
                alt="Le Meurice" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={12} className="text-primary fill-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">Önerilen</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Konaklama</p>
                  <h4 className="text-xl font-black text-slate-800 font-headline">Le Meurice</h4>
                </div>
                <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg">%92 Eşleşme</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Gecelik</p>
                  <p className="text-lg font-black text-slate-800">₺8.200</p>
                </div>
                <button className="bg-slate-100 text-slate-600 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest cursor-pointer">Detaylar</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContributionItem({ name, amount, img }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-3">
        <img src={img} alt={name} className="w-10 h-10 rounded-full border border-slate-100" />
        <span className="text-sm font-black text-slate-800">{name}</span>
      </div>
      <span className="text-xs font-black text-green-600 bg-green-50 px-3 py-1 rounded-full">{amount}</span>
    </div>
  );
}
