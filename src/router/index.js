import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Brand from '../views/Brand.vue'
import Faq from '../views/Faq.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/eventi',
      name: 'eventi',
      component: Events
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
