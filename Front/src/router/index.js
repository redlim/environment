import Vue from 'vue'
import Router from 'vue-router'
import AwHome from '@/components/AwHome'
import AwMap from '@/components/AwMap'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AwHome
    },
    {
      path: '/map',
      name: 'Map',
      component: AwMap
    }
  ]
})
