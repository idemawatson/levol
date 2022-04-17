import { CategoryForm } from '@/types/CategoryForm'
import useSWR from 'swr'

export const useFormSWR = (
  key: string,
  initialData: CategoryForm,
): [CategoryForm, (state: CategoryForm) => void] => {
  const { data: state, mutate: setState } = useSWR(key, null, { fallbackData: initialData })
  return [state as CategoryForm, setState]
}

export const useIndexSWR = (
  key: string,
  initialData: number,
): [number, (state: number) => void] => {
  const { data: state, mutate: setState } = useSWR(key, null, { fallbackData: initialData })
  return [state as number, setState]
}

export const useUpdateSWR = (
  key: string,
  initialData: boolean,
): [boolean, (state: boolean) => void] => {
  const { data: state, mutate: setState } = useSWR(key, null, { fallbackData: initialData })
  return [state as boolean, setState]
}
