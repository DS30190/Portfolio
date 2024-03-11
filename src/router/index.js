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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      path: '/:catchAll(.*)', // Cette route capture toutes les URL non définies
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
