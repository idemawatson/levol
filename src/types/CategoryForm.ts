import { levelType } from '@prisma/client'

export type CategoryForm = {
  name: string
  levelType: levelType
}
