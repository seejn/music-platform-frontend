<template>
  <div class="mx-17 relative overflow-hidden">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide track-link my-5 " v-for="track in tracks" :key="track.id">
          <RouterLink :to="`/single-song/${track.id}`">
            <SingleTrack :track="track" class="border-2 border-red-800  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" />
          </RouterLink>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
  <script setup>
  import { onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css';
  import SingleTrack from './SingleTrack.vue';
  
  const props = defineProps({
    tracks: {
      type: Array,
      required: true
    }
  });
  
  const initSwiper = () => {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  };
  
  onMounted(() => {
    initSwiper();
  });
  </script>
  
  <style scoped>
  .track-link {
    display: block;
    flex-shrink: 0;
    margin-right: 10px;
  }
  
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  