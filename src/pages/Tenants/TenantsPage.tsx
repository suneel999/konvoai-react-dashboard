import { motion } from 'framer-motion'
import { useState } from 'react'
import DashboardLayout from '@components/Layout/DashboardLayout'
import { useTheme } from '@/context/ThemeContext'

interface Tenant {
  id: string
  companyName: string
  description: string
  status: 'Active' | 'Inactive'
}

const TenantsPage = () => {
  const { theme } = useTheme()

  const [tenants] = useState<Tenant[]>([
    {
      id: '3eedf869-4b74-466c-bb56-e976d6e32b31',
      companyName: 'realestate',
      description: 'For realestate demos',
      status: 'Active',
    },
    {
      id: 'default_tenant',
      companyName: 'Car Lounge',
      description: 'Migrated from single-tenant',
      status: 'Active',
    },
    {
      id: 'skcar1268',
      companyName: 'SK Car Lounge',
      description: '-',
      status: 'Active',
    },
    {
      id: 'apcrda752',
      companyName: 'APCRDA',
      description: 'Telugu testing',
      status: 'Active',
    },
  ])

  return (
    <DashboardLayout>
      <div className="p-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
          <h1
            className={`text-2xl font-black mb-1 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}
          >
            Tenant Management
          </h1>
          <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Manage all tenants in your system. Use the "Onboard Tenant" option in the navigation to
            create new tenants with proper admin accounts.
          </p>
        </motion.div>

        {/* Tenants Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div
            className={`rounded-3xl overflow-hidden transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border border-slate-700/50'
                : 'bg-white border border-slate-200 shadow-lg'
            }`}
          >
            {/* Green Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3">
              <h2 className="text-lg font-bold text-white">All Tenants</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 to-purple-500">
                    <th className="px-3 py-2 text-left text-xs font-bold text-white">Tenant ID</th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-white">
                      Company Name
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-white">
                      Description
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-white">Status</th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((tenant, idx) => (
                    <motion.tr
                      key={tenant.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className={`border-b transition-colors ${
                        theme === 'dark'
                          ? 'border-slate-700/50 hover:bg-slate-800/50'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {/* Tenant ID */}
                      <td className="px-3 py-2">
                        <span
                          className={`text-xs font-mono ${
                            tenant.id.includes('-')
                              ? 'text-pink-500'
                              : tenant.id === 'default_tenant'
                              ? 'text-pink-600'
                              : 'text-pink-500'
                          }`}
                        >
                          {tenant.id}
                        </span>
                      </td>

                      {/* Company Name */}
                      <td className="px-3 py-2">
                        <span
                          className={`text-xs font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-800'
                          }`}
                        >
                          {tenant.companyName}
                        </span>
                      </td>

                      {/* Description */}
                      <td className="px-3 py-2">
                        <span
                          className={`text-xs ${
                            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {tenant.description}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-3 py-2">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-xs font-bold">
                          {tenant.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-1.5">
                          {/* View */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                            title="View Details"
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </motion.button>

                          {/* Edit */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                            title="Edit Tenant"
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
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </motion.button>

                          {/* Archive */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                            title="Archive Tenant"
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
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              />
                            </svg>
                          </motion.button>

                          {/* Delete */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-red-500/50 transition-all"
                            title="Delete Tenant"
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

export default TenantsPage
