import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BackgroundElements from '@components/BackgroundElements'

const WelcomePage = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }

  const features = [
    { icon: '🚀', title: 'Lightning Fast', desc: 'Instant AI responses' },
    { icon: '🎯', title: 'Smart AI', desc: 'Learns your style' },
    { icon: '🔒', title: 'Secure', desc: 'End-to-end encrypted' },
  ]

  return (
    <div className="h-screen relative overflow-hidden flex items-center justify-center">
      <BackgroundElements />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-8"
            >
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-300 text-base font-semibold">AI-Powered Assistant</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl font-black mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meet Konvo
              </span>
              <br />
              <span className="text-white">Your AI Companion</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Your intelligent AI assistant for meaningful conversations
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Get Started - Login</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-full font-semibold text-lg text-white border-2 border-slate-600/50 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Feature Card */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-3xl" />

              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
                {/* Robot Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-40 h-40 mx-auto mb-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center text-8xl shadow-2xl shadow-cyan-500/50 relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">🤖</span>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid gap-5">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex items-center gap-5 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer group"
                    >
                      <div className="text-5xl">{feature.icon}</div>
                      <div className="flex-1">
                        <div className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                          {feature.title}
                        </div>
                        <div className="text-base text-slate-400 mt-1.5">{feature.desc}</div>
                      </div>
                      <svg
                        className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Subtle accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Footer badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-500 text-sm font-medium"
      >
        Powered by Advanced AI Technology
      </motion.div>
    </div>
  )
}

export default WelcomePage
