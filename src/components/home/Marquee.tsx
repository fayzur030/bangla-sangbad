import { getHeadlines } from '@/services/getLatestHeadlines'
import React from 'react'
import MarqueeList from './MarqueeList'

const Marquee = async () => {
  const headLines = await getHeadlines()
  return (
    <div className='bg-[#FF0000] text-white'>
      <MarqueeList headLines={headLines} />
    </div>
  )
}

export default Marquee
