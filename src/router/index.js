import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Commitments from '../views/Commitments.vue'
import News from '../views/News.vue'
import Carrier from '../views/Carrier.vue'
import Investors from '../views/Investors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrier',
    name: 'Carrier',
    component: Carrier
  },
  {
    path: '/investors',
    name: 'Investors',
    component: Investors
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/commitments',
    name: 'Commitments',
    component: Commitments
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
