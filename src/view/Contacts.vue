<template>
  <div class="px-5 my-5" style="max-width:900px; margin: 0 auto;">
    <h1>Hosts</h1>
    <div v-for="(item, index) in contacts" :key="index">
      <ContactPart
        :name="item.name"
        :coordinates="item.coordinates"
        :contact_person="item.contact_person"
        :email="item.email"
        :tel="item.tel"
      ></ContactPart>
    </div>
  </div>
</template>
<script>
import ContactPart from '../components/ContactPart.vue'

export default {
  name: 'App',
  components: { ContactPart },
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
      },
      {
        name: 'Prince of Songkla University Hat Yai Campus',
        coordinates: {
          0: {
            full_name: 'Prince of Songkla University Hat Yai Campus',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: "King Mongkut's University of Technology North Bangkok",
        coordinates: {
          0: {
            full_name: "King Mongkut's University of Technology North Bangkok",
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Kasetsart University Bangkok',
        coordinates: {
          0: {
            full_name: 'Kasetsart University Bangkok',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Khonkaen University',
        coordinates: {
          0: {
            full_name: 'Khonkaen University',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Prince of Songkla University Phuket Campus',
        coordinates: {
          0: {
            full_name: 'Prince of Songkla University Phuket Campus',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Chiangmai University',
        coordinates: {
          0: {
            full_name: 'Chiangmai University',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'University of Phayao',
        coordinates: {
          0: {
            full_name: 'University of Phayao',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Mahidol University',
        coordinates: {
          0: {
            full_name: 'Mahidol University',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Mahasarakham University',
        coordinates: {
          0: {
            full_name: 'Mahasarakham University',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Burapha University',
        coordinates: {
          0: {
            full_name: 'Burapha University',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
        contact_person: 'Athasit Surarerks',
        email: 'athasit@cp.eng.chula.ac.th',
        tel: '02-218-6957'
      },
      {
        name: 'Kasetsart University Sriracha Campus',
        coordinates: {
          0: {
            full_name: 'Kasetsart University Sriracha Campus',
            lat: '13.736701',
            lng: '100.533212'
          }
        },
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