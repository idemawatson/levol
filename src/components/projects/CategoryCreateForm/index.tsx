import Presenter from '@/components/projects/CategoryCreateForm/presenter'
import { CategoryCreateInput } from '@/hooks/category/useCategory'
import { VFC } from 'react'

type Props = {
  handleCreate: (form: CategoryCreateInput) => void
}

export const CategoryCreateForm: VFC<Props> = ({ handleCreate }) => {
  return <Presenter handleCreate={handleCreate} />
}
