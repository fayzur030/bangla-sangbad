import { NewsDetailsResponse } from '@/types/newsDetails'
import { notFound } from 'next/navigation'

export const getNewsById = async (id: string): Promise<NewsDetailsResponse> => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`)
  if (!res.ok) {
    notFound()
  }
  const data = await res.json()
  if (!data) {
    return notFound()
  }
  return data
}
