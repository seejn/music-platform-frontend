<template>
    <div class="relative overflow-hidden mx-10 ">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide user-link"
            v-for="user in users"
            :key="user.id"
          >
            <RouterLink :to="`/single-user/${user.id}`">
              <UserCard :user="user" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
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
  import UserCard from './UserCard.vue';
  
  const props = defineProps({
    users: {
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
  .user-link {
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
  