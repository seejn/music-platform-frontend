// router.js
import { createRouter, createWebHistory } from 'vue-router';
import User from '../components/Navbar/User.vue';
import ArtistNav from '../components/Navbar/ArtistNav.vue';
import Guest from '../components/Navbar/Guest.vue'
import Admin from '../components/Navbar/Admin.vue'
import HomePage from '../components/Artist/HomePage.vue';




const routes = [
  {
    path:'/user',
    name:'user',
    component:User
  },
  {
    path:'/artist',
    name:'artist',
    component:ArtistNav
  },
  {
    path:'/admin',
    name:'admin',
    component:Admin
  },
  {
    path:'/guest',
    name:'guest',
    component:Guest
  },
  {
    path:'/artist-home',
    name:'artist-home',
    component:HomePage
  },
  
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
