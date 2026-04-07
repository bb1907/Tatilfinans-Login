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
  MoreVertical
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
        <header className="fixed top-0 w-full max-w-[430px] z-50 glass-effect border-b border-slate-100 flex justify-between items-center px-6 py-4">
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
      <main className={`flex-1 ${showTopBar ? 'pt-20' : ''} ${showNav ? 'pb-24' : 'pb-8'}`}>
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
              icon={<Search size={24} />} 
              label="Explore" 
              active={activeTab === 'explore'} 
              onClick={() => setActiveTab('explore')} 
            />
            <NavItem 
              icon={<Sparkles size={24} />} 
              label="AI Assistant" 
              active={activeTab === 'chat'} 
              onClick={() => setActiveTab('chat')} 
            />
            <NavItem 
              icon={<Luggage size={24} />} 
              label="Trips" 
              active={activeTab === 'trips'} 
              onClick={() => setActiveTab('trips')} 
            />
            <NavItem 
              icon={<Wallet size={24} />} 
              label="Wallet" 
              active={activeTab === 'wallet'} 
              onClick={() => setActiveTab('wallet')} 
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
          ? 'bg-primary/10 text-primary' 
          : 'text-slate-400 hover:text-primary/70'
      }`}
    >
      <div className={`${active ? 'fill-primary' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{label}</span>
    </button>
  );
}
