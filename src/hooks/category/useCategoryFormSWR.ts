import { CategoryForm } from '@/types/CategoryForm'
import useSWR from 'swr'

export const useCategoryFormSWR = (
  key: string,
  initialData: CategoryForm,
): [CategoryForm, (state: CategoryForm) => void] => {
  const { data: state, mutate: setState } = useSWR(key, null, { fallbackData: initialData })
  return [state as CategoryForm, setState]
}
