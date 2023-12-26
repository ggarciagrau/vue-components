<script>
import { ref, reactive, watch } from 'vue';
export default {

    setup() {
        const counter = ref(0)

        const incrementCounter = () => counter.value++;

        watch(counter, (newValue, oldValue) => {
            console.log('Counter updated', 'old:' + oldValue, 'new:' + newValue)
        })

        const bird = reactive({
            name: "budgie"
        });

        const changeBirdName = () => {
            if (bird.name == 'budgie') {
                bird.name = 'parakeet';
                return;
            }

            bird.name = 'budgie';
        }

        // As vue internally creates a reference for each reactive property, we must specify the property.
        // Also we must call the property through a function to allow vue to find the reference and not just the current value
        watch(() => bird.name, (newValue, oldValue) => {
            console.log('Bird updated', newValue, oldValue)
        })

        return {
            counter,
            incrementCounter,
            bird,
            changeBirdName
        }
    }
}
</script>

<template>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increment</button>
    <div>{{ bird.name }} <button @click="changeBirdName">Change</button></div>
</template>