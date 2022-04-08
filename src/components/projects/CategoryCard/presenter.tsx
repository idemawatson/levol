import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { VFC } from 'react'
import { Skeleton } from '@mui/material'
import { Category } from '.prisma/client'

type Props = {
  category: Category
  handleClick: (category: Category) => void
}

export const SkeletonPresenter: VFC = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Skeleton variant='text' />
        <Skeleton variant='text' />
      </CardContent>
    </Card>
  )
}

const Presenter: VFC<Props> = ({ category, handleClick }) => {
  return (
    <Card elevation={2} onClick={() => handleClick(category)}>
      <CardContent>
        <Typography sx={{ fontWeight: 'bold' }} variant='h5' component='div' color='text.secondary'>
          {category.name}
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='h6' color='text.secondary'>
          Level: {category.level}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Presenter
