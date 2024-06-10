<template>
  <Layout>
    <template #Main>
      <p class="text-white">{{ playlistName }}</p>

      <div class="p-6 pt-16 bg-black max-h-full flex-grow">
        <div class="flex flex-row">
          <img src="/src/assets/pic/dua.jpeg" alt="" class="border-2 border-white w-60 h-60">
          <div class="ml-2 mt-[7vw] ">

            <div v-if="isEditing" class="h-min">
              <input type="text" v-model="newPlaylistName" class="text-5xl text-black font-bold bg-white p-2 w-72 rounded">
              
              <div class="mt-2">
                <button @click="savePlaylistName" class="bg-black hover:bg-black text-white px-2 py-2 rounded">Save</button>
                <button @click="cancelEdit" class="bg-black hover:bg-black text-white px-4 py-2 rounded">Cancel</button>
              </div>

            </div>
            <div v-else>
              <p @click="toggleEditForm" class="font-bold text-white text-5xl cursor-pointer">
                {{ playlistName }}
                <i class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
              </p>
              
            </div>
          
            <p v-if="!isEditing" class="text-white mt-4">Username</p>
          </div>
      
        </div>
      </div>

      <main class="flex-grow bg-black p-8 flex flex-col space-y-4">
        <div v-if="playlist.length > 0">
          <div class="overflow-y-auto max-h-screen">
            <h2 class="text-2xl font-bold mb-4 text-white text-center">Playlist</h2>
            <table class="min-w-full bg-black text-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b-2 border-red-700">Title</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Release Date</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Duration</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Singer</th>
                  <th class="py-2 px-4 border-b-2 border-red-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="track in playlist" :key="track.id" class="text-center">
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track.title }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ formatDate(track.released_date) }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track.duration }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">{{ track.artist.first_name }}</td>
                  <td class="py-2 px-4 border-b border-red-700 text-center">
                    <button @click="removeTrack(track.id)" class="text-white border-2 py-1 px-4 border-blood rounded-full">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>

          <h2 class="text-2xl font-bold mb-4 text-white">Search Tracks</h2>
          <div class="p-1 mb-4">
            <input type="text" v-model="searchTerm" placeholder="Search..." class="w-100 p-2 border border-gray-300 rounded-md bg-black text-white" @input="filterTracks">
          </div>
          <div class="overflow-y-auto max-h-screen" v-if="searchTerm && filteredTracks.length > 0">
            <ul>
              <li v-for="track in filteredTracks" :key="track.id" class="py-2 px-4 bg-zinc-900 text-white shadow-md mb-2 flex items-center justify-between">
                <span>{{ track.title }}</span>
                <button @click="addTrack(track)" class="text-white border-2 py-1 px-4 border-blood rounded-full">Add</button>
              </li>
            </ul>
          </div>
          <div v-else-if="searchTerm && filteredTracks.length === 0" class="text-center text-white">No tracks found</div>
          <div v-else class="text-center text-white">Start searching to see results</div>
          
        </div>

      </main>
    </template>
  </Layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      searchTerm: '',
      playlistName: 'My Playlist',
      newPlaylistName: '',
      isEditing: false,
      playlist: [],
      tracks: [],
      filteredTracks: [],
    };
  },
  methods: {
    toggleEditForm() {
      this.newPlaylistName = this.playlistName;
      this.isEditing = true;
    },
    savePlaylistName() {
      this.playlistName = this.newPlaylistName;
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
    },
    addTrack(track) {
      if (!this.playlist.find(item => item.id === track.id)) {
        this.playlist.push(track);
      }
    },
    removeTrack(trackId) {
      this.playlist = this.playlist.filter(track => track.id !== trackId);
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    async fetchTracks() {
      try {
        const response = await axios.get('http://localhost:8000/track/get_all_tracks/');
        this.tracks = response.data.data; 
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    },
    filterTracks() {
      const regex = new RegExp('^' + this.searchTerm, 'i'); 
      if (this.searchTerm.trim() === '') {
        this.filteredTracks = [];
      } else {
        this.filteredTracks = this.tracks.filter(track => regex.test(track.title));
      }
    },
  },
  watch: {
    searchTerm(newVal) {
      if (newVal === '') {
        this.filteredTracks = [];
      }
    },
  },
  mounted() {
    this.fetchTracks();
  }
};
</script>

<style>

</style>
