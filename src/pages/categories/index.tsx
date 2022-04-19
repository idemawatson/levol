import { useState, VFC } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import Presenter from '@/pages/categories/presenter'
import { Category } from '.prisma/client'
import { useCategory } from '@/hooks/category/useCategory'
import { withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { TheLoading } from '@/components/uiParts/TheLoading'

const Page: VFC = () => {
  const { handleCreateCategory, handleListCategory } = useCategory()
  const { categories, mutate } = handleListCategory()
  const [loading, setLoading] = useState(false)
  const handleClickCategoryCard = (category: Category) => console.log(category)

  const create = async (callback: () => void) => {
    try {
      setLoading(true)
      await handleCreateCategory()
      await mutate()
      callback()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TheLoading loading={loading} />
      <Presenter
        categories={categories}
        handleClickCategoryCard={handleClickCategoryCard}
        handleCreate={create}
      />
    </>
  )
}

const AuthPage: VFC<WithPageAuthRequiredProps> & { layout?: typeof MainLayout } =
  withPageAuthRequired(Page)
AuthPage.layout = MainLayout

export default AuthPage
