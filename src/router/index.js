import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PantallaPrincipal',
    component: () => import(/* webpackChunkName: "about" */ '../PantallaPrincipal.vue')
  },
  {
    path: '/RegistrarProyecto',
    name: 'RegistrarProyecto',
    component: () => import(/* webpackChunkName: "about" */ '../components/RegistroProyecto.vue')
  },
  {
    path: '/PantallaAdministrador',
    name: 'PantallaAdministrador',
    component: () => import(/* webpackChunkName: "about" */ '../components/PantallaAdministrador.vue')
  },
   
  {

  }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

