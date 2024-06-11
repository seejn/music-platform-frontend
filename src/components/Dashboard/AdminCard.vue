<template>
    <div class="flex flex-row glass-effect justify-evenly ">
      <div class="info-card bg-primary-color bg-opacity-75 rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white text-white bg-black">
        <h2 class="text-3xl font-bold mb-6  text-center">Total Albums</h2>
        <p class="text-2xl text-center">{{ totalAlbums }}</p>
      </div>
  
      <div class="info-card bg-primary-color bg-opacity-75 rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white text-white bg-black">
        <h2 class="text-3xl font-bold mb-6 text-center">Total Songs</h2>
        <p class="text-2xl text-center">{{ totalTracks }}</p>
      </div>
    </div>
  </template>

<script setup>

const props = defineProps({
  totalAlbums: {
    type: Number
  },
  totalTracks: {
    type: Number
  }
})

</script>
  
  <style scoped>
  .info-card {
    width:300px;
    height: 150px;/* Adjust as needed */
    padding: 1.5rem;
    margin-right:1 rem;
   
  }

  </style>
  