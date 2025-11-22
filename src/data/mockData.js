export const lineChartData = [
  { name: 'Mon', value: 4200 },
  { name: 'Tue', value: 3800 },
  { name: 'Wed', value: 5100 },
  { name: 'Thu', value: 4900 },
  { name: 'Fri', value: 5600 },
  { name: 'Sat', value: 4400 },
  { name: 'Sun', value: 3900 },
];

export const barChartData = [
  { name: 'GPT-4', value: 12400 },
  { name: 'Claude', value: 8900 },
  { name: 'Gemini', value: 6700 },
  { name: 'Llama', value: 4500 },
  { name: 'Mistral', value: 3200 },
  { name: 'Other', value: 1800 },
];

export const donutChartData = [
  { name: 'Success', value: 28500 },
  { name: 'Pending', value: 3200 },
  { name: 'Failed', value: 800 },
  { name: 'Rate Limited', value: 500 },
];

export const activities = [
  {
    id: 1,
    type: 'success',
    icon: 'zap',
    title: 'API Request Completed',
    description: 'Processed 15,000 requests in the last hour',
    time: '2 minutes ago',
    badge: { label: 'High Volume', variant: 'success' },
  },
  {
    id: 2,
    type: 'info',
    icon: 'user',
    title: 'New User Registered',
    description: 'Enterprise plan subscription activated',
    time: '15 minutes ago',
    badge: { label: 'Enterprise', variant: 'info' },
  },
  {
    id: 3,
    type: 'warning',
    icon: 'database',
    title: 'Storage Threshold',
    description: 'Approaching 80% storage capacity',
    time: '1 hour ago',
    badge: { label: 'Warning', variant: 'warning' },
  },
  {
    id: 4,
    type: 'success',
    icon: 'trending',
    title: 'Performance Peak',
    description: 'Average response time improved by 40%',
    time: '2 hours ago',
    badge: { label: 'Optimized', variant: 'success' },
  },
  {
    id: 5,
    type: 'info',
    icon: 'activity',
    title: 'System Update',
    description: 'New AI models deployed successfully',
    time: '3 hours ago',
    badge: { label: 'Update', variant: 'info' },
  },
  {
    id: 6,
    type: 'success',
    icon: 'zap',
    title: 'Backup Completed',
    description: 'Daily backup completed successfully',
    time: '5 hours ago',
  },
];

// Table Data (Users/API Keys)
export const tableData = [
  {
    id: 1,
    name: 'John Anderson',
    email: 'john@example.com',
    plan: 'Enterprise',
    requests: '125,430',
    status: 'Active',
    lastActive: '2 min ago',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    plan: 'Pro',
    requests: '89,200',
    status: 'Active',
    lastActive: '5 min ago',
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@example.com',
    plan: 'Pro',
    requests: '67,890',
    status: 'Pending',
    lastActive: '1 hour ago',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    plan: 'Basic',
    requests: '34,560',
    status: 'Active',
    lastActive: '10 min ago',
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david@example.com',
    plan: 'Enterprise',
    requests: '198,750',
    status: 'Active',
    lastActive: 'Just now',
  },
  {
    id: 6,
    name: 'Lisa Thompson',
    email: 'lisa@example.com',
    plan: 'Basic',
    requests: '12,340',
    status: 'Inactive',
    lastActive: '3 days ago',
  },
  {
    id: 7,
    name: 'Robert Wilson',
    email: 'robert@example.com',
    plan: 'Pro',
    requests: '56,780',
    status: 'Active',
    lastActive: '15 min ago',
  },
  {
    id: 8,
    name: 'Jennifer Brown',
    email: 'jennifer@example.com',
    plan: 'Enterprise',
    requests: '234,100',
    status: 'Active',
    lastActive: '1 min ago',
  },
];

// Table Columns Configuration
export const tableColumns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'plan', label: 'Plan', sortable: true },
  { key: 'requests', label: 'Requests', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'lastActive', label: 'Last Active', sortable: true },
];

