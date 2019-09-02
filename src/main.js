import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/https'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost.:8080';  //设置一个类似base_url的请求路径
global.axios = axios;  //设置一个全局axios便于调用
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
