import { NewsSection } from '@/types/news'
import Image from 'next/image'
import Link from 'next/link'

interface NewsProps {
  news: NewsSection
}

const NewsCard = ({ news }: NewsProps) => {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
      {news.articles.map((item) => {
        const formattedDate = new Date(item.firstPublished).toLocaleString(
          'bn-BD',
          {
            timeZone: 'Asia/Dhaka',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }
        )

        return (
          <article
            key={item.id}
            className='card w-full overflow-hidden bg-base-100 shadow-sm'
          >
            {/* Image */}
            <figure className=' w-full'>
              <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                width={640}
                height={400}
                className='h-full w-full object-cover'
              />
            </figure>

            {/* Content */}
            <div className='card-body'>
              {/* Category */}
              <p className='text-xs font-semibold text-[#FF0000]'>
                {item.category}
              </p>

              {/* Title */}
              <Link
                href={`/article/${item.id}`}
                className='card-title text-lg font-bold leading-snug transition-colors hover:text-[#FF0000]'
              >
                {item.title}
              </Link>

              {/* Description */}
              <p className='line-clamp-3 min-h-18  text-sm text-[#525252] leading-6.5 '>
                {item.description}
              </p>

              {/* Published Date */}
              <p className='mt- text-sm text-gray-500'>{formattedDate}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default NewsCard
