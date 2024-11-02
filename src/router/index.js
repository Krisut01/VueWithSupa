import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/AuthView.vue'
const routes = [
  {
    path: '/',
    redirect: '/Auth', // Redirect root to /Auth
  },
  {
    path: '/Auth',
    name: 'AuthView',
    component: Auth,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes,
})
export default router
