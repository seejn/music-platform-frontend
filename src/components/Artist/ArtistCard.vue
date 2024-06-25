<template>
    <div class="artist flex-shrink-0 mr-10 my-5">
        <img :src="imagesUrl" alt="Cover Image" class="w-60 h-60 rounded-full border-4 border-red-800 hover:shadow-xl hover:shadow-red-800 hover:border-red-800 transition-all duration-300">
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