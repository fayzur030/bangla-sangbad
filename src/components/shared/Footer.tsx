import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-16 bg-gray-900 text-gray-300'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
          {/* Brand */}
          <div>
            <Link href='/' className='text-2xl font-bold text-white'>
              বাংলা সংবাদ
            </Link>

            <p className='mt-4 max-w-sm text-sm leading-7 text-gray-400'>
              দেশের ও বিশ্বের সর্বশেষ সংবাদ জানতে বাংলা সংবাদের সঙ্গে থাকুন।
              নির্ভরযোগ্য সংবাদ পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className='space-y-3 text-sm'>
              <li>
                <Link href='/' className='transition hover:text-white'>
                  হোম
                </Link>
              </li>

              <li>
                <Link href='/about' className='transition hover:text-white'>
                  আমাদের সম্পর্কে
                </Link>
              </li>

              <li>
                <Link href='/contact' className='transition hover:text-white'>
                  যোগাযোগ
                </Link>
              </li>

              <li>
                <Link href='/privacy' className='transition hover:text-white'>
                  গোপনীয়তা নীতি
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>যোগাযোগ</h3>

            <ul className='space-y-3 text-sm text-gray-400'>
              <li>📧 Email: info@banglasangbad.com</li>
              <li>📍 বাংলাদেশ</li>
              <li>📰 সর্বশেষ সংবাদ পেতে আমাদের সঙ্গে থাকুন</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-10 border-t border-gray-700 pt-6'>
          <div className='flex flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row'>
            <p>
              © {new Date().getFullYear()} বাংলা সংবাদ. সর্বস্বত্ব সংরক্ষিত।
            </p>

            <p>
              Made with ❤️ by{' '}
              <span className='font-medium text-gray-300'>
                Md. Fayzur Rahman
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
