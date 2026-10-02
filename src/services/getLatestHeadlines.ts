import { LatestHeadlineType } from '@/types/latestHeadlinesType'

export const getHeadlines = async (): Promise<LatestHeadlineType[]> => {
  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/news?limit=10`
    )
    if (!response.ok) {
      throw new Error('fetch to latest headlines news field')
    }
    const headlines = await response.json()
    return headlines.data
  } catch (error) {
    console.log(error)
  }
  return []
}
