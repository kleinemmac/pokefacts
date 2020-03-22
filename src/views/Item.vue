<template>
    <div class="pt-5">
      <v-container>
        <v-row>
          <v-col>
            <router-link to="/items">
              <v-btn rounded color="primary">
                <v-icon left>mdi-arrow-left</v-icon> Back to Items
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col>
            <div v-if="loadingItem">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div v-else-if="item !== null">
              <img :src="item.sprites.default" id="item">
              <p>
                {{ item.name }}
              </p>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Cost</td>
                      <td>{{ checkNull(item.cost) }}</td>
                    </tr>
                    <tr>
                      <td>Fling Power</td>
                      <td>{{ checkNull(item.fling_power) }}</td>
                    </tr>
                    <tr>
                      <td>Fling Effect</td>
                      <td>{{ checkNull(item.fling_effect) }}</td>
                    </tr>
                    <tr>
                      <td>Attributes</td>
                      <td>{{ getList(item.attributes) }}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>{{ checkNull(item.category.name) }}</td>
                    </tr>
                    <tr>
                      <td>Held By Pokemon</td>
                      <td>{{ getList(item.held_by_pokemon) }}</td>
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
  name: 'Item',

  components: {},

  data: () => ({
    item: null,
    loadingItem: true
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
        list.forEach((item, index) => {
          if (index < list.length - 1) {
            val += item.name + ', '
          } else {
            val += item.name
          }
        })
        return val
      }
    }
  },

  mounted: function () {
    this.$store.dispatch('items/getItem', 'https://pokeapi.co/api/v2/item/' + this.$route.params.item)
      .then(item => {
        this.item = item
        this.loadingItem = false
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped lang='scss'>
  #item {
    width: 10%;
  }
</style>
