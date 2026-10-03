import { NewsSection } from '@/types/news'
import NewsCard from './common/NewsCard'

interface OtherNewsProps {
  otherNews: NewsSection[]
}

const OtherNews = ({ otherNews }: OtherNewsProps) => {
  return (
    <section className='w-full'>
      <div className='space-y-8'>
        {otherNews.map((item) => (
          <div key={item.curationId}>
            <div className='mb-5 border-b-2 border-[#FF0000] pb-3'>
              <h2 className='text-xl font-bold'>{item.title}</h2>
            </div>

            {/* News Card */}
            <NewsCard news={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherNews
