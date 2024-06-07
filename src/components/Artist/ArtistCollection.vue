<template>
    <div class="relative overflow-hidden mx-10">
      <div id="carousel" class="flex transition-transform ease-in-out duration-500">
        <RouterLink
          v-for="artist in artists"
          :to="`/single-artist/${artist.id}`"
          :key="artist.id"
          class="artist-link"
        >
          <ArtistCard :artist="artist" />
        </RouterLink>
      </div>
      <div class="w-full my-5">
        <Button collection="artist"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  import Button from '../Button/Button.vue';
  import ArtistCard from './ArtistCard.vue';
  
  const props = defineProps({
    artists: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .artist-link {
    display: block;
    flex-shrink: 0;
    margin-right: 10px;
  }
  </style>
  