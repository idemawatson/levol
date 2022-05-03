import { Button, Container, Grid, Paper, Slide } from '@mui/material'
import { CategoryCard, SkeletonCategoryCard } from '@/components/projects/CategoryCard'
import { ReactNode } from 'react'
import { Category } from '.prisma/client'
import { AdditionBtn } from '@/components/uiParts/AdditionBtn'
import { CategoryCreateForm } from '@/components/projects/CategoryCreateForm'
import { CategoryCreateInput } from '@/hooks/category/useCategory'
import { useCreatingSWR } from '@/hooks/category/useUIHooks'

type Props = {
  categories: Category[] | undefined
  handleClickCategoryCard: (category: Category) => void
  handleCreate: (form: CategoryCreateInput) => void
}

const CardWrapper: React.VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Grid item xs={6} md={4}>
      {children}
    </Grid>
  )
}

const Presenter: React.VFC<Props> = ({ categories, handleClickCategoryCard, handleCreate }) => {
  const [creating, setcreating] = useCreatingSWR()

  const handleClickAdditionBtn = () => {
    setcreating(!creating)
  }

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
    <>
      {creating ? (
        <Slide direction='up' in={true} mountOnEnter unmountOnExit>
          <Paper sx={{ height: '90vh' }} elevation={0}>
            <Button onClick={handleClickAdditionBtn}>閉じる</Button>
            <CategoryCreateForm handleCreate={handleCreate} />
          </Paper>
        </Slide>
      ) : (
        <Container component='div' sx={{ pa: 2, py: 2, overflow: 'hidden' }}>
          <Grid container spacing={2}>
            {categoryCards}
            <CardWrapper>
              <AdditionBtn onClick={handleClickAdditionBtn} />
            </CardWrapper>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Presenter
