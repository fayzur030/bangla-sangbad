import Marquee from '@/components/home/Marquee'
import MainNews from '@/components/home/news/MainNews'
import { getNews } from '@/services/newsService'

const Home = async () => {
  const newsSection = await getNews()
  const mainNews = newsSection.find((section) => section.title === 'প্রধান খবর')

  return (
    <div>
      <Marquee />
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6'>
        {/* News section */}
        <div className='grid  items-center col-span-12 md:col-span-9 px-2 md:px-0'>
          {mainNews && <MainNews news={mainNews} />}
        </div>
        {/* Most read section */}
        <div className='col-span-12 md:col-span-3 hidden md:block bg-yellow-500'>
          apk,[]
        </div>
      </div>
    </div>
  )
}
export default Home
