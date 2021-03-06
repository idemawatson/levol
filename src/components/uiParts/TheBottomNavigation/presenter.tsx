import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FolderIcon from '@mui/icons-material/Folder'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useEffect, useState, VFC } from 'react'
import { Paper } from '@mui/material'
import { useRouter } from 'next/router'

type Props = {
  value: string
  handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

const LabelBottomNavigation: VFC<Props> = ({ value, handleChange }) => {
  const [routeName, setRouteName] = useState('/home')
  useEffect(() => {
    setRouteName(value.split('/')[1])
  })
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
      <BottomNavigation sx={{ width: '100%' }} value={routeName} onChange={handleChange}>
        <BottomNavigationAction label='ホーム' value='home' icon={<RestoreIcon />} />
        <BottomNavigationAction label='カテゴリー' value='categories' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='そのほか' value='other' icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default LabelBottomNavigation
