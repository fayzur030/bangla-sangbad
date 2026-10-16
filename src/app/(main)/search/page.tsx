import Category from '@/components/category/Category'
import { searchNews } from '@/services/searchNews'

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q } = await searchParams
  const query = q?.trim() ?? ''

  if (!query) {
    return (
      <div className='max-w-7xl mx-auto mt-4'>
        <div className='mb-5 border-b-2 border-[#FF0000] pb-3'>
          <h2 className='text-xl font-bold'>অনুসন্ধান</h2>
        </div>
        <p className='text-center text-gray-600 py-10'>
          খবর খুঁজতে উপরের সার্চ বক্সে কিছু লিখে Enter চাপুন।
        </p>
      </div>
    )
  }

  const result = await searchNews(query)

  if (result === null) {
    return (
      <div className='max-w-7xl mx-auto mt-4'>
        <div className='mb-5 border-b-2 border-[#FF0000] pb-3'>
          <h2 className='text-xl font-bold'>“{query}” এর অনুসন্ধান ফলাফল</h2>
        </div>
        <p className='text-center text-gray-600 py-10'>
          দুঃখিত, অনুসন্ধানের সময় একটি সমস্যা হয়েছে। অনুগ্রহ করে কিছুক্ষণ
          পর আবার চেষ্টা করুন।
        </p>
      </div>
    )
  }

  const { articles, total } = result

  return (
    <div className='max-w-7xl mx-auto mt-4'>
      <div className='mb-5 border-b-2 border-[#FF0000] pb-3'>
        <h2 className='text-xl font-bold'>
          “{query}” এর অনুসন্ধান ফলাফল ({total.toLocaleString('bn-BD')}টি)
        </h2>
      </div>
      {articles.length === 0 ? (
        <p className='text-center text-gray-600 py-10'>
          দুঃখিত, আপনার অনুসন্ধানের সঙ্গে মিলে এমন কোনো খবর পাওয়া যায়নি।
        </p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5'>
          {articles.map((news) => (
            <Category news={news} key={news.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
