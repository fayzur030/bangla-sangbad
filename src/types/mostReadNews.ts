export interface MostReadNews {
  id: string
  title: string
  description: null | string
  link: string
  imageUrl: null | string
  imageAlt: null | string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: null | string
  source: string
  rank: number
}
