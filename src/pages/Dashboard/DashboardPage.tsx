import { motion } from 'framer-motion'
import { useState } from 'react'
import DashboardLayout from '@components/Layout/DashboardLayout'
import { useTheme } from '@/context/ThemeContext'

const DashboardPage = () => {
  const { theme } = useTheme()
  const [showSuccessMessage, setShowSuccessMessage] = useState(true)

  const stats = [
    {
      icon: '💬',
      title: 'Total Conversations',
      value: '254',
      change: '+12%',
      link: 'View all conversations',
      gradient: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500/20',
    },
    {
      icon: '📱',
      title: 'Active QR Codes',
      value: '10',
      change: '+5',
      link: 'Manage QR codes',
      gradient: 'from-emerald-500 to-cyan-500',
      bgGlow: 'bg-emerald-500/20',
    },
    {
      icon: '📚',
      title: 'Knowledge Collections',
      value: '10',
      change: '+2',
      link: 'Manage Knowledge Base',
      gradient: 'from-cyan-500 to-blue-500',
      bgGlow: 'bg-cyan-500/20',
    },
    {
      icon: '📊',
      title: 'Analytics',
      value: 'Report',
      change: 'Live',
      link: 'View analytics dashboard',
      gradient: 'from-orange-500 to-yellow-500',
      bgGlow: 'bg-orange-500/20',
    },
  ]

  const quickActions = [
    {
      icon: '👤',
      label: 'Add User',
      color: 'from-purple-500 to-indigo-500',
      description: 'Create new account',
    },
    {
      icon: '📁',
      label: 'New Collection',
      color: 'from-blue-500 to-cyan-500',
      description: 'Add knowledge base',
    },
    {
      icon: '💬',
      label: 'View Chats',
      color: 'from-pink-500 to-purple-500',
      description: 'See conversations',
    },
  ]

  const collections = [
    {
      name: 'ABSalts',
      category: 'Car Lounge',
      docs: 16,
      date: '14/10/2025',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'APCRDA_Demo',
      category: 'Car Lounge',
      docs: 21,
      date: '15/10/2025',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'AudiRS7',
      category: 'Car Lounge',
      docs: 5,
      date: '11/10/2025',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'BMWX7DIESEL',
      category: 'Car Lounge',
      docs: 7,
      date: '11/10/2025',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'BMWX7DIESEL',
      category: '5K Car Lounge',
      docs: 4,
      date: '11/10/2025',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: '2014BentleyFlyingSpurW12',
      category: '5K Car Lounge',
      docs: 3,
      date: '21/10/2025',
      color: 'from-pink-500 to-rose-500',
    },
  ]

  const recentActivities = [
    {
      icon: '💬',
      title: 'New Conversation Started',
      description: '254 total conversations in the system',
      time: 'System overview',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: '📱',
      title: 'QR Codes Active',
      description: '10 QR code(s) available for collection access',
      time: 'Knowledge Base management',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '🗄️',
      title: 'Vector Database Ready',
      description: 'Knowledge Base collections available for enhanced conversations',
      time: 'AI capabilities',
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <DashboardLayout>
      {/* Success Message */}
      {showSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`backdrop-blur-sm mx-4 mt-3 px-4 py-2 rounded-lg flex items-center justify-between transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-emerald-500/20 border border-emerald-500/30'
              : 'bg-emerald-100 border border-emerald-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            <span
              className={`font-semibold text-sm ${
                theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
              }`}
            >
              Login successful!
            </span>
          </div>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className={`transition-colors ${
              theme === 'dark'
                ? 'text-emerald-300 hover:text-white'
                : 'text-emerald-700 hover:text-emerald-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-4 pb-3"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50">
                📊
              </div>
              <div>
                <h2
                  className={`text-3xl font-black bg-gradient-to-r bg-clip-text text-transparent ${
                    theme === 'dark'
                      ? 'from-cyan-400 via-blue-400 to-purple-400'
                      : 'from-blue-600 to-purple-600'
                  }`}
                >
                  Dashboard
                </h2>
                <p
                  className={`text-sm mt-0.5 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Overview of your Konvo system
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <div
              className={`px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border border-slate-700/50'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <div
                className={`text-xs mb-0.5 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Today
              </div>
              <div
                className={`text-xs font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}
              >
                {new Date().toLocaleDateString()}
              </div>
            </div>
            <button
              className={`px-4 py-2 text-sm rounded-lg bg-gradient-to-r text-white font-semibold hover:shadow-lg transition-all ${
                theme === 'dark'
                  ? 'from-cyan-500 to-blue-500 hover:shadow-cyan-500/50'
                  : 'from-blue-600 to-purple-600 hover:shadow-blue-500/50'
              }`}
            >
              Export Data
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group cursor-pointer"
            >
              {/* Animated glow */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20 blur-2xl rounded-3xl`}
              />

              {/* Card */}
              <div
                className={`relative backdrop-blur-xl rounded-3xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 border border-slate-700/50 hover:border-cyan-500/50'
                    : 'bg-white border border-slate-200 hover:border-blue-300'
                }`}
              >
                {/* Background pattern */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br rounded-full -mr-16 -mt-16 ${
                    theme === 'dark'
                      ? 'from-white/5 to-transparent'
                      : 'from-blue-100/30 to-transparent'
                  }`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-2xl mb-3 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value and change */}
                  <div className="flex items-end gap-2 mb-1.5">
                    <div
                      className={`text-3xl font-black bg-gradient-to-br bg-clip-text text-transparent ${
                        theme === 'dark' ? 'from-white to-slate-300' : 'from-slate-800 to-slate-600'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`px-1.5 py-0.5 rounded-md mb-0.5 ${
                        theme === 'dark'
                          ? 'bg-emerald-500/20 border border-emerald-500/30'
                          : 'bg-emerald-100 border border-emerald-300'
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div
                    className={`font-semibold text-xs mb-3 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {stat.title}
                  </div>

                  {/* Action */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className={`text-sm font-bold transition-colors flex items-center gap-2 group/btn ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    <span>{stat.link}</span>
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="px-4 py-2 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2"
        >
          <div
            className={`relative overflow-hidden backdrop-blur-xl rounded-3xl p-8 shadow-lg transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border border-slate-700/50'
                : 'bg-white border border-slate-200'
            }`}
          >
            {/* Decorative elements */}
            <div
              className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br rounded-full -mr-32 -mt-32 ${
                theme === 'dark'
                  ? 'from-purple-500/10 to-transparent'
                  : 'from-purple-100/50 to-transparent'
              }`}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                  ⚡
                </div>
                <h3
                  className={`text-3xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  Quick Actions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden"
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                    />

                    <div
                      className={`relative flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50'
                          : 'bg-slate-50 border border-slate-200 hover:border-purple-400 hover:shadow-lg'
                      }`}
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center text-4xl shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                      >
                        {action.icon}
                      </div>
                      <div className="text-center">
                        <div
                          className={`font-bold text-lg mb-1 ${
                            theme === 'dark' ? 'text-white' : 'text-slate-800'
                          }`}
                        >
                          {action.label}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {action.description}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="lg:col-span-1"
        >
          <div
            className={`backdrop-blur-xl rounded-3xl p-6 h-full shadow-lg transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border border-slate-700/50'
                : 'bg-white border border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-xl shadow-lg">
                📈
              </div>
              <h3
                className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}
              >
                Activity
              </h3>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`p-4 rounded-xl transition-all cursor-pointer group ${
                    theme === 'dark'
                      ? 'bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50'
                      : 'bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}
                    >
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold text-sm mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}
                      >
                        {activity.title}
                      </div>
                      <div
                        className={`text-xs mb-2 line-clamp-2 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {activity.description}
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                        }`}
                      >
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Collections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="px-4 py-2 pb-4"
      >
        <div
          className={`relative overflow-hidden backdrop-blur-xl rounded-3xl p-8 shadow-lg transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-slate-900/90 border border-slate-700/50'
              : 'bg-white border border-slate-200'
          }`}
        >
          {/* Decorative element */}
          <div
            className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr rounded-full -ml-48 -mb-48 ${
              theme === 'dark'
                ? 'from-blue-500/10 to-transparent'
                : 'from-blue-100/30 to-transparent'
            }`}
          />

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
                  📚
                </div>
                <div>
                  <h3
                    className={`text-3xl font-black ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    Collections Across All Tenants
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Showing 6 of 10 collections
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className={`px-6 py-3 rounded-xl bg-gradient-to-r text-white font-bold hover:shadow-lg transition-all flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'from-cyan-500 to-blue-500 hover:shadow-cyan-500/50'
                    : 'from-blue-600 to-purple-600 hover:shadow-blue-500/50'
                }`}
              >
                <span>Manage Collections</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {collections.map((collection, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-300`}
                  />

                  <div
                    className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50'
                        : 'bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${collection.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        📁
                      </div>
                      <div
                        className={`px-3 py-1 rounded-lg shadow-sm ${
                          theme === 'dark'
                            ? 'bg-slate-900/50 border border-slate-600/50'
                            : 'bg-white border border-slate-300'
                        }`}
                      >
                        <span
                          className={`text-xs font-bold ${
                            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          {collection.docs} docs
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div
                        className={`font-bold text-lg mb-1 transition-colors ${
                          theme === 'dark'
                            ? 'text-white group-hover:text-cyan-300'
                            : 'text-slate-800 group-hover:text-blue-600'
                        }`}
                      >
                        {collection.name}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                        }`}
                      >
                        {collection.category}
                      </div>
                    </div>

                    <div
                      className={`flex items-center justify-between pt-4 border-t ${
                        theme === 'dark' ? 'border-slate-700/50' : 'border-slate-200'
                      }`}
                    >
                      <span
                        className={`text-xs flex items-center gap-2 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {collection.date}
                      </span>
                      <motion.button
                        whileHover={{ x: 3 }}
                        className={`text-xs font-bold transition-colors flex items-center gap-1 ${
                          theme === 'dark'
                            ? 'text-cyan-400 hover:text-cyan-300'
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        <span>View</span>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View all link */}
            <div className="mt-6 text-center">
              <button
                className={`font-semibold transition-colors inline-flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'text-cyan-400 hover:text-cyan-300'
                    : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <span>View all collections</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}

export default DashboardPage
