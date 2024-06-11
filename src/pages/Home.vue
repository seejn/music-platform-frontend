<template>
  <Layout>
    <template #Main>
      <main>
        <section class="h-2/5 glass-effect">
          <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-5 ">Tours of your Favorite Artist</h2>
          <div class="swiper-container overflow-hidden">
            <div class="swiper-wrapper">
              <div class="swiper-slide " v-for="(tour, index) in artistTours" :key="index">

                <div
                  class="tour-card h-56 bg-black bg-opacity-80 p-4 mt-5 rounded-lg mb-5 shadow-md  border-2 text-center hover:shadow-xl hover:shadow-red-800 hover:border-red-800 transition-all duration-300 text-white border-red-800">
                    
                    <div class="flex flex-row h-2/5">
          <div class=" w-24 h-24">
            <img :src="tour.artist ? imageUrl(tour.artist) : ''" alt="Artist Image" class="rounded-lg border-2 border-white">
          </div>
          <div class=" mx-2 flex-grow text-center">
            <h5 class="text-white text-xl">{{ tour ? tour.title : 'Unknown Title' }}</h5>
            <h3 class="text-white text-lg font-semibold">{{ tour.artist ? tour.artist.first_name + ' ' + tour.artist.last_name : 'Unknown Artist' }}</h3>
            <p class="text-white text-lg">Date : {{ tour.date }}</p>
            <p class="text-white text-lg">Location : {{ tour.location }}</p>
            <p class="text-white text-lg">Venue : {{ tour.venue }}</p>
            <p class="text-white text-lg">Time : {{ (tour.time)  }}</p>
          </div>
        </div>
                </div>
              </div>
            </div>

            <div class="swiper-pagination"></div>
          </div>
        </section>
        <section>
          <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Songs for You</h2>
          <TrackCollection :tracks="tracks" />
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Artist</h2>
          <ArtistCollection :artists="artists" />
        </section>


        <section>
          <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Albums</h2>
          <AlbumCollection :albums="albums" />
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Playlists</h2>


          <span v-if="playlists.length > 0">
            <PlaylistCollection :playlists="playlists" />


          </span>
          <span v-else>
            <h2 class="text-xl text-center mb-4 text-white mx-10 mt-10">No Playlists Found</h2>
          </span>
        </section>

      </main>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Navbar from "../components/Header/Navbar.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";

import { fetchAllTracks } from "../api/Track.js";
import { fetchAllAlbums } from "../api/Album.js";
import { fetchAllArtists } from "../api/Artist.js";
import { fetchAllPlaylists } from "../api/Playlist.js";


import TrackCollection from "../components/Track/TrackCollection.vue";
import AlbumCollection from "../components/Album/AlbumCollection.vue";
import PlaylistCollection from "../components/Track/PlaylistCollection.vue";
import ArtistCollection from "../components/Artist/ArtistCollection.vue";
import { fetchFavouriteArtistTour } from "../api/Tour.js";


import { useStore } from 'vuex';
import { fetchUserFavouriteAlbums } from '../api/Album.js'


// import FavouritePlaylistCollection from '../components/Track/FavouritePlaylistCollection.vue';

const store = useStore()
const user = store.getters.getUser
let tracks = ref([]);
let albums = ref([]);
let artists = ref([]);
let playlists = ref([]);
let artistTours = ref([]);



const initSwiper = () => {
  new Swiper(".swiper-container", {
    loop: false,
    slidesPerView: "4",
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};


onMounted(async () => {
  try {
    tracks.value = await fetchAllTracks()
    albums.value = await fetchAllAlbums()
    artists.value = await fetchAllArtists();
    playlists.value = await fetchAllPlaylists(user.id)
    artistTours.value = await fetchFavouriteArtistTour(user.id);

  }
  catch (error) {
    console.error(error)
  }
  initSwiper();



})
const imageUrl = (artist) => {
  return `${import.meta.env.VITE_API_BASE_URL}${artist.image || "/src/assets/pic/ch.jpeg"}`;
};
</script>
<style scoped>
.glass-effect {
  background-color: rgba(194, 186, 186, 0.384);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 16px;
}

.tour-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tour-card {
  flex: 0 0 auto;
  width: 400px;
  margin-right: 30px;
  margin-left: 30px;
}

.tour-card:last-child {
  margin-right: 0;
}

.border-red-800 {
  border-color: #dc2626;
}
</style>