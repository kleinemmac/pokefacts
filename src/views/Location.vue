<template>
    <div class="pt-5">
      <v-container>
        <v-row>
          <v-col>
            <router-link to="/locations">
              <v-btn rounded color="primary">
                <v-icon left>mdi-arrow-left</v-icon> Back to Locations
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="text-center pt-5">
          <v-col>
            <div v-if="loadingLocation">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div v-else-if="location !== null">
              <p class="font-weight-bold">
                {{ location.name }}
              </p>
              <v-simple-table class="pt-5">
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Region</td>
                      <td>{{ location.region.name }}</td>
                    </tr>
                    <tr>
                      <td>Areas</td>
                      <td>{{ getList(location.areas) }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Location',

  components: {},

  data: () => ({
    location: null,
    loadingLocation: true
  }),

  methods: {
    checkNull (field) {
      return field !== null ? field : '-'
    },
    getList (list) {
      if (!list.length) {
        return '-'
      } else {
        let val = ''
        list.forEach((location, index) => {
          if (index < list.length - 1) {
            val += location.name + ', '
          } else {
            val += location.name
          }
        })
        return val
      }
    }
  },

  mounted: function () {
    this.$store.dispatch('locations/getLocation', 'https://pokeapi.co/api/v2/location/' + this.$route.params.location)
      .then(location => {
        this.location = location
        this.loadingLocation = false
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped lang='scss'>
</style>
