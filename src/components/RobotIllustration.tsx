import { motion } from 'framer-motion'

const RobotIllustration = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {/* Robot SVG Illustration */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Antenna */}
          <motion.line
            x1="100"
            y1="30"
            x2="100"
            y2="50"
            stroke="url(#antenna-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ originX: '100px', originY: '50px' }}
          />
          <motion.circle
            cx="100"
            cy="25"
            r="6"
            fill="#4ECDC4"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Head */}
          <motion.rect
            x="60"
            y="50"
            width="80"
            height="70"
            rx="20"
            fill="url(#head-gradient)"
            initial={{ rotateX: 0 }}
          />

          {/* Face Screen */}
          <rect x="70" y="65" width="60" height="40" rx="10" fill="#1a1a2e" opacity="0.8" />

          {/* Eyes */}
          <motion.ellipse
            cx="85"
            cy="85"
            rx="8"
            ry="10"
            fill="#4ECDC4"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.ellipse
            cx="115"
            cy="85"
            rx="8"
            ry="10"
            fill="#4ECDC4"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Smile */}
          <motion.path
            d="M 85 95 Q 100 105 115 95"
            stroke="#4ECDC4"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Body */}
          <rect x="50" y="125" width="100" height="90" rx="25" fill="url(#body-gradient)" />

          {/* Chest Circle */}
          <circle cx="100" cy="160" r="15" fill="url(#chest-gradient)" />
          <motion.circle
            cx="100"
            cy="160"
            r="8"
            fill="#4ECDC4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Arms */}
          <motion.rect
            x="30"
            y="135"
            width="18"
            height="50"
            rx="9"
            fill="url(#arm-gradient)"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ originX: '39px', originY: '135px' }}
          />
          <motion.rect
            x="152"
            y="135"
            width="18"
            height="50"
            rx="9"
            fill="url(#arm-gradient)"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ originX: '161px', originY: '135px' }}
          />

          {/* Hands */}
          <circle cx="39" cy="188" r="10" fill="#667eea" />
          <circle cx="161" cy="188" r="10" fill="#667eea" />

          {/* Gradients */}
          <defs>
            <linearGradient id="antenna-gradient" x1="100" y1="30" x2="100" y2="50">
              <stop offset="0%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#667eea" />
            </linearGradient>
            <linearGradient id="head-gradient" x1="60" y1="50" x2="140" y2="120">
              <stop offset="0%" stopColor="#a8edea" />
              <stop offset="100%" stopColor="#7ec8e3" />
            </linearGradient>
            <linearGradient id="body-gradient" x1="50" y1="125" x2="150" y2="215">
              <stop offset="0%" stopColor="#b3e0dc" />
              <stop offset="100%" stopColor="#89c9c0" />
            </linearGradient>
            <radialGradient id="chest-gradient">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="arm-gradient" x1="0" y1="135" x2="0" y2="185">
              <stop offset="0%" stopColor="#a8c0e0" />
              <stop offset="100%" stopColor="#89a9c0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-400/30 blur-3xl -z-10" />
    </motion.div>
  )
}

export default RobotIllustration
