'use client'

import { NewsCategoryType } from '@/types/newsCategoriesType'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemsProps {
  navItems: NewsCategoryType[]
}

const Navbar = ({ navItems }: NavItemsProps) => {
  const pathname = usePathname()

  const filteredNavItems = navItems.filter((item) => item.scrapable)

  return (
    <nav className='bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-nowrap items-center  gap-x-6 overflow-x-auto py-3 sm:gap-x-8 sm:py-4 lg:overflow-visible'>
          {/* Home */}
          <Link
            href='/'
            className={`flex shrink-0 items-center gap-2 text-sm font-medium transition hover:text-red-400 sm:text-base ${
              pathname === '/' ? 'text-red-400' : 'text-white'
            }`}
          >
            <Home size={18} />
            <span>হোম</span>
          </Link>

          {/* Categories */}
          {filteredNavItems.map((nav, idx) => {
            const active = pathname === `/category/${nav.slug}`

            return (
              <Link
                key={idx}
                href={`/category/${nav.slug}`}
                className={`shrink-0 whitespace-nowrap text-sm font-medium transition hover:text-red-400 sm:text-base ${
                  active ? 'text-red-400' : 'text-white'
                }`}
              >
                {nav.title}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
