import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import QuoteBoard from '@/components/QuoteBoard'
import AddQuote from '@/components/AddQuote'
import EditQuote from '@/components/EditQuote'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import About from '@/components/About'

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
      path: '/new',
      name: 'AddQuote',
      component: AddQuote
    },
    {
      path: '/edit',
      name: 'EditQuote',
      component: EditQuote
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
  ]
})