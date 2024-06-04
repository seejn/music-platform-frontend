<template>
  <div class=" w-full flex justify-between items-center p-6">
    <button @click="scrollLeft" class="bg-blue-500 text-white px-4 py-2 rounded mr-auto ml-5">Previous</button>
    <button @click="scrollRight" class="bg-blue-500 text-white px-4 py-2 rounded ml-auto mr-5">Next</button>
  </div>
</template>
  
<script setup>
import { ref,defineProps } from 'vue';
const props = defineProps({
  collection : {
    type:String,
    required:true
  }
})
const slideIndex = ref(1);
function scrollLeft() {
  showSlide1(slideIndex.value -= 1);
}

function scrollRight() {
  showSlide1(slideIndex.value += 1);
}

function showSlide1(n) {
  const slides = document.getElementsByClassName(props.collection);

  if (n > slides.length) { slideIndex.value = 1; }
  if (n < 1) { slideIndex.value = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${100 * (slideIndex.value - 1)}%)`;
  }
}
</script>