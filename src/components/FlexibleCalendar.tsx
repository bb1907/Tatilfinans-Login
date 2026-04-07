import React from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Settings, ArrowRight, Wallet, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function FlexibleCalendar({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="px-4 space-y-6">
      {/* Header Info */}
      <section className="grid grid-cols-2 gap-3">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Best Departure</p>
          <div className="flex items-end justify-between">
            <span className="text-lg font-black text-slate-800">Oct 14</span>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-full font-black">€420</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Best Return</p>
          <div className="flex items-end justify-between">
            <span className="text-lg font-black text-slate-800">Oct 21</span>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-full font-black">€380</span>
          </div>
        </div>
      </section>

      {/* Smart Banner */}
      <section className="relative overflow-hidden bg-primary-container text-white p-6 rounded-[2.5rem] flex items-center justify-between shadow-xl shadow-primary/20">
        <div className="relative z-10 space-y-1">
          <p className="text-sm font-black leading-tight uppercase tracking-wide">Shift your trip by 2 days and save 18%</p>
          <p className="text-[10px] font-bold opacity-80">Optimize for the Tatil Ağacı growth phase.</p>
        </div>
        <button className="relative z-10 bg-white text-primary px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
          Apply
        </button>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* Calendar */}
      <section className="bg-slate-50 rounded-[2.5rem] p-6 space-y-6 border border-slate-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-800 font-headline">October 2024</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-xl shadow-sm"><ChevronLeft size={18} className="text-slate-400" /></button>
            <button className="p-2 bg-white rounded-xl shadow-sm"><ChevronRight size={18} className="text-slate-400" /></button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-center text-[10px] font-black text-slate-400 mb-4 tracking-widest">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
        </div>

        <div className="grid grid-cols-7 gap-y-4 text-center">
          {[...Array(31)].map((_, i) => {
            const day = i + 1;
            const isSelected = day >= 14 && day <= 21;
            const isStart = day === 14;
            const isEnd = day === 21;
            
            // Mock price levels
            const priceLevel = day % 3 === 0 ? 'expensive' : day % 3 === 1 ? 'cheap' : 'moderate';
            const colors = {
              cheap: 'bg-primary',
              moderate: 'bg-tertiary',
              expensive: 'bg-red-500'
            };

            return (
              <div 
                key={day} 
                className={`relative flex flex-col items-center py-2 transition-all ${
                  isSelected ? 'bg-primary/10' : ''
                } ${isStart ? 'rounded-l-full' : ''} ${isEnd ? 'rounded-r-full' : ''}`}
              >
                <span className={`text-sm font-black mb-1 ${isSelected ? 'text-primary' : 'text-slate-600'}`}>
                  {day}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full ${colors[priceLevel]}`}></div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-6 pt-6 border-t border-slate-200">
          <LegendItem color="bg-primary" label="Cheap" />
          <LegendItem color="bg-tertiary" label="Moderate" />
          <LegendItem color="bg-red-500" label="Expensive" />
        </div>
      </section>

      {/* Installment Insight */}
      <section className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-tertiary/10 p-3 rounded-2xl">
            <Wallet size={20} className="text-tertiary" fill="currentColor" />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Flexible Installments</h3>
            <p className="text-[11px] text-slate-400 font-bold mt-1 leading-relaxed">
              Book these dates now for as low as <span className="text-tertiary">€85/mo</span> with your Tatil Ağacı savings.
            </p>
          </div>
        </div>
      </section>

      {/* Action Button */}
      <div className="pt-4">
        <button 
          onClick={onConfirm}
          className="w-full h-16 bg-tertiary text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-tertiary/20 active:scale-95 transition-transform uppercase tracking-widest text-sm"
        >
          Confirm Dates
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}
