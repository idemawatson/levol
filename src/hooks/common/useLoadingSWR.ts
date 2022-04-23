import useSWR from 'swr'

export const useLoadingSWR = (): [boolean, (state: boolean) => void] => {
  const { data: state, mutate: setState } = useSWR('loading', null, { fallbackData: false })
  return [state as boolean, setState]
}
