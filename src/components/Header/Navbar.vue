<!-- <template>
<header class="h-full bg-white shadow">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="text-2xl font-bold">MusicPlatform</div>
        <nav class="space-x-4">
            <RouterLink v-for="route in routes" :to="route.path" class="text-gray-700 hover:text-gray-900">{{ route.name }}</RouterLink>
        </nav>
    </div>
</header>
</template> -->

<template>
    <AdminNav />
</template> 

<script>
import UserNav from './UserNav.vue'
import GuestNav from './GuestNav.vue'
import ArtistNav from './ArtistNav.vue'
import AdminNav from './AdminNav.vue'
import {
    routes as routes
} from '../../router';
</script>
