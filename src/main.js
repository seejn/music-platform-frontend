import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Layout from './pages/Layout.vue'
import Navbar from './components/Header/Navbar.vue'
import UserNav from './components/Header/UserNav.vue'
import ArtistNav from './components/Header/ArtistNav.vue'
import AdminNav from './components/Header/AdminNav.vue'
import GuestNav from './components/Header/GuestNav.vue'
import Sidebar from './components/Sidebar/Sidebar.vue' 
import Footer from './components/Footer/Footer.vue' 
import AdminSidebar from './components/Sidebar/AdminSidebar.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


import router from './router.js'
import store from './store/store.js'


import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement
  } from 'chart.js'
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement
  )


createApp(App)
.component("Layout", Layout)
.component("Navbar", Navbar)
.component("UserNav", UserNav)
.component("ArtistNav", ArtistNav)
.component("AdminNav", AdminNav)
.component("GuestNav", GuestNav)
.component("Sidebar", Sidebar)
.component("Footer", Footer)
.component("AdminSidebar",AdminSidebar)
.use(router)
.use(store)
.mount('#app')
