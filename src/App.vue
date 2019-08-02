<template>
  <v-app v-scroll="onScroll">
    <v-toolbar :color="colorByScroll" fixed flat>
      <router-link
        to="/"
        tag="img"
        height="70%"
        contain
        position="left"
        :src="logoByScroll"
        :style="{cursor: 'pointer'}"
      ></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :color="colorToolbarTextByScroll" to="/" flat>Home</v-btn>
        <v-btn :color="colorToolbarTextByScroll" flat>Schedule</v-btn>
        <v-btn :color="colorToolbarTextByScroll" to="/Rules" flat>Rules</v-btn>
        <v-btn :color="colorToolbarTextByScroll" flat>Hosts</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-parallax :src='require("@/assets/red-castle.jpg")' height=450 style="padding: 0 !important;">
      <div id="main" style="position: absolute; z-index: 6;">
        <div class="px-5 mt-5 pt-5">
          <h1 class="text-shadow text-title">ICPC Regional Contest 2019</h1>
        </div>
        <div class="px-5 mt-2">
          <h2 class="text-shadow text-body">Hosted by Faculty of Engineering</h2>
          <h2 class="text-shadow text-body">Chulalongkorn University</h2>
        </div>
        <div class="text-xs pt-5 px-5">
          <v-btn large round depressed color="#6b0000" dark id="register_btn" ref="register_btn">Register</v-btn>
        </div>
        <div class="content px-5 mb-2 pt-5"></div>
      </div>
      <div class="shadow" style="z-index: 5;"></div>
    </v-parallax>
    <transition name="fade" mode="out-in" duration="400">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <transition name="slide-fade">
      <v-btn fixed dark fab bottom right large color="#6b0000" v-if="show_float_btn">
        <v-icon>edit</v-icon>
      </v-btn>
    </transition>
  </v-app>
</template>

<script>
const logo_black = require("@/assets/logo-black.png")
const logo_white = require("@/assets/logo.png")
export default {
  data: () => ({
    offsetTop: 0,
    show_float_btn: false,
    logo_black: logo_black,
    logo_white: logo_white
  }),
  computed: {
    logoByScroll: function() {
      return this.offsetTop == 0 ? this.logo_black : this.logo_white
    },
    colorByScroll: function() {
      return "rgba(0,0,0," + this.transparency() + ")";
    },
    colorToolbarTextByScroll: function() {
      return this.offsetTop == 0 ? "black" : "white"
    }
  },
  methods: {
    transparency: function() {
      if (this.offsetTop > 7) {
        return 0.7;
      } else {
        return this.offsetTop / 10;
      }
    },
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      var div = this.$refs.register_btn.$el;
      if (div) {
        var rect = div.getBoundingClientRect();
        return (this.show_float_btn = rect.bottom <= 0);
      }
      return (this.show_float_btn = false);
    }
  },

  name: "App",
  components: {}
};
</script>

<style lang="less" scoped>
.v-parallax content {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.shadow {
  z-index: 5;
  background-image: linear-gradient(to bottom, transparent 75%, #000000);
  height: 100%;
  widows: 100%;
}
.text-shadow {
  text-shadow: 2px 2px 4px #000000;
  color: white;
}
.text-title {
  font-size: 6vw;
}
.text-body {
  font-size: 2vw;
}
.content {
  color: white;
}
.toolbar-item-text {
  color: white !important;
}
h1 {
  color: white;
  font-size: 5em;
}
h2 {
  color: white;
  font-size: 3em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
