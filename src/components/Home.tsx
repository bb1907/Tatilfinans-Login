import React from 'react';
import { Search, Sparkles, Plane, TrendingDown, Star, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="px-5 space-y-8">
      {/* AI Greeting */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-2xl border border-primary/10">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Sparkles size={20} fill="white" />
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Merhaba! Hayalindeki tatili planlamak için buradayım.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Nereye gitmek istersin?"
            className="w-full h-14 pl-14 pr-6 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-primary text-slate-800 placeholder:text-slate-400 font-medium"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={20} />
        </div>
      </section>

      {/* Recommendations */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-xl font-bold font-headline text-slate-900 leading-tight">
            Sizin için seçtiğimiz<br />en iyi seçenekler
          </h2>
          <button className="text-primary text-xs font-bold uppercase tracking-wider">Tümünü Gör</button>
        </div>

        <div className="space-y-6">
          <TravelCard 
            title="Bali 5 Gece"
            image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
            price={1800}
            installment={150}
            flightType="Charter uçuş"
            tag="En Hesaplı Seçenek"
            tagIcon={<Star size={12} fill="currentColor" />}
            savingsTip="2 gün sonra git, %20 tasarruf et"
            onClick={onSelect}
          />
          
          <TravelCard 
            title="Maldivler 5 Gece"
            image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80"
            price={2500}
            installment={208}
            flightType="Direkt uçuş"
            tag="En İyi Fiyat/Performans"
            tagIcon={<Award size={12} fill="currentColor" />}
            savingsTip="Hafta içi gidişi seç, $200 kazan"
            variant="tertiary"
            onClick={onSelect}
          />

          <TravelCard 
            title="Santorini 4 Gece"
            image="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80"
            price={3200}
            installment={266}
            flightType="Business Class"
            tag="En Konforlu Seçenek"
            tagIcon={<ShieldCheck size={12} fill="currentColor" />}
            savingsTip="Erken rezervasyon fırsatı"
            variant="secondary"
            onClick={onSelect}
          />
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 py-4 opacity-60">
          <ShieldCheck size={16} className="text-primary" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Güvenli Finansman</span>
        </div>
      </section>
    </div>
  );
}

interface TravelCardProps {
  title: string;
  image: string;
  price: number;
  installment: number;
  flightType: string;
  tag: string;
  tagIcon: React.ReactNode;
  savingsTip: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

function TravelCard({ title, image, price, installment, flightType, tag, tagIcon, savingsTip, variant = 'primary', onClick }: TravelCardProps) {
  const variantColors = {
    primary: 'border-primary bg-primary/5 text-primary',
    secondary: 'border-secondary bg-secondary/5 text-secondary',
    tertiary: 'border-tertiary bg-tertiary/5 text-tertiary'
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer"
    >
      <div className="h-48 w-full relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 glass-effect px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className="text-primary">{tagIcon}</span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-wide">{tag}</span>
        </div>
      </div>
      
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-slate-900">{title}</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
              <Plane size={12} /> {flightType}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-primary">${price.toLocaleString()}</p>
            <p className="text-[10px] font-bold text-slate-400">Aylık ${installment} x 12 taksit</p>
          </div>
        </div>

        <div className={`p-3 rounded-2xl border-l-4 flex items-center gap-2.5 ${variantColors[variant]}`}>
          <TrendingDown size={16} />
          <p className="text-[11px] font-bold">Savings Tip: "{savingsTip}"</p>
        </div>
      </div>
    </motion.div>
  );
}
