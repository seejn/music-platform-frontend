<template>
    <div class="playlist flex-shrink-0 mx-5 hover:shadow-lg border-2 border-red-800 hover:shadow-red-800 hover:border-red-800 transition-all duration-300 rounded-lg p-6">
        <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg">
        <h3 class="text-xl text-white mt-3">{{ playlist?.title || "TrackName" }}</h3>
        <!-- <p class="text-white">{{ playlist?.user }}</p>
        <p class="text-white">{{ playlist?.track }}</p> -->
        <p class="text-white">{{ playlist.track.length }} Songs</p>

    </div>

</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
playlist: {
    type: Object,
    required: true
}
})

const imageUrl =  computed(() => {
    if(props.playlist.image)    return `${import.meta.env.VITE_API_BASE_URL}${props.playlist.image}`;
    else return "/src/assets/placeholders/image.png"
});


</script>