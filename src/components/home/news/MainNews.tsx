import { NewsSection } from '@/types/news'
import Image from 'next/image'
import Link from 'next/link'
import Date_Time from './Date'

interface NewsProps {
  news: NewsSection
}

const MainNews = ({ news }: NewsProps) => {
  const firstNews = news.articles[0]
  const otherNews = news.articles.slice(1, 5)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch mt-4'>
      {/* First News */}
      <Link href={`/news/${firstNews.id}`}>
        <div className='card bg-base-100 w-full max-w-lg shadow-sm '>
          <figure className='w-full'>
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              width={640}
              height={460}
              className='w-full h-auto object-cover'
            />
          </figure>

          <div className='card-body'>
            <p className='text-xs text-[#FF0000] font-semibold'>
              {firstNews.category}
            </p>

            <h1 className='card-title hover:text-[#FF0000] font-bold text-lg'>
              {firstNews.title}
            </h1>

            <p className='line-clamp-3 text-[#525252]'>
              {firstNews.description}
            </p>

            <div className='card-actions justify-start text-gray-500'>
              <Date_Time />
            </div>
          </div>
        </div>
      </Link>
      {/* Other News */}

      {/* Other News */}
      <div className='w-full overflow-hidden rounded-box border border-base-content/10 bg-base-100'>
        <div className='divide-y divide-base-content/10'>
          {otherNews.map((item) => (
            <article key={item.id} className='p-4'>
              {/* Category */}
              <p className='text-xs text-[#FF0000] font-semibold mb-1'>
                {item.category}
              </p>

              {/* Title */}
              <Link
                href={`/news/${item.id}`}
                className='block font-semibold text-base leading-snug transition-colors line-clamp-2'
              >
                {item.title}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainNews
