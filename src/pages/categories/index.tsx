import { useState, VFC } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import Presenter from '@/pages/categories/presenter'
import { Category } from '.prisma/client'
import { CategoryCreateInput, useCategory } from '@/hooks/category/useCategory'
import { withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { TheLoading } from '@/components/uiParts/TheLoading'
import { useCreatingSWR } from '@/hooks/category/useUIHooks'
import { useRouter } from 'next/router'

const Page: VFC = () => {
  const { handleCreateCategory, handleListCategory } = useCategory()
  const { categories, mutate } = handleListCategory()
  const [loading, setLoading] = useState(false)
  const [_, setCreating] = useCreatingSWR()
  const router = useRouter()

  const handleClickCategoryCard = (category: Category) => {
    router.push(`categories/${category.id}`)
  }

  const create = async (form: CategoryCreateInput) => {
    try {
      setLoading(true)
      await handleCreateCategory(form)
      await mutate()
      setCreating(false)
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
