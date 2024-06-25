<template>
    <div class="playlist relative flex-shrink-0 mx-5 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-red-800 hover:border-red-800 transition-all duration-300">

        <img :src="getImageUrl(playlist.playlist.image)" alt="Cover Image" class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white">
        <h3 class="text-xl">{{ playlist?.playlist?.title || "PlaylistName" }}</h3>
        <p>{{ playlist?.playlist?.artist?.first_name }}</p>
        <p class="text-white">{{ playlist?.playlist?.user?.first_name }} {{ playlist?.playlist?.user?.last_name }}</p> 
        <p class="text-white">{{ playlist?.playlist.track.length }} Songs</p>

        </div>

    </div>

</template>

<script setup>
import { computed } from 'vue';
import { getImageUrl } from '../../utils/imageUrl';


const props = defineProps({
playlist: {
    type: Object,
    required: true
}
})

console.log(props.playlist)
const imageUrl =  computed(() => {
    if(props.playlist.playlist.image)    return `${import.meta.env.VITE_API_BASE_URL}${props.playlist.playlist.image}`;
    else return "/src/assets/placeholders/image.png"
});


</script>
<style scoped>
.playlist {
  width: 300px;  
  height: 300px; 
}

.playlist img {
  object-fit: cover;
}

.playlist h3, .playlist p {
  margin: 0; 
}
</style>