// import { useCategoryFormSWR } from '@/hooks/category/useCategoryFormSWR'
import { levelType } from '@prisma/client'
import useSWR, { Fetcher } from 'swr'
import { Category } from '.prisma/client'
import { httpClient } from '@/utils/httpClient'
import { AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export type CategoryCreateInput = {
  name: string
  levelType: levelType
}

const validationSchema = yup.object().shape({
  name: yup.string().required().max(10),
  levelType: yup.string().required(),
})

export const useCategory = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryCreateInput>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: { name: '', levelType: levelType.normal },
  })

  const handleCreateCategory = async (input: CategoryCreateInput) => {
    console.log(input)
    const res = await httpClient.post('/api/category', input)
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

  return {
    control,
    handleSubmit,
    formState: { errors },
    handleCreateCategory,
    handleListCategory,
  }
}
