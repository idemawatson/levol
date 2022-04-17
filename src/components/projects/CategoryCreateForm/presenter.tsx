import { VFC } from 'react'
import { Button, Container, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import { useCategory } from '@/hooks/useCategory'

type Props = {
  handleCreate: () => void
}

const Presenter: VFC<Props> = ({ handleCreate }) => {
  const { form, setForm } = useCategory()

  return (
    <Container>
      <Stack spacing={3}>
        <TextField
          required
          label='カテゴリ名'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Select
          required
          label='レベルタイプ'
          value={form.levelType}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        >
          <MenuItem value={'easy'}>Easy</MenuItem>
          <MenuItem value={'normal'}>Normal</MenuItem>
          <MenuItem value={'hard'}>Hard</MenuItem>
        </Select>
        <Button color='primary' variant='contained' size='large' onClick={handleCreate}>
          作成
        </Button>
      </Stack>
    </Container>
  )
}

export default Presenter
