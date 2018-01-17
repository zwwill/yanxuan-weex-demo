
let stream = weex.requireModule('stream');
export default {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        GET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://cdn.zwwill.com/yanxuan/' + api
                // url: 'http://10.242.69.181:8089/yanxuan/' + api
            }, callback)
        }

    }
}
