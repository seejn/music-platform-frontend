<template>
    <div>
      
        <div v-for="tour in tours" :key="tour.id" class="flex mt-10">
         <ArtistTour :tour="tour"/>
         </div>
 
    </div>
  </template>
  
  <script setup>

import ArtistTour from './ArtistTour.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Autoplay, Pagination } from 'swiper/modules';
  const modules = [Autoplay, Pagination];
  
  
  const props = defineProps({
    tours: {
      type: Array,
      required: true
    }
  });
  
  console.log("Tours data:", props.tours);
  </script>
  
  <style scoped>
  .mySwiper {
    padding: 20px 0;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  </style>
  