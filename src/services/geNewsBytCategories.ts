export const geNewsBytCategories = async (id: string) => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
  if (!res.ok) {
    throw new Error('fetch to category failed')
  }
  console.log('STATUS:', res.status)
  console.log('STATUS TEXT:', res.statusText)
  const data = await res.json()
  return data
}
