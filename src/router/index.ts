import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/components/Layout/AppLayout.vue'
import IndexView from '@/views/IndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
      path: '/login',
      name: 'name',
      component: () => import("@/views/login/LoginView.vue")
    },

    {
=======
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        {
<<<<<<< HEAD
          path: '',
          component: IndexView,
        },

=======
        path: '',
        component: IndexView,
        } ,      
        
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },

        //404页面捕获
<<<<<<< HEAD
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('../views/ErrorPage.vue'),
        },
=======
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: () => import('../views/ErrorPage.vue')
  },
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8




      ]
<<<<<<< HEAD

=======
      
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
    },



<<<<<<< HEAD

=======
    
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
  ]
})

export default router
