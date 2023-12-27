<script setup>

import { ref, computed } from "vue";

const props = defineProps({
    name: String
})

const name = ref(props.name || "Roberto");
const lastname = ref("Martínez")

const fullname = computed(() => name.value + " " + lastname.value)

defineExpose({
    fullname
})

</script>

<template>
    <p>{{ fullname }}</p>
</template>