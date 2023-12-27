<script>

import { ref } from 'vue';

export default {
    setup() {
        const button = ref(null);

        return {
            button
        }
    }
}

</script>

<template>
    <button ref="button" @click="console.log(button)">My button</button>
</template>