import { UserInfo } from '@/model/User'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'

type Props = {
  user: UserInfo
}

const Presenter: React.VFC<Props> = ({ user }) => {
  return (
    <Container component='div' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 32, fontWeight: 'bold' }} color='text.secondary' gutterBottom>
            {user.name}
          </Typography>
          <Typography sx={{ fontSize: 24, mb: 1.5 }} color='text.secondary'>
            total Lv. {user.totalLevel}
          </Typography>
          <Typography variant='body2' sx={{ fontSize: 16 }}>
            total Exp: {user.totalExp}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Presenter
