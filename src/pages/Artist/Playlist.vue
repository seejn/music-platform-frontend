<template>
    <Layout>
        <template #Main>
            <section class="">
               <h1 class="text-3xl font-bold mb-2">My Playlists</h1>
               <PlaylistCollection :playlists="playlists"/>
               
            </section>
        </template>
    </Layout>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { fetchAllPlaylist } from '../../api/Playlist.js';

import PlaylistCollection from '../../components/Track/PlaylistCollection.vue'



let playlists = ref([]);

onMounted(async () => {
    playlists.value = await fetchAllPlaylist()
    console.log("Playlist: ", playlists.value)
})
</script>