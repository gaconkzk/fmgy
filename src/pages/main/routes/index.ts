import Manga from '../manga/index.vue'
import Video from '../video/index.vue'
import CodeTyphoon from '../ct/index.vue'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/main',
    redirect: '/main/manga',
  },
  {
    path: '/main/manga',
    component: Manga,
  },
  {
    path: '/main/manga/categories/:category',
    component: Manga,
  },
  {
    path: '/main/video',
    component: Video,
  },
  {
    path: '/main/ct',
    component: CodeTyphoon,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
