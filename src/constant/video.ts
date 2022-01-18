import quickAccessIcon from '~icons/ant-design/star-filled'
import moviesIcon from '~icons/icon-park/movie'
import seriesIcon from '~icons/icon-park/movie-board'
import categoriesIcon from '~icons/carbon/categories'

// <!-- quick access - recent opened/marked -->
// - 5-10-15 - maximumed configured - default 5 video that we mark/watching

// <!-- tree menu based on current actived/my manga groups -->
// - manga groups that I joined

// <!-- tree menu based on current actived/categories -->
// - categories/(keywords that I/others marked)

const menusIcon = {
  'Quick Access': quickAccessIcon,
  Movies: moviesIcon,
  Series: seriesIcon,
  'Categories/Keywords': categoriesIcon,
}

export const iconByName = (iconName: string) => menusIcon[iconName]

export default [
  {
    name: 'Quick Access',
    path: '/main/video/quick-access',
  },
  {
    name: 'Movies',
    path: '/main/video/movies',
  },
  {
    name: 'Series',
    path: '/main/video/series',
  },
  {
    name: 'Categories/Keywords',
    path: '/main/video/categories',
  },
]
