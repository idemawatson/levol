import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { VFC } from 'react'
import { Button } from '@mui/material'

const Presenter: VFC<{ handleLogout: () => void }> = ({ handleLogout }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            LEVOL
          </Typography>
          <Button onClick={handleLogout} color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Presenter
