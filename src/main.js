import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Layout from './pages/Layout.vue'
import Navbar from './components/Header/Navbar.vue'
import Sidebar from './components/Sidebar/Sidebar.vue' 
import Footer from './components/Footer/Footer.vue' 

import router from './router.js'

createApp(App)
.component("Layout", Layout)
.component("Navbar", Navbar)
.component("Sidebar", Sidebar)
.component("Footer", Footer)
.use(router)
.mount('#app')
