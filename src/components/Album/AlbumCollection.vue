<template>
<div class=" mx-10 relative overflow-hidden">
        <div id="carousel" class="flex transition-transform ease-in-out duration-500">
            <RouterLink v-for="album in displayedAlbums" :to="`/single-album/${album.id}`" class="album-link">
                <Album  :album="album" :key="album.id" class="border-2 border-red-800" />
            </RouterLink>
        </div>   
        <div class="w-full flex mt-10 ">
            <Button collection="album" />
        </div>   
    </div>
    
</template>

<script setup>

import { ref, computed } from 'vue';
import Button from '../Button/Button.vue'
import Album from './AlbumCard.vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    albums: {
        type: Array,
        required: true
    }
})

let showAll = ref(false)

const toggleShowAll = () => {
    showAll.value = !showAll.value
}

const displayedAlbums = computed(() => {
    return showAll.value ? props.albums : props.albums.slice(0, 5);
});
</script>
<style scoped>
.album-link {
  display: block;
  flex-shrink: 0;
  margin-right: 10px;
}
</style>