<template>
    <div class="text-center pt-5">
        <img src="../assets/welcome.png" max-width="100%">
        <p class="headline py-5">
            Select <router-link to="/search">Pokemon Search</router-link> to learn more about your favorite Pokemon.
        </p>
        <img class="pokeball" src="../assets/pokeball.png">
        <p class="headline py-5">
            Select <router-link to="/locations">Locations</router-link> to view an interactive map of Pokemon by location.
        </p>
        <img class="pokeball" src="../assets/pokeball.png">
        <p class="headline py-5">
            Select <router-link to="/items">Items</router-link> to learn more about available items and where to find them.
        </p>
    </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},

  data: () => ({
  })
}
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}
.pokeball {
    width: 50px;
    height: 50px;
}
</style>
