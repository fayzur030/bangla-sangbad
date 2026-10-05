import { NewsSection } from '@/types/news'
import { notFound } from 'next/navigation'

export const getNews = async (): Promise<NewsSection[]> => {
  try {
    const response = await fetch(
      'https://news-api-v2.vercel.app/api/news/sections'
    )

    if (!response.ok) {
      return notFound()
    }

    const data = await response.json()
    const section = data.data
    if (!section) {
      return notFound()
    }
    return section
  } catch (error) {
    console.error(error)
    return []
  }
}
