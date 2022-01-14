export type Menu = {
  name: string
  path: string
  icon?: string
}

const menus: Menu[] = [
  {
    name: 'manga',
    path: '/manga',
    icon: 'mdi-book-open-page-variant',
  },
  {
    name: 'code typhoon',
    path: '/ct',
    icon: 'mdi-code-braces',
  },
  {
    name: 'video',
    path: '/video',
    icon: 'mdi-video',
  },
]

export default menus
