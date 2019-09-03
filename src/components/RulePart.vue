<template>
  <div>
    <h1>{{ title }}</h1>
    <br />
    <p>{{ introduction }}</p>
    <br /><br />
    <div v-for="(item, index) in body" :key="index">
      <h2 class="display-1">{{ item.head }}</h2>
      <br />
      <p v-for="(item, index) in item.texts" :key="index">{{ item.text }}</p>
      <br /><br />
    </div>
  </div>
</template>
<script>
export default {
  name: 'RulePart',
  props: {
    title: String,
    introduction: String,
    body: Array
  }
}
</script>
<style scoped>
h1 {
  font-size: 5rem;
  color: #6b0000;
  font-family: Playfair Display, Times, serif;
}
.display-1 {
  color: #6b0000;
}
p {
  font-size: 1.3rem;
  text-indent: 2em;
}
li {
  font-size: 1.2rem;
}
</style>