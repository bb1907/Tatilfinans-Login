import React from 'react';
import { Sparkles, Hotel, Plane, Lightbulb, Send, PlusCircle, MessageSquare, Wallet, Compass, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function Chat({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 px-4 py-6 space-y-8 pb-48 max-w-4xl mx-auto w-full">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] md:max-w-[70%] bg-primary text-white rounded-3xl rounded-br-lg px-6 py-4 shadow-lg shadow-primary/10">
            <p className="text-[15px] leading-relaxed font-medium">
              Selam! Hem kültürel hem de dinlendirici, vizesiz bir tatil arıyorum. Bütçemi esnek taksitlerle ödeyebilir miyim?
            </p>
          </div>
        </div>

        {/* Assistant Message */}
        <div className="flex justify-start items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm shrink-0">
            <Sparkles size={20} className="text-primary" fill="currentColor" />
          </div>
          <div className="flex flex-col gap-4 max-w-[90%] md:max-w-[75%]">
            <div className="bg-white text-slate-800 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm border border-slate-100">
              <p className="text-[15px] leading-relaxed">
                Harika bir fikir! TatilFinans ile hayalindeki rotayı şimdi planlayıp, ödemelerini seyahat sonrasına yayabilirsin. İşte senin için seçtiğim özel rota:
              </p>
            </div>

            {/* Recommendation Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-slate-100 group"
            >
              <div className="relative h-56 md:h-72 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559628233-eb1b1a45564b?w=1200&q=80" 
                  alt="Bali" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Bali Kültür Turu</span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-3xl flex flex-col gap-1">
                    <Hotel size={18} className="text-primary" />
                    <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">Konaklama</span>
                    <span className="font-bold text-sm text-slate-800">Ubud Eco Resort</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-3xl flex flex-col gap-1">
                    <Plane size={18} className="text-primary" />
                    <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">Uçuş</span>
                    <span className="font-bold text-sm text-slate-800">Direct Flight (THY)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-primary/5 p-5 rounded-[2rem] border border-primary/10">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-primary/60 tracking-wider">Finansman Planı</span>
                    <span className="text-lg font-black text-primary">Aylık $150 x 12 Taksit</span>
                  </div>
                  <button 
                    onClick={onSelect}
                    className="bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    Rezerve Et
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Savings Tip */}
            <div className="flex items-center gap-3 bg-tertiary/10 text-tertiary px-5 py-3 rounded-2xl w-fit shadow-sm border border-tertiary/10">
              <Lightbulb size={18} fill="currentColor" />
              <span className="text-sm font-bold">Savings Tip: Travel in October to save $200!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 space-y-4 z-50">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
          {['Aile Tatili', 'Vizesiz Rotalar', 'Bütçe Dostu', 'Kış Rotaları'].map((tag) => (
            <button key={tag} className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white border border-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
              {tag}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl p-2 border border-slate-100 flex items-center gap-2">
          <button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <PlusCircle size={24} />
          </button>
          <input 
            type="text" 
            placeholder="Hayalindeki tatili anlat..."
            className="flex-1 border-none focus:ring-0 bg-transparent text-slate-800 placeholder:text-slate-400 font-medium py-3"
          />
          <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 active:scale-90 transition-transform cursor-pointer">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
