<template>
    <span v-if="!isLoggedIn">
        <GuestNav />
    </span>
    <span v-else-if="isLoggedIn && role === 1">
        <UserNav />
    </span>
    <span v-else-if="isLoggedIn && role === 2">
        <ArtistNav />
    </span>
    <span v-else-if="isLoggedIn && role === 3">
        <AdminNav />
    </span>
</template> 

<script setup>
import UserNav from './UserNav.vue'
import GuestNav from './GuestNav.vue'
import ArtistNav from './ArtistNav.vue'
import AdminNav from './AdminNav.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

import {
    routes as routes
} from '../../router';

const store = useStore()

const isLoggedIn = computed(() => store.getters.isLoggedIn)
const user = computed(() => store.getters.getUser)
const role = computed(() => store.getters.getRole)

</script>
