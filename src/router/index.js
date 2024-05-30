// router.js
import { createRouter, createWebHistory } from 'vue-router';
import User from '../components/Navbar/User.vue';
import Artist from '../components/Navbar/Artist.vue';
import Guest from '../components/Navbar/Guest.vue'
import Admin from '../components/Navbar/Admin.vue'




const routes = [
  {
    path:'/user',
    name:'user',
    component:User
  },
  {
    path:'/artist',
    name:'artist',
    component:Artist
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
  
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
