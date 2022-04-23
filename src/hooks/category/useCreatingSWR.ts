import useSWR from 'swr'

export const useCreatingSWR = (): [boolean, (state: boolean) => void] => {
  const { data: state, mutate: setState } = useSWR('creating', null, { fallbackData: false })
  return [state as boolean, setState]
}
