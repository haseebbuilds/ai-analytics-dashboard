import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const COLORS = ['#F97316', '#EA580C', '#C2410C', '#9A3412', '#1F2937', '#374151'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const entry = data.payload || data;
    const value = entry.value || data.value;
    const name = entry.name || data.name;
    
    const allValues = payload.map(p => p.payload?.value || p.value).filter(Boolean);
    const total = allValues.reduce((sum, val) => sum + val, 0);
    const percentage = total && value ? ((value / total) * 100).toFixed(1) : '0';
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-orange-200 dark:border-orange-700"
        style={{ zIndex: 99999, position: 'relative' }}
      >
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data.color || COLORS[0] }}
          />
          <p className="text-xs font-medium text-gray-900 dark:text-white">
            {name}
          </p>
        </div>
        <div className="space-y-1.5">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Value</p>
            <p className="text-base font-semibold text-orange-600 dark:text-orange-400">
              {value?.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Percentage</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {percentage}%
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
  return null;
};

const DonutChart = ({ data, title, description }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderLabel = ({ name, value, percent }) => {
    return `${name}: ${value.toLocaleString()} (${(percent * 100).toFixed(1)}%)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          {description && <Card.Description>{description}</Card.Description>}
        </Card.Header>
        <Card.Content>
          <div className="relative" style={{ zIndex: 1 }}>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(249, 115, 22, 0.1)', stroke: 'rgba(249, 115, 22, 0.3)', strokeWidth: 2 }}
                  wrapperStyle={{ zIndex: 99999, pointerEvents: 'none' }}
                  allowEscapeViewBox={{ x: true, y: true }}
                  contentStyle={{ zIndex: 99999 }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {total.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Total
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {entry.name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {entry.value.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {(entry.value / total * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default DonutChart;

