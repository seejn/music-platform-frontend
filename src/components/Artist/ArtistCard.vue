<!-- <template>
    <div class="bg-white p-4 rounded-md shadow-md flex items-center">
        <img src="/src/assets/profile/PngItem_307416.png" alt="[Artist Name]" class="w-12 h-12 rounded-md mr-4">
        <div>
            <div class="font-bold">[Artist Name]</div>
        </div>
        <div class="ml-auto">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Follow</button>
        </div>
    </div>
</template> -->

<template>
    <div class="artist flex-shrink-0 mr-10">
        <img :src="imagesUrl" alt="Cover Image" class="w-60 h-60 rounded-full">
        <h3 class="text-xl text-white mt-3 text-center">{{ artist?.first_name }}</h3>
    </div>

</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
artist: {
    type: Object,
    required: true
}
})
const imagesUrl =  computed(() => {
    if(props.artist.image)    return `${import.meta.env.VITE_API_BASE_URL}${props.artist.image}`;
    else return "/src/assets/pic/blond.jpeg"
});
</script>