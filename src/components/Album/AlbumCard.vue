<!-- <template>
<div class="bg-white rounded-lg shadow-md">
    <img src="https://via.placeholder.com/150" alt="Album Cover" class="w-full h-48 object-cover rounded-md mb-4">
    <h3 class="text-xl font-semibold">{{album?.title || 'Album Title'}}</h3>
    <p class="text-gray-700">{{album?.release_date || 'YYYY-MM-DD'}}</p>
</div>
</template> -->

<template>
    <div class="album relative flex-shrink-0 mx-5 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-red-800 hover:border-red-800 transition-all duration-300">
        <img :src="imageUrl" alt="album Cover" class="w-full h-full object-cover" />
        <div class="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white">
        <h3 class="text-xl">{{ album?.title || "AlbumName" }}</h3>
        <p>{{ album?.artist?.first_name }} {{ album?.artist?.last_name }}</p>
        <p class="">{{ album.track.length }} Songs</p>
    </div>
    </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
    album: {
        type: Object,
        required: true
    }
})

const imageUrl = computed(() => {
    if (props.album.image) return `${import.meta.env.VITE_API_BASE_URL}${props.album.image}`;
    else return "/src/assets/placeholders/image.png"
});
</script>

<style scoped>
  .album {
  width: 300px;  /* Set the desired fixed width */
  height: 300px; /* Set the desired fixed height */
}

.album img {
  object-fit: cover;
}

.album h3, .album p {
  margin: 0; /* Remove default margins for consistency */
}
</style>
