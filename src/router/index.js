import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonCV from '@/views/MonCv.vue'
import CahierCharges from '@/views/CahierCharges.vue'
import Docu from '@/views/Docu.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/mon-cv',
      name: 'MonCV',
      component: MonCV
    },
    {
      path: '/cahier',
      name: 'CahierCharges',
      component: CahierCharges
    },
    {
      path: '/docu',
      name: 'Docu',
      component: Docu
    },
    {
      path: '/:catchAll(.*)', 
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
