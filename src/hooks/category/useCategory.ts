import { levelType } from '@prisma/client'
import useSWR, { Fetcher } from 'swr'
import { Category } from '.prisma/client'
import { httpClient } from '@/utils/httpClient'
import axios, { AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { APIError } from '@/errors/APIError'

export type CategoryCreateInput = {
  name: string
  levelType: levelType
}

const validationSchema = yup.object().shape({
  name: yup.string().required('必須です').max(10, '10桁以下で入力してください'),
  levelType: yup.string().required('必須です'),
})

export const useCategory = () => {
  const { control, handleSubmit, formState } = useForm<CategoryCreateInput>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: { name: '', levelType: levelType.normal },
  })

  const handleCreateCategory = async (form: CategoryCreateInput) => {
    console.log(form)
    const res = await httpClient.post('/api/category', form)
    return res.data
  }

  const handleListCategory = () => {
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

  const handleGetCategory = (categoryId: string) => {
    const fetcher: Fetcher<Category> = async (url: string) => {
      try {
        const res = await httpClient.get(url)
        return res.data
      } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          const error = new APIError('An error occurred while fetching the data.')
          error.info = e.response.data
          throw error
        }
      }
    }
    const { data, error, mutate } = useSWR<Category, Error>(
      `/api/category/${categoryId}`,
      fetcher,
      {
        revalidateOnFocus: false,
      },
    )

    return {
      category: data,
      error,
      mutate,
    }
  }

  return {
    control,
    handleSubmit,
    formState,
    handleCreateCategory,
    handleListCategory,
    handleGetCategory,
  }
}
