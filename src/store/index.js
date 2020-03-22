import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './modules/pokemon'
import locations from './modules/locations'
import items from './modules/items'
import berries from './modules/berries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokemon,
    locations,
    items,
    berries
  }
})
