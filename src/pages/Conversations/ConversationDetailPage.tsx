import { motion } from 'framer-motion'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '@components/Layout/DashboardLayout'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

const ConversationDetailPage = () => {
  const { conversationId } = useParams()
  const navigate = useNavigate()

  // Sample conversation data
  const conversationInfo = {
    id: conversationId || '673280ef...',
    messageCount: 4,
    timestamp: '2025-11-04 15:09:03',
  }

  const messages: Message[] = [
    {
      id: '1',
      role: 'user',
      content: 'urban design automatic guidelines from Amravati capital is the weather',
    },
    {
      id: '2',
      role: 'assistant',
      content:
        "I think there might be a slight misunderstanding! The context is actually about urban design guidelines for Amaravati capital, not the weather. The guidelines focus on creating a livable and efficient city by promoting Transit and Pedestrian Oriented Development (TPOD), with a clear gradient in density and building heights to preserve local character. If you're looking for information on the weather in Amaravati, I'm happy to help you with that too! However, based on your initial message, I assume you're interested in learning more about the urban design guidelines. Would you like me to summarize the key points for you?",
    },
    {
      id: '3',
      role: 'user',
      content: 'furniture',
    },
    {
      id: '4',
      role: 'assistant',
      content:
        "So you're interested in furniture for the public spaces in Amaravati! That's a great topic! As part of the place-making strategy, we're looking to create vibrant and meaningful public spaces that foster a sense of community and ownership. In that context, furniture would play a crucial role in defining the character and functionality of these spaces. We'd want to choose furniture that's not only aesthetically pleasing but also durable, comfortable, and suitable for the local climate. Would you like me to elaborate on the types of furniture that would be suitable for Amaravati's public spaces?",
    },
  ]

  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/conversations')}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg font-mono">{conversationInfo.id}</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span>{conversationInfo.messageCount} messages</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{conversationInfo.timestamp}</span>
            </div>
          </div>
        </motion.div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((message, idx) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex gap-4 ${message.role === 'assistant' ? 'items-start' : ''}`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-500'
                    : 'bg-gradient-to-br from-indigo-500 to-purple-500'
                }`}
              >
                {message.role === 'user' ? (
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ) : (
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <div
                  className={`rounded-2xl p-5 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200'
                      : 'bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        message.role === 'user' ? 'text-emerald-700' : 'text-indigo-700'
                      }`}
                    >
                      {message.role}
                    </span>
                  </div>
                  <p className="text-slate-800 leading-relaxed">{message.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-700/50 p-6 bg-slate-900/50 backdrop-blur-xl"
        >
          <div className="max-w-5xl mx-auto flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span>Send</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

export default ConversationDetailPage
