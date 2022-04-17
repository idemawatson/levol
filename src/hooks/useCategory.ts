import { useFormSWR, useIndexSWR, useUpdateSWR } from '@/hooks/useStateSWR'
import { levelType } from '@prisma/client'

export const useCategory = () => {
  const [form, setForm] = useFormSWR('form', { name: '', levelType: levelType.normal })
  const [index, setIndex] = useIndexSWR('index', 0)
  const [isUpdate, setIsUpdate] = useUpdateSWR('isUpdate', false)

  const handleCreate = () => {
    console.log(form)
    setForm({ name: '', levelType: levelType.normal })
  }

  return {
    form,
    index,
    isUpdate,
    setForm,
    setIndex,
    setIsUpdate,
    handleCreate,
  }
}
