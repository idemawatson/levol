import Presenter from '@/components/uiParts/TheAppBar/presenter'
import Router from 'next/router'

const TheAppBar: React.VFC = () => {
  const handleLogout = () => {
    Router.push('/api/auth/logout')
  }
  return <Presenter handleLogout={handleLogout} />
}

export default TheAppBar
