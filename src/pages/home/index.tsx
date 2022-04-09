// import Presenter from '@/pages/home/presenter'
// import { useUserInfoSwr } from '@/pages/home/hooks'
import { MainLayout } from '@/components/layout/MainLayout'
import { useUser, withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0'
import { VFC } from 'react'

const Page: VFC = () => {
  const { user } = useUser()
  return (
    <>
      <p>Welcome {user?.given_name}!</p>
      <p>name: {user?.nickname}!</p>
      <p>name: Hello,World</p>
      <p>name: Hello,Hello,World</p>
      {/* <Presenter user={user} /> */}
    </>
  )
}

const AuthPage: VFC<WithPageAuthRequiredProps> & { layout?: typeof MainLayout } =
  withPageAuthRequired(Page)
AuthPage.layout = MainLayout

export default AuthPage
