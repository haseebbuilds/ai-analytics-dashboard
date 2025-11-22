import React from 'react';
import { motion } from 'framer-motion';
import ActivityFeed from '../custom/ActivityFeed';
import Card from '../ui/Card';
import { Activity, Clock, Zap } from 'lucide-react';
import { activities } from '../../data/mockData';

const ActivityPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto space-y-6"
    >
      
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Activity className="w-6 h-6 text-orange-500" />
          Activity Log
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time activity feed and system events
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500 text-white">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Events</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">15,423</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-600 text-white">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last 24h</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">3,245</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500 text-white">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">This Hour</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">156</p>
            </div>
          </div>
        </Card>
      </div>

      
      <ActivityFeed activities={activities} />
    </motion.div>
  );
};

export default ActivityPage;

