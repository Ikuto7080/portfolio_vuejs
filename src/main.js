import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueParticles from 'vue-particles'

// import VueTyperPlugin from 'vue-typer'

import "./sass/main.scss"

import router from './router'

Vue.config.productionTip = false
// Vue.use(VueTyperPlugin)
Vue.use(VueParticles)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
