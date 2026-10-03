import { NewsSection } from '@/types/news'

export const getNews = async (): Promise<NewsSection[]> => {
  try {
    const response = await fetch(
      'https://news-api-v2.vercel.app/api/news/sections'
    )

    if (!response.ok) {
      throw new Error('Failed to fetch news')
    }

    const data = await response.json()
    const section = data.data
    return section
  } catch (error) {
    console.error(error)
    return []
  }
}
