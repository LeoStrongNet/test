import { createRouter, createWebHistory } from 'vue-router'
import SpendingView from '../views/SpendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'spending',
      component: SpendingView
    },
    {
      path: '/stocks',
      name: 'stocks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StockView.vue')
    }
  ]
})

export default router
