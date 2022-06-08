import Vue from 'vue'
import App from './App.vue'

import vueRouter from 'vue-router'
import router from '@/router'

Vue.config.productionTip = false

Vue.use (vueRouter)

new Vue ({
	el: '#app', render: h => h (App), router,
})
