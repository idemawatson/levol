import {
  CategoryDetailCard,
  SkeletonCategoryDetailCard,
} from '@/components/projects/CategoryDetailCard'
import { Container, Grid, Paper } from '@mui/material'
import { Category } from '@prisma/client'

type Props = {
  category: Category | undefined
}

const Presenter: React.VFC<Props> = ({ category }) => {
  return (
    <Paper
      sx={{
        margin: 2,
      }}
      elevation={0}
    >
      {category ? (
        <CategoryDetailCard category={category}></CategoryDetailCard>
      ) : (
        <SkeletonCategoryDetailCard />
      )}
    </Paper>
  )
}

export default Presenter
