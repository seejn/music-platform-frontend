<template>
  <Layout>
    <template #Main>
      <main class="">
      

        <section class="p-1 mb-4 mx-10">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search..."
            class="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
            @input="filterResults"
          />
        </section>

        <div v-if="searchTerm" class="mx-10 mt-10">
          <section v-if="filteredTracks.length > 0">
            <h2 class="text-3xl font-bold mb-4 text-white">Songs for You</h2>
            <TrackCollection :tracks="filteredTracks" />
          </section>

          <section v-if="role==1 && filteredUsers.length > 0" class="mt-10">
            <h2 class="text-3xl font-bold mb-4 text-white">Users</h2>
            <UserCollection :users="filteredUsers" />
          </section>

          <section v-if="filteredArtists.length > 0" class="mt-10">
            <h2 class="text-3xl font-bold mb-4 text-white">Artists</h2>
            <ArtistCollection :artists="filteredArtists" />
          </section>

          <section v-if="filteredAlbums.length > 0" class="mt-10">
            <h2 class="text-3xl font-bold mb-4 text-white" >Albums</h2>
            <AlbumCollection :albums="filteredAlbums" />
          </section>
          
          <section v-if="filteredPlaylists.length > 0" class="mt-10">
            <h2 class="text-3xl font-bold mb-4 text-white">Playlists</h2>
            <PlaylistCollection :playlists="filteredPlaylists" />
          </section>

          <div
            v-if="!filteredTracks.length && !filteredArtists.length && !filteredAlbums.length && !filteredPlaylists.length"
            class="text-center text-white"
          >
            No results found
          </div>
        </div>
      </main>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import TrackCollection from '../components/Track/TrackCollection.vue'
import AlbumCollection from '../components/Album/AlbumCollection.vue'
import PlaylistCollection from '../components/Track/PlaylistCollection.vue';
import ArtistCollection from '../components/Artist/ArtistCollection.vue'
import UserCollection from '../components/User/UserCollection.vue'
import { useStore } from 'vuex'

const store = useStore();
let searchTerm = ref('');
let users = ref([]);
let role = ref(store.getters.getRole);
let tracks = ref([]);
let albums = ref([]);
let artists = ref([]);
let playlists = ref([]);
let filteredTracks = ref([]);
let filteredUsers = ref([]);
let filteredArtists = ref([]);
let filteredAlbums = ref([]);
let filteredPlaylists = ref([]);

const fetchData = async () => {
  try {
    const [tracksResponse,userResponse, artistsResponse, albumsResponse, playlistsResponse] = await Promise.all([
      axios.get('http://localhost:8000/track/get_all_tracks/'),
      axios.get('http://localhost:8000/roles/users/'), 
      axios.get('http://localhost:8000/roles/artists/'),
      axios.get('http://localhost:8000/album/get_all_albums/'),
      axios.get('http://localhost:8000/track/get_all_playlist/')
    ]);

    tracks.value = tracksResponse.data.data || [];
    users.value = userResponse.data.data || [];
    artists.value = artistsResponse.data.data || [];
    albums.value = albumsResponse.data.data || [];
    playlists.value = playlistsResponse.data.data || [];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const filterResults = () => {
  const term = searchTerm.value.trim().toLowerCase();
  if (term === '') {
    filteredTracks.value = [];
    filteredUsers.value = [];
    filteredArtists.value = [];
    filteredAlbums.value = [];
    filteredPlaylists.value = [];
  } else {
    filteredTracks.value = tracks.value.filter(track => track.title && track.title.trim().toLowerCase().includes(term));
    filteredArtists.value = artists.value.filter(artist => (artist.first_name && artist.first_name.trim().toLowerCase().includes(term)) ||
                                                          (artist.last_name && artist.last_name.trim().toLowerCase().includes(term)));
    
                                                          
    filteredUsers.value = users.value.filter(user => (user.first_name && user.first_name.trim().toLowerCase().includes(term)) ||
                                                          (user.last_name && user.last_name.trim().toLowerCase().includes(term)));
    filteredAlbums.value = albums.value.filter(album => album.title && album.title.trim().toLowerCase().includes(term));
    filteredPlaylists.value = playlists.value.filter(playlist => playlist.title && playlist.title.trim().toLowerCase().includes(term));
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.glass-effect {
  background-color: rgba(194, 186, 186, 0.384);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 16px;
}
</style>
