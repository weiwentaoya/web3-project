import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { left: 0, top: 0 }
  },
})
export default router
