import { useState, VFC } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import Presenter from '@/pages/categories/presenter'
import { Category } from '.prisma/client'
import { CategoryCreateInput, useCategory } from '@/hooks/category/useCategory'
import { withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { TheLoading } from '@/components/uiParts/TheLoading'
import { useCreatingSWR } from '@/hooks/category/useCreatingSWR'
import { useLoadingSWR } from '@/hooks/common/useLoadingSWR'

const Page: VFC = () => {
  const [_, setCreating] = useCreatingSWR()
  const [loading, setLoading] = useLoadingSWR()
  const { handleCreateCategory, handleListCategory } = useCategory()
  const { categories, mutate } = handleListCategory()

  const handleClickCategoryCard = (category: Category) => console.log(category)

  const create = async (input: CategoryCreateInput) => {
    try {
      setLoading(true)
      await handleCreateCategory(input)
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
