<script setup lang="ts">
const counter = useCounter()
function clickme() {
  console.log('click');
}

const { data } = await useFetch('/api/ninja?name=John', {
  method: 'POST',
  body: {
    age: 30
  }
})
console.log('ninja data: ',
  data.value.message)
</script>

<template>
  {{ data }}
  <h2>Hello Index</h2>
  <v-btn @click="clickme" color="primary" variant="outlined">Primary</v-btn>

  <div>
    counter value: {{ counter.n }}
  </div>
  <v-btn @click="counter.increment()" color="primary">+1</v-btn>
  <v-btn @click="counter.decrementToZero()" color="primary">reset</v-btn>

  <pre>
    {{ counter.$state }}
  </pre>
</template>
