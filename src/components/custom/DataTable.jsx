import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, ArrowUp, ArrowDown, Search } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';

const DataTable = ({ data, columns, title, description }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredData = useMemo(() => {
    let filtered = data.filter((item) => {
      const matchesSearch = columns.some((col) => {
        const value = item[col.key];
        return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });

      const matchesFilter =
        filterStatus === 'all' ||
        (item.status && item.status.toLowerCase() === filterStatus.toLowerCase());

      return matchesSearch && matchesFilter;
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [data, columns, searchTerm, filterStatus, sortConfig]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? (
      <ArrowUp className="w-4 h-4 text-gray-900 dark:text-white" />
    ) : (
      <ArrowDown className="w-4 h-4 text-gray-900 dark:text-white" />
    );
  };

  const statusFilters = ['all', 'active', 'pending', 'inactive'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <Card.Header>
          <div className="flex items-center justify-between">
            <div>
              <Card.Title>{title}</Card.Title>
              {description && <Card.Description>{description}</Card.Description>}
            </div>
          </div>
        </Card.Header>
        <Card.Content>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {statusFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterStatus(filter)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize',
                    filterStatus === filter
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className={cn(
                        'text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300',
                        column.sortable && 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors'
                      )}
                      onClick={() => column.sortable && handleSort(column.key)}
                    >
                      <div className="flex items-center gap-2">
                        <span>{column.label}</span>
                        {column.sortable && getSortIcon(column.key)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="text-center py-8 text-gray-500 dark:text-gray-400">
                      No data found
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row, index) => (
                    <motion.tr
                      key={row.id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                        {columns.map((column) => (
                          <td key={column.key} className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                            {column.render
                              ? column.render(row[column.key], row)
                              : column.key === 'status'
                              ? (
                                  <Badge
                                    variant={
                                      row.status?.toLowerCase() === 'active'
                                        ? 'success'
                                        : row.status?.toLowerCase() === 'pending'
                                        ? 'warning'
                                        : 'default'
                                    }
                                  >
                                    {row.status}
                                  </Badge>
                                )
                              : (
                                  row[column.key]
                                )}
                          </td>
                        ))}
                      </motion.tr>
                    ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredData.length} of {data.length} entries
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default DataTable;

