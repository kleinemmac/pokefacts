<template>
    <div class="pt-5">
      <v-container>
        <v-row>
          <v-col>
            <router-link to="/berries">
              <v-btn rounded color="primary">
                <v-icon left>mdi-arrow-left</v-icon> Back to Berries
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="text-center pt-5">
          <v-col>
            <div v-if="loadingBerry">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div v-else-if="berry !== null">
              <p class="font-weight-bold">
                {{ berry.name }}
              </p>
              <v-simple-table class="pt-5">
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Growth Time</td>
                      <td>{{ berry.growth_time }}</td>
                    </tr>
                    <tr>
                      <td>Max Harvest</td>
                      <td>{{ berry.max_harvest }}</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>{{ berry.size }}</td>
                    </tr>
                    <tr>
                      <td>Smoothness</td>
                      <td>{{ checkNull(berry.smoothness) }}</td>
                    </tr>
                    <tr>
                      <td>Firmness</td>
                      <td>{{ berry.firmness.name }}</td>
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
  name: 'Berry',

  components: {},

  data: () => ({
    berry: null,
    loadingBerry: true
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
        list.forEach((berry, index) => {
          if (index < list.length - 1) {
            val += berry.name + ', '
          } else {
            val += berry.name
          }
        })
        return val
      }
    }
  },

  mounted: function () {
    this.$store.dispatch('berries/getBerry', 'https://pokeapi.co/api/v2/berry/' + this.$route.params.berry)
      .then(berry => {
        this.berry = berry
        this.loadingBerry = false
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped lang='scss'>
</style>
