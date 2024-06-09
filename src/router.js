import { createWebHistory, createRouter } from 'vue-router'

// component: () => import('./pages/Artist/Home.vue')
// search 
// logout 

export const adminNavRoutes = [
    {
        path: '/admin/artists',
        name: 'Artists',
        component: () => import('./pages/Admin/ArtistTable.vue')

        
    },
    {
        path:'/admin/user-reports',
        name:'UserReports',
        component: () => import('./pages/Admin/UserReports.vue')
    },
    {
        path: '/admin/all-tours/',
        name: 'TourPage',
        component: () => import('./pages/Admin/TourPage.vue')
    },
    {
        path: '/artist-library/:id',
        name: 'artist-library',
        component: ()=>import('./pages/Admin/ArtistLibrary.vue')
    }
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
    {
        path:'/artist/library',
        name:'Library',
        component: () => import(`./pages/Artist/Library.vue`)
    }
    
]

export const userNavRoutes = [
    {
        path: '/user/profile',
        name: 'Profile',
        component: () => import(`./pages/User/UserProfile.vue`)
    },
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
    {
        path: '/logout',
        name: 'Logout',
    },
    {
        path: '/single-song/:id',
        name: 'SingleSong',
        component: () => import('./pages/Track/SingleSong.vue')
    },
    {
        path: '/single-album/:id',
        name: 'SingleAlbum',
        props: true,
        component: () => import('./pages/Artist/Album.vue')
    },
    {
        path: '/single-playlist/:id',
        name: 'SinglePlaylist',
        props: true,
        component: () => import('./pages/Playlist.vue')
    },
    {
        path: '/single-artist/:id',
        name: 'SingleArtist',
        component: () => import('./pages/ArtistPage.vue')
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
    // {
    //     path: '/sidebar',
    //     name:"SideBar",
    //     component: () => import('./components/Sidebar/Sidebar.vue')
    // }
]

export const playlistRoutes = [
    {
        path: '/createplaylist',
        name:"CreatePlaylist",
        component: () => import('./pages/Artist/Create_Playlist.vue')
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
    ...playlistRoutes
]

export default createRouter({
    history: createWebHistory(),
    routes,
})