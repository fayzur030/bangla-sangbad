'use client'
import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

interface EditProfileModalProps {
  user?: {
    name: string
    image?: string | null
  }
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

type newUserDataProps = {
  image: string
  name: string
}

const EditProfileModal = ({
  openModal,
  setOpenModal,
  user,
}: EditProfileModalProps) => {
  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUserData = Object.fromEntries(
      formData.entries()
    ) as newUserDataProps
    // console.log(newUserData)

    const { error } = await authClient.updateUser({
      name: newUserData.name,
      image: newUserData.image,
    })

    if (error) {
      toast.error(error.message)
      return
    }
    toast.success('Your profile has been updated successfully!')
    setOpenModal(false)
    redirect('/profile')
  }

  return (
    <div>
      <dialog
        open={openModal}
        className='modal modal-middle sm:modal-middle backdrop-blur-sm'
      >
        <div className='modal-box'>
          {/* Header */}
          <div className='mb-6'>
            <h3 className='text-xl font-bold text-gray-900'>Edit Profile</h3>
            <p className='mt-1 text-sm text-gray-500'>
              Update your profile information
            </p>
          </div>
          {/* Form */}
          <form className='space-y-5' onSubmit={handleUpdateUser}>
            {/* Image */}
            <div>
              <label
                htmlFor='image'
                className='mb-2 block text-sm font-medium text-gray-700'
              >
                Profile Image URL
              </label>
              <input
                name='image'
                defaultValue={user?.image as string}
                id='image'
                type='url'
                placeholder='https://example.com/image.jpg'
                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
              />
            </div>
            {/* Name */}
            <div>
              <label
                htmlFor='name'
                className='mb-2 block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                id='name'
                name='name'
                defaultValue={user?.name}
                type='text'
                placeholder='John Doe'
                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
              />
            </div>
            {/* Actions */}
            <div className='modal-action'>
              <button
                type='button'
                onClick={() => setOpenModal(false)}
                className='rounded-lg border border-gray-300 cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white  transition cursor-pointer hover:bg-red-800'
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default EditProfileModal
