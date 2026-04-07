import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Apple, User, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Auth({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="px-6 flex flex-col justify-center min-h-[80vh]">
      {/* Hero Section */}
      <div className="relative w-full mb-10 overflow-hidden rounded-3xl aspect-[4/3] group shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1540202404-a2f290328294?w=800&q=80" 
          alt="Travel" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <h1 className="font-headline font-extrabold text-2xl text-white tracking-tight leading-tight">
            Tatilini şimdi planla, ödemeni sonra yap
          </h1>
          <p className="text-xs text-white/80 mt-2 leading-relaxed">
            Kredi, taksit ve esnek ödeme seçenekleriyle tatilini erteleme
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
        <form 
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tam Ad Soyad</label>
              <div className="relative flex items-center">
                <User className="absolute left-4 text-slate-300" size={18} />
                <input 
                  type="text" 
                  placeholder="Adınız Soyadınız"
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-slate-300"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-posta veya Telefon</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 text-slate-300" size={18} />
              <input 
                type="text" 
                placeholder="Adresiniz veya numaranız"
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Telefon Numarası</label>
              <div className="relative flex items-center">
                <Phone className="absolute left-4 text-slate-300" size={18} />
                <input 
                  type="tel" 
                  placeholder="05XX XXX XX XX"
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-slate-300"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Şifre</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 text-slate-300" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-12 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-slate-300"
              />
              <button type="button" className="absolute right-4 text-slate-300 hover:text-primary transition-colors">
                <Eye size={18} />
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-[11px] px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-primary focus:ring-primary" />
                <span className="text-slate-500 font-bold">Beni hatırla</span>
              </label>
              <button type="button" className="text-primary font-black uppercase tracking-wider">Şifremi Unuttum?</button>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all mt-4 font-headline uppercase tracking-widest"
          >
            {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
          </button>
        </form>

        <div className="flex items-center gap-3 my-8">
          <div className="h-px flex-1 bg-slate-100"></div>
          <span className="text-[9px] font-black text-slate-300 tracking-[0.2em] uppercase">Veya</span>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SocialButton icon={<img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />} label="Google" />
          <SocialButton icon={<Apple size={20} fill="currentColor" />} label="Apple" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500 font-medium">
          {isLogin ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'} 
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-black ml-2 hover:underline uppercase tracking-wider text-xs"
          >
            {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 rounded-full w-fit mx-auto border border-slate-100">
        <ShieldCheck size={16} className="text-primary" />
        <span className="text-[9px] font-black text-slate-400 tracking-widest uppercase">256-BIT SSL ILE KORUNUR</span>
      </div>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex items-center justify-center gap-2 py-3.5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors active:scale-95 border border-slate-100">
      {icon}
      <span className="text-xs font-bold text-slate-700">{label}</span>
    </button>
  );
}
