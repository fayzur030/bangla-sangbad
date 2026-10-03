export const geNewsBytCategories = async (id: string) => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
  if (!res.ok) {
    throw new Error('fetch to category failed')
  }
  const data = await res.json()
  return data
}
