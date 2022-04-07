import { Container, Grid } from '@mui/material'
import { CategoryCard, SkeletonCategoryCard } from '@/components/projects/CategoryCard'
import { ReactNode } from 'react'
import { Category } from '.prisma/client'

type Props = {
  categories: Category[] | undefined
  handleClickCategoryCard: (category: Category) => void
}

const CardWrapper: React.VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Grid item xs={6} md={4}>
      {children}
    </Grid>
  )
}

const Presenter: React.VFC<Props> = ({ categories, handleClickCategoryCard }) => {
  const categoryCards = categories
    ? categories.map((category) => (
        <CardWrapper key={category.id}>
          <CategoryCard
            key={category.id}
            category={category}
            handleClick={handleClickCategoryCard}
          />
        </CardWrapper>
      ))
    : Array.from({ length: 10 }).map((_, i) => (
        <CardWrapper key={i}>
          <SkeletonCategoryCard key={i} />
        </CardWrapper>
      ))
  return (
    <Container component='div' sx={{ py: 2 }}>
      <Grid container spacing={2}>
        {categoryCards}
      </Grid>
    </Container>
  )
}

export default Presenter
