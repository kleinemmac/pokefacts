import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Search from '../views/Search'
import Pokemon from '../views/Pokemon'
import Locations from '../views/Locations'
import Location from '../views/Location'
import Items from '../views/Items'
import Item from '../views/Item'
import Berries from '../views/Berries'
import Berry from '../views/Berry'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { name: 'pokemon', path: '/pokemon/:pokemon', component: Pokemon },
  { path: '/locations', component: Locations },
  { name: 'location', path: '/locations/:location', component: Location },
  { path: '/items', component: Items },
  { name: 'item', path: '/items/:item', component: Item },
  { path: '/berries', component: Berries },
  { name: 'berry', path: '/berries/:berry', component: Berry }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
