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
    <h1>Others</h1>
    <div v-for="(item, index) in contacts_others" :key="'others-' + index">
      <ContactPartImg
        :name="item.name"
        :img="item.img"
        :contact_person="item.contact_person"
        :email="item.email"
        :tel="item.tel"
      ></ContactPartImg>
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
        img: 'psu-2-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: "King Mongkut's University of Technology North Bangkok",
        img: 'kmutnb-logo.jpg',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Kasetsart University Bangkok',
        img: 'ku-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Khonkaen University',
        img: 'kku-logo.gif',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Prince of Songkla University Phuket Campus',
        img: 'psu-phuket-2-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Chiangmai University',
        img: 'cmu-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'University of Phayao',
        img: 'up-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Mahidol University',
        img: 'mu-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Mahasarakham University',
        img: 'msu-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Burapha University',
        img: 'bu-logo.jpg',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Kasetsart University Sriracha Campus',
        img: 'ku-src-logo.png',
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      }
    ]
  })
}
</script>
<style>
</style>