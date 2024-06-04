<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Album v-for="album in albums" :album="album" :key="album.id"/>
    </div>
</template>

<script setup>
import Album from './Album.vue'

const props = defineProps({
    albums: {
        type: Array,
        required: true
    }
})
</script>