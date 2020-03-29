<template>
  <v-dialog v-model="visible" width="250">
    <v-card>
      <v-card-title class="headline grey lighten-2 justify-center" primary-title>{{ dialogTitle }}</v-card-title>
      <v-card-text class="text-center pt-2">
        {{ message }}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ErrorDialog',

  components: {},

  data: () => ({
  }),

  methods: {
    closeDialog () {
      this.$store.commit('utils/setVisibility', false)
    }
  },

  computed: {
    ...mapState('utils', ['visible', 'dialogTitle', 'message'])
  },

  mounted: function () {
  }
}
</script>

<style scoped lang='scss'>
</style>
