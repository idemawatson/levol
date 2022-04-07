import TheAppBar from '@/components/uiParts/TheAppBar'
import { TheBottomNavigation } from '@/components/uiParts/TheBottomNavigation'
import { ReactNode, VFC } from 'react'
import { TheAppBackground } from '@/components/uiParts/TheAppBackground'

export const MainLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <TheAppBar />
      <TheAppBackground>{children}</TheAppBackground>
      <TheBottomNavigation />
    </div>
  )
}
