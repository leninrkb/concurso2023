import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComandoVoz from '../views/ComandoVoz.vue'
import DatosBiometricos from '../views/DatosBiometricos.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comandovoz',
    name: 'comandovoz',
    component: ComandoVoz
  },
  {
    path: '/datosbiometricos',
    name: 'datosbiometricos',
    component: DatosBiometricos
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
