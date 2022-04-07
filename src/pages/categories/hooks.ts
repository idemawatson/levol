import useSWR, { Fetcher } from 'swr'
import { Category } from '.prisma/client'
import { httpClient } from '@/utils/httpClient'
import { AxiosResponse } from 'axios'

export const useCategorySwr = () => {
  const fetcher: Fetcher<Category[]> = (url: string) =>
    httpClient.get(url).then((res: AxiosResponse<Category[]>) => res.data)
  const { data, error } = useSWR<Category[], Error>('/api/categories', fetcher)

  return {
    categories: data,
    error,
  }
}
