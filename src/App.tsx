/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Chat from './components/Chat';
import GroupSavings from './components/GroupSavings';
import Auth from './components/Auth';
import Payment from './components/Payment';
import FlexibleCalendar from './components/FlexibleCalendar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import BudgetDetail from './components/BudgetDetail';
import DestinationDetail from './components/DestinationDetail';
import CalendarOptimization from './components/CalendarOptimization';
import PaymentConfirmation from './components/PaymentConfirmation';
import Checkout from './components/Checkout';

type Screen = 'landing' | 'dashboard' | 'explore' | 'chat' | 'trips' | 'wallet' | 'auth' | 'payment' | 'calendar' | 'budget' | 'profile' | 'notifications' | 'settings' | 'mytrips' | 'support' | 'referral' | 'checkout';

export default function App() {
  const [activeTab, setActiveTab] = useState<Screen>('landing');

  // Simple navigation handler
  const renderScreen = () => {
    switch (activeTab) {
      case 'landing':
        return <Landing onStart={() => setActiveTab('dashboard')} onLogin={() => setActiveTab('auth')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'explore':
        return <DestinationDetail onSelect={() => setActiveTab('checkout')} />;
      case 'checkout':
        return <Checkout onComplete={() => setActiveTab('payment')} />;
      case 'chat':
        return <Chat onSelect={() => setActiveTab('payment')} />;
      case 'trips':
        return <GroupSavings />;
      case 'wallet':
        return <BudgetDetail />;
      case 'auth':
        return <Auth onLogin={() => setActiveTab('dashboard')} />;
      case 'payment':
        return <PaymentConfirmation />;
      case 'calendar':
        return <CalendarOptimization />;
      case 'profile':
        return <Profile onNavigate={(s) => setActiveTab(s as Screen)} />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      case 'mytrips':
        return <MyTrips />;
      case 'support':
        return <Support />;
      case 'referral':
        return <Referral />;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Genel Bakış';
      case 'explore': return 'Keşfet';
      case 'chat': return 'AI Asistan';
      case 'trips': return 'Grup Tasarrufu';
      case 'wallet': return 'Cüzdanım';
      case 'auth': return 'Giriş Yap';
      case 'calendar': return 'En Uygun Tarih';
      case 'payment': return 'Ödeme Onayı';
      case 'checkout': return 'Ödeme ve Onay';
      case 'profile': return 'Profilim';
      case 'notifications': return 'Bildirimler';
      case 'settings': return 'Ayarlar';
      case 'mytrips': return 'Seyahatlerim';
      case 'support': return 'Destek Merkezi';
      case 'referral': return 'Arkadaşını Davet Et';
      default: return undefined;
    }
  };

  const handleBack = () => {
    if (['calendar', 'payment', 'budget', 'checkout'].includes(activeTab)) setActiveTab('explore');
    else if (['settings', 'notifications', 'mytrips', 'support', 'referral'].includes(activeTab)) setActiveTab('profile');
    else if (activeTab === 'auth') setActiveTab('landing');
    else setActiveTab('dashboard');
  };

  const showNav = ['dashboard', 'explore', 'wallet', 'trips', 'profile', 'notifications', 'settings', 'mytrips', 'support', 'referral'].includes(activeTab);
  const showTopBar = !['auth', 'landing', 'payment'].includes(activeTab);

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={(tab) => setActiveTab(tab as Screen)}
      showNav={showNav}
      title={getTitle()}
      onBack={!showNav && activeTab !== 'landing' ? handleBack : undefined}
      showTopBar={showTopBar}
    >
      {renderScreen()}
    </Layout>
  );
}

// Placeholder components for new screens (will be moved to separate files)
function Profile({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div className="space-y-8 pb-10">
      <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden border-4 border-primary/10 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="text-2xl font-black text-slate-800 font-headline">Ahmet YILMAZ</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Premium Gezgin</p>
        
        <div className="grid grid-cols-3 gap-8 w-full mt-8 pt-8 border-t border-slate-50">
          <div>
            <p className="text-xl font-black text-primary">12</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Seyahat</p>
          </div>
          <div>
            <p className="text-xl font-black text-primary">4</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aktif Plan</p>
          </div>
          <div>
            <p className="text-xl font-black text-primary">₺45k</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Birikim</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProfileMenuItem icon={<Luggage size={20} />} label="Seyahatlerim" onClick={() => onNavigate('mytrips')} />
        <ProfileMenuItem icon={<Bell size={20} />} label="Bildirimler" onClick={() => onNavigate('notifications')} />
        <ProfileMenuItem icon={<Wallet size={20} />} label="Ödeme Yöntemleri" onClick={() => {}} />
        <ProfileMenuItem icon={<Search size={20} />} label="Ayarlar" onClick={() => onNavigate('settings')} />
        <ProfileMenuItem icon={<Users size={20} />} label="Referans Programı" onClick={() => onNavigate('referral')} />
        <ProfileMenuItem icon={<MessageSquare size={20} />} label="Destek Al" onClick={() => onNavigate('support')} />
      </div>

      <button className="w-full py-5 rounded-2xl text-red-500 font-black uppercase tracking-widest text-xs border border-red-100 bg-red-50/50 hover:bg-red-50 transition-all">
        Çıkış Yap
      </button>
    </div>
  );
}

function ProfileMenuItem({ icon, label, onClick }: any) {
  return (
    <button onClick={onClick} className="w-full bg-white rounded-2xl p-5 flex items-center justify-between border border-slate-100 hover:border-primary/20 transition-all group">
      <div className="flex items-center gap-4">
        <div className="text-slate-400 group-hover:text-primary transition-colors">{icon}</div>
        <span className="text-sm font-bold text-slate-700">{label}</span>
      </div>
      <ChevronRight size={18} className="text-slate-300" />
    </button>
  );
}

function Notifications() {
  return (
    <div className="space-y-6 pb-10 max-w-3xl mx-auto">
      <NotificationItem 
        title="Bütçe Uyarısı" 
        desc="Paris tatili bütçeniz planlanandan %10 daha fazla harcama içeriyor." 
        time="2 saat önce"
        type="warning"
      />
      <NotificationItem 
        title="Yeni Fırsat!" 
        desc="Eylül ayı için Bali uçuşlarında %20 indirim yakaladık." 
        time="5 saat önce"
        type="info"
      />
      <NotificationItem 
        title="Birikim Hedefi" 
        desc="Tebrikler! Maldivler hedefinizin %50'sine ulaştınız." 
        time="Dün"
        type="success"
      />
    </div>
  );
}

function NotificationItem({ title, desc, time, type }: any) {
  const colors: any = {
    warning: 'bg-orange-50 text-orange-600 border-orange-100',
    info: 'bg-blue-50 text-blue-600 border-blue-100',
    success: 'bg-green-50 text-green-600 border-green-100'
  };
  return (
    <div className={`p-6 rounded-3xl border ${colors[type]} flex gap-4 shadow-sm`}>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-black text-slate-800">{title}</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase">{time}</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="space-y-8 pb-10 max-w-3xl mx-auto">
      <section className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Uygulama Ayarları</h3>
        <div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 space-y-2">
          <ToggleItem label="Bildirim İzinleri" active />
          <ToggleItem label="Karanlık Mod" />
          <ToggleItem label="Konum Servisleri" active />
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Güvenlik</h3>
        <div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 space-y-2">
          <ToggleItem label="İki Faktörlü Doğrulama" />
          <ToggleItem label="Biyometrik Giriş" active />
        </div>
      </section>
    </div>
  );
}

function ToggleItem({ label, active = false }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <div className={`w-12 h-6 rounded-full relative p-1 transition-colors cursor-pointer ${active ? 'bg-primary' : 'bg-slate-200'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
      </div>
    </div>
  );
}

function MyTrips() {
  return (
    <div className="space-y-6 pb-10 max-w-3xl mx-auto">
      <TripCard 
        title="Paris Tatili" 
        date="15 - 22 Eylül 2024" 
        status="Planlanıyor" 
        img="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80"
      />
      <TripCard 
        title="Bali Kültür Turu" 
        date="10 - 20 Ekim 2024" 
        status="Onaylandı" 
        img="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80"
      />
      <TripCard 
        title="Maldivler Kaçamağı" 
        date="5 - 12 Kasım 2024" 
        status="Birikim Aşamasında" 
        img="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80"
      />
    </div>
  );
}

function TripCard({ title, date, status, img }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex gap-4 p-4 hover:border-primary/20 transition-all cursor-pointer group">
      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
      </div>
      <div className="flex-1 py-1">
        <h4 className="text-lg font-black text-slate-800 font-headline">{title}</h4>
        <p className="text-xs font-bold text-slate-400 mt-1">{date}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">{status}</span>
        </div>
      </div>
      <div className="flex items-center pr-2">
        <ChevronRight size={20} className="text-slate-300" />
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="space-y-8 pb-10 max-w-3xl mx-auto">
      <section className="bg-primary text-white rounded-[2.5rem] p-8 shadow-xl shadow-primary/20">
        <h2 className="text-2xl font-black font-headline mb-2">Nasıl yardımcı olabiliriz?</h2>
        <p className="text-white/70 text-sm">Destek ekibimiz 7/24 yanınızda.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SupportCard icon={<MessageSquare size={24} />} title="Canlı Destek" desc="AI asistanımızla hemen konuşmaya başlayın." />
        <SupportCard icon={<Bell size={24} />} title="Yardım Merkezi" desc="Sıkça sorulan soruları inceleyin." />
      </div>

      <section className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Popüler Konular</h3>
        <div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 space-y-2">
          <p className="p-4 text-sm font-bold text-slate-700 border-b border-slate-50 cursor-pointer hover:text-primary transition-colors">Ödeme yöntemimi nasıl değiştiririm?</p>
          <p className="p-4 text-sm font-bold text-slate-700 border-b border-slate-50 cursor-pointer hover:text-primary transition-colors">Grup tasarrufundan nasıl ayrılırım?</p>
          <p className="p-4 text-sm font-bold text-slate-700 cursor-pointer hover:text-primary transition-colors">Taksit erteleme şartları nelerdir?</p>
        </div>
      </section>
    </div>
  );
}

function SupportCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 hover:border-primary/20 transition-all cursor-pointer group">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all mb-4">
        {icon}
      </div>
      <h4 className="font-black text-slate-800 mb-1">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function Referral() {
  return (
    <div className="space-y-8 pb-10 max-w-3xl mx-auto">
      <section className="bg-tertiary text-white rounded-[2.5rem] p-8 shadow-xl shadow-tertiary/20 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users size={40} />
        </div>
        <h2 className="text-3xl font-black font-headline mb-2">Arkadaşlarını Davet Et</h2>
        <p className="text-white/70 text-sm">Her başarılı referans için ₺500 indirim kazanın.</p>
      </section>

      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Senin Kodun</p>
        <div className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 mb-8">
          <p className="text-3xl font-black text-primary tracking-[0.5em]">AHMET500</p>
        </div>
        <button className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all">
          Kodu Kopyala ve Paylaş
        </button>
      </div>
    </div>
  );
}

import { ChevronRight, Users, Luggage, Bell, Wallet, Search, MessageSquare } from 'lucide-react';




