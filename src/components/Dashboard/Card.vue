<template>
    <div class="flex flex-col glass-effect space-y-4 ">
      <div class="info-card bg-primary-color bg-opacity-75 rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white text-white bg-black ">
        <h2 class="text-3xl font-bold mb-6 mt-6 text-center">Total Artists</h2>
        <p class="text-2xl text-center">{{ totalArtists }}</p>
      </div>
  
      <div class="info-card bg-primary-color bg-opacity-75 rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white text-white bg-black">
        <h2 class="text-3xl font-bold mb-6 mt-6 text-center">Total Users</h2>
        <p class="text-2xl text-center">{{ totalUsers }}</p>
      </div>
  
      <div class="info-card bg-primary-color bg-opacity-75 rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white text-white bg-black">
        <h2 class="text-3xl font-bold mb-6 mt-6 text-center">Total Albums</h2>
        <p class="text-2xl text-center">{{ totalAlbums }}</p>
      </div>
  
      <div class="info-card bg-primary-color bg-opacity-75 rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white text-white bg-black">
        <h2 class="text-3xl font-bold mb-6 mt-6 text-center">Total Songs</h2>
        <p class="text-2xl text-center">{{ totalSongs }}</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .info-card {
    width:450px;
    height: 150px;/* Adjust as needed */
    padding: 1.5rem;
    margin-right:1 rem;
   
  }

  </style>
  