import Vue from 'vue'
import Router from 'vue-router'
import QuoteBoard from '@/components/QuoteBoard'
import AddQuote from '@/components/AddQuote'
import About from '@/components/About'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuoteBoard',
      component: QuoteBoard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'AddQuote',
      component: AddQuote
    },
  ]
})