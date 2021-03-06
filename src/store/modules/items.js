import axios from 'axios'

const state = {
  items: [],
  item: {}
}

const getters = {
  getAllItems: (state) => { return state.items },
  getItem: (state) => { return state.item }
}

const actions = {
  async getAllItems ({ commit }) {
    return axios.get('https://pokeapi.co/api/v2/item?limit=1000')
      .then(data => {
        commit('setAllItems', data.data.results)
        return Promise.resolve(data.data.results)
      }).catch(error => {
        return Promise.reject(error)
      })
  },

  async getItem ({ commit }, url) {
    return axios.get(url)
      .then(data => {
        commit('setItem', data.data)
        return Promise.resolve(data.data)
      }).catch(error => {
        return Promise.reject(error)
      })
  }
}

const mutations = {
  setAllItems (state, item) {
    state.items = item
  },
  setItem (state, item) {
    state.item = item
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
