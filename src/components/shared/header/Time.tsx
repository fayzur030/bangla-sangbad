'use client'

import { useEffect, useState } from 'react'

export default function DateTime() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())

    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!now) {
    return (
      <div className='text-xs text-gray-500'>
        <p>তারিখ</p>
        <p>সময়</p>
      </div>
    )
  }

  const date = now.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const hour = now.getHours()

  let period = 'রাত'

  if (hour >= 5 && hour < 12) period = 'সকাল'
  else if (hour >= 12 && hour < 16) period = 'দুপুর'
  else if (hour >= 16 && hour < 18) period = 'বিকেল'
  else if (hour >= 18 && hour < 20) period = 'সন্ধ্যা'

  const time = now
    .toLocaleTimeString('bn-BD', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    .replace(/\s?(AM|PM|am|pm|পূর্বাহ্ণ|অপরাহ্ণ)/gi, '')

  return (
    <div className='text-xs text-gray-500'>
      <p>{date}</p>
      <p>
        {period} {time}
      </p>
    </div>
  )
}
