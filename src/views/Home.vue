<template>
  <div>
      <Title></Title>
      <About></About>
      <Skill></Skill>
      <Service></Service>
      <Work></Work>
  </div>
</template>

<script>

import Title from '../components/Title.vue'
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Work from '../components/Work.vue'
import Service from '../components/Service.vue'


export default {
  name: 'home',
  components: {
    Title,
    About,
    Skill,
    Work,
    Service
  }
}
</script>

<style>

</style>