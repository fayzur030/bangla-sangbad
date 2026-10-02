export default function DateTime() {
  const now = new Date()

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
    <div className='text-gray-500 text-xs'>
      <p> {date}</p>
      <p>
        {period} {time}
      </p>
    </div>
  )
}
