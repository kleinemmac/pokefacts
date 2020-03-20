import axios from 'axios'

const state = {
  pokemons: [],
  pokemon: {}
}

const getters = {
  getAllPokemon: (state) => { return state.pokemons },
  getPokemon: (state) => { return state.pokemon }
}

const actions = {
  async getAllPokemon ({ commit }) {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then(data => {
        commit('setAllPokemon', data.data.results)
        return Promise.resolve(data.data.results)
      }).catch(error => {
        return Promise.reject(error)
      })
  },

  async getPokemon ({ commit }, url) {
    return axios.get(url)
      .then(data => {
        commit('setPokemon', data.data)
        return Promise.resolve(data.data)
      }).catch(error => {
        return Promise.reject(error)
      })
  }
}

const mutations = {
  setAllPokemon (state, pokemon) {
    state.pokemons = pokemon
  },
  setPokemon (state, pokemon) {
    state.pokemon = pokemon
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
