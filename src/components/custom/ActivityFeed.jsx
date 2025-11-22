import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, Activity, TrendingUp, Zap, Database } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';

const ActivityFeed = ({ activities }) => {
  const iconMap = {
    user: User,
    activity: Activity,
    trending: TrendingUp,
    zap: Zap,
    database: Database,
  };

  const getIcon = (type) => {
    const Icon = iconMap[type] || Activity;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <Card.Header>
          <Card.Title>Recent Activity</Card.Title>
          <Card.Description>Latest updates and events</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-0">
            <AnimatePresence>
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-gray-800/50 last:border-0 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/30 -mx-5 px-5 rounded-lg cursor-pointer group"
                >
                  <div
                    className={cn(
                      'p-2 rounded-lg',
                      activity.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : activity.type === 'warning'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                        : activity.type === 'info'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    )}
                  >
                    {getIcon(activity.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </p>
                      {activity.badge && (
                        <Badge variant={activity.badge.variant}>
                          {activity.badge.label}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default ActivityFeed;

