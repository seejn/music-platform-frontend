<template>
    <Layout>
        <template #Main>
            <main class="">
                <section class=" text-white rounded-lg p-6 mb-8 glass-effect">
                    <h1 class="text-3xl font-bold mb-2">Welcome to MusicPlatform</h1>
                    <p class="text-lg">Discover new music, listen to your favorite tracks, and explore curated
                        playlists.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold mb-4 text-white">Recommended for You</h2>
                    <TrackCollection :tracks="tracks" />
                </section>
<!-- 
                <section>
                    <h2 class="text-2xl font-bold mb-4">Trending Songs</h2>
                    <TrackCollection />
                </section> -->

                <section>
                    <h2 class="text-2xl font-bold mb-4">Curated Playlists</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4">
                            <img src="https://via.placeholder.com/150" alt="Playlist Cover" class="rounded mb-4">
                            <h3 class="text-lg font-bold">Playlist Name</h3>
                            <p class="text-gray-600">Description of the playlist.</p>
                        </div>
                    </div>
                </section>
            </main>
        </template>
    </Layout>
</template>

<script setup>
import TrackCollection from '../../components/Track/TrackCollection.vue'
import Navbar from '../../components/Header/Navbar.vue'
import Sidebar from '../../components/Sidebar/Sidebar.vue';
import { ref, onMounted } from 'vue';
import { fetchAllTracks } from '../../api/Track.js';
import { fetchAllAlbums } from '../../api/Album.js';
import AlbumCollection from '../../components/Album/AlbumCollection.vue'

let tracks = ref([]);
let albums = ref([]);

onMounted( async () => {
    tracks.value = await fetchAllTracks()
    albums.value = await fetchAllAlbums()
    console.log("Tracks: ", tracks.value,"Albums: ",albums.value)
})
</script>
<style scoped>
  .glass-effect {
    background-color: rgba(194, 186, 186, 0.384); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    border: 1px solid rgba(255, 255, 255, 0.3); 
    padding: 16px; 
  }
  </style>