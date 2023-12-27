<script setup>
import { provide } from 'vue';
import ProvideInjectExample from './components/ProvideInjectExample.vue'

provide("user", {
  name: "Roberto",
  lastname: "Martínez"
})

</script>

<template>
  <ProvideInjectExample />
</template>

<style scoped></style>
