<template>
  <Layout>
    <template #Main>
      <main>
        <section class="h-2/5  mx-10 glass-effect">
          <TourCollection :tours="tours"/>
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
import TourCollection from '../components/Tour/TourCollection.vue'
import { ref, onMounted, computed } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

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


const store = useStore()
const user = store.getters.getUser
let tracks = ref([]);
let albums = ref([]);
let artists = ref([]);
let playlists = ref([]);
let tours = ref([]);



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
    tours.value = await fetchFavouriteArtistTour(user.id);

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