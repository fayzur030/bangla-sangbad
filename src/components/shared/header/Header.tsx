'use client'

import { useState } from 'react'
import headerLogo from '@/assets/bangla-sangbad.png'
import Image from 'next/image'
import SearchBar from './SearchBar'
import { CalendarDays, Search, X } from 'lucide-react'
import DateTime from './Time'
import Link from 'next/link'
import UserInfo from '@/components/UserInfo'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className=' bg-white sticky top-0 z-50 border-b border-neutral-100 '>
      <div className='mx-auto flex max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8'>
        {/* Logo */}
        <div className='flex items-center justify-between lg:justify-start'>
          <Link href={'/'}>
            <Image
              src={headerLogo}
              alt='Bangla Sangbad'
              width={220}
              priority
              className='h-auto w-40 sm:w-52 lg:w-56'
            />
          </Link>

          {/* Mobile Actions */}
          <div className='flex items-center gap-2 lg:hidden'>
            <button
              type='button'
              onClick={() => setSearchOpen((prev) => !prev)}
              className='rounded-full p-2 text-gray-700 transition hover:bg-gray-100'
              aria-label='Search'
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>

            <UserInfo />
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {searchOpen && (
          <div className='absolute left-0 right-0 top-full z-50 bg-white px-4 py-3 shadow-md '>
            <SearchBar />
          </div>
        )}

        {/* Desktop Search */}
        <div className='hidden w-full lg:block lg:max-w-md'>
          <SearchBar />
        </div>

        {/* Date */}
        <div className='hidden justify-center lg:flex lg:justify-start'>
          <div className='flex items-center gap-2 whitespace-nowrap text-sm text-gray-600'>
            <CalendarDays size={17} color='#44444E' />
            <DateTime />
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className='hidden lg:block'>
          <UserInfo />
        </div>
      </div>
    </header>
  )
}
