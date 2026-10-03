import { MostReadNews } from '@/types/mostReadNews'

export const getMostReadNews = async (): Promise<MostReadNews[]> => {
  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/news/most-read`
    )
    if (!response.ok) {
      throw new Error('fetch to categories field')
    }
    const mostRead = await response.json()
    return mostRead.data
  } catch (error) {
    console.log(error)
  }
  return []
}
