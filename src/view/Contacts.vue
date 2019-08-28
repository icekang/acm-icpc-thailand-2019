<template>
  <div class="px-5 mx-5 my-5">
    <h1>Hosts</h1>
    <!-- 13.7396974,100.5308618,15.9z -->
    <gmap-map ref="mymap" :center="startLocation" :zoom="17" style="width: 100%; height: 300px">
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened = false"
      >
        {{ infoContent }}
      </gmap-info-window>
      <gmap-marker
        v-for="(item, key) in coordinates"
        :key="key"
        :position="getPosition(item)"
        :clickable="true"
        @click="toggleInfo(item, key)"
      />
    </gmap-map>
    <h2 class="display-1">Chulalongkorn University</h2>
    <p>Athasit Surarerks<br />athasit@cp.eng.chula.ac.th<br />02-218-6957</p>
  </div>
</template>
<script>
import { makeRe } from 'minimatch'
export default {
  name: 'App',
  components: {},
  data: () => ({
    startLocation: {
      lat: 13.736701,
      lng: 100.533212
    },
    coordinates: {
      0: {
        full_name: 'Faculty of Engineering, Chulalongkorn University',
        lat: '13.736701',
        lng: '100.533212'
      }
    },
    infoPosition: null,
    infoContent: null,
    infoOpened: false,
    infoCurrentKey: null,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    }
  }),
  methods: {
    getPosition: function(marker) {
      console.log(marker)
      console.log(makeRe.lat)
      console.log(marker.lng)
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker)
      this.infoContent = marker.full_name
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened
      } else {
        this.infoOpened = true
        this.infoCurrentKey = key
      }
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 5rem;
  color: #6b0000;
  font-family: Playfair Display, Times, serif;
}
p {
  font-size: 1.3rem;
}
li {
  font-size: 1.2rem;
}
.display-1 {
  color: #6b0000;
}
</style>