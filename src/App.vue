<template>
  <div id="App">
    <v-app id="inspire">
      <Header id="header"></Header>
      <Title></Title>
      <About></About>
      <Skill></Skill>
      <Work></Work>
      <Contact></Contact>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'App',

  components: {
    Header,
    Title,
    About,
    Skill,
    Work,
    Contact,
  },
  data() {
    return {
      // text: 'ここに文字を記入する。'
    }
  }
};
</script>
