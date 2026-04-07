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

type Screen = 'landing' | 'dashboard' | 'explore' | 'chat' | 'trips' | 'wallet' | 'auth' | 'payment' | 'calendar' | 'budget';

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
        return <DestinationDetail />;
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
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Tatil Finans';
      case 'explore': return 'Keşfet';
      case 'chat': return 'AI Assistant';
      case 'trips': return 'Group Savings';
      case 'wallet': return 'Cüzdan';
      case 'auth': return 'Giriş Yap';
      case 'calendar': return 'En Uygun Tarih';
      case 'payment': return 'Ödeme';
      default: return undefined;
    }
  };

  const handleBack = () => {
    if (activeTab === 'calendar') setActiveTab('explore');
    else if (activeTab === 'payment') setActiveTab('explore');
    else if (activeTab === 'auth') setActiveTab('landing');
    else setActiveTab('dashboard');
  };

  const showNav = ['dashboard', 'explore', 'wallet', 'trips'].includes(activeTab);
  const showTopBar = !['auth', 'landing', 'payment'].includes(activeTab);

  return (
    <Layout 
      activeTab={activeTab === 'dashboard' ? 'trips' : activeTab === 'wallet' ? 'wallet' : activeTab === 'explore' ? 'explore' : activeTab} 
      setActiveTab={(tab) => {
        if (tab === 'trips') setActiveTab('dashboard');
        else if (tab === 'wallet') setActiveTab('wallet');
        else if (tab === 'explore') setActiveTab('explore');
        else if (tab === 'chat') setActiveTab('chat');
        else setActiveTab(tab as Screen);
      }}
      showNav={showNav}
      title={getTitle()}
      onBack={!showNav && activeTab !== 'landing' ? handleBack : undefined}
      showTopBar={showTopBar}
    >
      {renderScreen()}
      
      {/* Dev Switcher for testing all new screens */}
      <div className="fixed top-20 right-4 z-[60] flex flex-col gap-2 opacity-20 hover:opacity-100 transition-opacity">
        <button onClick={() => setActiveTab('calendar')} className="bg-white p-1 rounded border text-[8px] font-bold">CAL</button>
        <button onClick={() => setActiveTab('payment')} className="bg-white p-1 rounded border text-[8px] font-bold">PAY</button>
        <button onClick={() => setActiveTab('chat')} className="bg-white p-1 rounded border text-[8px] font-bold">CHAT</button>
      </div>
    </Layout>
  );
}




