import { VFC } from 'react'
import { Button, Container, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import { CategoryCreateInput, useCategory } from '@/hooks/category/useCategory'
import { RhfTextField } from '@/components/uiParts/TextField'
import { levelType } from '@prisma/client'

type Props = {
  handleCreate: (input: CategoryCreateInput) => void
}

const Presenter: VFC<Props> = ({ handleCreate }) => {
  const { control, handleSubmit } = useCategory()
  return (
    <Container>
      <Stack spacing={3}>
        <RhfTextField placeholder='カテゴリ名' name={'name'} control={control} />
        {/* <Select
          required
          label='レベルタイプ'
          value={form.levelType}
          onChange={(e) => setForm({ ...form, levelType: e.target.value as levelType })}
        >
          <MenuItem value={'easy'}>Easy</MenuItem>
          <MenuItem value={'normal'}>Normal</MenuItem>
          <MenuItem value={'hard'}>Hard</MenuItem>
        </Select> */}
        <Button
          color='primary'
          variant='contained'
          size='large'
          onClick={handleSubmit(handleCreate)}
        >
          作成
        </Button>
      </Stack>
    </Container>
  )
}

export default Presenter
