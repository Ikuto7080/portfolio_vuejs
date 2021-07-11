<template>
  <div>
      <Title></Title>
      <About></About>
      <Skill></Skill>
      <Work></Work>
      <Contact></Contact>
  </div>
</template>

<script>

import Title from '../components/Title.vue'
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Work from '../components/Work.vue'
import Contact from '../components/Contact.vue'


export default {
  name: 'home',
  components: {
    Title,
    About,
    Skill,
    Work,
    Contact,
  }
}
</script>

<style>

</style>