import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Settings, Bell, Shield, Palette, Database, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const SettingsPage = () => {
  const { isDark, toggleTheme } = useTheme();

  const settingsSections = [
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage notification preferences',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Account security and privacy settings',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize your theme and display',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Database,
      title: 'Data & Storage',
      description: 'Manage your data and storage',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Language & Region',
      description: 'Set your preferred language',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Settings className="w-6 h-6 text-orange-500" />
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      
      {settingsSections.map((section, index) => {
        const Icon = section.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover>
              <Card.Header>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Card.Title>{section.title}</Card.Title>
                    <Card.Description>{section.description}</Card.Description>
                  </div>
                </div>
              </Card.Header>
              <Card.Content>
                {section.title === 'Appearance' ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Toggle between light and dark themes
                        </p>
                      </div>
                      <button
                        onClick={toggleTheme}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          isDark ? 'bg-orange-600' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                            isDark ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Configure your {section.title.toLowerCase()} settings
                      </p>
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                )}
              </Card.Content>
            </Card>
          </motion.div>
        );
      })}

      
      <Card>
        <Card.Header>
          <Card.Title>Account Information</Card.Title>
          <Card.Description>Update your account details</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <Input type="email" defaultValue="user@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Display Name
              </label>
              <Input type="text" defaultValue="John Doe" />
            </div>
            <div className="flex gap-3 pt-4">
              <Button>Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default SettingsPage;

