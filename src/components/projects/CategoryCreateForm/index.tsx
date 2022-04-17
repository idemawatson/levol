import Presenter from '@/components/projects/CategoryCreateForm/presenter'
import { VFC } from 'react'

type Props = {
  handleCreate: () => void
}

export const CategoryCreateForm: VFC<Props> = ({ handleCreate }) => {
  return <Presenter handleCreate={handleCreate} />
}
