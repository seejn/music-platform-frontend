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
                  class="tour-card  bg-black bg-opacity-80 p-4 mt-5 rounded-lg mb-5 shadow-md  border-2 text-center  text-white border-red-800"
                >
                  <h3 class="text-2xl font-bold">{{ tour.title }} Tour</h3>
                  <h3 class="text-xl semi-bold">{{ tour?.artist?.details?.stagename }}</h3>
                  <p>Date: {{ tour.date }}</p>
                  <p>Venue: {{ tour.venue }}</p>
                  <p>City: {{ tour.location }}</p>
                  <p>time: {{ tour.time}}</p>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
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
            <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Playlist</h2>
            <PlaylistCollection :playlists="playlists" />
          </section>
        </main>
      </template>
    </Layout>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import Swiper from "swiper"; // Import Swiper
  import "swiper/swiper-bundle.css"; // Import Swiper styles
  
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
  import { fetchAllTours } from "../api/Tour.js";
  
  let tracks = ref([]);
  let albums = ref([]);
  let artists = ref([]);
  let playlists = ref([]);
  let artistTours = ref([]);

  
  onMounted(async () => {
    tracks.value = await fetchAllTracks();
    albums.value = await fetchAllAlbums();
    artists.value = await fetchAllArtists();
    playlists.value = await fetchAllPlaylists();
  });
  onMounted(async () => {
  artistTours.value = await fetchAllTours();
  initSwiper();
});
  
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
    overflow-x: auto; /* Enable horizontal scrolling */
    scrollbar-width: none; /* Hide scrollbar */
    -ms-overflow-style: none; /* Hide scrollbar (IE and Edge) */
  }
  .tour-card {
    flex: 0 0 auto;
    width: 300px; 
    height: 200px;/* Adjust card width */
    margin-right: 30px;
    margin-left:30px; /* Adjust margin between cards */
  }
  .tour-card:last-child {
    margin-right: 0; /* Remove margin from last card */
  }
  .border-red-800 {
    border-color: #dc2626;
  }
  </style>
  