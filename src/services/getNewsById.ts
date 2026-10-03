import { CategoryTypes } from '@/types/category'

export const getNewsById = async (id: string): Promise<CategoryTypes> => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`)
  if (!res.ok) {
    throw new Error('fetch to category failed')
  }
  const data = await res.json()
  return data
}
