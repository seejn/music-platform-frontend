<template>
    <header class="album-header text-white py-10">
        <div class="flex flex-row">
            <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg border-4 border-red-800">
            <div class="ml-2 mt-[7vw]">
                <h1 class="text-4xl font-bold">{{ album.title }}</h1>
                <p class="mt-2 text-lg italic">{{ album?.artist?.first_name }} {{ album?.artist?.last_name }}</p>
                <div class="mt-6 flex justify-center space-x-4" v-if="isArtist">
                    <!-- <div class="relative">
                <button @click="toggleOptions" class="text-white bg-black rounded-md shadow-md text-md">
                  <i class="fas fa-ellipsis-v">...</i>
                </button>
                <div v-if="showOptions" class="absolute top-10 right-0 bg-red rounded-md shadow-md py-2 w-40">
                  <button @click="editAlbum" class="block w-full text-left px-4 py-2 hover:bg-gray-200">Edit</button>
                  <button @click="deleteAlbum" class="block w-full text-left px-4 py-2 hover:bg-gray-200">Delete</button>
                </div>
              </div> -->
                </div>
            </div>
        </div>
    </header>

    <section class="py-4">
        <h2 class="text-2xl font-bold my-4">Tracks in this Album</h2>
        <table class="min-w-full bg-transparent text-white">
            <thead>
                <tr>
                    <th class="py-2 px-4 text-left"></th>

                    <th class="py-2 px-4 text-left">Title</th>
                    <th class="py-2 px-4 text-left">Release Date</th>
                    <th class="py-2 px-4 text-left">Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(track, index) in album.track" :key="index">
                    <td class="py-2 px-4 text-left border-b border-red-800">
                        <img :src="imageUrl" alt="Track Image" class="w-16 h-16 object-cover">
                    </td>
                    <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">{{ track.released_date }}</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { fetchAlbum } from '../../api/Album.js'

const route = useRoute()
const albumId = ref(route.params.id)

const album = ref({})

const isArtist = ref(true);

const loadAlbum = async () => {
    try {
        const response = await fetchAlbum(albumId.value)
        album.value = response
    } catch (error) {
        console.log(error)
    }
}

const imageUrl = computed(() => {
    return `${import.meta.env.VITE_API_BASE_URL}${album.value.image || ''}`;
});

onMounted(() => {
    loadAlbum()
})

</script>