<template>
  <div>
    <h1>{{ title }}</h1>
    <br />
    <p>{{ introduction }}</p>
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