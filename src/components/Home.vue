<template>
  <div class="dashboard-container">
    <MainContent />
    <div class="content-container">
      <Sidebar />
      <div class="main-content">
        <div class="bg-black">
          <div class="p-6 w-4/5">
            <p class="font-semibold text-red text-4xl">Songs For You</p>
          </div>
          <div class="relative overflow-hidden">
            <div id="carousel1" class="flex transition-transform ease-in-out duration-500">
              <div v-for="(song, index) in songsForYou" :key="index" class="slides flex-shrink-0 mx-10">
                <img :src="song.image" alt="Cover Image" class="w-60 h-60 rounded-lg">
                <h3 class="text-xl text-white mt-3">{{ song.name }}</h3>
                <p class="text-white">{{ song.artist }}</p>
              </div>
            </div>
          </div>
          <!-- <div>
            <button @click="scrollLeft('carousel1', 'slides')" class="absolute top-[52%] left-60 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button @click="scrollRight('carousel1', 'slides')" class="absolute top-[52%] right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div> -->

          <!-- Trending Songs -->
          <div class="p-6">
            <p class="font-semibold text-blue-400 text-4xl mt-20">Trending Songs</p>
          </div>
          <div class="relative w-full overflow-hidden">
            <div id="carousel2" class="flex transition-transform ease-in-out duration-500">
              <div v-for="(song, index) in trendingSongs" :key="index" class="slide flex-shrink-0 mx-10">
                <img :src="song.image" alt="Cover Image" class="w-60 h-60 rounded-lg">
                <h3 class="text-xl text-white mt-3">{{ song.name }}</h3>
                <p class="text-white">{{ song.artist }}</p>
              </div>
            </div>
          </div>
          <!-- <div>
            <button @click="scrollLeft('carousel2', 'slide')" class="absolute top-[60%] left-60 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button @click="scrollRight('carousel2', 'slide')" class="absolute top-[60%] right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div> -->

          <!-- Artists You May Like -->
          <div class="p-6">
            <p class="font-semibold text-blue-400 text-4xl mt-20">Artists You May Like</p>
          </div>
          <div class="relative w-full overflow-hidden">
            <div id="carousel3" class="flex transition-transform ease-in-out duration-500">
              <div v-for="(artist, index) in artistsYouMayLike" :key="index" class="slid flex-shrink-0 mx-10">
                <img :src="artist.image" alt="Cover Image" class="w-60 h-60 rounded-full">
                <p class="text-white text-center">{{ artist.name }}</p>
              </div>
            </div>
          </div>
          <!-- <div>
            <button @click="scrollLeft('carousel3', 'slid')" class="absolute top-[60%] left-60 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button @click="scrollRight('carousel3', 'slid')" class="absolute top-[60%] right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Sidebar from './Sidebar.vue';
import MainContent from '../components/Navbar/ArtistNav.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    MainContent,
  },
  setup() {
    const songsForYou = ref([
      { name: 'Song name 1', artist: 'Artist name 1', image: '/src/assets/ha.jpeg' },
      { name: 'Song name 2', artist: 'Artist name 2', image: '/src/assets/ade.jpeg' },
      // Add more songs here
    ]);

    const trendingSongs = ref([
      { name: 'Trending song 1', artist: 'Trending artist 1', image: '/src/assets/ar.jpeg' },
      { name: 'Trending song 2', artist: 'Trending artist 2', image: '/src/assets/ji.jpeg' },
      // Add more songs here
    ]);

    const artistsYouMayLike = ref([
      { name: 'Artist 1', image: '/src/assets/jo.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },

      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },

      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },

      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },
      { name: 'Artist 2', image: '/src/assets/lana.jpeg' },

      // Add more artists here
    ]);

    const slideIndex = ref(1);
    const slidesIndex = ref(1);
    const slidIndex = ref(1);

    const scrollLeft = (carouselId, slideClass) => {
      showSlide(carouselId, slideClass, slideIndex.value -= 1);
    };

    const scrollRight = (carouselId, slideClass) => {
      showSlide(carouselId, slideClass, slideIndex.value += 1);
    };

    const showSlide = (carouselId, slideClass, n) => {
      const carousel = document.getElementById(carouselId);
      const slides = carousel.getElementsByClassName(slideClass);

      if (n > slides.length) { slideIndex.value = 1; }
      if (n < 1) { slideIndex.value = slides.length; }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${100 * (slideIndex.value - 1)}%)`;
      }
    };

    return {
      songsForYou,
      trendingSongs,
      artistsYouMayLike,
      scrollLeft,
      scrollRight,
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-container {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 0; /* Adjust padding as needed */
  background-color: #f0f0f0; /* Adjust background color as needed */
  overflow-y: scroll; /* Enable scrolling if content overflows */
  position: absolute;
  left: 500px;
  z-index: -1;
  scrollbar-width: none;
}

h1 {
  margin: 0;
}

.sidebar {
  width: 20%; /* Adjust width as needed */
  background-color: #000; /* Adjust background color as needed */
  color: #fff;
  height: 100vh;
}

.navbar {
  width: 100%;
  background-color: #000; /* Adjust background color as needed */
  color: #fff;
  position: fixed;
}
</style>
