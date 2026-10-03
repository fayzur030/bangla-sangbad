import { Article } from '@/types/category'
import Image from 'next/image'
import Link from 'next/link'

interface NewsProps {
  news: Article
}

const Category = ({ news }: NewsProps) => {
  console.log(news)
  const formattedDate = new Date(news.firstPublished).toLocaleString('bn-BD', {
    timeZone: 'Asia/Dhaka',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <Link href={`/news/${news.id}`} className=''>
      <div className='card bg-base-100  shadow-sm'>
        <figure>
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            width={640}
            height={400}
            className='h-full w-full object-cover'
          />
        </figure>
        <div className='card-body'>
          <p className='text-xs font-semibold text-[#FF0000]'>
            {news.category}
          </p>
          <h1 className='card-title text-lg font-bold leading-snug transition-colors hover:text-[#FF0000]'>
            {news.title}
          </h1>
          <p className='line-clamp-3 min-h-18  text-sm text-[#525252] leading-6.5 '>
            {news.description}
          </p>

          {/* Published Date */}
          <p className='mt- text-sm text-gray-500'>{formattedDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default Category
