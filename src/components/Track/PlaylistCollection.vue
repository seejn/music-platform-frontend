<template>

    <div class="relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
            <SinglePlaylist v-for="playlist in playlists" :playlist="playlist" :key="playlist.id" />
        </div>
        <div class="w-full flex" v-if="playlists.length>4">
            <Button collection="playlist" />
        </div>
    </div>
</template>

<script setup>
import SinglePlaylist from './SinglePlaylist.vue'
import Button from '../Button/Button.vue'


const props = defineProps({
    playlists: {
        type: Array,
        required: true
    }
})
</script>