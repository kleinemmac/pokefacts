<template>
    <div class="text-center pt-5">
      <img class="img-fluid" src="../assets/pokemon_search.png">
      <p class="pt-5">
        Search for your favorite Pokemon by name.
      </p>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="search"
              :items="pokemons"
              :loading="loadingList"
              color="blue"
              hide-no-data
              item-text="name"
              item-value="url"
              label="Pokemon"
              placeholder="Start typing to Search"
              append-icon="mdi-database-search"
              @change="fetchPokemon()"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div v-if="loadingPokemon">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div v-else-if="pokemon !== null">
              <router-link :to="{ name: 'pokemon', params: { pokemon: pokemon.id } }">
                <img :src="pokemon.sprites.front_default" id="pokemon">
                <p>
                  {{ pokemon.name | capitalize }}
                </p>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Search',

  components: {},

  data: () => ({
    pokemons: [],
    search: '',
    loadingList: true,
    loadingPokemon: false,
    pokemon: null
  }),

  methods: {
    fetchPokemon () {
      this.loadingPokemon = true
      this.$store.dispatch('pokemon/getPokemon', this.search)
        .then(pokemon => {
          this.pokemon = pokemon
          this.loadingPokemon = false
        }).catch(error => {
          this.$store.commit('utils/setVisibility', true)
          this.$store.commit('utils/setDialogTitle', 'ERROR')
          this.$store.commit('utils/setMessage', error)
        })
    }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

  mounted: function () {
    this.$store.dispatch('pokemon/getAllPokemon')
      .then(pokemon => {
        this.loadingList = false
        this.pokemons = pokemon
      }).catch(error => {
        this.$store.commit('utils/setVisibility', true)
        this.$store.commit('utils/setDialogTitle', 'ERROR')
        this.$store.commit('utils/setMessage', error)
      })
  }
}
</script>

<style scoped lang='scss'>
  a {
    text-decoration: none;
  }
  #pokemon {
    width: 15%;
  }
</style>
