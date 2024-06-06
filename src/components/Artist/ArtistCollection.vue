<!-- <template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
    </div>
</template> -->
<template>
    <div class="relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
            <ArtistCard v-for="artist in artists" :artist="artist" :key="artist.id" />
        </div>
        <div class="w-full mt-10 ">
            <Button collection="artist"/>
        </div>
    </div>
</template>

<script setup>
import Button from '../Button/Button.vue'
import ArtistCard from './ArtistCard.vue'
const props = defineProps({
    artists: {
        type: Array,
        required: true
    }
})
</script>