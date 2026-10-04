import { NewsDetailsResponse } from '@/types/newsDetails'
import Image from 'next/image'

interface NewsDetailsProps {
  newsDetails: NewsDetailsResponse
}

const NewsDetails = ({ newsDetails }: NewsDetailsProps) => {
  const { data } = newsDetails

  const formattedDate = new Date(data.firstPublished).toLocaleString('bn-BD', {
    timeZone: 'Asia/Dhaka',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <article className='mx-auto max-w-5xl px-4 py-6'>
      {/* Title */}
      <h1 className='text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl'>
        {data.title}
      </h1>

      {/* Published Date */}
      <p className='mt-4 border-b border-gray-200 pb-5 text-sm text-neutral-500'>
        প্রকাশিত: {formattedDate}
      </p>

      {/* News Content */}
      <div className='mx-auto mt-6 max-w-4xl'>
        {data.body.map((item, index) => {
          // Image
          if (item.type === 'image') {
            return (
              <figure key={index} className='my-8'>
                <Image
                  src={item.url}
                  alt={item.altText || data.title}
                  width={item.width}
                  height={item.height}
                  className='h-auto w-full rounded-lg object-cover'
                />

                {item.caption && (
                  <figcaption className='mt-2 text-sm leading-6 text-neutral-500'>
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            )
          }

          // Subheading
          if (item.type === 'subheading') {
            return (
              <h2
                key={index}
                className='mt-10 mb-5 border-l-4 border-gray-900 pl-4 text-2xl font-bold leading-snug text-neutral-900'
              >
                {item.text}
              </h2>
            )
          }

          // Paragraph
          if (item.type === 'text') {
            return (
              <p
                key={index}
                className='mb-5 text-[17px] leading-8 text-neutral-700'
              >
                {item.text}
              </p>
            )
          }

          return null
        })}
      </div>
      {/* Topics */}
      {data.topics?.length > 0 && (
        <div className='mb-4 flex flex-wrap gap-2'>
          {data.topics.map((topic) => (
            <span
              key={topic.id}
              className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600'
            >
              {topic.name}
            </span>
          ))}
        </div>
      )}

      {/* Source */}
      <div className='mt-10 border-t border-gray-200 pt-5'>
        <p className='text-sm text-neutral-500'>সূত্র: {data.source}</p>
      </div>
    </article>
  )
}

export default NewsDetails
