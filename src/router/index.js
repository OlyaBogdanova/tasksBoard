import { createRouter, createWebHistory } from 'vue-router'
import TheBoardsPage from '@/views/TheBoardsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'boards',
      component: TheBoardsPage
    }
  ]
})

export default router
