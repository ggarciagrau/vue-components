<script>
import Counter from "@/mixins/counter"

// In case of variable or method overlapping, component ones are prioritized
export default {
    name: 'MixinComponent',
    mixins: [Counter]
}
</script>

<template>
    Mixin component
    <span>{{ value }}</span>
    <button @click="increment">Increment</button>
</template>