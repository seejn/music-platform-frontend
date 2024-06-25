<template>
  <Layout>
    <template #Main>

      <span v-if="playlist === null">
        <h1 class="text-white">No playlist found</h1>
      </span>

      <header class="playlist-header text-white py-10">
        <div class="flex flex-row">
          <div class="relative group">
            <img :src="getProfileImageUrl(playlist?.image)" alt="Playlist Image" class="w-60 h-60 border-4 border-red-800">
          </div>
          <div class="ml-4 mt-[3vw]">
            <p class="font-bold text-white text-5xl align-text-bottom">
              {{ playlist?.title }}
            </p>
            <p class="text-white text-3xl align-text-bottom">
              {{ playlist?.user?.first_name }} {{ playlist?.user?.last_name }}
            </p>
          </div>
        </div>
      </header>

      <main class="flex-grow bg-black p-8 flex flex-col space-y-4">
        <div v-if="playlist?.track && playlist?.track?.length > 0">
          <div class="overflow-y-auto max-h-screen">
            <h2 class="text-2xl font-bold mb-4 text-white text-center">Playlist Tracks</h2>
            <table class="min-w-full bg-black text-white">
              <thead>
                <tr>
                  <th class="py-4 px-4 border-b-2 border-zinc-800">Title</th>
                  <th class="py-4 px-4 border-b-2 border-zinc-800">Release Date</th>
                  <th class="py-4 px-4 border-b-2 border-zinc-800">Duration</th>
                  <th class="py-4 px-4 border-b-2 border-zinc-800">Singer</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="track in playlist?.track" :key="track?.id" class="text-center hover:bg-zinc-700">
                  <td class="py-4 px-4 border-b ">{{ track?.title }}</td>
                  <td class="py-4 px-4 border-b ">{{ formatDate(track?.released_date) || '' }}</td>
                  <td class="py-4 px-4 border-b ">{{ track?.duration }}</td>
                  <td class="py-4 px-4 border-b ">{{ track?.artist?.first_name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="shared_playlists?.length > 0" class="mt-8">
          <h2 class="text-2xl font-bold mb-4 text-white text-center">Shared Playlists</h2>
          <div v-for="sharedPlaylist in shared_playlists" :key="sharedPlaylist.id" class="mb-4 p-4 bg-gray-800 rounded-lg">
            <p class="text-xl font-bold text-white">{{ sharedPlaylist.playlist.title }}</p>
            <p class="italic text-white">{{ sharedPlaylist.shared_by.first_name }} {{ sharedPlaylist.shared_by.last_name }}</p>
            <table class="min-w-full bg-black text-white mt-2">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b-2 border-red-700">Title</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Release Date</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Duration</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Singer</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="track in sharedPlaylist.playlist.track" :key="track?.id" class="text-center">
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track?.title }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ formatDate(track?.released_date) || '' }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track?.duration }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track?.artist?.first_name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { fetchSharedPlaylists } from '../api/Playlist.js';
import { getProfileImageUrl } from '../utils/imageUrl.js';
import { useStore } from 'vuex';

const props = defineProps({
  playlist: {
    type: Object,
    required: true
  }
});

const store = useStore();
const user = store.getters.getUser
const playlist = ref(props.playlist.playlist);
const shared_playlists = ref([]);

// const fetchSharedPlaylistsData = async () => {
//   try {
//     const response = await fetchSharedPlaylists(user.id);
//     console.log(response)
//     if (response) {
//       user.value = response.user;
//       playlist.value = response.user;
//       shared_playlists.value = response.shared_playlists;
//     } else {
//       console.log('No shared playlists found');
//     }
//   } catch (error) {
//     console.error('Error fetching shared playlists', error);
//   }
// };

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

watch(() => props.id, (newId) => {
  fetchSharedPlaylistsData(newId);
});

onMounted(() => {
  // fetchSharedPlaylistsData(props.id);
});
</script>
