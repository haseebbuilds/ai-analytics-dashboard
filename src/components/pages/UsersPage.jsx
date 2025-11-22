import React from 'react';
import { motion } from 'framer-motion';
import DataTable from '../custom/DataTable';
import Card from '../ui/Card';
import { Users, UserPlus, Shield, Crown } from 'lucide-react';
import { tableData, tableColumns } from '../../data/mockData';

const UsersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto space-y-6"
    >
      
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Users className="w-6 h-6 text-orange-500" />
          User Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage users, permissions, and access levels
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500 text-white">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">1,247</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-600 text-white">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Now</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">892</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500 text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Premium</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">456</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-600 text-white">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">123</p>
            </div>
          </div>
        </Card>
      </div>

      
      <DataTable
        data={tableData}
        columns={tableColumns}
        title="All Users"
        description="Complete list of users and their details"
      />
    </motion.div>
  );
};

export default UsersPage;

