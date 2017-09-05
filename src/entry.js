/**
 * Created by zwwill on 2017/8/28.
 */
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'

// const meta = weex.requireModule('meta');


// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

// 配置 viewport 的宽度为 750px
// meta.setViewport({
//     width: 750
// });

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router, store }, App));

router.push('/');
