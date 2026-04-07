import React, { useState } from 'react';
import { Calendar as CalendarIcon, CreditCard, Landmark, Wallet, CheckCircle2, ChevronRight, Lock, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';

export default function Payment({ onSelectCalendar }: { onSelectCalendar: () => void }) {
  const [vade, setVade] = useState(12);
  const [method, setMethod] = useState('card');

  const totalAmount = 48000;
  const monthlyPayment = Math.round(totalAmount / vade);

  return (
    <div className="px-4 space-y-6">
      {/* Item Summary */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-slate-100">
        <div className="h-40 w-full relative">
          <img 
            src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80" 
            alt="Maldives" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
              Premium Paket
            </span>
          </div>
        </div>
        <div className="p-6 flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="font-headline font-extrabold text-2xl text-slate-800">Maldivler Premium</h2>
            <p className="text-slate-400 text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
              <CalendarIcon size={12} /> 7 Gece, Herşey Dahil
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Toplam Tutar</p>
            <p className="text-2xl font-black text-primary">48.000 TL</p>
          </div>
        </div>
      </section>

      {/* Financing Plan */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="font-headline font-bold text-lg text-slate-800">Finansman Planını Seç</h3>
          <button 
            onClick={onSelectCalendar}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
          >
            Tavsiye Edilen: 12 Ay
          </button>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-[2.5rem] space-y-8 border border-slate-100">
          <div className="text-center space-y-1">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Seçilen Vade: <span className="text-primary">{vade} Ay</span></p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-primary">{monthlyPayment.toLocaleString()}</span>
              <span className="text-xl font-black text-primary">TL</span>
              <span className="text-slate-400 text-sm font-bold ml-1">/ ay</span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative py-4 px-2">
            <div className="h-2 w-full bg-slate-200 rounded-full"></div>
            <div 
              className="absolute top-4 left-2 h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((vade - 3) / (36 - 3)) * 100}%` }}
            ></div>
            <input 
              type="range" 
              min="3" 
              max="36" 
              step="3"
              value={vade}
              onChange={(e) => setVade(parseInt(e.target.value))}
              className="absolute top-1 left-0 w-full h-8 opacity-0 cursor-pointer z-10"
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-none"
              style={{ left: `calc(${((vade - 3) / (36 - 3)) * 100}% + 8px - ${((vade - 3) / (36 - 3)) * 16}px)` }}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-black text-slate-400 px-1 uppercase tracking-widest">
              <span className={vade === 3 ? 'text-primary' : ''}>3 AY</span>
              <span className={vade === 12 ? 'text-primary' : ''}>12 AY</span>
              <span className={vade === 24 ? 'text-primary' : ''}>24 AY</span>
              <span className={vade === 36 ? 'text-primary' : ''}>36 AY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="space-y-4">
        <h3 className="font-headline font-bold text-lg text-slate-800 px-2">Ödeme Yöntemleri</h3>
        <div className="grid gap-3">
          <PaymentOption 
            id="card"
            icon={<CreditCard size={24} />}
            title="Kredi Kartı"
            description="Vade farksız 3 taksit fırsatı"
            popular
            active={method === 'card'}
            onClick={() => setMethod('card')}
          />
          <PaymentOption 
            id="loan"
            icon={<Landmark size={24} />}
            title="Banka Kredisi"
            description="Anında onay, 36 aya varan vade"
            active={method === 'loan'}
            onClick={() => setMethod('loan')}
          />
          <PaymentOption 
            id="bnlp"
            icon={<Wallet size={24} />}
            title="BNLP"
            description="Biriktir Sonra Git - En esnek seçenek"
            active={method === 'bnlp'}
            onClick={() => setMethod('bnlp')}
          />
        </div>
      </section>

      {/* Trust Footer */}
      <div className="py-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-green-50 rounded-full border border-green-100">
          <Lock size={14} className="text-green-600" fill="currentColor" />
          <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">256-bit SSL ile Güvenli Ödeme</span>
        </div>
        <div className="flex items-center justify-center gap-8 opacity-40 grayscale h-10">
          <div className="h-full flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 w-auto object-contain" />
          </div>
          <div className="h-full flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto object-contain" />
          </div>
          <div className="h-full flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Sticky Bottom */}
      <div className="fixed bottom-0 left-0 w-full glass-effect px-6 pb-10 pt-5 flex justify-between items-center z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-slate-100">
        <div className="space-y-0.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aylık Ödeme</p>
          <p className="text-2xl font-black text-slate-800">{monthlyPayment.toLocaleString()} TL</p>
        </div>
        <button className="bg-tertiary text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-tertiary/20 active:scale-95 transition-all uppercase tracking-widest">
          Ödemeyi Onayla
        </button>
      </div>
    </div>
  );
}

interface PaymentOptionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  popular?: boolean;
  active: boolean;
  onClick: () => void;
}

function PaymentOption({ icon, title, description, popular, active, onClick }: PaymentOptionProps) {
  return (
    <motion.button 
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex items-center gap-4 p-5 rounded-3xl text-left transition-all duration-300 border-2 relative overflow-hidden ${
        active 
          ? 'bg-white border-primary shadow-[0_10px_30px_rgba(0,100,124,0.15)] ring-4 ring-primary/5' 
          : 'bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-200'
      }`}
    >
      {active && (
        <motion.div 
          layoutId="active-glow"
          className="absolute inset-0 bg-primary/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
        active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 text-slate-500'
      }`}>
        {icon}
      </div>
      
      <div className="flex-1 relative z-10">
        <div className="flex justify-between items-center">
          <span className={`font-black text-sm uppercase tracking-wide transition-colors duration-300 ${active ? 'text-slate-800' : 'text-slate-500'}`}>{title}</span>
          {popular && (
            <span className={`text-[8px] px-2 py-0.5 rounded font-black tracking-widest transition-colors duration-300 ${
              active ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
            }`}>POPÜLER</span>
          )}
        </div>
        <p className={`text-[11px] font-bold mt-0.5 transition-colors duration-300 ${active ? 'text-slate-500' : 'text-slate-400'}`}>{description}</p>
      </div>
      
      <div className="relative z-10">
        {active ? (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <CheckCircle2 size={24} className="text-primary" fill="currentColor" />
          </motion.div>
        ) : (
          <ChevronRight size={20} className="text-slate-300" />
        )}
      </div>
    </motion.button>
  );
}
