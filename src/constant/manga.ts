import quickAccessIcon from '~icons/ant-design/star-filled'
import mineIcon from '~icons/icon-park/me'
import groupsIcon from '~icons/dashicons/groups'
import categoriesIcon from '~icons/carbon/categories'

// <!-- quick access - recent opened/marked -->
// - 5-10-15 - maximumed configured - default 5 book that we mark/reading
// <!-- my hosted mangas -->
// - all - mangas that upload by me

// <!-- tree menu based on current actived/my manga groups -->
// - manga groups that I joined

// <!-- tree menu based on current actived/categories -->
// - categories/(keywords that I/others marked)

const menusIcon = {
  'Quick Access': quickAccessIcon,
  Mine: mineIcon,
  'Joined Groups': groupsIcon,
  'Categories/Keywords': categoriesIcon,
}

export const menuByName = (iconName: string) => menusIcon[iconName]

export const menus = [
  {
    name: 'Quick Access',
    path: '/main/manga/quick-access',
  },
  {
    name: 'Mine',
    path: '/main/manga/mine',
  },
  {
    name: 'Joined Groups',
    path: '/main/manga/joined-groups',
  },
  {
    name: 'Categories/Keywords',
    path: '/main/manga/categories',
  },
]
