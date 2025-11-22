import React from 'react';
import { motion } from 'framer-motion';
import MetricsCard from '../custom/MetricsCard';
import LineChart from '../custom/LineChart';
import BarChart from '../custom/BarChart';
import DonutChart from '../custom/DonutChart';
import ActivityFeed from '../custom/ActivityFeed';
import DataTable from '../custom/DataTable';
import {
  Zap,
  Users,
  Activity,
  TrendingUp,
  Database,
  Cpu,
  Clock,
} from 'lucide-react';
import {
  lineChartData,
  barChartData,
  donutChartData,
  activities,
  tableData,
  tableColumns,
} from '../../data/mockData';

const DashboardPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-5"
    >
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-800/50"
      >
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Monitor your AI usage, performance, and insights in real-time
        </p>
      </motion.div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricsCard
          title="Total Requests"
          value="32,580"
          change="+12.5%"
          changeType="positive"
          icon={Zap}
          iconColor="purple"
          delay={0}
        />
        <MetricsCard
          title="Active Users"
          value="1,247"
          change="+8.2%"
          changeType="positive"
          icon={Users}
          iconColor="blue"
          delay={0.1}
        />
        <MetricsCard
          title="Avg Response Time"
          value="245ms"
          change="-15.3%"
          changeType="positive"
          icon={Clock}
          iconColor="green"
          delay={0.2}
        />
        <MetricsCard
          title="System Uptime"
          value="99.9%"
          change="+0.1%"
          changeType="positive"
          icon={Activity}
          iconColor="orange"
          delay={0.3}
        />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <LineChart
                  data={lineChartData}
                  title="AI Requests Over Time"
                  description="Daily request volume for the past week"
                  color="#F97316"
                />
                <BarChart
                  data={barChartData}
                  title="Model Usage Distribution"
                  description="Requests per AI model"
                  color="#F97316"
                />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1">
          <DonutChart
            data={donutChartData}
            title="Response Status"
            description="Distribution of API responses"
          />
        </div>
        <div className="lg:col-span-2">
          <ActivityFeed activities={activities} />
        </div>
      </div>

      
      <DataTable
        data={tableData}
        columns={tableColumns}
        title="User Management"
        description="Manage users, API keys, and access levels"
      />

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricsCard
          title="API Success Rate"
          value="98.7%"
          change="+0.5%"
          changeType="positive"
          icon={TrendingUp}
          iconColor="green"
          delay={0}
        />
        <MetricsCard
          title="Data Processed"
          value="2.4 TB"
          change="+23.1%"
          changeType="positive"
          icon={Database}
          iconColor="blue"
          delay={0.1}
        />
        <MetricsCard
          title="CPU Utilization"
          value="67%"
          change="-5.2%"
          changeType="positive"
          icon={Cpu}
          iconColor="orange"
          delay={0.2}
        />
      </div>
    </motion.div>
  );
};

export default DashboardPage;

