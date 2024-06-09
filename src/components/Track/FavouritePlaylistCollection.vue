<template>
    <div class=" mx-10 relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
           
           
           <RouterLink v-for="favouriteplaylist in favouriteplaylists" :to="`/single-playlist/${favouriteplaylist.id}`">
            <SingleFavouritePlaylistCard :favouriteplaylist="favouriteplaylist" :key="favouriteplaylist.id" />

           </RouterLink>
        </div>
        <div class="w-full flex" v-if="favouriteplaylists.length>4">
            <Button collection="favouriteplaylist" />
        </div>
    </div>
</template>

<script setup>
import SingleFavouritePlaylistCard from './SingleFavouritePlaylistCard.vue'
import Button from '../Button/Button.vue'
import { RouterLink } from 'vue-router';


const props = defineProps({
    favouriteplaylists: {
        type: Array,
        required: true
    }
})
</script>