import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div>
      <div className='relative w-full max-w-md'>
        <input
          type='text'
          placeholder='খবর খুঁজুন...'
          className='w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-5 pr-14 text-sm text-gray-800 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100'
        />

        <button
          type='button'
          className='absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700'
          aria-label='Search'
        >
          <Search size={19} />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
