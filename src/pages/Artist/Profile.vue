<template>
  <Layout>
    <template #Main>

      <div class="relative z-10">
        <UpdateProfile :show="showEditForm" :user="user" @close="toggleEditForm" @update="updateArtistDetails" />
      </div>
      <div class="p-6 pt-16 bg-black max-h-full flex-grow">
        <div class="flex flex-row relative">
          <img :src="getProfileImageUrl(user.image)" alt="Profile Image"
            class="rounded-full border-2 border-white w-60 h-60 cursor-pointer" @mouseover="showEditButton = true"
            @mouseout="showEditButton = false" @click="openFileInput" />
          <button v-if="showEditButton" @click="openFileInput"
            class="absolute bottom-0 right-0 bg-white text-black rounded-full p-1">
            Edit
          </button>
          <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
            {{ user.first_name }} {{ user.last_name }}
            <button @click="toggleEditForm"
              class="border-2 border-red-800 text-white -mt-9 hover:ring-2 hover:ring-red-500 text-xl rounded-lg px-4 py-2">
              Edit
            </button>
          </p>
        </div>
        <div class="mt-8 rounded-lg glass-effect">
          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10 ">Artist</h2>
            <span v-if="artists?.length > 0">
              
              <ArtistCollection :artists="artists" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Artists Available</h2>
            </span>
          </section>
          
          <TracksInTable :tracks="tracks" />

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10">Favourite Playlists</h2>
            <span v-if="playlists?.length > 0">
              <PlaylistCollection :playlists="playlists" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Playlists Available</h2>
            </span>
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10"> Favourite Albums</h2>
            <span v-if="albums?.length > 0">
              <AlbumCollection :albums="albums" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Albums Available</h2>
            </span>
          </section>
        </div>
      </div>
    </template>
  </Layout>
</template>




<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import UpdateProfile from './UpdateProfile.vue';
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue';
import TracksInTable from '../../components/Track/TracksInTable.vue';
import ArtistCollection from '../../components/Artist/ArtistCollection.vue';
import UserPlaylist from '../../temp/saloni/components/User/UserPlaylist.vue';
import AlbumCollection from '../../components/Album/AlbumCollection.vue';

import { fetchAllArtists, fetchArtist, updateArtist } from '../../api/Artist';
import { fetchArtistTracks } from '../../api/Track';
import { fetchUserPlaylists } from '../../api/Playlist';
import { fetchUserFavouriteAlbums } from '../../api/Album.js'
import { fetchUserFavouritePlaylists } from '../../api/Playlist.js'

import { getProfileImageUrl } from '../../utils/imageUrl.js';

import Swiper from "swiper";
import "swiper/swiper-bundle.css";




const store = useStore();

const artists = ref([]);
const tracks = ref([]);
const showEditForm = ref(false);
const showEditButton = ref(false);
const user = ref(store.getters.getUser)
let albums = ref([]);
let playlists = ref([]);
let favouriteplaylists = ref([]);
let favouritealbums = ref([]);
const loadArtistData = async () => {
  try {
    user.value = await fetchArtist(user.value.id);
    updateProfileImageUrl();
  } catch (error) {
    toast.error('Error fetching user');
    console.log('user id:', user.value.id);
  }
};

const loadArtistTracks = async () => {
  try {
    tracks.value = await fetchArtistTracks(user.value.id);
  } catch (error) {
    toast.error('Error fetching artist data');
  }
};

const loadAllArtists = async () => {
  try {
    artists.value = await fetchAllArtists();
    console.log('Artists: ', artists.value);
  } catch (error) {
    toast.error('Error fetching artist');
  }
};

const loadfavouriteplaylist = async (userId) => {
  console.log("Load favourite playlist", userId)
  const response = await fetchUserFavouritePlaylists(userId)
  favouriteplaylists.value = response
  playlists.value = favouriteplaylists.value.playlist
  console.log("playlissttt",playlists.value)
}

const loadfavouritealbum = async (userId) => {
  console.log("Load favourite album", userId)
  const response = await fetchUserFavouriteAlbums(userId)
  favouritealbums.value = response
  albums.value = favouritealbums.value.album
  console.log(albums.value)
}

const toggleEditForm = () => {
  showEditForm.value = !showEditForm.value;
};

const updateArtistDetails = async (updatedUser) => {
  try {
    const response = await updateArtist(updatedUser);
    user.value = response;
    console.log(user.value)
    showEditForm.value = false;
  } catch (error) {
    toast.error('Error updating user:');
  }
};

const openFileInput = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', handleFileChange);
  input.click();
};

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const formData = new FormData();
      formData.append('id', user.value.id);
      formData.append('image', file);
      formData.append('first_name', user.value.first_name);
      formData.append('last_name', user.value.last_name);
      formData.append('dob', user.value.dob);
      formData.append('gender', user.value.gender);
      const response = await updateArtist(formData);

      user.value = response;
      updateProfileImageUrl();
    } catch (error) {
      toast.error('Error uploading image:');
    }
  }
};
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
onMounted(() => {
  loadArtistData();
  loadArtistTracks();
  loadAllArtists();
  loadfavouriteplaylist(user.value.id)
  loadfavouritealbum(user.value.id)

});
</script>
