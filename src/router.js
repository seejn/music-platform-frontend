import { createWebHistory, createRouter } from 'vue-router'
import store from './store/store'

// component: () => import('./pages/Artist/Home.vue')
// search 
// logout 

export const adminNavRoutes = [
  
]

export const artistNavRoutes = [
    {
        path: '/artist/upload',
        name: 'Upload',
        component: () => import('./pages/Artist/Upload.vue'),
        meta: { requiresArtist: true }
        
    },
    {
        path: '/artist/profile',
        name: 'My Profile',
        component: () => import('./pages/Artist/Profile.vue'),
        meta: { requiresArtist: true }
    },
    {
        path:'/artist/library',
        name:'Library',
        component: () => import(`./pages/Artist/Library.vue`),
        meta: { requiresArtist: true }
    }
    
]

export const userNavRoutes = [
    {
        path: '/user/profile',
        name: 'Profile',
        component: () => import(`./pages/User/UserProfile.vue`),
        meta: { requiresUser: true }
    },
]

export const guestNavRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Guest/Login.vue'),
        meta: { requiresGuest: true }
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('./pages/Guest/SignUp.vue'),
        meta: { requiresGuest: true }

    },
    {
        path: '/for-artist',
        name: 'For Artist',
        component: () => import('./pages/Guest/SignUpArtist.vue'),
        meta: { requiresGuest: true }

    },
]
export const commonRoutes = [
    {
        path: '/search',
        name: 'Search',
        meta: { requiresAuth: true } 
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: { requiresAuth: true } 
    },
    {
        path: '/single-song/:id',
        name: 'SingleSong',
        component: () => import('./pages/Track/SingleSong.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/single-album/:id',
        name: 'SingleAlbum',
        props: true,
        component: () => import('./pages/Artist/Album.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/single-playlist/:id',
        name: 'SinglePlaylist',
        props: true,
        component: () => import('./pages/Playlist.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/single-artist/:id',
        name: 'SingleArtist',
        component: () => import('./pages/ArtistPage.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/single-user/:id',
        name: 'SingleUser',
        component: () => import('./pages/User/UserProfile.vue'),
        meta: { requiresAuth: true } 
    },
];

export const sidebarRoutes = [
    {
        path: '/home',
        name: "Home",
        component: () => import('./pages/Home.vue'),
        meta: {
            iconClass: "fa-solid fa-home mr-3",
            requiresAuth: true 
        }
    },
    {
        path: '/search',
        name: "Search",
        component: () => import('./pages/Search.vue'),
        meta: {
            iconClass: "fa-solid fa-magnifying-glass mr-3",
            requiresAuth: true 
        }
    }
];

export const landingRoute = [
    {
        path: '/',
        name: "LandingRoute",
        component: () => import('./pages/Landing.vue')
    }
]


export const adminSidebarRoutes = [
    {
        path: '/admin/artists',
        name: 'Artists',
        component: () => import('./pages/Admin/ArtistTable.vue'),
        meta: { requiresAdmin: true }
    },
    {
        path:'/admin/user-reports',
        name:'UserReports',
        component: () => import('./pages/Admin/UserReports.vue'),
        meta: { requiresAdmin: true }
    },
    {
        path: '/admin/all-tours/',
        name: 'TourPage',
        component: () => import('./pages/Admin/TourPage.vue'),
        meta: { requiresAdmin: true }
    },
    {
        path: '/artist-stats/:id',
        name: 'ArtistStats',
        props: true,
        component: ()=>import('./components/Admin/ArtistStats.vue'),
        meta: { requiresAdmin: true }
    },
    {
        path: '/artist-library/:id',
        name: 'artist-library',
        component: ()=>import('./pages/Admin/ArtistLibrary.vue'),
        meta: { requiresAdmin: true }
    },
    {
        path: '/admin/banned-songs/',
        name: 'BannedSongs',
        component: ()=>import('./pages/Admin/Banned.vue'),
        meta: { requiresAdmin: true }
    },
    {
        path: '/admin/dashboard/',
        name: 'AdminDashboard',
        component: () => import('./pages/Admin/Dashboard.vue'),
        meta: { requiresAdmin: true }
    },
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
    ...adminSidebarRoutes,
    ...playlistRoutes
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});


const navGuard = (to, from, next) => {
    const isLoggedIn = store.getters.isLoggedIn; 
    const userRole = store.getters.getRole;

    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
    const requiresArtist = to.matched.some(record => record.meta.requiresArtist);
    const requiresUser = to.matched.some(record => record.meta.requiresUser);
    const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAdmin && userRole !== 3) {
        next('/');
    } else if (requiresArtist && userRole !== 2) {
        next('/');
    } else if (requiresUser && userRole !== 1) {
        next('/'); 
    } else if (requiresGuest && isLoggedIn) {
        next('/'); 
    } else if (requiresAuth && (userRole !== 1 && userRole !== 2)) {
        next('/'); 
    } else {
        next(); 
    }
};

router.beforeEach(navGuard);

export default router;


