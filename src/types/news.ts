export interface NewsArticle {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}

export interface NewsSection {
  title: string
  curationId: string
  curationType: string
  link: string | null
  count: number
  articles: NewsArticle[]
}

export interface NewsResponse {
  data: NewsSection[]
}
