import type { Article } from '@/types/category'

interface SearchNewsResponse {
  success: boolean
  count: number
  total: number
  data: Article[]
}

interface SearchResult {
  articles: Article[]
  total: number
}

export const searchNews = async (
  query: string,
  limit = 24
): Promise<SearchResult | null> => {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) {
    return { articles: [], total: 0 }
  }

  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/news?q=${encodeURIComponent(trimmedQuery)}&limit=${limit}`
    )
    if (!response.ok) {
      return null
    }
    const result: SearchNewsResponse = await response.json()
    if (!result || !Array.isArray(result.data)) {
      return null
    }
    return { articles: result.data, total: result.total ?? result.data.length }
  } catch (error) {
    console.error(error)
    return null
  }
}
