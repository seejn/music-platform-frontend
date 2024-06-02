import { createWebHistory, createRouter } from 'vue-router'

export const navbarRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Artist/Home.vue')
    },
    {
        path: '/browse',
        name: 'Browse',
        component: () => import('./pages/Artist/Browse.vue')
    },
    {
        path: '/artist/profile',
        name: 'Profile',
        component: () => import('./pages/Artist/Profile.vue')
    },
    {
        path: '/artist/upload',
        name: 'Upload',
        component: () => import('./pages/Artist/Upload.vue')
    },
]

export const sideBarroutes = [
    
    {
        path: '/artist/library',
        name: 'Library',
        component: () => import('./pages/Artist/Library.vue')
    },
    {
        path: '/artist/setting',
        name: 'Setting',
        component: () => import('./pages/Artist/Settings.vue')
    },
]

const routes = [...navbarRoutes, ...sideBarroutes]

export default createRouter({
    history: createWebHistory(),
    routes,
})