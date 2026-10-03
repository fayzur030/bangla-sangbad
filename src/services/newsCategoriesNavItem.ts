import { NewsCategoryType } from '@/types/newsCategoriesType'

export const getCategoriesNavItems = async (): Promise<NewsCategoryType[]> => {
  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/categories`
    )
    if (!response.ok) {
      throw new Error('fetch to categories field')
    }
    const navItems = await response.json()
    return navItems.data
  } catch (error) {
    console.log(error)
  }
  return []
}
