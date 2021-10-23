import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Commitments from '../views/Commitments.vue'
import News from '../views/News.vue'
import Carrier from '../views/Carrier.vue'
import Investors from '../views/Investors.vue'
import Releases from '../views/Releases.vue'
import Contacts from '../views/Contacts.vue'
import Report from '../views/Report.vue'
import Donat from '../views/Donat.vue'
import Subscription from '../views/Subscription.vue'
import Dividend from '../views/Dividend.vue'

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
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/releases',
    name: 'Releases',
    component: Releases
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/donat',
    name: 'Donat',
    component: Donat
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription
  },
  {
    path: '/dividend',
    name: 'Dividend',
    component: Dividend
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
