import Spinner from '@/views/Spinner.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'spinner',
      component: Spinner
    },
    
  ]
})

export default router
