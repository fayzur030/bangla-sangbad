import Image from 'next/image'
import Link from 'next/link'
import Date_Time from '../Date'

interface CommonNewsCardProps {
  id: string
  image: string
  imageAlt: string
  category: string
  title: string
  description: string
  firstPublished: string
  lastPublished?: string
}

const CommonNewsCard = ({
  id,
  image,
  imageAlt,
  category,
  title,
  description,
  firstPublished,
}: CommonNewsCardProps) => {
  const date = new Date(firstPublished)

  const formattedDate = date.toLocaleString('bn-BD', {
    dateStyle: 'long',
    timeStyle: 'short',
  })
  return (
    <article className='card w-full  bg-base-100 shadow-sm overflow-hidden'>
      {/* Image */}
      <figure className='w-full'>
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={400}
          className='w-full h-full object-cover'
        />
      </figure>

      {/* Content */}
      <div className='card-body p-5'>
        {/* Category */}
        <p className='text-xs text-[#FF0000] font-semibold'>{category}</p>

        {/* Title */}
        <Link
          href={`/article/${id}`}
          className='card-title text-lg font-bold leading-snug hover:text-[#FF0000] transition-colors'
        >
          {title}
        </Link>

        {/* Description */}
        <p className='line-clamp-3 text-[#525252] leading-relaxed'>
          {description}
        </p>

        {/* Date */}
        <div className='card-actions justify-start text-gray-500 text-xs'>
          {formattedDate}
        </div>
      </div>
    </article>
  )
}

export default CommonNewsCard
