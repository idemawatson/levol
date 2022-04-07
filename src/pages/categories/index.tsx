import type { VFC } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import Presenter from '@/pages/categories/presenter'
import { useCategorySwr } from '@/pages/categories/hooks'
import { withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { Category } from '.prisma/client'

const Page: VFC = () => {
  const { categories } = useCategorySwr()
  const handleClickCategoryCard = (category: Category) => console.log(category)
  return <Presenter categories={categories} handleClickCategoryCard={handleClickCategoryCard} />
}

const AuthPage: VFC<WithPageAuthRequiredProps> & { layout?: typeof MainLayout } =
  withPageAuthRequired(Page)
AuthPage.layout = MainLayout

export default AuthPage
