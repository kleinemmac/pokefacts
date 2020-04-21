<template>
    <div class="text-center pt-5">
      <img class="img-fluid" src="../assets/items.png">
      <p class="pt-5">
        Search for items by name.
      </p>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="search"
              :items="items"
              :loading="loadingList"
              color="blue"
              hide-no-data
              item-text="name"
              item-value="url"
              label="Items"
              placeholder="Start typing to Search"
              append-icon="mdi-database-search"
              @change="fetchItem()"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div v-if="loadingItem">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div v-else-if="item !== null">
              <router-link :to="{ name: 'item', params: { item: item.id } }">
                <img :src="item.sprites.default" id="item">
                <p>
                  {{ item.name }}
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
  name: 'Items',

  components: {},

  data: () => ({
    items: [],
    search: '',
    loadingList: true,
    loadingItem: false,
    item: null
  }),

  methods: {
    fetchItem () {
      this.loadingItem = true
      this.$store.dispatch('items/getItem', this.search)
        .then(item => {
          this.item = item
          this.loadingItem = false
        }).catch(error => {
          this.$store.commit('utils/setVisibility', true)
          this.$store.commit('utils/setDialogTitle', 'ERROR')
          this.$store.commit('utils/setMessage', error)
        })
    }
  },

  mounted: function () {
    this.$store.dispatch('items/getAllItems')
      .then(item => {
        this.loadingList = false
        this.items = item
      }).catch(error => {
        this.$store.commit('utils/setVisibility', true)
        this.$store.commit('utils/setDialogTitle', 'ERROR')
        this.$store.commit('utils/setMessage', error)
      })
  }
}
</script>

<style scoped lang='scss'>
  #item {
    width: 10%;
  }
  a {
    text-decoration: none;
  }
</style>
