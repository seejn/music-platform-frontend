<!-- <template>
<div class="bg-white rounded-lg shadow-md">
    <img src="https://via.placeholder.com/150" alt="Album Cover" class="w-full h-48 object-cover rounded-md mb-4">
    <h3 class="text-xl font-semibold">{{album?.title || 'Album Title'}}</h3>
    <p class="text-gray-700">{{album?.release_date || 'YYYY-MM-DD'}}</p>
</div>
</template> -->

<template>
    <div class="bg-gray-800 text-white bg-opacity-50 rounded-lg p-4 glass-effect border-2 border-red-800 hover:shadow-lg hover:shadow-red-800 hover:border-red-800 transition-all duration-300">
        <img :src="imageUrl" alt="album Cover" class="w-full h-44 object-cover rounded-md mb-2 " />
        <h3 class="text-xl font-bold ">{{ album.title }}</h3>
        <p class="">{{ album.track.length }} Songs</p>
    </div>
</template>

<script setup>
import {
    computed
} from 'vue';

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
