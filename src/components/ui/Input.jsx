import React from 'react';
import { cn } from '../../utils/cn';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200',
        className
      )}
      {...props}
    />
  );
};

export default Input;

