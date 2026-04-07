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

type Screen = 'explore' | 'chat' | 'trips' | 'wallet' | 'auth' | 'payment' | 'calendar';

export default function App() {
  const [activeTab, setActiveTab] = useState<Screen>('explore');

  // Simple navigation handler
  const renderScreen = () => {
    switch (activeTab) {
      case 'explore':
        return <Home onSelect={() => setActiveTab('wallet')} />;
      case 'chat':
        return <Chat onSelect={() => setActiveTab('wallet')} />;
      case 'trips':
        return <GroupSavings />;
      case 'wallet':
        return <Payment onSelectCalendar={() => setActiveTab('calendar')} />;
      case 'auth':
        return <Auth onLogin={() => setActiveTab('explore')} />;
      case 'calendar':
        return <FlexibleCalendar onConfirm={() => setActiveTab('wallet')} />;
      default:
        return <Home onSelect={() => setActiveTab('wallet')} />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'explore': return undefined;
      case 'chat': return 'AI Assistant';
      case 'trips': return 'Group Savings';
      case 'wallet': return 'Tatil Ödemesi';
      case 'auth': return 'Giriş Yap';
      case 'calendar': return 'Flexible Dates';
      default: return undefined;
    }
  };

  const handleBack = () => {
    if (activeTab === 'calendar') setActiveTab('wallet');
    else if (activeTab === 'payment') setActiveTab('explore');
    else setActiveTab('explore');
  };

  const showNav = ['explore', 'chat', 'trips', 'wallet'].includes(activeTab);
  const showTopBar = activeTab !== 'auth';

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={(tab) => setActiveTab(tab as Screen)}
      showNav={showNav}
      title={getTitle()}
      onBack={!showNav ? handleBack : undefined}
      showTopBar={showTopBar}
    >
      {renderScreen()}
    </Layout>
  );
}


