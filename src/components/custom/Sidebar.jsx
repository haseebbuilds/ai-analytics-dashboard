import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Activity, 
  TrendingUp,
  X,
  Menu,
  Sparkles
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Sidebar = ({ isMobile, isOpen, onClose, activePage, setActivePage }) => {

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics' },
    { icon: TrendingUp, label: 'Insights', id: 'insights' },
    { icon: Users, label: 'Users', id: 'users' },
    { icon: Activity, label: 'Activity', id: 'activity' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  const SidebarContent = () => (
    <motion.aside
      initial={isMobile ? { x: -280 } : { x: 0 }}
      animate={{ x: 0 }}
      exit={isMobile ? { x: -280 } : { x: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'w-64 flex flex-col backdrop-blur-xl',
        'bg-white/80 dark:bg-gray-900/80',
        'border-r border-gray-200/50 dark:border-gray-800/50',
        'shadow-xl shadow-gray-900/5 dark:shadow-gray-900/50',
        isMobile 
          ? 'fixed top-0 left-0 h-full z-50' 
          : 'fixed top-0 left-0 h-screen z-30'
      )}
      style={!isMobile ? { position: 'fixed', height: '100vh' } : {}}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800/50">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/30"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.div>
          <span className="font-semibold text-base text-gray-900 dark:text-white tracking-tight">
            AI Analytics
          </span>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        )}
      </div>

      <nav className="flex-1 p-4 pt-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActivePage(item.id);
                if (isMobile) onClose();
              }}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group',
                isActive
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/30'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-orange-600 rounded-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className={cn('w-5 h-5 relative z-10', isActive && 'text-white')} />
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-3 w-2 h-2 bg-white rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

    </motion.aside>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <SidebarContent />
          </>
        )}
      </AnimatePresence>
    );
  }

  return <SidebarContent />;
};

export default Sidebar;

