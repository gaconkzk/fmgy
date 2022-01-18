import menus, { iconByName, Menu } from './menu'

export { menus, iconByName }
import { default as mangaMenus, iconByName as mangaIconByName } from './manga'
import { default as videoMenus, iconByName as videoIconByName } from './video'

export const pageByPath = (path: string) =>
  !!path ? `/main/${path?.split('/')?.[2] ?? ''}` : ''

export const iconByMenu = (menu: Menu) => {
  const path = pageByPath(menu.path)
  switch (path) {
    case '/main/video':
      return videoIconByName(menu.name)
    case '/main/manga':
      return mangaIconByName(menu.name)
    default:
      return null
  }
}

export { mangaMenus, videoMenus, mangaIconByName, videoIconByName }
