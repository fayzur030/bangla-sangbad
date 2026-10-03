import { NewsSection } from '@/types/news'
import CommonNewsCard from './common/CommonNewsCard'

interface SelectedNewsProps {
  selectedNews: NewsSection
}

const SelectedNews = ({ selectedNews }: SelectedNewsProps) => {
  return (
    <section className='w-full'>
      {/* Section Title */}
      <div className='mb-5 border-b-2 border-[#FF0000] pb-2'>
        <h2 className='text-xl font-bold'>{selectedNews.title}</h2>
      </div>

      {/* News Cards */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        {selectedNews.articles.map((item) => (
          <CommonNewsCard
            key={item.id}
            id={item.id}
            image={item.imageUrl}
            imageAlt={item.imageAlt}
            category={item.category}
            title={item.title}
            description={item.description}
            firstPublished={item.firstPublished}
          />
        ))}
      </div>
    </section>
  )
}

export default SelectedNews
