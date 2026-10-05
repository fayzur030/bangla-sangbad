import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const UserInfo = () => {
  // user info from session
  const { data: session } = authClient.useSession()
  const user = session?.user

  // sign out
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
  }

  return (
    <div>
      {user ? (
        <div className='flex items-center gap-3'>
          {/* Avatar + Name */}
          <div className='flex flex-col items-center justify-center'>
            {user.image && (
              <div className='avatar'>
                <div className='ring-primary ring-offset-base-100  rounded-full ring-2 ring-offset-2'>
                  <Link href={'/profile'}>
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={34}
                      height={34}
                      className='h-8 w-8 rounded-full object-cover ring-1 ring-gray-200'
                    />
                  </Link>
                </div>
              </div>
            )}

            <span className='mt-1   text-xs font-medium text-gray-800'>
              {user.name}
            </span>
            <button
              onClick={handleSignOut}
              className='cursor-pointer rounded-md mt-2 bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700'
            >
              সাইন আউট
            </button>
          </div>

          {/* Logout */}
        </div>
      ) : (
        <div className='hidden justify-center gap-2 lg:flex lg:justify-end'>
          <Link href={'/sign-in'}>
            <button className='cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100'>
              সাইন ইন
            </button>
          </Link>

          <Link href={'/sign-up'}>
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
