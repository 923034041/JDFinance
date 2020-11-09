import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/index.vue'
import Money from '../components/money/index.vue'
import Ious from '../components/ious/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/ious',
    name: 'ious',
    component: Ious
  }
]

const router = new VueRouter({
  routes
})

export default router
