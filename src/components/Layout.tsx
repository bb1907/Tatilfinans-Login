import React from 'react';
import { 
  Search, 
  Sparkles, 
  Luggage, 
  Wallet, 
  User, 
  MessageSquare, 
  Compass,
  Bell,
  Menu,
  ArrowLeft,
  MoreVertical,
  Home as HomeIcon,
  CreditCard
} from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showNav?: boolean;
  title?: string;
  onBack?: () => void;
  showTopBar?: boolean;
}

export default function Layout({ 
  children, 
  activeTab, 
  setActiveTab, 
  showNav = true,
  title,
  onBack,
  showTopBar = true
}: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background relative overflow-x-hidden">
      {/* Desktop Sidebar */}
      {showNav && (
        <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-100 fixed h-full z-50">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-12">
              <h1 className="text-2xl font-black text-primary font-headline tracking-tight">Tatilfinans</h1>
            </div>

            <nav className="space-y-2">
              <SidebarItem 
                icon={<HomeIcon size={20} />} 
                label="Genel Bakış" 
                active={activeTab === 'dashboard'} 
                onClick={() => setActiveTab('dashboard')} 
              />
              <SidebarItem 
                icon={<Compass size={20} />} 
                label="Keşfet" 
                active={activeTab === 'explore'} 
                onClick={() => setActiveTab('explore')} 
              />
              <SidebarItem 
                icon={<Luggage size={20} />} 
                label="Grup Tasarrufu" 
                active={activeTab === 'trips'} 
                onClick={() => setActiveTab('trips')} 
              />
              <SidebarItem 
                icon={<Wallet size={20} />} 
                label="Cüzdanım" 
                active={activeTab === 'wallet'} 
                onClick={() => setActiveTab('wallet')} 
              />
              <SidebarItem 
                icon={<CreditCard size={20} />} 
                label="Ödeme Test" 
                active={activeTab === 'checkout'} 
                onClick={() => setActiveTab('checkout')} 
              />
              <SidebarItem 
                icon={<MessageSquare size={20} />} 
                label="AI Asistan" 
                active={activeTab === 'chat'} 
                onClick={() => setActiveTab('chat')} 
              />
            </nav>

            <div className="mt-12 pt-12 border-t border-slate-50 space-y-2">
              <SidebarItem 
                icon={<User size={20} />} 
                label="Profil" 
                active={activeTab === 'profile'} 
                onClick={() => setActiveTab('profile')} 
              />
              <SidebarItem 
                icon={<Bell size={20} />} 
                label="Bildirimler" 
                active={activeTab === 'notifications'} 
                onClick={() => setActiveTab('notifications')} 
              />
            </div>
          </div>

          <div className="mt-auto p-8">
            <div className="bg-slate-50 rounded-3xl p-4 flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-slate-800 truncate">Ahmet YILMAZ</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">Premium</p>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${showNav ? 'md:ml-72' : ''}`}>
        {/* Top App Bar */}
        {showTopBar && (
          <header className={`fixed top-0 z-40 glass-effect border-b border-slate-100 flex justify-between items-center px-6 md:px-12 h-16 transition-all ${showNav ? 'md:left-72 right-0' : 'w-full'}`}>
            <div className="flex items-center gap-3 flex-1">
              {onBack && (
                <button onClick={onBack} className="text-primary active:scale-95 transition-transform mr-2">
                  <ArrowLeft size={24} />
                </button>
              )}
              {!onBack && showNav && (
                <div className="md:hidden flex items-center gap-2">
                  <h1 className="text-xl font-black text-primary font-headline tracking-tight">Tatilfinans</h1>
                </div>
              )}
              {title && <h1 className="text-lg font-black text-slate-800 font-headline hidden md:block">{title}</h1>}
              
              {/* Desktop Search Bar */}
              {showNav && (
                <div className="hidden md:flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-2 ml-8 w-full max-w-md group focus-within:border-primary/30 transition-all">
                  <Search size={18} className="text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Destinasyon, otel veya uçuş ara..." 
                    className="bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 w-full ml-3 placeholder:text-slate-400"
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 ml-4">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors relative">
                <Bell size={20} />
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
              </button>
              <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">AI Aktif</span>
              </div>
            </div>
          </header>
        )}

        {/* Page Content */}
        <main className={`flex-1 w-full max-w-5xl mx-auto ${showTopBar ? 'pt-20 md:pt-24' : ''} ${showNav ? 'pb-24 md:pb-12' : 'pb-8'}`}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 md:px-8"
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      {showNav && (
        <nav className="fixed bottom-0 w-full z-50 glass-effect border-t border-slate-100 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden">
          <div className="flex justify-around items-center px-4 pb-6 pt-3">
            <NavItem 
              icon={<HomeIcon size={24} />} 
              label="Genel Bakış" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
            />
            <NavItem 
              icon={<Compass size={24} />} 
              label="Keşfet" 
              active={activeTab === 'explore'} 
              onClick={() => setActiveTab('explore')} 
            />
            <NavItem 
              icon={<Wallet size={24} />} 
              label="Cüzdan" 
              active={activeTab === 'wallet'} 
              onClick={() => setActiveTab('wallet')} 
            />
            <NavItem 
              icon={<User size={24} />} 
              label="Profil" 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')} 
            />
          </div>
        </nav>
      )}
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all group ${
        active 
          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
          : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
      }`}
    >
      <div className={`${active ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`}>
        {icon}
      </div>
      <span>{label}</span>
      {active && (
        <motion.div 
          layoutId="sidebar-active-indicator"
          className="ml-auto w-1.5 h-1.5 bg-white rounded-full"
        />
      )}
    </button>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 ${
        active 
          ? 'text-primary' 
          : 'text-slate-400 hover:text-primary'
      }`}
    >
      <div className={`${active ? 'text-primary' : ''}`}>
        {icon}
      </div>
      <span className="text-[9px] font-bold uppercase tracking-wider mt-1">{label}</span>
    </button>
  );
}

