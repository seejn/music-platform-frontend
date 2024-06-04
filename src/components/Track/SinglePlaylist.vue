<!-- <template>
    <div class="bg-white p-4 rounded-md shadow-md flex items-center">
        <img src="/src/assets/profile/PngItem_307416.png" alt="[Playlist Name]" class="w-12 h-12 rounded-md mr-4">
        <div>
            <div class="font-bold">Playlist Name</div>
            <div class="text-gray-600">[Number of Songs] songs</div>
        </div>
        <div class="ml-auto">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">View Playlist</button>
        </div>
    </div>
</template> -->

<template>
    <div class="playlist flex-shrink-0 mx-10">
        <img src="/src/assets/pic/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
        <h3 class="text-xl text-white mt-3">{{ playlist?.title || "TrackName" }}</h3>
        <!-- <p class="text-white">{{ playlist?.user }}</p>
        <p class="text-white">{{ playlist?.track }}</p> -->
    </div>

</template>

<script setup>

const props = defineProps({
playlist: {
    type: Object,
    required: true
}
})
</script>