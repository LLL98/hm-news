import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 引入样式初始化
import './styles/bass.css'

// 引入字体图标
import './styles/iconfont.css'

// 引入rem适配
import 'lib-flexible'

// 公共组件
import HmHeader from './components/HmHeader.vue'
Vue.component('hm-header', HmHeader)

// 全局定义axios
import axios from 'axios'
// 设置axios请求的基地址
axios.defaults.baseURL = 'http://localhost:3000'
// 将axios挂载到vue实例上
Vue.prototype.$axios = axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
