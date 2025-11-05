import { ButtonProps } from '@types/index'
import { motion } from 'framer-motion'

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseStyles =
    'font-semibold rounded-full transition-all duration-300 hover-lift cursor-pointer'

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/60',
    secondary: 'glass-morphism-strong text-white hover:bg-white/20',
    outline: 'border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </motion.button>
  )
}

export default Button
