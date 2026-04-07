import React from 'react';
import { MapPin, Star, Wallet, Heart, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function DestinationDetail({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <section className="pt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <MapPin size={16} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Fransa</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 font-headline tracking-tight">Paris'teki Evin</h1>
      </section>

      {/* Filters */}
      <section className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        <FilterChip label="Paris" active />
        <FilterChip label="Bütçene Uygun" />
        <FilterChip label="En İyi Deneyim" />
        <FilterChip label="Aile Dostu" />
        <FilterChip label="Romantik" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Hotel Card */}
        <section className="lg:col-span-8">
          <motion.div 
            whileHover={{ y: -4 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 h-full"
          >
            <div className="h-[500px] lg:h-full relative">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80" 
                alt="Hôtel Plaza Athénée" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-[#825100] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Star size={14} fill="currentColor" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Sana Özel: En İyi Fiyat</span>
                </div>
                <div className="bg-[#00647c] text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-widest">Birikiminle Öde</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                  <SparkleIcon />
                  <span className="text-xs font-bold">Huzurlu, harika konum</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-black font-headline leading-tight">Hôtel Plaza<br />Athénée</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold line-through opacity-50 mb-1">₺14.200</p>
                    <p className="text-3xl lg:text-4xl font-black">₺11.850</p>
                    <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">/ gece</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Savings Progress Mini & Side List */}
        <div className="lg:col-span-4 space-y-8">
          <section>
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary">
                  <Wallet size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-black text-slate-800">Tatil Birikimin</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Mevcut birikiminle Paris tatilinin 3 gecesini hemen karşılayabilirsin.</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#825100] w-[65%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>₺45.000 Birikti</span>
                  <span>Hedef: ₺70.000</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 font-headline px-2">Diğer Seçenekler</h3>
            <div className="grid grid-cols-1 gap-4">
              <HotelItem 
                name="Le Bristol Paris" 
                rating="4.9" 
                price="₺8.400" 
                desc="Sessiz ve modern" 
                img="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" 
                compact
                onClick={onSelect}
              />
              <HotelItem 
                name="Hôtel Costes" 
                rating="4.7" 
                price="₺9.100" 
                desc="Sanat dolu, merkezi" 
                img="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80" 
                compact
                onClick={onSelect}
              />
            </div>
          </section>
        </div>
      </div>

      {/* More Options Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-black text-slate-800 font-headline">Tüm Oteller</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HotelItem 
            name="Le Bristol Paris" 
            rating="4.9" 
            price="₺8.400" 
            desc="Sessiz ve modern atmosfer" 
            img="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
            onClick={onSelect}
          />
          <HotelItem 
            name="Hôtel Costes" 
            rating="4.7" 
            price="₺9.100" 
            desc="Sanat dolu, merkezi konum" 
            img="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" 
            popular
            onClick={onSelect}
          />
          <HotelItem 
            name="Shangri-La Paris" 
            rating="5.0" 
            price="₺15.600" 
            desc="Mükemmel servis, lüks deneyim" 
            img="https://images.unsplash.com/photo-1551882547-ff43c63e1c2a?w=800&q=80" 
            onClick={onSelect}
          />
        </div>
      </section>
    </div>
  );
}

function FilterChip({ label, active = false }: any) {
  return (
    <button className={`whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
      active ? 'bg-[#00647c] text-white shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-400 border border-slate-100'
    }`}>
      {label}
    </button>
  );
}

function HotelItem({ name, rating, price, desc, img, popular = false, compact = false, onClick }: any) {
  if (compact) {
    return (
      <div 
        onClick={onClick}
        className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex gap-4 items-center cursor-pointer hover:border-primary/20 transition-all"
      >
        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
          <img src={img} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex-1">
          <h4 className="font-black text-slate-800 text-sm">{name}</h4>
          <div className="flex items-center gap-1 mt-1">
            <Star size={10} className="text-primary fill-primary" />
            <span className="text-[10px] font-black text-slate-800">{rating}</span>
          </div>
          <p className="text-sm font-black text-primary mt-1">{price}</p>
        </div>
        <ChevronRight size={20} className="text-slate-300" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 h-full flex flex-col">
      <div className="h-64 relative">
        <img src={img} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-400 cursor-pointer">
          <Heart size={20} />
        </button>
        {popular && (
          <div className="absolute bottom-4 left-4 bg-[#825100] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
            Popüler
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-black text-slate-800 font-headline">{name}</h4>
            <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-1 uppercase tracking-tight">
              <SparkleIcon size={12} /> {desc}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
            <Star size={12} className="text-primary fill-primary" />
            <span className="text-[10px] font-black text-slate-800">{rating}</span>
          </div>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-slate-800">{price}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/ gece</span>
          </div>
          <button 
            onClick={onClick}
            className="text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 px-4 py-2 rounded-xl hover:bg-primary/5 transition-all cursor-pointer"
          >
            Birikiminle Öde
          </button>
        </div>
      </div>
    </div>
  );
}

function SparkleIcon({ size = 16 }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="currentColor" />
    </svg>
  );
}
