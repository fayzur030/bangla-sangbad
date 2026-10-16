'use client'

import { Search, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

interface SearchBarProps {
  onNavigate?: () => void
}

interface SearchFormProps extends SearchBarProps {
  initialQuery: string
  hasUrlQuery: boolean
}

const SearchForm = ({
  initialQuery,
  hasUrlQuery,
  onNavigate,
}: SearchFormProps) => {
  const router = useRouter()
  const [value, setValue] = useState(initialQuery)

  const submit = () => {
    const query = value.trim()
    if (!query) {
      return
    }
    onNavigate?.()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const clear = () => {
    setValue('')
    if (hasUrlQuery) {
      router.push('/search')
    }
    onNavigate?.()
  }

  return (
    <div>
      <form
        className='relative w-full max-w-md'
        onSubmit={(event) => {
          event.preventDefault()
          submit()
        }}
      >
        <input
          type='text'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder='খবর খুঁজুন...'
          className='w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-5 pr-24 text-sm text-gray-800 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100'
        />

        {value && (
          <button
            type='button'
            onClick={clear}
            className='absolute right-13 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-200 hover:text-gray-700'
            aria-label='Clear search'
          >
            <X size={16} />
          </button>
        )}

        <button
          type='submit'
          className='absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700'
          aria-label='Search'
        >
          <Search size={19} />
        </button>
      </form>
    </div>
  )
}

const SearchBarInner = ({ onNavigate }: SearchBarProps) => {
  const searchParams = useSearchParams()
  const urlQuery = searchParams.get('q') ?? ''

  return (
    <SearchForm
      key={urlQuery}
      initialQuery={urlQuery}
      hasUrlQuery={urlQuery !== ''}
      onNavigate={onNavigate}
    />
  )
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <Suspense>
      <SearchBarInner {...props} />
    </Suspense>
  )
}

export default SearchBar
