import Home from '@/views/home/index.vue'
import Claim from '@/views/claim/index.vue'
import Mint from '@/views/mint/index.vue'
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/claim',
    component: Claim,
    name: 'claim',
  },
  {
    path: '/mint',
    component: Mint,
    name: 'mint',
  },
  { path: '/404', component: import('@/views/404/index.vue'), name: '404' },
  // { path: '/:pathMatch(.*)*', redirect: '/404', name: 'Home' },
]
export default routes
