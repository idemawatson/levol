import { Category } from '@prisma/client'
import { Card, CardContent, Skeleton, Typography } from '@mui/material'
import { VFC } from 'react'

type Props = {
  category: Category
}

export const SkeletonPresenter: VFC = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
      </CardContent>
    </Card>
  )
}

const Presenter: VFC<Props> = ({ category }) => {
  return (
    <>
      <Card elevation={0}>
        <CardContent>
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant='h5'
            component='div'
            color='text.secondary'
          >
            {category.name}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6' color='text.secondary'>
            Level: {category.level}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6' color='text.secondary'>
            Exp: {category.exp}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6' color='text.secondary'>
            LevelType: {category.levelType}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Presenter
