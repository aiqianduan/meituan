import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 阻止启用生产消息
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
