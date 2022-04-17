import { useCategoryFormSWR } from '@/hooks/category/useCategoryFormSWR'
import { levelType } from '@prisma/client'
import useSWR, { Fetcher } from 'swr'
import { Category } from '.prisma/client'
import { httpClient } from '@/utils/httpClient'
import { AxiosResponse } from 'axios'

export const useCategory = () => {
  const [form, setForm] = useCategoryFormSWR('form', { name: '', levelType: levelType.normal })

  const handleCreate = async () => {
    console.log(form)
    const res = await httpClient.post('/api/category', form)
    return res.data
  }

  const handleList = () => {
    const fetcher: Fetcher<Category[]> = (url: string) =>
      httpClient.get(url).then((res: AxiosResponse<Category[]>) => res.data)
    const { data, error, mutate } = useSWR<Category[], Error>('/api/categories', fetcher, {
      revalidateOnFocus: false,
    })

    return {
      categories: data,
      error,
      mutate,
    }
  }

  return {
    form,
    setForm,
    handleCreate,
    handleList,
  }
}
