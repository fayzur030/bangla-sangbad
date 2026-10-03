export default function Date_Time() {
  const now = new Date()

  const date = now.toLocaleDateString('bn-BD', {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const time = now.toLocaleTimeString('bn-BD', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div className='text-gray-500 text-xs flex items-center gap-2'>
      <p> {date}</p>
      <p>{time}</p>
    </div>
  )
}
