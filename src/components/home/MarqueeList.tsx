import MarqueeText from 'react-marquee-text'
import 'react-marquee-text/dist/styles.css'
import { LatestHeadlineType } from '@/types/latestHeadlinesType'
import { Dot } from 'lucide-react'

interface HeadLinesProps {
  headLines: LatestHeadlineType[]
}

const MarqueeList = ({ headLines }: HeadLinesProps) => {
  return (
    <div className='max-w-7xl mx-auto flex items-center overflow-hidden'>
      <h1 className='bg-red-800 px-5 py-2 rounded font-bold'>সর্বশেষ</h1>
      <MarqueeText direction='right' duration={10}>
        <ul className='flex items-center gap-6'>
          {headLines.map((headline) => (
            <li
              key={headline.id}
              className='whitespace-nowrap text-sm  text-white flex items-center py-2'
            >
              <Dot /> {headline.title}
            </li>
          ))}
        </ul>
      </MarqueeText>
    </div>
  )
}

export default MarqueeList
