import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { TrendingUp, Zap, Target, Award, Sparkles } from 'lucide-react';

const InsightsPage = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Peak Performance',
      description: 'Your system is operating at optimal levels',
      color: 'from-orange-500 to-orange-600',
      stat: '98.7%',
    },
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Response times are 40% faster than average',
      color: 'from-orange-500 to-orange-600',
      stat: '245ms',
    },
    {
      icon: Target,
      title: 'Accuracy Rate',
      description: 'AI predictions are highly accurate',
      color: 'from-orange-500 to-orange-600',
      stat: '94.2%',
    },
    {
      icon: Award,
      title: 'Top Performer',
      description: 'You rank in the top 5% of users',
      color: 'from-orange-500 to-orange-600',
      stat: '#42',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto space-y-6"
    >
      
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-orange-500" />
          AI Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Actionable insights powered by advanced AI analytics
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-orange-500/5" />
                <div className="p-6 relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mb-4 shadow-lg shadow-orange-500/50`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {insight.description}
                </p>
                <div className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
                  {insight.stat}
                </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      
      <Card>
        <Card.Header>
          <Card.Title>Recommendations</Card.Title>
          <Card.Description>AI-powered suggestions to improve your workflow</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {[
              {
                title: 'Scale Up Infrastructure',
                description: 'Consider upgrading your plan to handle increased load',
                priority: 'High',
              },
              {
                title: 'Optimize Query Patterns',
                description: 'Review and optimize frequently used queries',
                priority: 'Medium',
              },
              {
                title: 'Enable Caching',
                description: 'Activate caching to improve response times',
                priority: 'Low',
              },
            ].map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {rec.title}
                  </h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    rec.priority === 'High'
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      : rec.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {rec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default InsightsPage;

