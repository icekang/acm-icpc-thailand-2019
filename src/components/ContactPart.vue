<template>
  <div class="mb-5">
    <gmap-map ref="mymap" :center="startLocation(coordinates)" :zoom="17" style="width: 100%; height: 300px;">
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
    <h2 class="my-display-1 pt-4">{{ name }}</h2>
    <p>{{ contact_person }}<br />{{ email }}<br />{{ tel }}</p>
  </div>
</template>
<script>
import { makeRe } from 'minimatch'
export default {
  name: 'ContactPart',
  props: {
    name: String,
    coordinates: Object,
    contact_person: String,
    email: String,
    tel: String
  },
  data: () => ({
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
  computed: {},
  methods: {
    startLocation: function(coordinates) {
      return {
        lat: parseFloat(coordinates[0].lat),
        lng: parseFloat(coordinates[0].lng)
      }
    },
    getPosition: function(marker) {
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
p {
  font-size: 1.3rem;
}
li {
  font-size: 1.2rem;
}
</style>