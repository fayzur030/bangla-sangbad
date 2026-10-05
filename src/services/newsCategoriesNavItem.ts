import { NewsCategoryType } from '@/types/newsCategoriesType'
import { notFound } from 'next/navigation'

export const getCategoriesNavItems = async (): Promise<NewsCategoryType[]> => {
  try {
    const response = await fetch(
      `https://news-api-v2.vercel.app/api/categories`
    )
    if (!response.ok) {
      return notFound()
    }
    const navItems = await response.json()
    if (!navItems) {
      return notFound()
    }
    return navItems.data
  } catch (error) {
    console.log(error)
  }
  return []
}
