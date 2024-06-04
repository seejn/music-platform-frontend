<template>
    <div class="sidebar1 bg-black text-white p-6 h-min">
      <nav>
        <ul class="space-y-6">
          <li v-for="route in routes">
            <router-link :to="route.path" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <i class="fas fa-home mr-3"></i>{{ route.name }}
            </router-link>
          </li>
          <!-- <li>
            <router-link to="#" class="flex items-center text-lg leading-loose font-semibold hover:underline">
              <i class="fas fa-search mr-3"></i>Search
            </router-link>
          </li> -->
        </ul>
      </nav>
    </div>
    <div class="bg-black text-white p-6 overflow-y-auto">
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
</template>

<script setup>
import {sidebarRoutes as routes} from '../../router.js'

</script>
