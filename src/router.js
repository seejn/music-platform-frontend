import { createWebHistory, createRouter } from 'vue-router'

// component: () => import('./pages/Artist/Home.vue')
// search 
// logout 

export const adminNavRoutes = [
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
    },
    {
        path: '/admin/artists',
        name: 'Artists',
    },
]

export const artistNavRoutes = [
    {
        path: '/artist/upload',
        name: 'Upload',
        component: () => import('./pages/Artist/Upload.vue')
    },
    {
        path: '/artist/profile',
        name: 'My Profile',
        component: () => import('./pages/Artist/Profile.vue')
    },
    
]

export const userNavRoutes = [

]

export const guestNavRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Guest/Login.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('./pages/Guest/SignUp.vue')
    },
    {
        path: '/for-artist',
        name: 'For Artist',
        component: () => import('./pages/Guest/SignUpArtist.vue')
    },
]

export const commonRoutes = [
    {
        path: '/search',
        name: 'Search',
    },
]

export const landingRoute = [
    {
        path: '/',
        name: "LandingRoute",
        component: () => import('./pages/Landing.vue')
    }
]

export const sidebarRoutes = [
    {
        path: '/home',
        name: "Home",
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/search',
        name: "Search",
        component: () => import('./pages/Search.vue')
    },
]

export const routes = [
    ...adminNavRoutes,
    ...artistNavRoutes,
    ...userNavRoutes,
    ...guestNavRoutes,
    ...commonRoutes,
    ...landingRoute,
    ...sidebarRoutes,
]

export default createRouter({
    history: createWebHistory(),
    routes,
})