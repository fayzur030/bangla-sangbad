import Category from '@/components/category/Category'
import { getCategoryById } from '@/services/getNewsByCategory'

interface NewsCategoryProps {
  params: Promise<{ categoryId: string }>
}

const page = async ({ params }: NewsCategoryProps) => {
  const { categoryId } = await params
  const categoryNews = await getCategoryById(categoryId)

  return (
    <div className='max-w-7xl mx-auto mt-4'>
      <div className='mb-5 border-b-2 border-[#FF0000] pb-3'>
        <h2 className='text-xl font-bold'>{categoryNews.title}</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5'>
        {categoryNews.data.map((news) => (
          <Category news={news} key={news.id} />
        ))}
      </div>
    </div>
  )
}

export default page
