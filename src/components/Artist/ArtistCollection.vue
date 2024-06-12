<template>
  <div class="relative overflow-hidden mx-5 bg-zinc-700 rounded-lg py-5 px-5 ">
    <swiper
      :slidesPerView="5"
      :spaceBetween="10"
      :grabCursor="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :modules="modules"
      class="mySwiper"
    >
        <swiper-slide 
          class="swiper-slide artist-link"
          v-for="artist in artists"
          :key="artist.id"
        >
          <RouterLink :to="`/single-artist/${artist.id}`">
            <ArtistCard :artist="artist" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
          </RouterLink>
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
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ArtistCard from './ArtistCard.vue';

const props = defineProps({
  artists: {
    type: Array,
    required: true
  }
});
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
