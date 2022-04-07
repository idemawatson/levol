import Presenter from '@/components/uiParts/TheBottomNavigation/presenter'
import { useState } from 'react'

export const TheBottomNavigation: React.VFC = () => {
  const [value, setValue] = useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return <Presenter value={value} handleChange={handleChange} />
}
