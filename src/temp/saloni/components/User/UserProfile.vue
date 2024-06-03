<template>
     <div class="p-6 pt-16 bg-black max-h-full flex-grow ">
          <div class="flex flex-row">
            <img src="/src/assets/dua.jpeg" alt="" class="rounded-full border-2 border-white w-60 h-60">
            <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
              Username
              <i @click="toggleEditForm" class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
            </p>
            <p class="text-white mt-[11vw] -ml-[15vw]">4 Playlist</p>
          </div>
          <div class=" mt-8 rounded-lg glass-effect">
            <TopArtist />
            <UserSongs />
            <UserPlaylist />
          </div>
        </div>
</template>
<script setup>
import UserPlaylist from './UserPlaylist.vue'
import UserSongs from './UserSongs.vue'
import TopArtist from './TopArtist.vue'

</script>
<style scoped>
  .glass-effect {
    background-color: rgba(194, 186, 186, 0.384); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    border: 1px solid rgba(255, 255, 255, 0.3); 
    padding: 16px; 
  }
  </style>
