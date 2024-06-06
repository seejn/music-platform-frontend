<template>
  <Layout>
    <template #Main>
      <p class="text-white">{{ album }}</p>
      <header class="album-header text-white py-10">
        <div class="flex flex-row">
          <img :src="imageUrl" alt="Cover Image" class="w-60 h-60 rounded-lg">
          <div class="ml-2 mt-[7vw]">
            <h1 class="text-4xl font-bold">{{album.title  }}</h1>
            <p class="mt-2 text-lg italic">{{artist.first_name}} {{artist.last_name}}</p>
            <div class="mt-6 flex justify-center space-x-4" v-if="isArtist">
              <!-- Three dots button for options -->
              <div class="relative">
                <button @click="toggleOptions" class="text-white bg-black rounded-md shadow-md text-md">
                  <i class="fas fa-ellipsis-v">...</i>
                </button>
                <!-- Options menu -->
                <div v-if="showOptions" class="absolute top-10 right-0 bg-red rounded-md shadow-md py-2 w-40">
                  <button @click="editAlbum" class="block w-full text-left px-4 py-2 hover:bg-gray-200">Edit</button>
                  <button @click="deleteAlbum" class="block w-full text-left px-4 py-2 hover:bg-gray-200">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="py-4">
        <h2 class="text-2xl font-bold my-4">Tracks in this Album</h2>
        <table class="min-w-full bg-transparent text-white">
          <thead>
            <tr>
              <th class="py-2 px-4 text-left"></th>

              <th class="py-2 px-4 text-left">Title</th>
              <th class="py-2 px-4 text-left">Release Date</th>
              <th class="py-2 px-4 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(track, index) in tracks" :key="index">
              <td class="py-2 px-4 text-left border-b border-red-800">
                <img :src="imageUrl" alt="Track Image" class="w-16 h-16">
              </td>
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.release_date }}</td>
              <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </template>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

import { useRoute } from 'vue-router';
import { fetchAlbum } from '../../api/Album';

const route = useRoute();
const albumId=ref(null);
const album=ref({})
const tracks=ref({})
const artist=ref({})
albumId.value=route.params.id;





const showOptions = ref(false);
const isArtist = ref(true);

const fetchAlbumData = async () => {
  try {
    album.value = await fetchAlbum(albumId.value);
    tracks.value = album.value.track || []
    artist.value=album.value.artist
    console.log("album value", album.value);
    console.log("tracks value", tracks.value);
    console.log("artist value", artist.value);


    
  } catch (error) {
    console.log("Error fetching album", error);
  }
};

fetchAlbumData();

const editAlbum = () => {
  console.log('Editing album');
};

const deleteAlbum = () => {
  console.log('Deleting album');
};

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

// // Mock data for demonstration
// const tracks = [
//   { title: "Track 1", releaseDate: "2024-01-01", artist: "Artist 1", image: "/path/to/image1.jpg", duration: "3:45" },
//   { title: "Track 2", releaseDate: "2024-02-01", artist: "Artist 2", image: "/path/to/image2.jpg", duration: "4:15" },
//   { title: "Track 3", releaseDate: "2024-03-01", artist: "Artist 3", image: "/path/to/image3.jpg", duration: "3:30" },
// ];


const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${album.value.image || ''}`;
});
</script>
<style scoped>
.album-header {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('album-cover-url.jpg') no-repeat center center;
  background-size: cover;
}
</style>
