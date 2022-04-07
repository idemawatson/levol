import useSWR, { Fetcher } from 'swr'
import { UserInfo } from '@/model/User'
import { httpClient } from '@/utils/httpClient'
import { AxiosResponse } from 'axios'

export const useUserInfoSwr = () => {
  const fetcher: Fetcher<UserInfo, string> = (userId) =>
    httpClient.get(`user/${userId}`).then((res: AxiosResponse<UserInfo>) => res.data)
  const { data, error } = useSWR<UserInfo, Error>('000001', fetcher)

  return {
    user: data,
    error,
  }
}
