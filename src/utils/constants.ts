/**
 * Application Constants
 */

export const APP_NAME = 'Konvo'
export const APP_TAGLINE = 'Your intelligent AI assistant for meaningful conversations'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CHAT: '/chat',
  SETTINGS: '/settings',
  PROFILE: '/profile',
} as const

export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.8,
} as const

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const
