import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  store,
  data: {
    message: 'Hello'
  },
  render: h => h(App)
}).$mount('#app')
