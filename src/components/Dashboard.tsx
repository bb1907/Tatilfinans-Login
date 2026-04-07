import React from 'react';
import { Sparkles, Users, ArrowRight, Star, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <div className="px-5 space-y-8 pb-10">
      {/* Header Greeting */}
      <section className="flex justify-between items-center pt-4">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hoş Geldin,</p>
          <h1 className="text-3xl font-black text-slate-900 font-headline tracking-tight">Selam Ayşe!</h1>
        </div>
        <button className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400">
          <Bell size={24} />
        </button>
      </section>

      {/* Active Goal Card */}
      <section className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center">
        <div className="relative w-40 h-40 mb-6">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3" />
            <circle cx="18" cy="18" r="16" fill="none" stroke="#00647c" strokeWidth="3" strokeDasharray="45 100" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-black text-slate-800">%45</p>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Tamamlandı</p>
          </div>
        </div>

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

        <button className="w-full bg-[#00647c] text-white h-14 rounded-2xl font-black uppercase tracking-widest text-sm shadow-lg shadow-primary/20 active:scale-95 transition-all">
          Biriktirmeye Devam Et
        </button>
      </section>

      {/* Smart Suggestion */}
      <section className="bg-[#00647c] rounded-[2.5rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
          <Sparkles size={24} className="text-[#b7eaff]" />
        </div>
        
        <h3 className="text-xl font-black font-headline mb-6">Akıllı Tasarruf Önerisi</h3>
        <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Sana Uygun Tarih:</p>
        <p className="text-lg font-black mb-8">12-18 Eylül</p>

        <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Bu tarihlerde gidersen:</p>
          <p className="text-2xl font-black text-[#b7eaff]">₺2.400 Tasarruf</p>
        </div>
      </section>

      {/* Contributions */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-black text-slate-800 font-headline">Arkadaşlarından Gelen Katkılar</h3>
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
              <h4 className="text-2xl font-black text-slate-800 font-headline">Le Meurice</h4>
            </div>
            <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg">%92 Eşleşme</span>
          </div>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">Senin tercihlerine ve bütçene en uygun lüks deneyim.</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Gecelik</p>
              <p className="text-lg font-black text-slate-800">₺8.200</p>
            </div>
            <button className="bg-slate-100 text-slate-600 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest">Detaylar</button>
          </div>
        </div>
      </section>
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
