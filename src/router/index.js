import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Robots from '@/components/Robots'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  hashbang: false,
  history: true,
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/robots',
      name: 'Robots',
      component: Robots
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/*',
      name: 'Home',
      component: Home
    }
  ]
})
