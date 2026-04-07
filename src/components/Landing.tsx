import React from 'react';
import { ArrowRight, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing({ onStart, onLogin }: { onStart: () => void, onLogin: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Hero Image Section */}
      <section className="relative h-[45vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
          alt="People planning" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white"></div>
        
        {/* Floating Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl border border-white/50 z-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Wallet size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tatil Birikimi</p>
              <p className="text-2xl font-black text-slate-800">₺14,250.00</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[11px] font-bold text-slate-500">Bali Hedefi</span>
              <span className="text-[11px] font-black text-primary">%65</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Logo Overlay */}
        <div className="absolute top-10 right-8 z-10">
          <h1 className="text-2xl font-black text-primary font-headline tracking-tight">Tatilfinans</h1>
        </div>
      </section>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-8 h-1.5 bg-primary rounded-full"></div>
        <div className="w-3 h-1.5 bg-slate-200 rounded-full"></div>
        <div className="w-3 h-1.5 bg-slate-200 rounded-full"></div>
      </div>

      {/* Text Content */}
      <section className="px-8 pt-10 space-y-6 flex-1">
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-slate-900 font-headline leading-[1.1] tracking-tight">
            Planla,<br />
            Biriktir,<br />
            Keşfet.
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Hayalindeki tatile borçlanmadan, arkadaşlarınla birlikte biriktirerek ulaş. Gelecek yazın bütçesi bugünden hazır.
          </p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="px-8 pb-12 space-y-4">
        <button 
          onClick={onStart}
          className="w-full h-16 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-95 transition-all text-lg"
        >
          Başlayalım
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={onLogin}
          className="w-full h-16 bg-slate-50 text-slate-800 rounded-2xl font-black active:scale-95 transition-all text-lg"
        >
          Zaten Üyeyim
        </button>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <img 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-xs font-bold text-slate-400 leading-tight">
            12,000+ gezgin bugün<br />biriktirmeye başladı.
          </p>
        </div>
      </section>
    </div>
  );
}
