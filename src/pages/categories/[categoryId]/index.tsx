import { MainLayout } from '@/components/layout/MainLayout'
import Presenter from '@/pages/categories/[categoryId]/presenter'
import { APIError } from '@/errors/APIError'
import { useCategory } from '@/hooks/category/useCategory'
import { withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { useState, VFC } from 'react'

const Page = () => {
  const router = useRouter()
  const { categoryId } = router.query
  if (!categoryId || Array.isArray(categoryId)) {
    router.push('/error')
    return <p>error</p>
  }
  const { handleGetCategory } = useCategory()
  const { category, error } = handleGetCategory(categoryId)

  if (error) {
    if (error instanceof APIError && error.info) {
      return <p>{error.info.message}</p>
    } else {
      return <p>{error.message}</p>
    }
  }
  return (
    <>
      <Presenter category={category}></Presenter>
    </>
  )
}

const AuthPage: VFC<WithPageAuthRequiredProps> & { layout?: typeof MainLayout } =
  withPageAuthRequired(Page)
AuthPage.layout = MainLayout

export default AuthPage
