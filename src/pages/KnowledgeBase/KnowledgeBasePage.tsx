import { motion } from 'framer-motion'
import { useState } from 'react'
import DashboardLayout from '@components/Layout/DashboardLayout'

interface Collection {
  id: string
  name: string
  description: string
  documents: number
  created: string
  createdBy: string
  tenant: string
  qrCode: string
  url: string
}

const KnowledgeBasePage = () => {
  const [selectedTenant, setSelectedTenant] = useState('All Tenants')
  const [showFilterOptions, setShowFilterOptions] = useState(false)

  const stats = [
    { icon: '📁', label: 'Total Collections', value: '10', color: 'from-purple-500 to-pink-500' },
    { icon: '📄', label: 'Total Documents', value: '105', color: 'from-blue-500 to-cyan-500' },
    {
      icon: '📱',
      label: 'QR Codes Generated',
      value: '10',
      color: 'from-indigo-500 to-purple-500',
    },
    { icon: '✅', label: 'Active Collections', value: '10', color: 'from-emerald-500 to-teal-500' },
  ]

  const collections: Collection[] = [
    {
      id: '1',
      name: 'ABSalts',
      description: 'Acid Bases and salts',
      documents: 16,
      created: '14/10/2025 11:19 AM',
      createdBy: 'superadmin',
      tenant: 'Car Lounge',
      qrCode: '/qr-code-placeholder.png',
      url: 'https://demo2.konvoai.tech/def...',
    },
    {
      id: '2',
      name: 'APCRDA_Demo',
      description: 'Vector database collection',
      documents: 21,
      created: '15/10/2025 12:49 PM',
      createdBy: 'superadmin',
      tenant: 'Car Lounge',
      qrCode: '/qr-code-placeholder.png',
      url: 'https://demo2.konvoai.tech/def...',
    },
    {
      id: '3',
      name: 'AudiRS7',
      description: 'Audi RS7 Car',
      documents: 5,
      created: '11/10/2025 05:49 AM',
      createdBy: 'sreekar',
      tenant: 'Car Lounge',
      qrCode: '/qr-code-placeholder.png',
      url: 'https://demo2.konvoai.tech/def...',
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-2xl">
                📚
              </div>
              <div>
                <h1 className="text-4xl font-black text-white">Knowledge Base Management</h1>
                <p className="text-slate-400 text-sm mt-1">
                  Manage knowledge base collections for enhanced AI capabilities
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Create Collection</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span className="font-bold">Filter by Tenant</span>
              </div>
              <span className="text-white/80 text-sm">10 collection(s) found</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-white text-sm font-semibold mb-2 block">Select Tenant</label>
                <select
                  value={selectedTenant}
                  onChange={(e) => setSelectedTenant(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                >
                  <option value="All Tenants">All Tenants</option>
                  <option value="Car Lounge">Car Lounge</option>
                  <option value="5K Car Lounge">5K Car Lounge</option>
                </select>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <button className="px-4 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold transition-all flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Clear Filter</span>
                </button>

                <div className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                  <span className="text-white text-sm font-semibold">🌐 Showing all tenants</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 font-semibold text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
                {/* Collection Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
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
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{collection.name}</h3>
                        <p className="text-white/70 text-sm">{collection.description}</p>
                      </div>
                    </div>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <svg
                        className="w-5 h-5"
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

                {/* Collection Stats */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{collection.documents}</div>
                        <div className="text-slate-400 text-xs">Documents</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-400"
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
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {collection.created.split(' ')[0]}
                        </div>
                        <div className="text-slate-400 text-xs">Created</div>
                      </div>
                    </div>
                  </div>

                  {/* Collection Details */}
                  <div className="border-t border-slate-700/50 pt-4">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold">Collection Details</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Created:</span>
                        <span className="text-white font-medium">{collection.created}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Created by:</span>
                        <span className="text-white font-medium">{collection.createdBy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tenant:</span>
                        <span className="text-white font-medium">{collection.tenant}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Access */}
                  <div className="border-t border-slate-700/50 pt-4">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-semibold">Quick Access</span>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* QR Code */}
                      <div className="w-24 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
                        <div className="w-full h-full bg-slate-900 rounded flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                          </svg>
                        </div>
                      </div>

                      {/* URL */}
                      <div className="flex-1">
                        <a
                          href={collection.url}
                          className="text-blue-400 hover:text-blue-300 text-xs font-medium break-all transition-colors"
                        >
                          {collection.url}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-semibold text-sm transition-all flex flex-col items-center gap-1"
                    >
                      <svg
                        className="w-5 h-5"
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
                      <span>View</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-3 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl text-orange-400 font-semibold text-sm transition-all flex flex-col items-center gap-1"
                    >
                      <svg
                        className="w-5 h-5"
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
                      <span>Edit</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-semibold text-sm transition-all flex flex-col items-center gap-1"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span>Add</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 font-semibold text-sm transition-all flex flex-col items-center gap-1"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span>Search</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default KnowledgeBasePage
