<!-- <template>
    <div class="my-4 flex items-center space-x-4 w-full">
        <img class="song-cover" src="https://via.placeholder.com/150" alt="Album Cover" />
        <div class="flex-grow song-info">
            <h3 class="text-xl font-semibold">{{ track?.title || "TrackName" }}</h3>
            <p class="text-gray-600">{{ track?.artist?.id }}</p>
        </div>
        <audio controls class="media-player">
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Playlist
        </button>
    </div>
</template> -->
<template>
    <div class="track flex-shrink-0 mx-5 hover:shadow-lg hover:shadow-red-800 hover:border-red-800 transition-all duration-300 rounded-lg p-6">
      <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 object-cover">
      <h3 class="text-xl text-white mt-3 transition ease-in-out delay-150 hover:translate-x-3 hover:scale-110">{{ track?.title || "TrackName" }}</h3>
      <p class="text-white">{{ track?.artist?.first_name }}</p>
    </div>
  </template>
  

<script setup>
import { computed } from 'vue';


import {computed} from 'vue'

const props = defineProps({
    track: {
        type: Object,
        required: true
    }
})

const imageUrl =  computed(() => {
    if(props.track.image) return `${import.meta.env.VITE_API_BASE_URL}${props.track.image}`;
    else return "/src/assets/placeholders/image.png"
});
</script>
