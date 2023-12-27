<script>

import { computed, ref } from 'vue';

export default {
    setup() {
        const name = ref("Roberto");
        const salutation = computed(() => "Hello " + name.value)

        return {
            name,
            salutation
        }
    }
}
</script>

<template>
    <input v-model="name" />
    <p>{{ salutation }}</p>
</template>