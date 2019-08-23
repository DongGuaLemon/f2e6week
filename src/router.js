import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import checkpage from './views/checkpage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/checkpage/:id',
      name: 'check',
      component: checkpage
    }
  ]
})
