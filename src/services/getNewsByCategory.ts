import { CategoryTypes } from '@/types/category'
import { notFound } from 'next/navigation'

export const getCategoryById = async (id: string): Promise<CategoryTypes> => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
  if (!res.ok) {
    return notFound()
  }
  const data = await res.json()
  if (!data) {
    return notFound()
  }

  return data
}
