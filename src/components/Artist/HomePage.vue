<template>
    <ArtistNav/>
    <div>


<div class="p-6">
<p class="font-semibold text-blue-400 text-4xl">Songs For You</p>
        </div>
            <div class="relative overflow-hidden">
              <div id="carousel" class="flex transition-transform ease-in-out duration-500">
                  <div class="slides flex-shrink-0 mx-10">
                      <img src="/src/assets/ha.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/ade.jpeg" alt="Cover Image" class="w-60 h-60rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/ar.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/ji.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/jo.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/tay.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/goz.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/beat.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides flex-shrink-0 mx-6">
                      <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
                  <div class="slides /src/assets/flex-shrink-0 mx-6">
                      <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                      <h3 class="text-xl text-white mt-3">Song name</h3>
                      <p class="text-white">Artist name</p>
                  </div>
              </div>
             
          </div>
          <div>
              <button onclick="scrollLeft()" class="absolute top-[52%] left-60 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
              <button onclick="scrollRight()" class="absolute top-[52%] right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      
          </div>
            <!-- Trending -->
            <div class="p-6">
              <p class="font-semibold text-blue-400 text-4xl mt-20">Trending Songs</p>
          </div>
          <div class="relative w-full overflow-hidden">
            <div id="carousel" class="flex transition-transform ease-in-out duration-500">
                <div class="slide flex-shrink-0 mx-10">
                    <img src="/src/assets/ha.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/ade.jpeg" alt="Cover Image" class="w-60 h-60rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/ar.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/ji.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/jo.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/tay.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/goz.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/beat.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
                <div class="slide flex-shrink-0 mx-6">
                    <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                    <h3 class="text-xl text-white mt-3">Song name</h3>
                    <p class="text-white">Artist name</p>
                </div>
            </div>
           
        </div>
        <div>
            <button onclick="scrollLeftCustom()" class="absolute top-[103%] left-60 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button onclick="scrollRightCustom()" class="absolute top-[103%] right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    
        </div>
        <!-- Artist -->
          <div class="p-6">
            <p class="font-semibold text-blue-400 text-4xl mt-20">Artist you may like</p>
        </div>
          <div class="relative w-full overflow-hidden">
            <div id="carousel" class="flex transition-transform ease-in-out duration-500">
                <div class="slid flex-shrink-0 mx-10">
                    <img src="/src/assets/ha.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/ade.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/ar.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/ji.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/jo.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/tay.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                  
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                    <img src="/src/assets/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                  
                    <p class="text-white text-center">Artist name</p>
                </div>
                <div class="slid flex-shrink-0 mx-6">
                  <img src="/src/assets/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                
                  <p class="text-white text-center">Artist name</p>
              </div>
              <div class="slid flex-shrink-0 mx-6">
                <img src="/src/assets/goz.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
              
                <p class="text-white text-center">Artist name</p>
            </div>
            <div class="slid flex-shrink-0 mx-6">
              <img src="/src/assets/tay.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
            
              <p class="text-white text-center">Artist name</p>
          </div>
          <div class="slid flex-shrink-0 mx-6">
            <img src="/src/assets/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
          
            <p class="text-white text-center">Artist name</p>
        </div>
            </div>
           
        </div>
        <div>
            <button onclick="scrollLeftCust()" class="absolute top-[150%] left-60 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button onclick="scrollRightCust()" class="absolute top-[150%] right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ArtistNav from '../Navbar/ArtistNav.vue';

const slideIndex = ref(1);
const slidesIndex = ref(1);
const slidIndex = ref(1);

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

function scrollLeftCustom() {
  showSlide2(slidesIndex.value -= 1);
}

function scrollRightCustom() {
  showSlide2(slidesIndex.value += 1);
}

function showSlide2(n) {
  const slide = document.getElementsByClassName("slide");

  if (n > slide.length) { slidesIndex.value = 1; }
  if (n < 1) { slidesIndex.value = slide.length; }

  for (let i = 0; i < slide.length; i++) {
    slide[i].style.transform = `translateX(-${100 * (slidesIndex.value - 1)}%)`;
  }
}

function scrollLeftCust() {
  showSlide3(slidIndex.value -= 1);
}

function scrollRightCust() {
  showSlide3(slidIndex.value += 1);
}

function showSlide3(n) {
  const slid = document.getElementsByClassName("slid");

  if (n > slid.length) { slidIndex.value = 1; }
  if (n < 1) { slidIndex.value = slid.length; }

  for (let i = 0; i < slid.length; i++) {
    slid[i].style.transform = `translateX(-${100 * (slidIndex.value - 1)}%)`;
  }
}
</script>


