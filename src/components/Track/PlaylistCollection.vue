<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <SinglePlaylist />
        <SinglePlaylist />
        <SinglePlaylist />
        <SinglePlaylist />
        <!-- Repeat for more playlists -->
    </div>
</template>

<script setup>
import SinglePlaylist from './SinglePlaylist.vue'
</script>