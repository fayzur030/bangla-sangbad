import { MostReadNews } from '@/types/mostReadNews'
import Link from 'next/link'

interface MostReadProps {
  mostRead: MostReadNews[]
}

const MostRead = ({ mostRead }: MostReadProps) => {
  return (
    <div className='w-full'>
      <div className='card mt-4 bg-base-100 shadow-sm border border-base-content/5'>
        <div className='card-body'>
          <h2 className='text-xl font-bold'>সর্বাধিক পঠিত</h2>

          <div>
            {mostRead.map((read, idx) => (
              <article key={read.id} className='py-2 first:pt-2'>
                {/* Number + Title */}
                <div className='flex items-start gap-3'>
                  {/* Number */}
                  <span className='shrink-0 text-2xl font-bold leading-none text-[#FF0000]'>
                    {String(idx + 1)}
                  </span>

                  {/* Title */}
                  <Link
                    href={`/news/${read.id}`}
                    className='text-base font-semibold leading-snug transition-colors hover:text-[#FF0000]'
                  >
                    {read.title}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostRead
