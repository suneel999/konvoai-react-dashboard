import { ReactNode } from 'react'
import BackgroundElements from '@components/BackgroundElements'

interface MainLayoutProps {
  children: ReactNode
  showBackground?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showBackground = true }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {showBackground && <BackgroundElements />}

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default MainLayout
