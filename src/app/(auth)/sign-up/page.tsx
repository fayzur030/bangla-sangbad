'use client'
import Link from 'next/link'
import image from '@/assets/favicon.ico'
import Image from 'next/image'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

type SignFormData = {
  name: string
  image: string
  email: string
  password: string
}

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | null>(null)

  // email validation
  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return 'ইমেইল লিখুন'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return 'সঠিক ইমেইল ঠিকানা লিখুন'
    }
    return null
  }
  // password validate
  const validatePassword = (value: string) => {
    if (value.length < 8) {
      return 'পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে'
    }
    if (!/[A-Z]/.test(value)) {
      return 'পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর থাকতে হবে'
    }
    if (!/[0-9]/.test(value)) {
      return 'পাসওয়ার্ডে অন্তত একটি সংখ্যা থাকতে হবে'
    }

    return null
  }

  //form submit

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailValidation = validateEmail(email)
    const passwordValidation = validatePassword(password)

    setEmailError(emailValidation)
    setPasswordError(passwordValidation)

    if (emailValidation || passwordValidation) {
      return
    }

    //form data

    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries()) as SignFormData
    const { error } = await authClient.signUp.email({
      name: userData.name,
      image: userData.image,
      email: userData.email,
      password: userData.password,
    })

    if (error) {
      toast.error(error.message)
      return
    }
    toast.success('রেজিস্ট্রেশন সফল হয়েছে!')
    redirect('/sign-in')
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 px-4 py-6'>
      <div className='w-full max-w-lg'>
        {/* Back Button */}
        <div className='mb-4 flex justify-center'>
          <Link
            href='/'
            className='rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50'
          >
            ← Back to Home
          </Link>
        </div>

        {/* Register Card */}
        <div className='rounded-2xl border border-gray-200 bg-white px-7 py-6 shadow-lg sm:px-9'>
          <div className='flex items-center justify-center'>
            <Image src={image} height={50} width={50} alt='image' />
          </div>
          {/* Header */}
          <div className='mb-5 text-center'>
            <h1 className='text-2xl font-bold text-red-600'>সাইন আপ করুন</h1>
            {/* <p className='mt-1 text-sm text-gray-500'>
              Register to continue to <b>Bangla Sangbad</b>
            </p> */}
          </div>

          {/* Form */}
          <form className='space-y-3.5' onSubmit={onSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor='name'
                className='mb-1.5 block text-sm font-medium text-gray-700'
              >
                নাম
              </label>

              <input
                id='name'
                name='name'
                type='text'
                placeholder='আপনার নাম লিখুন'
                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm  outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100'
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor='image'
                className='mb-1.5 block text-sm font-medium text-gray-700'
              >
                Image URL
              </label>

              <input
                id='image'
                name='image'
                type='url'
                placeholder='https://example.com/profile.jpg'
                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100'
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='mb-1.5 block text-sm font-medium text-gray-700'
              >
                ইমেইল
              </label>

              <input
                id='email'
                type='email'
                name='email'
                value={email}
                onChange={(e) => {
                  const value = e.target.value
                  setEmail(value)
                  if (emailError) {
                    setEmailError(validateEmail(value))
                  }
                }}
                placeholder='আপনার ইমেইল লিখুন'
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition ${
                  emailError
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-300 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100'
                }`}
              />
              {emailError && (
                <p className='mt-1 text-sm text-red-500'>{emailError}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor='password'
                className='mb-1.5 block text-sm font-medium text-gray-700'
              >
                পাসওয়ার্ড
              </label>

              <input
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={(e) => {
                  const value = e.target.value
                  setPassword(value)
                  if (passwordError) {
                    setPasswordError(validatePassword(value))
                  }
                }}
                placeholder='পাসওয়ার্ড লিখুন'
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition ${
                  passwordError
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-300 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100'
                }`}
              />
              {passwordError && (
                <p className='mt-1 text-sm text-red-500'>{passwordError}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type='submit'
              className='w-full rounded-lg bg-[#FF0000] cursor-pointer px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800'
            >
              সাইন আপ করুন
            </button>
          </form>

          {/* Divider */}
          <div className='my-4 flex items-center gap-3'>
            <div className='h-px flex-1 bg-gray-200' />

            <span className='text-xs text-gray-400'>OR</span>

            <div className='h-px flex-1 bg-gray-200' />
          </div>

          {/* Social Buttons */}
          <div className='grid grid-cols-2 gap-3'>
            {/* Google */}
            <button
              type='button'
              className='flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50'
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
                <path
                  fill='#4285F4'
                  d='M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.45a5.51 5.51 0 0 1-2.39 3.62v3.01h3.87c2.27-2.09 3.56-5.17 3.56-8.66Z'
                />
                <path
                  fill='#34A853'
                  d='M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3.01c-1.07.72-2.43 1.15-4.06 1.15-3.13 0-5.79-2.11-6.74-4.95H1.26v3.1A12 12 0 0 0 12 24Z'
                />
                <path
                  fill='#FBBC05'
                  d='M5.26 14.28A7.2 7.2 0 0 1 4.88 12c0-.79.14-1.56.38-2.28V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.78 1.26 5.38l4-3.1Z'
                />
                <path
                  fill='#EA4335'
                  d='M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.95 1.16 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4 3.1c.95-2.84 3.61-4.95 6.74-4.95Z'
                />
              </svg>
              Google
            </button>

            {/* GitHub */}
            <button
              type='button'
              className='flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50'
            >
              <svg
                viewBox='0 0 24 24'
                className='h-5 w-5 fill-gray-900'
                aria-hidden='true'
              >
                <path d='M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z' />
              </svg>
              GitHub
            </button>
          </div>

          {/* Sign In */}
          <p className='mt-4 text-center text-sm text-gray-500'>
            ইতিমধ্যে একটি অ্যাকাউন্ট আছে?{' '}
            <Link
              href='/sign-in'
              className='font-semibold text-red-600 hover:text-red-800 hover:underline'
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
