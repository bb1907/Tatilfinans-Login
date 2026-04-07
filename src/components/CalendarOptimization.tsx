import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, TrendingDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function CalendarOptimization() {
  const days = ['PT', 'SA', 'ÇAR', 'PER', 'CU', 'CT', 'PA'];
  
  return (
    <div className="space-y-8 px-6 pb-10">
      {/* Header */}
      <section className="pt-4">
        <h1 className="text-4xl font-black text-slate-900 font-headline tracking-tight mb-2">En Uygun Tarihi Bul</h1>
        <p className="text-sm font-medium text-slate-500 leading-relaxed">
          Tatil Ağacınızın en hızlı büyüyeceği, bütçe dostu tarihleri keşfedin.
        </p>
      </section>

      {/* Toggle Section */}
      <section className="bg-slate-50 rounded-[2rem] p-6 flex items-center justify-between border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
            <CalendarIcon size={20} />
          </div>
          <span className="text-sm font-black text-slate-800 uppercase tracking-widest">Esnek Tarih</span>
        </div>
        <div className="w-14 h-8 bg-[#00647c] rounded-full relative p-1 cursor-pointer">
          <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm"></div>
        </div>
      </section>

      {/* Smart Tip Banner */}
      <section className="bg-[#00647c] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
        <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
          <TrendingDown size={28} className="text-[#b7eaff]" />
        </div>
        
        <div className="bg-white/20 px-4 py-1.5 rounded-full w-fit mb-4 border border-white/20">
          <span className="text-[10px] font-black uppercase tracking-widest">Akıllı İpucu</span>
        </div>
        
        <h3 className="text-2xl font-black font-headline leading-tight mb-4">
          15-22 Eylül tarihleri arasında %18 daha az öde
        </h3>
        <p className="text-xs font-medium text-white/70 leading-relaxed">
          Sezon sonu avantajlarıyla hayalindeki tatil çok daha yakın.
        </p>
      </section>

      {/* Calendar Heatmap */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-black text-slate-800 font-headline">Eylül / Ekim 2024</h2>
          <div className="flex gap-2">
            <button className="p-3 bg-slate-50 rounded-2xl text-slate-400"><ChevronLeft size={20} /></button>
            <button className="p-3 bg-slate-50 rounded-2xl text-slate-400"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="grid grid-cols-7 gap-y-4 text-center mb-6">
            {days.map(d => <span key={d} className="text-[10px] font-black text-slate-300 tracking-widest">{d}</span>)}
            
            <div className="text-slate-200 py-2 text-sm font-bold">28</div>
            <div className="text-slate-200 py-2 text-sm font-bold">29</div>
            <div className="text-slate-200 py-2 text-sm font-bold">30</div>
            <CalendarDay day="1" type="high" />
            <CalendarDay day="2" type="high" />
            <CalendarDay day="3" type="normal" />
            <CalendarDay day="4" type="normal" />
            
            <CalendarDay day="5" type="normal" />
            <CalendarDay day="6" type="normal" />
            <CalendarDay day="7" type="normal" />
            <CalendarDay day="8" type="normal" />
            <CalendarDay day="9" type="high" />
            <CalendarDay day="10" type="high" />
            <CalendarDay day="11" type="normal" />
            
            <CalendarDay day="12" type="normal" />
            <CalendarDay day="13" type="normal" />
            <CalendarDay day="14" type="normal" />
            <CalendarDay day="15" type="low" selected />
            <CalendarDay day="16" type="low" />
            <CalendarDay day="17" type="low" />
            <CalendarDay day="18" type="low" />
            
            <CalendarDay day="19" type="low" />
            <CalendarDay day="20" type="low" />
            <CalendarDay day="21" type="low" />
            <CalendarDay day="22" type="low" />
            <CalendarDay day="23" type="normal" />
            <CalendarDay day="24" type="normal" />
            <CalendarDay day="25" type="normal" />
            
            <CalendarDay day="26" type="high" />
            <CalendarDay day="27" type="high" />
            <CalendarDay day="28" type="normal" />
            <CalendarDay day="29" type="low" />
            <CalendarDay day="30" type="low" />
            <div className="bg-cyan-50 text-primary py-2 text-sm font-black rounded-xl">1</div>
            <div className="bg-cyan-50 text-primary py-2 text-sm font-black rounded-xl">2</div>
          </div>

          <div className="flex justify-center items-center gap-6 pt-6 border-t border-slate-100">
            <LegendItem color="bg-cyan-100" label="Ekonomik" />
            <LegendItem color="bg-yellow-100" label="Normal" />
            <LegendItem color="bg-red-50" label="Yüksek" />
          </div>
        </div>
      </section>

      {/* Seasonal Comparison */}
      <section className="space-y-4">
        <h3 className="text-xl font-black text-slate-800 font-headline">Mevsimsel Karşılaştırma</h3>
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-end mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="h-24 w-8 bg-slate-100 rounded-full"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">TEM</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-32 w-8 bg-slate-100 rounded-full"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AĞU</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-8 bg-[#00647c] rounded-full"></div>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">EYL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-8 bg-slate-100 rounded-full"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">EKİ</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-8 bg-slate-100 rounded-full"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">KAS</span>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl flex items-center justify-between border border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Temmuz vs Eylül Farkı</p>
              <p className="text-2xl font-black text-[#00647c]">-₺12,450</p>
            </div>
            <Sparkles size={24} className="text-primary" />
          </div>
        </div>
      </section>

      {/* Action Button */}
      <button className="w-full bg-[#00647c] text-white h-16 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 active:scale-95 transition-all">
        Seçili Tarihleri Kilitle
      </button>
    </div>
  );
}

function CalendarDay({ day, type, selected = false }: any) {
  const colors: any = {
    low: 'bg-cyan-50 text-primary',
    normal: 'bg-yellow-50 text-yellow-700',
    high: 'bg-red-50 text-red-700'
  };

  return (
    <div className={`py-2 text-sm font-black rounded-xl transition-all ${colors[type]} ${selected ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
      {day}
    </div>
  );
}

function LegendItem({ color, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}
