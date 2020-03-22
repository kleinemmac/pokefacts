import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Search from '../views/Search'
import Locations from '../views/Locations'
import Items from '../views/Items'
import Berries from '../views/Berries'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/locations', component: Locations },
  { path: '/items', component: Items },
  { path: '/berries', component: Berries }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
