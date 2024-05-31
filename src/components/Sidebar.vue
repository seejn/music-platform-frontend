<!-- src/components/Sidebar.vue -->
<template>
    <div class="sidebar  fixed w-1/5  max-screen-max  bg-black flex-col">
      <div class="sidebar1 bg-black text-white p-6 rounded-lg h-min">
        <nav>
          <ul class="space-y-6">
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <i class="fas fa-home mr-3"></i>Home
              </router-link>
            </li>
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <i class="fas fa-search mr-3"></i>Search
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar2 mt-10 bg-black text-white p-6 rounded-lg overflow-y-auto h-min">
        <nav>
          <ul class="space-y-6">
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <i class="fas fa-book mr-3"></i>Library
              </router-link>
            </li>
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <img src="/src/assets/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
              </router-link>
            </li>
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <img src="/src/assets/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
              </router-link>
            </li>
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <img src="/src/assets/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
              </router-link>
            </li>
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <img src="/src/assets/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
              </router-link>
            </li>
            <li>
              <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
                <img src="/src/assets/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
              </router-link>
            </li>
            <!-- Add more items as needed -->
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  };
  </script>
  
  <style scoped>
  .sidebar2 {
    max-height: calc(100vh - 16rem); /* Adjust the height as needed */
    overflow-y: auto;
  }
  </style>
  