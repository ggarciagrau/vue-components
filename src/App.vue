<script setup>
import { ref } from 'vue';

import MainMenu from './components/MainMenu.vue'

const menuIsVissible = ref(true);

const displayMenu = () => {
  if (menuIsVissible.value) {
    menuIsVissible.value = false
    return
  }

  menuIsVissible.value = true
}

</script>

<template>
  <button @click="displayMenu">Menu</button>
  <transition name="fade">
    <MainMenu v-show="menuIsVissible" />
  </transition>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
  border: 1px solid red;
}

.fade-leave-active {
  transition: opacity 3s ease;
  background-color: purple;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
