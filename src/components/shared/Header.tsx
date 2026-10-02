import headerLogo from '@/assets/bangla-sangbad.png'
import Image from 'next/image'
import SearchBar from './SearchBar'
import { CalendarDays } from 'lucide-react'
import DateTime from './Time'

export default function Header() {
  return (
    <header className='bg-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8'>
        {/* Logo */}
        <div className='flex justify-center lg:justify-start'>
          <Image
            src={headerLogo}
            alt='Bangla Sangbad'
            width={220}
            priority
            className='h-auto w-48 sm:w-52 lg:w-56'
          />
        </div>

        {/* Search */}
        <div className='w-full lg:max-w-md'>
          <SearchBar />
        </div>

        {/* Date */}
        <div className='flex justify-center lg:justify-start'>
          <div className='flex items-center gap-2 whitespace-nowrap text-sm text-gray-600'>
            <CalendarDays size={17} color='#44444E' />
            <DateTime />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className='flex justify-center gap-2 lg:justify-end'>
          <button className='rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 cursor-pointer'>
            লগ ইন
          </button>

          <button className='rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 cursor-pointer'>
            সাইন ইন
          </button>
        </div>
      </div>
    </header>
  )
}
