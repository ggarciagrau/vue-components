<script setup>
import { ref } from 'vue';
import ComponentLifecycle from './components/ComponentLifecycle.vue';

const isVisible = ref(true);
</script>

<template>
  <button @click="isVisible = !isVisible">Switch visibility</button>
  <ComponentLifecycle v-if="isVisible"/>
</template>

<style scoped></style>
