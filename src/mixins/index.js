export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
      isIpx() {
          return weex.config.env.deviceModel === 'iPhone10,3';
      }
  }
}
