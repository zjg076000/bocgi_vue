import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/components/Layout/AppLayout.vue'
import IndexView from '@/views/IndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        {
        path: '',
        component: IndexView,
        } ,      
        
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },

        //404页面捕获
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: () => import('../views/ErrorPage.vue')
  },




      ]
      
    },



    
  ]
})

export default router
