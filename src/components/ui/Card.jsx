import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = ({ children, className, hover = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : {}}
      className={cn(
        'rounded-xl backdrop-blur-xl',
        'bg-white/90 dark:bg-gray-900/90',
        'border border-gray-200/50 dark:border-gray-800/50',
        'shadow-lg shadow-gray-900/5 dark:shadow-gray-900/30',
        hover && 'hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/50 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ children, className }) => {
  return (
    <div className={cn('p-5 pb-3 border-b border-gray-100 dark:border-gray-800/50', className)}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={cn('text-base font-semibold text-gray-900 dark:text-white', className)}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className }) => {
  return (
    <p className={cn('text-sm text-gray-500 dark:text-gray-400 mt-1', className)}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className }) => {
  return (
    <div className={cn('p-5 pt-4', className)}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;

export default Card;

