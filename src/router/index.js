import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ClubesLista from '../views/ClubesLista.vue'
import ClubesListaSemOrdenar from '../views/ClubesListaSemOrdenar.vue'
import ClubesListaSeparado from '../views/ClubesListaSeparado.vue'
import ClubesListaSeparadoOrdenado from '../views/ClubesListaSeparadoOrdenado.vue'
import InfoFeito from '../views/InfoFeito.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
  {
    path: '/classificacaosemordenar',
    name: 'ClubesListaSemOrdenar',
    component: ClubesListaSemOrdenar
  },
  {
    path: '/classificacaoseparado',
    name: 'ClubesListaSeparado',
    component: ClubesListaSeparado
  },
  {
    path: '/classificacaoseparadoordenado',
    name: 'ClubesListaSeparadoOrdenado',
    component: ClubesListaSeparadoOrdenado
  },
  {
    path: '/infofeito',
    name: 'InfoFeito',
    component: InfoFeito
  },

]

const router = new VueRouter({
  routes
})

export default router
