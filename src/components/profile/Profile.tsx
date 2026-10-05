'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import { useState } from 'react'
import EditProfileModal from './EditProfileModal'

const Profile = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <main className='min-h-screen bg-gray-50 px-4 py-10'>
        <div className='mx-auto max-w-3xl'>
          {/* Page Header */}
          <div className='mb-6'>
            <h1 className='text-2xl font-bold text-gray-900'>প্রোফাইল</h1>
            <p className='mt-1 text-sm text-gray-500'>
              আপনার প্রোফাইল এবং অ্যাকাউন্টের তথ্য
            </p>
          </div>
          {/* Profile Card */}
          <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm'>
            {/* Cover */} <div className='h-32 bg-gray-900 sm:h-40' />
            <div className='px-5 pb-6 sm:px-8'>
              {/* Avatar */}
              <div className='-mt-14'>
                {user?.image && (
                  <Image
                    src={user?.image as string}
                    alt='Profile'
                    width={100}
                    height={100}
                    className='h-24 w-24 rounded-full border-4 border-white object-cover shadow-md'
                  />
                )}
              </div>
              {/* User Info */}
              <div className='mt-4'>
                <h2 className='text-xl font-bold text-gray-900'>
                  {user?.name}
                </h2>
                <p className='mt-1 text-sm text-gray-500'>{user?.email}</p>
              </div>
              {/* Divider */} <div className='my-6 border-t border-gray-100' />
              {/* Account Information */}
              <div>
                <h3 className='text-base font-semibold text-gray-900'>
                  অ্যাকাউন্ট তথ্য
                </h3>
                <div className='mt-4 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-xl bg-gray-50 p-4'>
                    <p className='text-xs text-gray-500'>নাম</p>
                    <p className='mt-1 text-sm font-semibold text-gray-800'>
                      {user?.name}
                    </p>
                  </div>
                  <div className='rounded-xl bg-gray-50 p-4'>
                    <p className='text-xs text-gray-500'>ইমেইল</p>
                    <p className='mt-1 truncate text-sm font-semibold text-gray-800'>
                      {user?.email}
                    </p>
                  </div>
                  <div className='rounded-xl bg-gray-50 p-4'>
                    <p className='text-xs text-gray-500'>অ্যাকাউন্ট</p>
                    <div>
                      {user?.emailVerified ? 'Verified' : 'Not Verified'}
                    </div>
                    <p className='mt-1 text-sm font-semibold text-gray-800'></p>
                  </div>
                  <div className='rounded-xl bg-gray-50 p-4'>
                    <p className='text-xs text-gray-500'>সদস্য হয়েছেন</p>
                    <p className='mt-1 text-sm font-semibold text-gray-800'>
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
              {/* Action */}
              <div className='mt-7 flex justify-end'>
                <button
                  onClick={() => setOpenModal((prev) => !prev)}
                  className='cursor-pointer rounded-md mt-2 bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700'
                >
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {openModal && (
        <EditProfileModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          user={user}
        />
      )}
    </div>
  )
}

export default Profile
