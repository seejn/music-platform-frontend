<template>
    <div class="w-4xl mx-auto">
        <SingleTrack v-for="track in tracks" :track="track" :key="track.id"/>
    </div>
</template>

<script setup>
import SingleTrack from './SingleTrack.vue'
import { defineProps  } from 'vue';

const props = defineProps({
    tracks: {
        type: Array,
        required: true
    }
})
</script>