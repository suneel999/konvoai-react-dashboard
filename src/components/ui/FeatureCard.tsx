import { motion } from 'framer-motion'
import { Feature } from '@types/index'

interface FeatureCardProps {
  feature: Feature
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.9 + index * 0.15, duration: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.03, x: -8 }}
      className="glass-morphism-strong rounded-2xl p-8 hover-lift relative overflow-hidden group cursor-pointer border-2 border-white/10 hover:border-white/30 transition-all duration-300"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        whileHover={{ scale: 1.1 }}
      />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-30`} />
      </div>

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon with enhanced styling */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
        >
          <span className="drop-shadow-lg">{feature.icon}</span>
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Animated arrow indicator */}
          <motion.div
            className="mt-3 flex items-center gap-2 text-white/50 group-hover:text-white/90 transition-colors duration-300"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-semibold">Learn more</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Sparkle effect */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.div>
  )
}

export default FeatureCard
