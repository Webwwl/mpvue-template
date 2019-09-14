import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import './style/index.scss'
import $http from '@/lib/http'

Vue.prototype.$http = $http
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
