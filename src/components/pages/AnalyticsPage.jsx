import React from 'react';
import { motion } from 'framer-motion';
import LineChart from '../custom/LineChart';
import BarChart from '../custom/BarChart';
import DonutChart from '../custom/DonutChart';
import Card from '../ui/Card';
import { BarChart3, TrendingUp, Activity } from 'lucide-react';
import { lineChartData, barChartData, donutChartData } from '../../data/mockData';

const AnalyticsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto space-y-6"
    >
      
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Analytics & Reports
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Deep insights into your AI platform performance
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500 text-white">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Analytics</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">1,247</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-600 text-white">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Growth Rate</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">+24.5%</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500 text-white">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Reports</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">89</p>
            </div>
          </div>
        </Card>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LineChart
                  data={lineChartData}
                  title="Performance Trends"
                  description="Weekly performance metrics"
                  color="#F97316"
                />
                <BarChart
                  data={barChartData}
                  title="Usage Distribution"
                  description="Analytics by category"
                  color="#F97316"
                />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DonutChart
          data={donutChartData}
          title="Analytics Breakdown"
          description="Data distribution"
        />
        <Card>
          <Card.Header>
            <Card.Title>Recent Insights</Card.Title>
            <Card.Description>Key findings from your data</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {[
                'Request volume increased by 15% this week',
                'Response time improved by 23%',
                'User engagement up 8%',
                'Error rate decreased to 0.5%',
              ].map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800"
                >
                  <p className="text-sm text-gray-700 dark:text-gray-300">{insight}</p>
                </motion.div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>
    </motion.div>
  );
};

export default AnalyticsPage;

