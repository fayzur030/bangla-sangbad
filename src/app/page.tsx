import Marquee from '@/components/home/Marquee'
import MainNews from '@/components/home/news/MainNews'
import MostReadNews from '@/components/home/news/MostRead'
import { getMostReadNews } from '@/services/getMostReadNewsService'
import { getNews } from '@/services/newsService'

const Home = async () => {
  const newsSection = await getNews()
  const mainNews = newsSection.find((section) => section.title === 'প্রধান খবর')
  const mostReadNews = await getMostReadNews()

  return (
    <div>
      <Marquee />

      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 items-stretch'>
        {/* News Section */}
        <div className='col-span-12 md:col-span-8 px-2 md:px-0 flex'>
          <div className='w-full'>
            {mainNews && <MainNews news={mainNews} />}
          </div>
        </div>

        {/* Most Read Section */}
        <div className='col-span-12 md:col-span-4 hidden md:flex'>
          <div className='w-full'>
            <MostReadNews mostRead={mostReadNews} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
