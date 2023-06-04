/* import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/RegistrarProyecto',
      name: 'RegistrarProyecto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/RegistroProyecto.vue')
    },
    {
      path: '/PantallaAdministrador',
      name: 'PantallaAdministrador',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/PantallaAdministrador.vue')
    }
  ]
})

export default router */

import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../components/RegistroProyecto.vue'
    import Proy from '../components/PantallaAdministrador.vue'
    //import Admin from '../components/PantallaAdministrador.vue'
    const routes = [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/RegistrarProyecto',
        name: 'RegistrarProyecto',
        component: Proy,
      },
      {
        path: '/PantallaAdministrador',
        name: 'PantallaAdministrador',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/PantallaAdministrador.vue')
      }
    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router
