<script setup lang="ts">
const counter = useCounter()
function clickme() {
  console.log('click');
}
</script>

<template>
  <h2>Hello Index</h2>
  <v-btn @click="clickme" color="primary" variant="outlined">Primary</v-btn>

  <div>
    counter value: {{ counter.n }}
  </div>
  <v-btn @click="counter.increment()" color="primary">+1</v-btn>

  <pre>
    {{ counter.$state }}
  </pre>
</template>
