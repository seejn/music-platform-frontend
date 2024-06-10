


<template>
    <div class="mx-10 relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
            <RouterLink v-for="track in tracks" :to="`/single-song/${track.id}`" class="track-link">
            <SingleTrack  :track="track" :key="track.id" class="border-2 border-red-800" />
        </RouterLink>
        </div>
        <div class="w-full mt-10 flex">
            <Button collection="track"/>
        </div>
    </div>
</template>

<script setup>
import Button from '../Button/Button.vue'
import SingleTrack from './SingleTrack.vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    tracks: {
        type: Array,
        required: true
    }
})

</script>

<style scoped>
  .track-link {
    display: block;
    flex-shrink: 0;
    margin-right: 10px;
  }
  </style>