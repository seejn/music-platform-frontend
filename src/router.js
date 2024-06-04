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
    },
]

export const userNavRoutes = [
    {
        path: '/user/profile',
        name: 'My Profile',
    },
]

export const guestNavRoutes = [
    {
        path: '/login',
        name: 'Login',
    },
    {
        path: '/signup',
        name: 'SignUp',
    },
    {
        path: '/for-artist',
        name: 'For Artist',
    },
]

export const commonRoutes = [
    {
        path: '/search',
        name: 'Search',
    },
    {
        path: '/logout',
        name: 'Logout',
    },
]

export const landingRoute = [
    {
        path: '/',
        name: "LandingRoute",
        component: () => import('./pages/LandingPage.vue')
    }
]

export const sidebarRoutes = [
    {
        path: '/user/home',
        name: "Home",
    },
    {
        path: '/search',
        name: "Search",
    },
]

export const routes = [
    ...adminNavRoutes,
    ...artistNavRoutes,
    ...userNavRoutes,
    ...guestNavRoutes,
    ...commonRoutes,
    ...landingRoute,
]

export default createRouter({
    history: createWebHistory(),
    routes,
})