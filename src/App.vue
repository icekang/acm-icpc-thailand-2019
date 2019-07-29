<template>
<v-app v-scroll="onScroll">
    <v-toolbar :color="colorByScroll" fixed flat>
      <router-link
          to = "/"
          tag="img"
          :src='require("@/assets/logo.png")'
          height = 70%
          contain
          position = left
          :style = "{cursor: 'pointer'}"
      >
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <router-link to="/foo">Go to Foo</router-link> -->
        <v-btn class = "toolbar-item-text" to = "/" flat>Home</v-btn>
        <v-btn class = "toolbar-item-text" flat>Schedule</v-btn>
        <v-btn class = "toolbar-item-text" to = "/Rules" flat>Rules</v-btn>
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
        <v-btn large round depressed color="pink" dark id = "register_btn">Register</v-btn>
      </div>
      <div class="content px-5 mb-2 pt-5">
      </div>
    </div>
    <transition name = "fade" mode = "out-in" duration = '400'>
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color = "pink"
      v-if = "show"
    >
      <v-icon>assignment</v-icon>
    </v-btn>
</v-app>
</template>

<script>
export default {
  data: () => ({
    offsetTop: 0
  }),
  computed: {
    colorByScroll: function() {
      return "rgba(0,0,0," + this.transparency() + ")"
    },
    show: function () {
      console.log("div")
      var div = document.getElementById("register_btn");
      if ( div ) {
        var rect = div.getBoundingClientRect();
        console.log("Coordinates: " + this.offsetTop + "px, " + rect.bottom + "px");
        return rect.bottom <= 0
      }
      return false
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
    },
  },

  name: 'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
#main {
  background-image: linear-gradient(#2C5E92 0%, #552F6D 80%);
  // background-color: #e2e68d;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
