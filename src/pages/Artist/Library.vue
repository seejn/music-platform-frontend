<template>
    <Layout>
        <template #Main>
            <section>
                <h2 class="text-2xl font-bold my-4">My Musics</h2>
                <TrackCollection :tracks="tracks" />
            </section>
            <section class="py-4">
                <h2 class="text-2xl font-bold my-4">My Albums</h2>
                <AlbumCollection :albums="albums" />
            </section>
            <section class="py-4">
                <h2 class="text-2xl font-bold my-4">Popular Songs</h2>
                <TrackCollection :tracks="tracks" />
            </section>
        </template>
    </Layout>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';

import AlbumCollection from '../../components/Album/AlbumCollection.vue'
import TrackCollection from '../../components/Track/TrackCollection.vue'

let tracks = ref([]);
let albums = ref([]);

const fetchTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_tracks/`
    await axios(url , {
        method: 'get',
    })
    .then((response) => {
        tracks.value = response.data.data
    })
    .catch((error) => {
        console.log(error.response)
    })
}

const fetchAlbums = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/get_all_albums/`
    await axios(url , {
        method: 'get',
    })
    .then((response) => {
        albums.value = response.data.data
    })
    .catch((error) => {
        console.log(error.response)
    })
}

onMounted( async () => {
    await fetchTracks()
    await fetchAlbums()
    console.log("Tracks: ", tracks.value, "Albums: ", albums.value)
})
</script>