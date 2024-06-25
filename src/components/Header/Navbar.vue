<template>
    <span v-if="!isLoggedIn">
        <GuestNav />
    </span>
    <span v-else-if="isLoggedIn && role === 1">
        <UserNav :user="user" />
    </span>
    <span v-else-if="isLoggedIn && role === 2">
        <ArtistNav :user="user" />
    </span>
    <span v-else-if="isLoggedIn && role === 3">
        <AdminNav :user="user" />
    </span>
</template> 

<script setup>
import { ref, watch } from 'vue'
import UserNav from './UserNav.vue'
import GuestNav from './GuestNav.vue'
import ArtistNav from './ArtistNav.vue'
import AdminNav from './AdminNav.vue'

import { useStore } from 'vuex'

const store = useStore()

const isLoggedIn = store.getters.isLoggedIn
const user = ref(store.getters.getUser)
const role = store.getters.getRole

watch(() => store.getters.getUser, (newVal) => {
    user.value = newVal
})

</script>
