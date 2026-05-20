import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import MeetTheCEO from '../MeetTheCEO.vue'
import TaxServices from '../TaxServices.vue'
import Bookkeeping from '../Bookkeeping.vue'
import Contact from '../Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meet-ceo',
    name: 'MeetTheCEO',
    component: MeetTheCEO
  },
  {
    path: '/tax-services',
    name: 'TaxServices',
    component: TaxServices
  },
  {
    path: '/bookkeeping',
    name: 'Bookkeeping',
    component: Bookkeeping
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
