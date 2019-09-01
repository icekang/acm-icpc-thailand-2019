import Vue from 'vue'
import Rules from './view/Rules.vue'
import Home from './view/Home.vue'
import Contest from './view/Contest.vue'
import Contacts from './view/Contacts.vue'

import RulePart from './components/RulePart.vue'

import App from './App.vue'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9id485Gn1Ounw7JWk-WfczIcbqnX1eNA',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
})

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/rules', component: Rules },
  { path: '/contest', component: Contest },
  { path: '/contacts', component: Contacts }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
