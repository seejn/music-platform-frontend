<template>
  <div>
    <h3 class="text-white font-bold text-2xl">Tour details</h3>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :grabCursor="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="tour in tours" :key="tour.id" class="flex justify-center">
        <TourCard :tour="tour"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const modules = [Autoplay, Pagination];
import TourCard from './TourCard.vue';

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

.tour-card {
  width: 700px; 
}
</style>
