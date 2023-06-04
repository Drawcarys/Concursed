import { createRouter, createWebHistory } from 'vue-router'
    //import Home from '../PantallaPrincipal.vue'
    //import Proy from '../components/RegistroProyecto.vue'
    //import Admin from '../components/PantallaAdministrador.vue'
    const routes = [
      {
        path: '/PantallaPrincipal',
        name: 'home',
        //component: Home
        component: () => import(/* webpackChunkName: "about" */ '../PantallaPrincipal.vue')

      },
      {
        path: '/RegistrarProyecto',
        name: 'RegistrarProyecto',
        //component: Proy,
        component: () => import(/* webpackChunkName: "about" */ '../components/RegistroProyecto.vue')
      },
      {
        path: '/PantallaAdministrador',
        name: 'PantallaAdministrador',

        component: () => import(/* webpackChunkName: "about" */ '../components/PantallaAdministrador.vue')
      }
    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router
