<template>
  <div id="App">
    <v-app id="inspire">
      <Header id="header"></Header>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',

  components: {
    Header,
  },
  data() {
    return {
    }
  }
};
</script>
