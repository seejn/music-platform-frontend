<template>
    <Layout>
        <template #Main>
            <main class="">
             

                <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Songs for You</h2>
                    <TrackCollection :tracks="tracks" />
                </section>

                <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Artist</h2>
                    <ArtistCollection :artists="artists"/>
                </section>

                <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Albums</h2>
                    <AlbumCollection :albums="albums"/>
                </section>

                <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Playlist</h2>
                    <!-- <PlaylistCollection :playlists="playlists"/> -->
                </section>
            </main>
        </template>
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Navbar from '../components/Header/Navbar.vue'
import Sidebar from '../components/Sidebar/Sidebar.vue';

import { fetchAllTracks } from '../api/Track.js';
import { fetchAllAlbums } from '../api/Album.js';
import { fetchAllArtists } from '../api/Artist.js';
import {fetchAllPlaylists} from '../api/Playlist.js'

import TrackCollection from '../components/Track/TrackCollection.vue'
import AlbumCollection from '../components/Album/AlbumCollection.vue'
import PlaylistCollection from '../components/Track/PlaylistCollection.vue';
import ArtistCollection from '../components/Artist/ArtistCollection.vue'

let tracks = ref([]);
let albums = ref([]);
let artists =ref([]);
let playlists =ref([])

onMounted( async () => {
    tracks.value = await fetchAllTracks()
    albums.value = await fetchAllAlbums()
    artists.value = await fetchAllArtists()
    playlists.value = await fetchAllPlaylists()
    console.log("Tracks: ", tracks.value,"Albums: ",albums.value,"Artists:",artists.value,"Playlists: ",playlists.value)
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