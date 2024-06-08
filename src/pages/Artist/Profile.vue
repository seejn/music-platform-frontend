<template>
  <Layout>
    <template #Main>
      {{ users }}
     <div class="p-6 pt-16 bg-black max-h-full flex-grow ">
          <div class="flex flex-row">
            <img :src="profileImageUrl" alt="" class="rounded-full border-2 border-white w-60 h-60">
            <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
              {{ users.first_name }} {{ users.last_name }}
              <i @click="toggleEditForm" class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
            </p>
            <!-- <p class="text-white mt-[11vw] mt">{{ users.email }}</p> -->
          </div>
          <div class=" mt-8 rounded-lg glass-effect">
            <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mt-10">Artist</h2>
                    <ArtistCollection :artists="artists"/>
              </section>
            <TracksInTable :tracks="tracks" />
            <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mt-10">Playlists</h2>
                    <PlaylistCollection :playlists="playlists" />
              </section>
            <UserPlaylist :playlists="playlists" />
          </div>
        </div>
      </template>
      </Layout>
</template>
<script setup>
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue'
import TracksInTable from '../../components/Track/TracksInTable.vue'
import ArtistCollection from '../../components/Artist/ArtistCollection.vue'

import UserSongs from '../../temp/saloni/components/User/UserSongs.vue'
import UserPlaylist from '../../temp/saloni/components/User/UserPlaylist.vue'

import { fetchAllArtists, fetchArtist } from '../../api/Artist';
import { fetchArtistTracks } from '../../api/Track';
import { fetchUserPlaylists } from '../../api/Playlist';

import { ref,onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();

const artists =ref([])
const tracks = ref([])
const playlists = ref([])

const users=ref([])
const userId = computed(() => store.getters.getUser.id); 

const loadArtistData = async ()=>{
  try{
    users.value= await fetchArtist(userId.value)
    console.log("user value", users.value);
  }
  catch(error){
    console.log("Error fetching user",error);
    console.log("user id:",userId.value)
  }
}

const loadArtistTracks = async () => {
  try{
    tracks.value = await fetchArtistTracks(userId.value)
  }catch(error){
    console.log(error)
  }
}

const loadAllArtists = async () => {
  try{
    artists.value = await fetchAllArtists()
    console.log("Artists: ",artists.value)
  }catch(error){
    console.log("From FetchAllArtists: ", error)
  }
}

const loadUserPlaylists = async () => {
  try{
    playlists.value = await fetchUserPlaylists(userId.value)
    console.log("load user playlists: ",playlists.value)
  }catch(error){
    console.log("From FetchAllArtists: ", error)
  }
}

const profileImageUrl = computed(() => {
  return users.value.image ? `${import.meta.env.VITE_API_BASE_URL}${users.value.image}` : '/path/to/default/image.png';
});

onMounted( () => {
  loadArtistData()
  loadArtistTracks()
  loadAllArtists()
  loadUserPlaylists()
})
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
