import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../ui/Card';
import { cn } from '../../utils/cn';

const MetricsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon: Icon, 
  iconColor = 'purple',
  delay = 0 
}) => {
  const iconColors = {
    purple: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800',
    blue: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800',
    green: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card hover className="h-full border-orange-100 dark:border-orange-900/30 hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">
              {title}
            </h3>
            {Icon && (
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={cn('p-2.5 rounded-lg shadow-sm', iconColors[iconColor])}
              >
                <Icon className="w-4 h-4" />
              </motion.div>
            )}
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
              {value}
            </p>
            
            {change && (
              <div className="flex items-center gap-1.5 pt-1">
                {changeType === 'positive' ? (
                  <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                )}
                <span
                  className={cn(
                    'text-xs font-medium',
                    changeType === 'positive'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  )}
                >
                  {change}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  vs last month
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default MetricsCard;

