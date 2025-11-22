import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BarChart = ({ data, title, description, color = '#F97316' }) => {
  const colors = [
    '#F97316',
    '#EA580C',
    '#C2410C',
    '#9A3412',
    '#7C2D12',
    '#1F2937',
  ];

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
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
              <XAxis
                dataKey="name"
                className="text-xs text-gray-500 dark:text-gray-400"
                stroke="currentColor"
              />
              <YAxis
                className="text-xs text-gray-500 dark:text-gray-400"
                stroke="currentColor"
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default BarChart;

