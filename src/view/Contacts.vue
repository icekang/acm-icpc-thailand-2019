<template>
  <div class="px-5 my-5" style="max-width:900px; margin: 0 auto;">
    <h1>Host</h1>
    <div v-for="(item, index) in contacts" :key="index">
      <ContactPart
        :name="item.name"
        :coordinates="item.coordinates"
        :contact_person="item.contact_person"
        :email="item.email"
        :tel="item.tel"
      ></ContactPart>
    </div>
    <h1>Other Hosts</h1>
    <div v-for="(item, index) in contacts_others" :key="'others-' + index">
      <ContactPartImg :name="item.name" :img="item.img"></ContactPartImg>
    </div>
  </div>
</template>
<script>
import ContactPart from '../components/ContactPart.vue'
import ContactPartImg from '../components/ContactPartImg.vue'

export default {
  name: 'App',
  components: { ContactPart, ContactPartImg },
  data: () => ({
    contacts: [
      {
        name: 'Faculty of Engineering, Chulalongkorn University',
        coordinates: {
          0: {
            full_name: 'Faculty of Engineering, Chulalongkorn University',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      }
    ],
    contacts_others: [
      {
        name: 'Prince of Songkla University Hat Yai Campus',
        img: 'psu-2-logo.png'
      },
      {
        name: "King Mongkut's University of Technology North Bangkok",
        img: 'kmutnb-logo.jpg'
      },
      {
        name: 'Kasetsart University Bangkok',
        img: 'ku-logo.png'
      },
      {
        name: 'Khonkaen University',
        img: 'kku-logo.gif'
      },
      {
        name: 'Prince of Songkla University Phuket Campus',
        img: 'psu-phuket-2-logo.png'
      },
      {
        name: 'Chiangmai University',
        img: 'cmu-logo.png'
      },
      {
        name: 'University of Phayao',
        img: 'up-logo.png'
      },
      {
        name: 'Mahidol University',
        img: 'mu-logo.png'
      },
      {
        name: 'Mahasarakham University',
        img: 'msu-logo.png'
      },
      {
        name: 'Burapha University',
        img: 'bu-logo.jpg'
      },
      {
        name: 'Kasetsart University Sriracha Campus',
        img: 'ku-src-logo.png'
      }
    ]
  })
}
</script>
<style>
</style>