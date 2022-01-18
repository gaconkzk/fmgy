import mangaIcon from '~icons/emojione/green-book'
import typhoonIcon from '~icons/ri/typhoon-line'
import videoIcon from '~icons/emojione/video-camera'

export const menusIcon = {
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
    path: '/main/manga',
  },
  {
    name: 'video',
    path: '/main/video',
  },
  {
    name: 'code typhoon',
    path: '/main/ct',
  },
]

export default menus
