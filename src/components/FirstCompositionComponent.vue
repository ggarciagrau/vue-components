<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated } from 'vue';

export default {
    // beforeCreated and created lifecycle events are replaced by setup function
    setup() {
        onBeforeMount(function () {
            console.log('On beofre mount')
        })
        onMounted(function () {
            console.log('Mounted')
        }),
        onBeforeUnmount(function() {
            console.log('On before umount')
        }),
        onUnmounted(function () {
            console.log('Unmounted')
        }),
        onBeforeUpdate(function() {
            console.log('On before update')
        }),
        onUpdated(function () {
            console.log('Updated')
        })
    }
}
</script>
<template>Composition</template>