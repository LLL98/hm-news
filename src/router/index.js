import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入页面组件
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ]
})

export default router  