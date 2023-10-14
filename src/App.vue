<script setup>
import { ref } from 'vue';


const textIsVissible = ref(true);

const displayText = () => {
  if (textIsVissible.value) {
    textIsVissible.value = false
    return
  }

  textIsVissible.value = true
}
</script>

<template>
  <button @click="displayText">Text</button>
  <transition name="bounce">
    <p v-show="textIsVissible" style="text-align: center;">Hello world</p>
  </transition>
</template>

<style scoped>

.bounce-enter-active {
  animation: bounce 1s;
}

.bounce-leave-active {
  animation: bounce 1s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
    color: red;
  }
  100% {
    transform: scale(1);
  }
}
</style>
