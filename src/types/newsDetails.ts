// //get news by id
export interface NewsDetailsResponse {
  success: boolean
  cachedAt: string

  data: {
    id: string
    title: string

    description: {
      blocks: DescriptionBlock[]
    }

    link: string

    firstPublished: string
    lastPublished: string

    byline: unknown[]

    topics: Topic[]

    tags: string[]

    imageUrl: string

    body: NewsBodyItem[]

    text: string

    wordCount: number

    source: string
    sourceUrl: string
  }
}

interface DescriptionBlock {
  type: string

  model: {
    blocks: {
      type: string

      model: {
        text: string

        blocks: {
          type: string

          model: {
            text: string
            attributes: unknown[]
          }
        }[]
      }
    }[]
  }
}

interface Topic {
  id: string
  name: string
}

export type NewsBodyItem =
  | {
      type: 'image'
      url: string
      width: number
      height: number
      caption: string | null
      altText: string
      copyrightHolder: string
    }
  | {
      type: 'text'
      text: string
    }
  | {
      type: 'subheading'
      text: string
    }

// export interface NewsDetailsResponse {
//   success: boolean
//   cachedAt: string
//   data: NewsDetails
// }

// export interface NewsDetails {
//   id: string
//   title: string
//   description: Description
//   link: string
//   firstPublished: string
//   lastPublished: string
//   byline: unknown[]
//   topics: Topic[]
//   tags: string[]
//   imageUrl: string
//   body: BodyBlock[]
//   text?: string
//   wordCount?: number
//   source?: string
//   sourceUrl?: string
// }

// export interface Description {
//   blocks: TextBlock[]
// }

// export interface TextBlock {
//   type: 'text'
//   model: RichModel
// }

// export interface RichModel {
//   blocks: ParagraphBlock[]
// }

// export interface ParagraphBlock {
//   type: 'paragraph'
//   model: ParagraphModel
// }

// export interface ParagraphModel {
//   text?: string
//   blocks?: FragmentWrapper[]
// }

// export interface FragmentWrapper {
//   type: 'fragment'
//   model: FragmentModel
// }

// export interface FragmentModel {
//   text?: string
//   attributes?: unknown[]
// }

// export type BodyBlock = ImageBlock | TextBodyBlock | SubheadingBlock

// export interface ImageBlock {
//   type: 'image'
//   url?: string
//   width?: number
//   height?: number
//   caption?: string
//   altText?: string
//   copyrightHolder?: string
// }

// export interface TextBodyBlock {
//   type: 'text'
//   text?: string
// }

// export interface SubheadingBlock {
//   type: 'subheading'
//   text: string
// }

// export interface Topic {
//   id: string
//   name: string
// }
