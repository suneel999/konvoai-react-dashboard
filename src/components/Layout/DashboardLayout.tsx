import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '💬', label: 'Conversations', path: '/conversations' },
    { icon: '📚', label: 'Knowledge Base', path: '/knowledge-base' },
    { icon: '👥', label: 'Users', path: '/users' },
    { icon: '➕', label: 'Add User', path: '/add-user' },
    { icon: '📈', label: 'Analytics', path: '#' },
    { icon: '🏢', label: 'Tenants', path: '/tenants' },
    { icon: '🚀', label: 'Onboard Tenant', path: '/onboard-tenant' },
  ]

  return (
    <div
      className={`flex h-screen overflow-hidden transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950'
          : 'bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50'
      }`}
    >
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-56 backdrop-blur-xl border-r flex flex-col shadow-lg transition-colors duration-300 ${
          theme === 'dark' ? 'bg-slate-900/50 border-slate-800/50' : 'bg-white/80 border-slate-200'
        }`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between">
          <h1
            className={`text-2xl font-black bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' ? 'from-cyan-400 to-purple-400' : 'from-blue-600 to-purple-600'
            }`}
          >
            Konvo
          </h1>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-1.5 rounded-lg transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1.5">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path
            return (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => item.path !== '#' && navigate(item.path)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={() => navigate('/')}
            className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark' ? 'text-red-400 hover:bg-red-500/10' : 'text-red-500 hover:bg-red-50'
            }`}
          >
            <span className="text-lg">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main
        className={`flex-1 overflow-y-auto transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-950 via-indigo-950/50 to-purple-950/50'
            : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30'
        }`}
      >
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
