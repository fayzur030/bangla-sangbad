import { getCategoriesNavItems } from '@/services/newsCategoriesNavItem'
import Navbar from './Navbar'

const NavItemFetch = async () => {
  const navItems = await getCategoriesNavItems()

  return (
    <div>
      <Navbar navItems={navItems} />
    </div>
  )
}

export default NavItemFetch
