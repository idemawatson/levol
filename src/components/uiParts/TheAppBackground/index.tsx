import Presenter from '@/components/uiParts/TheAppBackground/presenter'
import { ReactElement, ReactNode } from 'react'

export const TheAppBackground: React.VFC<{ children: ReactNode }> = ({ children }) => {
  return <Presenter>{children}</Presenter>
}
