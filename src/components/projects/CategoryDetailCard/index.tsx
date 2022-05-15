import { Category } from '.prisma/client'
import Presenter, { SkeletonPresenter } from '@/components/projects/CategoryDetailCard/presenter'
import { VFC } from 'react'

type Props = {
  category: Category
}

export const CategoryDetailCard: VFC<Props> = ({ category }) => {
  return <Presenter category={category} />
}

export const SkeletonCategoryDetailCard: VFC = () => {
  return <SkeletonPresenter />
}
