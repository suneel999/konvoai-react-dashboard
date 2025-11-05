import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

/**
 * Custom hook for navigation with smooth transitions
 * Usage: const navigate = useNavigateWithTransition()
 */
export const useNavigateWithTransition = () => {
  const navigate = useNavigate()

  const navigateWithTransition = useCallback(
    (path: string, delay: number = 300) => {
      // Add fade out effect before navigation
      document.body.style.opacity = '0.5'
      document.body.style.transition = 'opacity 0.3s ease-out'

      setTimeout(() => {
        navigate(path)
        // Reset opacity after navigation
        setTimeout(() => {
          document.body.style.opacity = '1'
        }, 100)
      }, delay)
    },
    [navigate]
  )

  return navigateWithTransition
}
