<script setup>

import { ref } from 'vue';

const modalIsVissible = ref(false);

const toggle = () => modalIsVissible.value = !modalIsVissible.value;

</script>

<template>
    <div>
        <button v-if="!modalIsVissible" @click="toggle">Open modal</button>
        <Teleport to="#modalWrapper">
            <div v-show="modalIsVissible" class="modal">
                <h1>Modal</h1>
                <p>Modal content</p>
                <button @click="toggle">Close</button>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.modal {
    border-collapse: collapse;
    border: 5px solid black;
    width: 30%;
}
</style>