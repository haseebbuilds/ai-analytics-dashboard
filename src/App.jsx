import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { cn } from './utils/cn';
import Sidebar from './components/custom/Sidebar';
import Navbar from './components/custom/Navbar';
import DashboardPage from './components/pages/DashboardPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import InsightsPage from './components/pages/InsightsPage';
import UsersPage from './components/pages/UsersPage';
import ActivityPage from './components/pages/ActivityPage';
import SettingsPage from './components/pages/SettingsPage';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-orange-50/20 via-white to-gray-50/50 dark:from-orange-900/5 dark:via-gray-900 dark:to-gray-950" />
        <Sidebar
          isMobile={isMobile}
          isOpen={isMobile ? sidebarOpen : true}
          onClose={() => setSidebarOpen(false)}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className={cn('flex flex-col', isMobile ? '' : 'lg:ml-64')}>
          <Navbar
            onMenuClick={() => setSidebarOpen(true)}
            isMobile={isMobile}
          />

          <main className="p-5 lg:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activePage === 'dashboard' && <DashboardPage />}
                {activePage === 'analytics' && <AnalyticsPage />}
                {activePage === 'insights' && <InsightsPage />}
                {activePage === 'users' && <UsersPage />}
                {activePage === 'activity' && <ActivityPage />}
                {activePage === 'settings' && <SettingsPage />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default App;
