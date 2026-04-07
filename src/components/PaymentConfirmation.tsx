import React from 'react';
import { ArrowLeft, Bell, Landmark, CreditCard, Wallet, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PaymentConfirmation() {
  return (
    <div className="space-y-6 px-4 pb-32">
      {/* Header */}
      <nav className="flex items-center justify-between py-4 px-2">
        <button className="text-slate-800"><ArrowLeft size={24} /></button>
        <h1 className="text-xl font-black font-headline text-slate-900 tracking-tight">TatilFinans</h1>
        <div className="flex items-center gap-4">
          <Bell size={24} className="text-slate-400" />
          <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border border-slate-100" alt="User" />
        </div>
      </nav>

      {/* Summary Card */}
      <section className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-50 flex items-center gap-6">
        <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80" 
            alt="Santorini" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-black text-slate-800 font-headline mb-1">Santorini Rüyası</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">5 Gece • 2 Kişi</p>
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Toplam:</span>
            <span className="text-xl font-black text-primary">64.000 TL</span>
          </div>
        </div>
      </section>

      {/* Plan Header */}
      <section className="text-center py-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Esnek Ödeme Planı</p>
        <h3 className="text-3xl font-black text-[#00647c] font-headline leading-tight">
          Aylık 4.180 TL’den<br />başlayan
        </h3>
        <p className="text-xs font-medium text-slate-400 mt-2">64.000 TL toplam tutar üzerinden</p>
      </section>

      {/* Tabs */}
      <section className="flex gap-2 p-1 bg-slate-100 rounded-2xl">
        <button className="flex-1 bg-[#00647c] text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">Kredi Kartı</button>
        <button className="flex-1 text-slate-400 py-3 rounded-xl text-xs font-black uppercase tracking-widest">Banka Kredisi</button>
        <button className="flex-1 text-slate-400 py-3 rounded-xl text-xs font-black uppercase tracking-widest">BNLP (Biriktir)</button>
      </section>

      {/* Balance Toggle */}
      <section className="bg-blue-50/50 rounded-[2rem] p-6 flex items-center justify-between border border-blue-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Biriken Bakiye</p>
            <p className="text-xl font-black text-slate-800">12.000 TL</p>
          </div>
        </div>
        <div className="w-14 h-8 bg-[#00647c] rounded-full relative p-1 cursor-pointer">
          <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm"></div>
        </div>
      </section>

      {/* Bank Options */}
      <section className="space-y-4">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">ÖDEME SEÇENEKLERİ</h4>
        <div className="space-y-3">
          <BankItem name="QNB Finansbank" months="12 ay taksit" amount="5.420 TL" />
          <BankItem name="Garanti BBVA" months="18 ay taksit" amount="4.180 TL" recommended />
          <BankItem name="İş Bankası" months="12 ay taksit" amount="5.300 TL" />
        </div>
      </section>

      {/* Sticky Bottom */}
      <div className="fixed bottom-0 left-0 w-full glass-effect px-6 pb-10 pt-5 flex flex-col gap-4 z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-slate-100">
        <button className="w-full bg-[#825100] text-white h-16 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-tertiary/20 active:scale-95 transition-all">
          Tatilini Onayla
        </button>
        <button className="text-slate-400 text-[10px] font-black uppercase tracking-widest text-center">
          Biriktirmeye Devam Et
        </button>
      </div>
    </div>
  );
}

function BankItem({ name, months, amount, recommended = false }: any) {
  return (
    <div className={`p-5 rounded-[2rem] flex items-center justify-between transition-all border-2 ${
      recommended ? 'bg-white border-primary shadow-lg ring-4 ring-primary/5' : 'bg-slate-50 border-transparent'
    }`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${recommended ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
          <Landmark size={24} />
        </div>
        <div>
          <h5 className="text-sm font-black text-slate-800">{name}</h5>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{months}</p>
        </div>
      </div>
      <div className="text-right">
        {recommended && (
          <span className="text-[8px] bg-primary text-white px-2 py-0.5 rounded font-black tracking-widest mb-1 inline-block">ÖNERİLEN</span>
        )}
        <div className="flex items-baseline gap-1">
          <span className={`text-lg font-black ${recommended ? 'text-primary' : 'text-slate-800'}`}>{amount}</span>
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">/ ay</span>
        </div>
      </div>
    </div>
  );
}
