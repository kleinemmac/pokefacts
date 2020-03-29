<template>
  <v-app>
    <ErrorDialog></ErrorDialog>
    <v-navigation-drawer app :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" :color="$vuetify.breakpoint.lgAndUp ? 'rgba(255,206,55,0.5)' : null">
      <v-list :color="$vuetify.breakpoint.lgAndUp ? 'rgba(255,206,55,0.05)' : null">
        <router-link to="/search">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Pokemon Search</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/locations">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-image-filter-hdr</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Locations</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/items">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pokeball</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Items</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/berries">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-fruit-cherries</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Berries</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/">
          <img src="./assets/pokefacts.png" :height="$vuetify.breakpoint.lgAndUp ? 50 : 40" />
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import ErrorDialog from './components/ErrorDialog'

export default {
  name: 'App',

  components: {
    ErrorDialog
  },

  data: () => ({
    drawer: true
  })
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
