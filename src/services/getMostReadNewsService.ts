import { MostReadNews } from '@/types/mostReadNews'
import { notFound } from 'next/navigation'

export const getMostReadNews = async (): Promise<MostReadNews[]> => {
  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/news/most-read`
    )
    if (!response.ok) {
      return notFound()
    }
    const mostRead = await response.json()
    if (!mostRead) {
      return notFound()
    }
    return mostRead.data
  } catch (error) {
    console.log(error)
  }
  return []
}
