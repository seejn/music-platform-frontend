<!-- <template>
    <div class="w-4xl mx-auto">
        <SingleTrack v-for="track in tracks" :track="track" :key="track.id"/>
    </div>
</template> -->


<template>
    <div class="relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
            <SingleTrack v-for="track in tracks" :track="track" :key="track.id" />
        </div>
        <div class="w-full flex">
            <Button collection="track"/>
        </div>
    </div>
</template>

<script setup>
import Button from '../Button/Button.vue'
import SingleTrack from './SingleTrack.vue'

const props = defineProps({
    tracks: {
        type: Array,
        required: true
    }
})
</script>