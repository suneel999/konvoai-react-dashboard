import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '@components/Layout/DashboardLayout'
import { useTheme } from '@/context/ThemeContext'

const UsersPage = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [adminUsers] = useState<any[]>([]) // Empty array for now - no admin users

  return (
    <DashboardLayout>
      <div className="p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 mb-4 transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-slate-900/90 border border-slate-700/50'
              : 'bg-white border border-slate-200 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xl shadow-lg">
                👥
              </div>
              <div>
                <h1
                  className={`text-2xl font-black bg-gradient-to-r bg-clip-text text-transparent ${
                    theme === 'dark'
                      ? 'from-cyan-400 via-blue-400 to-purple-400'
                      : 'from-blue-600 to-purple-600'
                  }`}
                >
                  User Management
                </h1>
                <p
                  className={`text-xs mt-0.5 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Manage admin users
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/add-user')}
              className={`px-4 py-2 text-sm rounded-lg bg-gradient-to-r text-white font-bold hover:shadow-lg transition-all flex items-center gap-2 ${
                theme === 'dark'
                  ? 'from-indigo-500 to-purple-500 hover:shadow-indigo-500/50'
                  : 'from-indigo-600 to-purple-600 hover:shadow-indigo-500/50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add New Admin</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <div
            className={`rounded-2xl p-4 transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border border-slate-700/50'
                : 'bg-white border border-slate-200 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <div
                  className={`text-3xl font-black bg-gradient-to-br bg-clip-text text-transparent ${
                    theme === 'dark' ? 'from-white to-slate-300' : 'from-slate-800 to-slate-600'
                  }`}
                >
                  {adminUsers.length}
                </div>
                <div
                  className={`font-semibold ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Admin Users
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Admin Users Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className={`rounded-2xl overflow-hidden transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border border-slate-700/50'
                : 'bg-white border border-slate-200 shadow-lg'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-lg font-bold text-white">Admin Users</h3>
              </div>
              <div className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm">
                <span className="text-white font-bold">{adminUsers.length}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {adminUsers.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  {/* Empty state icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    No Admin Users
                  </h3>
                  <p
                    className={`text-center text-sm mb-4 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    No admin users have been registered yet.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/add-user')}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold hover:shadow-xl hover:shadow-indigo-500/50 transition-all flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>Add First Admin</span>
                  </motion.button>
                </motion.div>
              ) : (
                // This section would show the list of admin users when they exist
                <div className="space-y-3">
                  {adminUsers.map((user, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className={`p-4 rounded-lg transition-all cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50'
                          : 'bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <div
                              className={`font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-slate-800'
                              }`}
                            >
                              {user.name}
                            </div>
                            <div
                              className={`text-xs ${
                                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                              }`}
                            >
                              {user.email}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                              theme === 'dark'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {user.role}
                          </span>
                          <button
                            className={`p-1.5 rounded-lg transition-colors ${
                              theme === 'dark'
                                ? 'hover:bg-slate-700 text-slate-400'
                                : 'hover:bg-slate-200 text-slate-600'
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
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

export default UsersPage
