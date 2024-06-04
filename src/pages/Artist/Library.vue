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
import { fetchAllTracks } from '../../api/Track.js';
import { fetchAllAlbums } from '../../api/Album.js';

import AlbumCollection from '../../components/Album/AlbumCollection.vue'
import TrackCollection from '../../components/Track/TrackCollection.vue'

let tracks = ref([]);
let albums = ref([]);

onMounted( async () => {
    tracks.value = await fetchAllTracks()
    albums.value = await fetchAllAlbums()
    console.log("Tracks: ", tracks.value, "Albums: ", albums.value)
})
</script>