<script>
export default {
    name: "ComponentLifeCycle",
    data() {
        return {
            text: 'Hello vue',
            counter: 0
        }
    },
    beforeCreate() {
        // events and lifecycle
        console.log('Before create', this.$data, this.$el)
    },
    created() {
        // injections and reactivity
        console.log('Created', this.$data, this.$el)
    },
    beforeMount() {
        console.log('Before mount', this.$data, this.$el)
    },
    mounted() {
        // $el (component instance rendered)
        console.log('Mounted', this.$data, this.$el)
    },
    beforeUnmount() {
        console.log('Before ummount', this.$data, this.$el)
    },
    unmounted() {
        // it's considered unmounted when all the childs are unmounted and reactive features are finished
        console.log('Unmounted', this.$data, this.$el)
    },
    beforeUpdate() {
        // update is prepared in vdom
        console.log('Before update', this.$data, this.$el)
    },
    updated() {
        // update is vissible
        console.log('Updated', this.$data, this.$el)
    }
}
</script>

<template>
    <div>{{ text }} {{ counter }}</div>
    <button @click="counter++">Increment</button>
</template>