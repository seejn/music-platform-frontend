<template>
  <div class=" w-full flex justify-between items-center p-6">
    <button @click="scrollLeft" class="bg-blue-500 text-white px-4 py-2 rounded mr-auto">Previous</button>
    <button @click="scrollRight" class="bg-blue-500 text-white px-4 py-2 rounded ml-auto">Next</button>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
const slideIndex = ref(1);
function scrollLeft() {
  showSlide1(slideIndex.value -= 1);
}

function scrollRight() {
  showSlide1(slideIndex.value += 1);
}

function showSlide1(n) {
  const slides = document.getElementsByClassName("slides");

  if (n > slides.length) { slideIndex.value = 1; }
  if (n < 1) { slideIndex.value = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${100 * (slideIndex.value - 1)}%)`;
  }
}
</script>