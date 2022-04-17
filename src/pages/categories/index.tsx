import type { VFC } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import Presenter from '@/pages/categories/presenter'
import { withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { Category } from '.prisma/client'
import { useCategory } from '@/hooks/category/useCategory'

const Page: VFC = () => {
  const { handleCreate, handleList } = useCategory()
  const { categories, mutate } = handleList()
  const handleClickCategoryCard = (category: Category) => console.log(category)

  const create = async (callback: () => void) => {
    try {
      await handleCreate()
      await mutate()
      callback()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Presenter
      categories={categories}
      handleClickCategoryCard={handleClickCategoryCard}
      handleCreate={create}
    />
  )
}

const AuthPage: VFC<WithPageAuthRequiredProps> & { layout?: typeof MainLayout } =
  withPageAuthRequired(Page)
AuthPage.layout = MainLayout

export default AuthPage
