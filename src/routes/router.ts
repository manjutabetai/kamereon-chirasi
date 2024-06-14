import * as vR from 'vue-router'
import Dashboard from '@pages/Dashboard.vue'
import Pnf from '@pages/NotFoundPage.vue'
const _routes: Array<vR.RouteRecordRaw> = [
  { path: '/', component: Dashboard, name: 'home' },
  {
    path: '/demo',
    component: () => import('@pages/DemoPage.vue'),
    name: 'home.demo',
  }, // Lazy Loading 必要なときだけロードを延期する遅延ロード
  {
    path: '/login',
    component: () => import('@pages/AuthPage.vue'),
    name: 'home.auth',
  },

  { path: '/nf', component: Pnf, name: 'home.missing' },
]

const router = vR.createRouter({
  history: vR.createWebHistory(),
  routes: _routes,
})

export default router
