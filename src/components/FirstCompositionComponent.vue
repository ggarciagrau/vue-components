<script>
import { onBeforeMount } from 'vue';

export default {
    // beforeCreated and created lifecycle events are replaced by setup function
    setup() {
        onBeforeMount(function () {
            console.log('On beofre mount')
        })
    }
}
</script>
<template>Composition</template>