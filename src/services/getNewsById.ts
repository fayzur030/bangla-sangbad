import { NewsDetailsResponse } from '@/types/newsDetails'

export const getNewsById = async (id: string): Promise<NewsDetailsResponse> => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`)
  if (!res.ok) {
    throw new Error('fetch to news details failed')
  }
  const data = await res.json()
  return data
}
