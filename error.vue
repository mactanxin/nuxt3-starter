<template>
  <h1>Error</h1>
  <p>{{ error.statusCode }}</p>
</template>

<script setup>
defineProps('[error]')
</script>
