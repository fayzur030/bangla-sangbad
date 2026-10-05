'use client'

import { authClient } from '@/lib/auth-client'
import { LogOut, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

const UserInfo = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const [openDropdown, setOpenDropdown] = useState(false)

  const router = useRouter()

  const handleSignOut = async () => {
    const { error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        },
      },
    })

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success('সফলভাবে সাইন আউট করা হয়েছে।')
    setOpenDropdown(false)
  }

  return (
    <div>
      {user ? (
        <div className='relative '>
          {/* Avatar */}
          <button
            type='button'
            onClick={() => setOpenDropdown((prev) => !prev)}
            className='cursor-pointer'
          >
            <div className='avatar'>
              <div className='ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2'>
                {user.image && (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={36}
                    height={36}
                    className='h-9 w-9 rounded-full object-cover'
                  />
                )}
              </div>
            </div>
          </button>

          {/* Dropdown */}
          {openDropdown && (
            <div className='absolute right-0 top-12 z-50 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg'>
              {/* User Info */}
              <div className='border-b border-gray-100 px-3 py-2'>
                <p className='truncate text-sm font-semibold text-gray-900'>
                  {user.name}
                </p>

                <p className='truncate text-xs text-gray-500'>{user.email}</p>
              </div>

              {/* Profile */}
              <Link
                href='/profile'
                onClick={() => setOpenDropdown(false)}
                className='mt-1  rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 flex items-center gap-2'
              >
                <User size={16} /> <p>Profile</p>
              </Link>

              {/* Sign Out */}
              <button
                type='button'
                onClick={handleSignOut}
                className='w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 flex items-center gap-2'
              >
                <LogOut size={16} /> <p>সাইন আউট</p>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className=' flex justify-center gap-2 lg:justify-end'>
          <Link href='/sign-in'>
            <button className='cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100'>
              সাইন ইন
            </button>
          </Link>

          <Link href='/sign-up' className='hidden md:block'>
            <button className='cursor-pointer rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700'>
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserInfo
