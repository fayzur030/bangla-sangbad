import NewsDetails from '@/components/news-details/NewsDetails'
import { getNewsById } from '@/services/getNewsById'

interface NewsDetailsProps {
  params: Promise<{ newsId: string }>
}

const NewsDetailsPage = async ({ params }: NewsDetailsProps) => {
  const { newsId } = await params
  const newsDetails = await getNewsById(newsId)

  return (
    <div className='mx-auto mt-6 max-w-7xl'>
      <div className='mx-auto max-w-4xl'>
        <NewsDetails newsDetails={newsDetails} />
      </div>
    </div>
  )
}

export default NewsDetailsPage
