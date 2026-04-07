import React from 'react';
import { AlertTriangle, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BudgetDetail() {
  const categories = [
    { name: 'Konaklama', percent: 40, color: 'bg-[#00647c]', amount: '€1,380' },
    { name: 'Uçuş', percent: 30, color: 'bg-[#4f5e7f]', amount: '€1,035' },
    { name: 'Yemek', percent: 20, color: 'bg-[#825100]', amount: '€690' },
    { name: 'Aktivite', percent: 10, color: 'bg-[#ba1a1a]', amount: '€345' },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Hero Header */}
      <section className="relative h-48 md:h-64 rounded-[2.5rem] overflow-hidden bg-[#002b36]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80" 
            alt="Paris" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#002b36] to-transparent"></div>
        <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
          <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Seyahatlerim › Avrupa Turu</p>
          <h1 className="text-3xl md:text-5xl font-black text-white font-headline tracking-tight">Paris Bütçe Planı</h1>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Chart & Summary */}
        <div className="lg:col-span-7 space-y-8">
          {/* Warning Alert */}
          <section className="bg-red-50 border border-red-100 rounded-3xl p-5 flex items-start gap-4">
            <div className="bg-red-100 p-2 rounded-xl text-red-600">
              <AlertTriangle size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-black text-red-900 uppercase tracking-wide">Bütçe Aşıldı!</h3>
              <p className="text-xs text-red-700 mt-1 leading-relaxed">
                "Aktiviteler" kategorisindeki harcamalar planlanan limiti %15 oranında geçti.
              </p>
            </div>
            <button className="text-red-900 text-[10px] font-black underline uppercase tracking-widest mt-1 cursor-pointer">Detay</button>
          </section>

          {/* Spending Chart */}
          <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-48 h-48 shrink-0">
              {/* Simple SVG Donut Chart Representation */}
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#ba1a1a" strokeWidth="3.8" strokeDasharray="10 90" strokeDashoffset="0" />
                <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#825100" strokeWidth="3.8" strokeDasharray="20 80" strokeDashoffset="-10" />
                <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#4f5e7f" strokeWidth="3.8" strokeDasharray="30 70" strokeDashoffset="-30" />
                <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#00647c" strokeWidth="3.8" strokeDasharray="40 60" strokeDashoffset="-60" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Toplam</p>
                <p className="text-2xl font-black text-slate-800">€3,450</p>
              </div>
            </div>

            <div className="w-full space-y-4">
              {categories.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                    <span className="text-sm font-bold text-slate-600">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-slate-800">{cat.amount}</span>
                    <span className="text-xs font-bold text-slate-400 w-8 text-right">%{cat.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Balance Card */}
          <section className="bg-[#4f5e7f] rounded-[2.5rem] p-8 text-white shadow-xl shadow-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full">
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Kalan Borç/Alacak</p>
              <h2 className="text-4xl font-black mb-4">€420.00</h2>
              <div className="bg-white/10 px-4 py-2 rounded-full w-fit flex items-center gap-2 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Eşitlemeye Hazır</span>
              </div>
            </div>

            <button className="w-full md:w-fit px-8 bg-[#b7eaff] text-[#00647c] h-14 rounded-2xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer">
              Ödemeleri Dengele
              <ArrowRight size={20} />
            </button>
          </section>
        </div>

        {/* Right Column: Transactions */}
        <div className="lg:col-span-5">
          {/* Transaction List */}
          <section className="bg-slate-50 rounded-[2.5rem] p-8 space-y-6 h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-800 font-headline">Kim ne ödedi?</h3>
              <button className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1 cursor-pointer">
                Tümünü Gör <ChevronRight size={12} />
              </button>
            </div>

            <div className="space-y-4">
              <TransactionItem name="Deniz Akın" category="Konaklama (Airbnb)" amount="€1,200" initial="DA" color="bg-blue-100 text-blue-600" />
              <TransactionItem name="Emre Yılmaz" category="Uçak Biletleri (THY)" amount="€850" initial="EY" color="bg-orange-100 text-orange-600" />
              <TransactionItem name="Selin Aydın" category="Louvre Müzesi & Tur" amount="€120" initial="SA" color="bg-cyan-100 text-cyan-600" />
              <TransactionItem name="Caner Y." category="Restoran & Yemek" amount="€45" initial="CY" color="bg-green-100 text-green-600" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function TransactionItem({ name, category, amount, initial, color }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs ${color}`}>
          {initial}
        </div>
        <div>
          <p className="text-sm font-black text-slate-800">{name}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{category}</p>
        </div>
      </div>
      <span className="text-sm font-black text-slate-800">{amount}</span>
    </div>
  );
}
