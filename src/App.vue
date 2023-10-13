<script setup>
import { shallowRef } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import ByeWorld from './components/ByeWorld.vue'

const dynamicComponent = shallowRef(HelloWorld)

const switchComponent = () => {
  if (dynamicComponent.value == HelloWorld) {
    dynamicComponent.value = ByeWorld
    return
  }

  dynamicComponent.value = HelloWorld
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <component :is="dynamicComponent" />
      <button v-on:click="switchComponent">Switch component</button>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped></style>
