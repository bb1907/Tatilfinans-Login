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
  Home as HomeIcon
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
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-background shadow-2xl relative overflow-hidden">
      {/* Top App Bar */}
      {showTopBar && (
        <header className="fixed top-0 w-full max-w-[430px] z-50 glass-effect border-b border-slate-100 flex justify-between items-center px-6 h-16">
          <div className="flex items-center gap-3">
            {onBack ? (
              <button onClick={onBack} className="text-primary active:scale-95 transition-transform">
                <ArrowLeft size={24} />
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <Compass className="text-primary fill-primary/20" size={24} />
                <h1 className="text-2xl font-bold text-primary font-headline tracking-tight">Tatilfinans</h1>
              </div>
            )}
            {title && <h1 className="text-xl font-bold text-slate-800 font-headline">{title}</h1>}
          </div>
          
          <div className="flex items-center gap-3">
            {!onBack && <Sparkles className="text-primary fill-primary/20" size={20} />}
            {onBack ? (
              <button className="text-slate-500">
                <MoreVertical size={20} />
              </button>
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${showTopBar ? 'pt-16' : ''} ${showNav ? 'pb-24' : 'pb-8'}`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 w-full max-w-[430px] z-50 glass-effect border-t border-slate-100 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-around items-center px-4 pb-6 pt-3">
            <NavItem 
              icon={<HomeIcon size={24} />} 
              label="Ana Sayfa" 
              active={activeTab === 'trips'} 
              onClick={() => setActiveTab('trips')} 
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

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 ${
        active 
          ? 'bg-cyan-50 text-cyan-700' 
          : 'text-slate-400 hover:text-cyan-600'
      }`}
    >
      <div className={`${active ? 'fill-cyan-700' : ''}`}>
        {icon}
      </div>
      <span className="text-[9px] font-bold uppercase tracking-wider mt-1">{label}</span>
    </button>
  );
}

