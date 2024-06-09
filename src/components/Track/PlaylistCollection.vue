<template>

    <div class=" mx-10 relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
           
           
           <RouterLink v-for="playlist in playlists" :to="`/single-playlist/${playlist.id}`" class="playlist-link">
            <SinglePlaylist  :playlist="playlist" :key="playlist.id" />

           </RouterLink>
        </div>
        <div class="w-full flex">
            <Button collection="playlist" />
        </div>
    </div>
</template>

<script setup>
import SinglePlaylist from './SinglePlaylistCard.vue'
import Button from '../Button/Button.vue'
import { RouterLink } from 'vue-router';


const props = defineProps({
    playlists: {
        type: Array,
        required: true
    }
})
</script>
  
<style scoped>
.playlist-link {
  display: block;
  flex-shrink: 0;
  margin-right: 10px;
}
</style>