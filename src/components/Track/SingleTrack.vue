<!-- <template>
    <div class="my-4 flex items-center space-x-4 w-full">
        <img class="song-cover" src="https://via.placeholder.com/150" alt="Album Cover" />
        <div class="flex-grow song-info">
            <h3 class="text-xl font-semibold">{{ track?.title || "TrackName" }}</h3>
            <p class="text-gray-600">{{ track?.artist?.id }}</p>
        </div>
        <audio controls class="media-player">
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Playlist
        </button>
    </div>
</template> -->

<template>
        <div class="track flex-shrink-0 mx-10">
            <img src="/src/assets/pic/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
            <h3 class="text-xl text-white mt-3">{{ track?.title || "TrackName" }}</h3>
            <p class="text-white">{{ track?.artist?.first_name }}</p>
        </div>
</template>

<script setup>

const props = defineProps({
    track: {
        type: Object,
        required: true
    }
})
</script>
