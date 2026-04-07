import React from 'react';
import { Users, PartyPopper, Copy, Share2, Instagram, MessageCircle, MoreHorizontal, ChevronRight, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupSavings() {
  return (
    <div className="space-y-8 pb-10">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80" 
          alt="Maldives" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-10 left-8 md:left-12 right-8">
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-white tracking-tight">Maldivler Arkadaş Grubu</h1>
          <p className="text-white/80 text-sm md:text-lg font-medium mt-1">Egzotik Bir Tatil İçin Güçlerini Birleştir</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-2">
        {/* Left Column: Progress & Tiers */}
        <div className="lg:col-span-7 space-y-8">
          {/* Progress Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline font-bold text-xl text-primary">Grup Tasarrufu</h2>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">2/6 Katılımcı</span>
            </div>

            <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '33%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-full bg-tertiary rounded-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <TierCard tier="2 Kişi" price="50.000 TL" status="Güncel" active />
              <TierCard tier="4 Kişi" price="45.000 TL" status="Sonraki" />
              <TierCard tier="6 Kişi" price="40.000 TL" status="Hedef" />
            </div>
          </div>

          {/* Installments */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-primary uppercase tracking-widest px-2">Esnek Taksitlendirme</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InstallmentCard months={12} price="4.166 TL" />
              <InstallmentCard months={24} price="2.083 TL" />
              <InstallmentCard months={36} price="1.388 TL" />
            </div>
          </div>
        </div>

        {/* Right Column: Invite & Social */}
        <div className="lg:col-span-5 space-y-8">
          {/* Savings Banner */}
          <div className="bg-primary-container rounded-[2.5rem] p-8 flex items-center gap-6 relative overflow-hidden group shadow-xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Users size={80} className="text-white" />
            </div>
            <div className="flex-1 relative z-10">
              <p className="text-white font-bold text-lg leading-tight">2 arkadaşını daha davet et ve 5.000 TL tasarruf et!</p>
            </div>
            <PartyPopper size={40} className="text-white relative z-10" />
          </div>

          {/* Invite Button */}
          <button className="w-full bg-tertiary text-white font-bold py-6 rounded-[2rem] flex items-center justify-center gap-3 shadow-xl shadow-tertiary/20 active:scale-95 transition-all cursor-pointer">
            <Users size={24} />
            Arkadaşlarını Davet Et
          </button>

          {/* Referral Link */}
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
            <h3 className="font-bold text-xs text-slate-500 uppercase tracking-widest mb-6">Referans Linkini Kopyala</h3>
            <div className="bg-white rounded-2xl p-5 flex items-center justify-between gap-4 mb-8 border border-slate-100">
              <span className="text-[10px] md:text-xs font-mono font-bold text-slate-400 truncate">tatilfinans.com/maldivler/2024-group-ax2</span>
              <button className="text-primary active:scale-90 transition-transform cursor-pointer">
                <Copy size={20} />
              </button>
            </div>

            <div className="flex justify-around items-center">
              <SocialIcon icon={<MessageCircle size={24} className="text-[#25D366]" />} label="WhatsApp" />
              <SocialIcon icon={<Instagram size={24} className="text-[#E1306C]" />} label="Instagram" />
              <SocialIcon icon={<Share2 size={24} className="text-[#1DA1F2]" />} label="X (Twitter)" />
              <SocialIcon icon={<MoreHorizontal size={24} className="text-slate-400" />} label="Daha Fazla" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TierCard({ tier, price, status, active = false }: { tier: string, price: string, status: string, active?: boolean }) {
  return (
    <div className={`p-3 rounded-2xl border-2 transition-all ${
      active 
        ? 'bg-primary/5 border-primary/20' 
        : 'bg-slate-50 border-transparent opacity-60'
    }`}>
      <p className={`text-[9px] font-black uppercase tracking-wider mb-1 ${active ? 'text-primary' : 'text-slate-400'}`}>{tier}</p>
      <p className={`text-xs font-black ${active ? 'text-slate-900' : 'text-slate-500'}`}>{price}</p>
      <p className={`text-[8px] font-bold mt-0.5 ${active ? 'text-primary/60' : 'text-slate-400'}`}>{status}</p>
    </div>
  );
}

function SocialIcon({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-active:scale-90 transition-all">
        {icon}
      </div>
      <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">{label}</span>
    </button>
  );
}

function InstallmentCard({ months, price }: { months: number, price: string }) {
  return (
    <div className="flex-none w-40 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{months} Ay Taksit</p>
      <p className="text-lg font-black text-primary">{price}</p>
      <p className="text-[9px] text-slate-400 font-bold mt-1">/ kişi başı aylık</p>
    </div>
  );
}
