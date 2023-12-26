<script>

import { reactive, ref } from 'vue';

export default {
    setup() {
        // Ref creates reactvity focused on a value or a reference
        const text = ref("Hello world")
        const counter = ref(0)

        // Reactive creates a deep reactivity for all the properties
        const bird = reactive({
            name: "budgie"
        });

        const incrementCounter = () => counter.value++;

        const changeBirdName = () => {
            if (bird.name == 'budgie') {
                bird.name = 'parakeet';
                return;
            }

            bird.name = 'budgie';
        }

        return {
            text,
            counter,
            bird,
            incrementCounter,
            changeBirdName
        }
    }
}
</script>

<template>
    <div>{{ text }}</div>
    <div @click="incrementCounter">{{ counter }}</div>
    <div>{{ bird.name }} <button @click="changeBirdName">Change</button></div>
</template>