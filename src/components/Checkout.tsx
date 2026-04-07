import React from 'react';
import { CreditCard, ShieldCheck, Calendar, MapPin, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-8 pb-10">
      <section className="pt-4">
        <h1 className="text-4xl font-black text-slate-900 font-headline tracking-tight">Ödeme ve Onay</h1>
        <p className="text-slate-500 font-medium mt-2">Rezervasyonunuzu tamamlamak için bilgilerinizi kontrol edin.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Details & Payment */}
        <div className="lg:col-span-8 space-y-8">
          {/* Reservation Summary */}
          <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-800 font-headline mb-6">Rezervasyon Özeti</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff43c63e1c2a?w=400&q=80" 
                  alt="Shangri-La Paris" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-black text-slate-800">Shangri-La Paris</h4>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-tight mt-1">
                      <SparkleIcon size={12} className="text-primary" />
                      <span>Mükemmel Servis, Lüks Deneyim</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
                    <Star size={12} className="text-primary fill-primary" />
                    <span className="text-[10px] font-black text-slate-800">5.0</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Giriş</p>
                      <p className="text-xs font-black text-slate-700">15 Eylül 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Çıkış</p>
                      <p className="text-xs font-black text-slate-700">22 Eylül 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-slate-800 font-headline mb-6">Ödeme Yöntemi</h3>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800">Tatil Birikimi ile Öde</p>
                    <p className="text-xs text-slate-500">Mevcut bakiyeniz: ₺45.000</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="p-6 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800">Kredi / Banka Kartı</p>
                    <p className="text-xs text-slate-500">**** **** **** 4242</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 sticky top-24">
            <h3 className="text-xl font-black text-slate-800 font-headline mb-6">Fiyat Detayı</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">7 Gece Konaklama</span>
                <span className="text-slate-800 font-black">₺109.200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Vergiler ve Harçlar</span>
                <span className="text-slate-800 font-black">₺12.450</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Tatilfinans İndirimi</span>
                <span className="text-green-600 font-black">-₺5.000</span>
              </div>
              <div className="pt-4 border-t border-slate-50 flex justify-between items-end">
                <span className="text-slate-800 font-black">Toplam Tutar</span>
                <div className="text-right">
                  <p className="text-2xl font-black text-primary">₺116.650</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onComplete}
              className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Ödemeyi Tamamla
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Güvenli Ödeme Altyapısı</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SparkleIcon({ size = 16, className = "" }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="currentColor" />
    </svg>
  );
}
