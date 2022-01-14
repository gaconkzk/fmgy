import mangaIcon from '~icons/emojione/green-book'
import typhoonIcon from '~icons/ri/typhoon-line'
import videoIcon from '~icons/emojione/video-camera'

const menusIcon = {
  manga: mangaIcon,
  'code typhoon': typhoonIcon,
  video: videoIcon,
}

export const iconByName = (iconName: string) => menusIcon[iconName]

export type Menu = {
  name: string
  path: string
  icon?: string
}

const menus: Menu[] = [
  {
    name: 'manga',
    path: '/manga',
  },
  {
    name: 'code typhoon',
    path: '/ct',
  },
  {
    name: 'video',
    path: '/video',
  },
]

export default menus
