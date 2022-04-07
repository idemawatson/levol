import useSWR, { Fetcher } from 'swr'

interface DataPayload<T> {
  [key: string]: T
}

interface DataResponse<T> {
  data: T | undefined
  isLoading: boolean
  isError: any
}

function useRequest<T>(
  url: string,
  key: string,
  fetcher: Fetcher<DataPayload<T>>,
): DataResponse<T> {
  const { data: payload, error } = useSWR<DataPayload<T>>(url, fetcher)
  const data = payload ? payload[key] : undefined
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  }
}

export default useRequest
