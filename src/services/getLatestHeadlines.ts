import { LatestHeadlineType } from '@/types/latestHeadlinesType'
import { notFound } from 'next/navigation'

export const getHeadlines = async (): Promise<LatestHeadlineType[]> => {
  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/news?limit=10`
    )
    if (!response.ok) {
      return notFound()
    }
    const headlines = await response.json()
    if (!headlines) {
      return notFound()
    }
    return headlines.data
  } catch (error) {
    console.log(error)
  }
  return []
}
