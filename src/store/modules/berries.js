import axios from 'axios'

const state = {
  berries: [],
  berry: {}
}

const getters = {
  getAllBerries: (state) => { return state.berries },
  getBerry: (state) => { return state.berry }
}

const actions = {
  async getAllBerries ({ commit }) {
    return axios.get('https://pokeapi.co/api/v2/berry?limit=100')
      .then(data => {
        commit('setAllBerries', data.data.results)
        return Promise.resolve(data.data.results)
      }).catch(error => {
        return Promise.reject(error)
      })
  },

  async getBerry ({ commit }, url) {
    return axios.get(url)
      .then(data => {
        commit('setBerry', data.data)
        return Promise.resolve(data.data)
      }).catch(error => {
        return Promise.reject(error)
      })
  }
}

const mutations = {
  setAllBerries (state, berry) {
    state.berries = berry
  },
  setBerry (state, berry) {
    state.berry = berry
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
