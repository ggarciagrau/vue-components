<script>

import { computed } from 'vue';

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            default: "Martínez"
        }
    },

    setup(props) {
        const fullname = computed(() => props.name + " " + props.lastname)

        return {
            fullname
        }
    }
}

</script>
<template>
    <p>From props: {{ name }} {{ lastname }}</p>
    <p>From computed: {{ fullname }}</p>
</template>