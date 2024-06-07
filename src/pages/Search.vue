<template>
  <Layout>
    <template #Main>
      <div>
        <h2 class="text-2xl font-bold mb-4 text-white">Search</h2>
        <div class="p-1 mb-4">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search..."
            class="w-100 p-2 border border-gray-300 rounded-md bg-black text-white"
            @input="filterResults"
          />
        </div>

        <div class="overflow-y-auto max-h-screen" v-if="searchTerm">
          <div v-if="filteredArtists.length > 0">
            <h3 class="text-xl font-bold text-white">Artists</h3>
            <ul>
              <li
                v-for="artist in filteredArtists"
                :key="artist.id"
                class="py-2 px-4 bg-zinc-900 text-white shadow-md mb-2 flex items-center justify-between"
              >
                <span>{{ artist.first_name }} {{ artist.last_name }}</span> 
              </li>
            </ul>
          </div>

          <div v-if="filteredTracks.length > 0">
            <h3 class="text-xl font-bold text-white">Tracks</h3>
            <ul>
              <li
                v-for="track in filteredTracks"
                :key="track.id"
                class="py-2 px-4 bg-zinc-900 text-white shadow-md mb-2 flex items-center justify-between"
              >
                <span>{{ track.title }}</span>
              </li>
            </ul>
          </div>

          <div v-if="filteredAlbums.length > 0">
            <h3 class="text-xl font-bold text-white">Albums</h3>
            <ul>
              <li
                v-for="album in filteredAlbums"
                :key="album.id"
                class="py-2 px-4 bg-zinc-900 text-white shadow-md mb-2 flex items-center justify-between"
              >
                <span>{{ album.title }}</span>
              </li>
            </ul>
          </div>

          <div v-if="filteredPlaylists.length > 0">
            <h3 class="text-xl font-bold text-white">Playlists</h3>
            <ul>
              <li
                v-for="playlist in filteredPlaylists"
                :key="playlist.id"
                class="py-2 px-4 bg-zinc-900 text-white shadow-md mb-2 flex items-center justify-between"
              >
                <span>{{ playlist.title }}</span>
              </li>
            </ul>
          </div>

          <div v-if="!filteredArtists.length && !filteredTracks.length && !filteredAlbums.length && !filteredPlaylists.length" class="text-center text-white">No results found</div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';

export default {
  data() {
    return {
      searchTerm: '',
      tracks: [],
      artists: [],
      albums: [],
      playlists: [],
      filteredTracks: [],
      filteredArtists: [],
      filteredAlbums: [],
      filteredPlaylists: [],
      playlist: []
    };
  },
  methods: {

    async fetchData() {
      try {
        const [tracksResponse, artistsResponse, albumsResponse, playlistsResponse] = await Promise.all([
          axios.get('http://localhost:8000/track/get_all_tracks/'),
          axios.get('http://localhost:8000/roles/artists/'),
          axios.get('http://localhost:8000/album/get_all_albums/'),
          axios.get('http://localhost:8000/track/get_all_playlist/')
        ]);

        this.tracks = tracksResponse.data.data || [];
        this.artists = artistsResponse.data.data || [];
        this.albums = albumsResponse.data.data || [];
        this.playlists = playlistsResponse.data.data || [];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    filterResults() {
      const searchTerm = this.searchTerm.trim().toLowerCase();
      if (searchTerm === '') {
        this.filteredTracks = [];
        this.filteredArtists = [];
        this.filteredAlbums = [];
        this.filteredPlaylists = [];
      } else {
        this.filteredTracks = this.tracks.filter(track => track.title && track.title.trim().toLowerCase().startsWith(searchTerm));
        this.filteredArtists = this.artists.filter(artist => (artist.first_name && artist.first_name.trim().toLowerCase().startsWith(searchTerm)) ||
                                                              (artist.last_name && artist.last_name.trim().toLowerCase().startsWith(searchTerm)));
        this.filteredAlbums = this.albums.filter(album => album.title && album.title.trim().toLowerCase().startsWith(searchTerm));
        this.filteredPlaylists = this.playlists.filter(playlist => playlist.title && playlist.title.trim().toLowerCase().startsWith(searchTerm));
      }
    },
  },
  watch: {
    searchTerm(newVal) {
      this.filterResults();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
