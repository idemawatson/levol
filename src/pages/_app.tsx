import type { NextPage } from 'next'
import type AppProps from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import { MainLayout } from '@/components/layout/MainLayout'
import { ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  layout?: typeof MainLayout
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout || (({ children }: { children: ReactNode }) => <>{children}</>)
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
