<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <NavBar/>
    <v-content class="mx-4 mb-4">
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__slower"
      >
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  
</style>
