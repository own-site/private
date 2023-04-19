import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import demo from '@/components/test/demo'
import mainpage from '@/components/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: demo
    // },
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    }
  ]
})
