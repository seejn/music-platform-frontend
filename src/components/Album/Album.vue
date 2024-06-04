<template>
    <div class="bg-white rounded-lg shadow-md">
        <img src="https://via.placeholder.com/150" alt="Album Cover" class="w-full h-48 object-cover rounded-md mb-4">
        <h3 class="text-xl font-semibold">{{album?.title || 'Album Title'}}</h3>
        <p class="text-gray-700">{{album?.release_date || 'YYYY-MM-DD'}}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    album: {
        type: Object,
        required: true
    }
})
</script>