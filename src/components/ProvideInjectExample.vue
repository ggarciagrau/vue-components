<script>

import { inject } from 'vue';

export default {

    setup() {
        const { name, lastname } = inject('user');

        return {
            name,
            lastname
        }
    }
}

</script>

<template>
    <p>{{ name }} {{ lastname }}</p>
</template>