<template>
  <div class="relative overflow-hidden mx-10">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide artist-link"
          v-for="artist in artists"
          :key="artist.id"
        >
          <RouterLink :to="`/single-artist/${artist.id}`">
            <ArtistCard :artist="artist" />
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
import ArtistCard from './ArtistCard.vue';

const props = defineProps({
  artists: {
    type: Array,
    required: true
  }
});

const initSwiper = () => {
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
.artist-link {
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
