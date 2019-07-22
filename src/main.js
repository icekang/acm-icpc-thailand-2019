import Vue from 'vue'
import Rules from './view/Rules.vue'

import App from './App.vue'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/Rules', component: Rules },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
