<template>
    <div class="pt-5">
      <v-container>
        <v-row>
          <v-col>
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="primary"
              grow
            >
              <v-tab>General Information</v-tab>
              <v-tab>Battle Moves</v-tab>
              <v-tab>Stats</v-tab>
              <v-tab>Appears In</v-tab>
            </v-tabs>
          </v-col>
        </v-row>
        <v-row v-if="loadingPokemon" class="pt-5">
          <v-col class="text-center">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <v-tabs-items v-model="tab">
              <v-tab-item class="text-center pt-5">
                <p>Navigate the tabs above to learn more about {{ pokemon.name | capitalize }}.</p>
                <img :src="pokemon.sprites.front_default" class="pokemon">
                <img :src="pokemon.sprites.front_shiny" class="pokemon">
                <p>
                  {{ pokemon.name | capitalize }}
                </p>
              </v-tab-item>
              <v-tab-item>
                <v-container>
                  <v-row justify="center">
                    <v-col cols="12" md="4">
                      <v-simple-table>
                      <template v-slot:default>
                        <tbody>
                          <tr v-for="move in pokemon.moves" :key="move.move.url">
                            <td class="text-center">{{ move.move.name }}</td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container>
                  <v-row justify="center">
                    <v-col cols="12" md="4">
                      <v-simple-table>
                      <template v-slot:default>
                        <tbody>
                          <tr>
                            <th class="text-center">Stat Name</th>
                            <th class="text-center">Base Stat</th>
                          </tr>
                          <tr v-for="stat in pokemon.stats" :key="stat.stat.url">
                            <td class="text-center">{{ stat.stat.name }}</td>
                            <td class="text-center">{{ stat.base_stat }}</td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container>
                  <v-row justify="center">
                    <v-col cols="12" md="4">
                      <v-simple-table>
                      <template v-slot:default>
                        <tbody>
                          <tr v-for="gameIndex in pokemon.game_indices" :key="gameIndex.version.url">
                            <td class="text-center">{{ gameIndex.version.name }}</td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Pokemon',

  components: {},

  data: () => ({
    tab: 0,
    pokemon: null,
    loadingPokemon: true
  }),

  methods: {
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

  mounted: function () {
    this.$store.dispatch('pokemon/getPokemon', 'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.pokemon)
      .then(pokemon => {
        this.pokemon = pokemon
        this.loadingPokemon = false
      }).catch(error => {
        this.$store.commit('utils/setVisibility', true)
        this.$store.commit('utils/setDialogTitle', 'ERROR')
        this.$store.commit('utils/setMessage', error)
      })
  }
}
</script>

<style scoped lang='scss'>
.pokemon {
  width: 15%;
}
</style>
