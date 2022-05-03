import { VFC } from 'react'
import { Button, Container, MenuItem, Stack } from '@mui/material'
import React from 'react'
import { CategoryCreateInput, useCategory } from '@/hooks/category/useCategory'
import { RhfTextField } from '@/components/uiParts/TextField'
import { RhfSelectField } from '@/components/uiParts/SelectField'
import { levelType } from '@prisma/client'

type Props = {
  handleCreate: (form: CategoryCreateInput) => void
}

const Presenter: VFC<Props> = ({ handleCreate }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useCategory()
  return (
    <Container sx={{ marginTop: '16px' }}>
      <Stack spacing={3}>
        <RhfTextField label='カテゴリ名' name={'name'} control={control} />
        <RhfSelectField label='レベルタイプ' name={'levelType'} control={control}>
          <MenuItem value={levelType.easy}>Easy</MenuItem>
          <MenuItem value={levelType.normal}>Normal</MenuItem>
          <MenuItem value={levelType.hard}>Hard</MenuItem>
        </RhfSelectField>
        <Button
          color='primary'
          variant='contained'
          size='large'
          onClick={handleSubmit(handleCreate)}
          disabled={!isValid}
        >
          作成
        </Button>
      </Stack>
    </Container>
  )
}

export default Presenter
