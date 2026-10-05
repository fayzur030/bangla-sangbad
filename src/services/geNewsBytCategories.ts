import { notFound } from 'next/navigation'

export const getNewsBytCategories = async (id: string) => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
  if (!res.ok) {
    return notFound()
  }

  const data = await res.json()
  if (!data) {
    notFound()
  }
  return data
}
