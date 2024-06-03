<!-- <template>
    <aside class="w-64 h-full bg-gray-800 text-white">
      <div class="p-4">
        <h1 class="text-2xl font-bold">My App</h1>
        <ul class="mt-4">
          <li class="py-2 hover:bg-gray-700">
            <a href="#" class="block">Home</a>
          </li>
          <li class="py-2 hover:bg-gray-700">
            <a href="#" class="block">Explore</a>
          </li>
          <li class="py-2 hover:bg-gray-700">
            <a href="#" class="block">Playlist</a>
          </li>
          <li class="py-2 hover:bg-gray-700">
            <a href="#" class="block">Settings</a>
          </li>
        </ul>
      </div>
    </aside>
</template> -->



<!-- src/components/Sidebar.vue -->
<template>
  <div class="sidebar  bg-black ">
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
    <div class="sidebar2 bg-black text-white p-6 rounded-lg overflow-y-auto h-min">
      <nav>
        <ul class="space-y-6">
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <i class="fas fa-book mr-3"></i>Library
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
            </router-link>
          </li> <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
            </router-link>
          </li> <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
            </router-link>
          </li> <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
            </router-link>
          </li> <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
            </router-link>
          </li>
          <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <img src="/src/assets/pic/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
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
