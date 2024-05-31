// router.js
import { createRouter, createWebHistory } from 'vue-router';

import User from '../components/Navbar/User.vue';
import ArtistNav from '../components/Navbar/ArtistNav.vue';
import Guest from '../components/Navbar/Guest.vue'
import Admin from '../components/Navbar/Admin.vue'
import HomePage from '../components/Artist/HomePage.vue';
import Songs from '../components/Artist/Songs.vue';
import Album from  '../components/Artist/Album.vue';
import ArtisProfile from '../components/User/ArtisProfile.vue';

import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import Home from '../components/Home.vue';
import SignUpArtist from '../components/SignUpArtist.vue';



const routes = [
  {

    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/sign',
    name:'sign',
    component:SignUp
  },
  {
    path:'/sign-artist',
    name:'sign-artist',
    component:SignUpArtist
  },
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
  {
    path:'/songs',
    name:'songs',
    component:Songs
  },
  {
    path:'/album',
    name:'album',
    component:Album
  },
  {
    path:'/artist-profile',
    name:'artist-profile',
    component:ArtisProfile
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
