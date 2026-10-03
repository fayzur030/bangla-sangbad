import { getCategories } from '@/services/newsCategories'
import Navbar from './Navbar'

const NavItemFetch = async () => {
  const navItems = await getCategories()

  return (
    <div>
      <Navbar navItems={navItems} />
    </div>
  )
}

export default NavItemFetch
