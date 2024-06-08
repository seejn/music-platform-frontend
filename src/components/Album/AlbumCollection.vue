<template>
    <div class="mx-10 relative">
        <div v-if="albums.length > 5" class="my-4 sticky top-0 ">
            <button @click="toggleShowAll" class="px-4 py-2 bg-red-800 text-white rounded">
                {{ showAll ? 'See Less' : 'See More' }}
            </button>
        </div>
        <div id="carousel"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 ml-5 transition-transform ease-in-out duration-500">
            
            <RouterLink v-for="album in displayedAlbums" :to="`/single-album/${album.id}`">
                <Album  :album="album" :key="album.id" />
            </RouterLink>
        </div>      
    </div>
    
</template>

<script setup>

import { ref, computed } from 'vue';
import Album from './AlbumCard.vue'

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