import axios from 'axios'

const state = {
  locations: [],
  location: {}
}

const getters = {
  getAllLocations: (state) => { return state.locations },
  getLocation: (state) => { return state.location }
}

const actions = {
  async getAllLocations ({ commit }) {
    return axios.get('https://pokeapi.co/api/v2/location?limit=1000')
      .then(data => {
        commit('setAllLocations', data.data.results)
        return Promise.resolve(data.data.results)
      }).catch(error => {
        return Promise.reject(error)
      })
  },

  async getLocation ({ commit }, url) {
    return axios.get(url)
      .then(data => {
        commit('setLocation', data.data)
        return Promise.resolve(data.data)
      }).catch(error => {
        return Promise.reject(error)
      })
  }
}

const mutations = {
  setAllLocations (state, location) {
    state.locations = location
  },
  setLocation (state, location) {
    state.location = location
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
