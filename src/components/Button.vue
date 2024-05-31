<template>
  <div class="relative w-full">
    <div class="absolute left-0 transform -translate-y-1/2">
      <button @click="scrollLeft" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
    </div>
    <div class="absolute right-0 transform -translate-y-1/2">
      <button @click="scrollRight" class="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
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