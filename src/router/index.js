import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import MySkills from '../views/MySkills.vue'
import MyPortfolio from '../views/MyPortfolio.vue'
import MyContact from '../views/MyContact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMe
  },
  {
    path: '/skills',
    name: 'skills',
    component: MySkills
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: MyPortfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: MyContact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
