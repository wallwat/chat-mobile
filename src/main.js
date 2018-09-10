import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Chat from './views/Chat.vue'
import Example from './views/Example'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Chat },
  { path: '/exam', name: 'exam', component: Example },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
