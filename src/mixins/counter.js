export default {
  data() {
    return { value: 0 }
  },
  beforeMount() {
    console.log('Before mount mixin', this.$data)
  },
  methods: {
    increment() {
      this.value++
    }
  }
}
