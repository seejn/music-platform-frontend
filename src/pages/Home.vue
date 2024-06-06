<template>
    <Layout>
        <template #Main>
            <main class="">
             

                <section class="mx-10">
                    <h2 class="text-3xl font-bold mb-4 text-white  mt-10">Songs for You</h2>
                    <span v-if="!tracks || tracks.length === 0">
                        <h1 class="text-white">No tracks available</h1>
                    </span>
                    <span v-else>
                        <TrackCollection :tracks="tracks" />
                    </span>
                </section>

                <section class="mx-10">
                    <h2 class="text-3xl font-bold mb-4 text-white mt-10">Artists</h2>
                    <span v-if="!artists || artists.length === 0">
                        <h1 class="text-white">No artists available</h1>
                    </span>
                    <span v-else>
                        <ArtistCollection :artists="artists" />
                    </span>
                </section>

                <section class="mx-10">
                    <h2 class="text-3xl font-bold mb-4 text-white mt-10">Albums</h2>
                    <span v-if="!albums || albums.length === 0">
                        <h1 class="text-white">No albums available</h1>
                    </span>
                    <span v-else>
                        <AlbumCollection :albums="albums" />
                    </span>
                </section>

                <section class="mx-10">
                    <h2 class="text-3xl font-bold mb-4 text-white mt-10">Playlist</h2>
                    <span v-if="!tracks || tracks.length === 0">
                        <h1 class="text-white">No playlists available</h1>
                    </span>
                    <span v-else>
                        <PlaylistCollection :playlists="playlists"/>
                    </span>
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
import { fetchAllPlaylists } from '../api/Playlist.js'

import TrackCollection from '../components/Track/TrackCollection.vue'
import AlbumCollection from '../components/Album/AlbumCollection.vue'
import PlaylistCollection from '../components/Track/PlaylistCollection.vue';
import ArtistCollection from '../components/Artist/ArtistCollection.vue'

let tracks = ref([]);
let albums = ref([]);
let artists = ref([]);
let playlists = ref([])

onMounted(async () => {
    try {
        tracks.value = await fetchAllTracks();
    } catch (error) {
        if (error.response && error.response.status === 404) {
            tracks.value = false;
        } else {
            console.error("An error occurred:", error);
        }
    }

    try {
        albums.value = await fetchAllAlbums();
    } catch (error) {
        if (error.response && error.response.status === 404) {
            albums.value = [];
        } else {
            console.error("An error occurred:", error);
        }
    }

    try {
        artists.value = await fetchAllArtists();
    } catch (error) {
        if (error.response && error.response.status === 404) {
            artists.value = [];
        } else {
            console.error("An error occurred:", error);
        }
    }

    try {
        playlists.value = await fetchAllPlaylists();
    } catch (error) {
        if (error.response && error.response.status === 404) {
            playlists.value = [];
        } else {
            console.error("An error occurred:", error);
        }
    }

    console.log("Tracks: ", tracks.value, "Albums: ", albums.value, "Artists:", artists.value, "Playlists: ", playlists.value)
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