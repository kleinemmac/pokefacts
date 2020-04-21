<template>
    <div class="text-center pt-5">
      <img class="img-fluid" src="../assets/berries.png">
      <p class="pt-5">
        Search for your Berry of choice.
      </p>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="search"
              :items="berries"
              :loading="loadingList"
              color="blue"
              hide-no-data
              item-text="name"
              item-value="url"
              label="Berries"
              placeholder="Start typing to Search"
              append-icon="mdi-database-search"
              @change="fetchBerry()"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Berries',

  components: {},

  data: () => ({
    berries: [],
    search: '',
    loadingList: true
  }),

  methods: {
    fetchBerry () {
      const parts = this.search.split('/')
      const id = parts[parts.length - 2]
      this.$router.push({ name: 'berry', params: { berry: id } })
    }
  },

  mounted: function () {
    this.$store.dispatch('berries/getAllBerries')
      .then(berry => {
        this.loadingList = false
        this.berries = berry
      }).catch(error => {
        this.$store.commit('utils/setVisibility', true)
        this.$store.commit('utils/setDialogTitle', 'ERROR')
        this.$store.commit('utils/setMessage', error)
      })
  }
}
</script>

<style scoped lang='scss'>
</style>
