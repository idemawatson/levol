import { Category } from '.prisma/client'
import Presenter, { SkeletonPresenter } from '@/components/projects/CategoryCard/presenter'
import { VFC } from 'react'

type Props = {
  category: Category
  handleClick: (category: Category) => void
}

export const CategoryCard: VFC<Props> = ({ category, handleClick }) => {
  return <Presenter category={category} handleClick={handleClick} />
}

export const SkeletonCategoryCard: VFC = () => {
  return <SkeletonPresenter />
}
