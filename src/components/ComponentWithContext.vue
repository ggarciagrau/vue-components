<script>
export default {
    props: {
        name: String
    },
    setup(props, context) {

        // Also can access events emits and slots
        const { attrs, expose } = context;

        // Attributes are extraneous non-props passed variables
        const animal = attrs.animal ? attrs.animal : 'Parakeet';
        
        // Used to limit the exposed properties when the component instance is accessed by a parent component
        expose({
            name: 'Kiko',
            sex: 'male'
        })

        return {
            animal
        }
    }
}
</script>

<template>
    {{ name }} with {{ animal }}
</template>