import React from 'react';
import { ArrowRight, Wallet, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing({ onStart, onLogin }: { onStart: () => void, onLogin: () => void }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-hidden">
      {/* Hero Image Section */}
      <section className="relative h-[45vh] md:h-screen w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80" 
          alt="People planning" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/20 to-white md:to-transparent"></div>
        
        {/* Floating Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[70%] bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl border border-white/50 z-20"
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

        {/* Logo Overlay (Mobile only) */}
        <div className="absolute top-10 right-8 z-10 md:hidden">
          <h1 className="text-2xl font-black text-primary font-headline tracking-tight">Tatilfinans</h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0 bg-white relative">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-12">
            <h1 className="text-3xl font-black text-primary font-headline tracking-tight">Tatilfinans</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 font-headline leading-[1.1] tracking-tight">
              Hayalindeki Tatil, <br/>
              <span className="text-primary">Akıllı Finansmanla</span> <br/>
              Gerçek Olsun.
            </h2>
            
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-md">
              Yapay zeka destekli tasarruf planları ve esnek ödeme seçenekleriyle dünyayı keşfetmeye bugün başla.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onStart}
                className="px-10 py-6 bg-primary text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                Hemen Başla
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={onLogin}
                className="px-10 py-6 bg-slate-50 text-slate-600 rounded-[2rem] font-black uppercase tracking-widest text-sm border border-slate-100 hover:bg-slate-100 transition-all cursor-pointer"
              >
                Giriş Yap
              </button>
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-slate-50 pt-12">
            <StatItem label="Mutlu Gezgin" value="50k+" />
            <StatItem label="Destinasyon" value="120+" />
            <StatItem label="Tasarruf" value="₺12M+" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-2xl font-black text-slate-900 font-headline">{value}</p>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}
