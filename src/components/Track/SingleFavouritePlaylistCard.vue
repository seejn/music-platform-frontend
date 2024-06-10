<template>
    <div class="flex-shrink-0 mx-7 border-2 border-red-800 rounded-lg p-6 hover:shadow-lg hover:shadow-red-800 hover:border-red-800 transition-all duration-300">
        <!-- <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg"> -->
        {{ favoriteplaylist }}

        <h3 class="text-xl text-white mt-3">{{ favouriteplaylist?.title || "TrackName" }}</h3>
        <!-- <p class="text-white">{{ playlist?.user }}</p>
        <p class="text-white">{{ playlist?.track }}</p> -->
        <p class="text-white">{{ favouriteplaylist.songCount }} Songs</p>

    </div>

</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({

favouriteplaylist: {
    type: Object,
    required: true
}
})

// const imageUrl =  computed(() => {
//     if(props.favoriteplaylists.image)    return `${import.meta.env.VITE_API_BASE_URL}${props.favoriteplaylists.image}`;
//     else return "/src/assets/placeholders/image.png"
// });


</script>