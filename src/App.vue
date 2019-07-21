<template>
<v-app v-scroll="onScroll">
    <v-toolbar :color="colorByScroll" fixed flat>
      <v-img
        :src='require("@/assets/logo.png")'
        height = 90%
        contain
        position = left
      >
      </v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <router-link to="/foo">Go to Foo</router-link> -->
        <v-btn class = "toolbar-item-text" flat>Home</v-btn>
        <v-btn class = "toolbar-item-text" flat>Schedule</v-btn>
        <v-btn class = "toolbar-item-text" flat>Rules</v-btn>
        <v-btn class = "toolbar-item-text" flat>Hosts</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div id = "main">
      <div class="px-5 mt-5 pt-5">
        <h1>Go Premium. Be happy.</h1>
      </div>
      <div class="px-5 mt-2">
        <h2>Premium sounds amazing. Listen to it offline and with no ad interruptions.</h2>
      </div>
      <div class="text-xs mt-5 pt-5 px-5">
        <v-btn large round depressed color="pink" dark>Register</v-btn>
      </div>
      <div class="content px-5 mb-2 pt-5">
      </div>
    </div>
    <Rules></Rules>
    <!-- <transition name = "slide">
      <router-view></router-view>
    </transition> -->
</v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Rules from './view/Rules'
export default {
  data: () => ({
    offsetTop: 0,
  }),
  computed: {
    colorByScroll: function() {
      return "rgba(0,0,0," + this.transparency() + ")"
    }
  },
  methods: {
    transparency: function () {
      if (this.offsetTop > 7) {
        return 0.7
      }
      else {
        return this.offsetTop/10
      }
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  },

  name: 'App',
  components: {
    // HelloWorld,
    Rules
  }
}
</script>

<style lang="less" scoped>
#main {
  background-color: #e2e68d;
}
.content {
  color: white;
}
.toolbar-item-text {
  color: white!important;
}
h1 {
  color: white;
  font-size: 80px;
}
h2 {
  color: white;
  font-size: 30px;
}
</style>
