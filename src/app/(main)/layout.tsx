import Marquee from '@/components/home/Marquee'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header/Header'
import Navbar from '@/components/shared/navbar/Navbar'
import { getCategoriesNavItems } from '@/services/newsCategoriesNavItem'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = await getCategoriesNavItems()
  return (
    <>
      <Header />
      <Navbar navItems={navItems} />
      <Marquee />
      <main>{children}</main>
      <Footer />
    </>
  )
}
