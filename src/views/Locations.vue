<template>
    <div class="text-center pt-5">
      <img class="img-fluid" src="../assets/locations.png">
      <p class="pt-5">
        Search for a location.
      </p>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="search"
              :items="locations"
              :loading="loadingList"
              color="blue"
              hide-no-data
              item-text="name"
              item-value="url"
              label="Locations"
              placeholder="Start typing to Search"
              append-icon="mdi-database-search"
              @change="fetchLocation()"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Locations',

  components: {},

  data: () => ({
    locations: [],
    search: '',
    loadingList: true
  }),

  methods: {
    fetchLocation () {
      const parts = this.search.split('/')
      const id = parts[parts.length - 2]
      this.$router.push({ name: 'location', params: { location: id } })
    }
  },

  mounted: function () {
    this.$store.dispatch('locations/getAllLocations')
      .then(location => {
        this.loadingList = false
        this.locations = location
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
