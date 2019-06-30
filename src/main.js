// Импортируем зависимости
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Slide from './components/Slide'

Vue.use(VueRouter)

const router = new VueRouter({
 routes: [
   {
     path: '/',
     name:'home',
     component: Home,
   },
   {
     path: '/about',
     name:'about',
     component: About
   },
   {
     path: '/contacts',
     name:'contacts',
     component: Contacts
   },
   {
     path: '/slide/:id',
     name:'slide',
     component: Slide,
     props: true,
   },
 ]
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})