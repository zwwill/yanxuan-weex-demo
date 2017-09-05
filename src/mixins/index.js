export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    }
  }
}
