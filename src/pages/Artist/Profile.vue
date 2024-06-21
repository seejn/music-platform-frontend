<template>
  <Layout>
    <template #Main>
      <header class="playlist-header text-white">

        <div class="relative z-10">
          <UpdateProfile :show="showEditForm" :user="user" @close="toggleEditForm" @update="updateArtistDetails" />
        </div>

        <div class="p-6 pt-16 bg-black max-h-full flex-grow relative z-1">
          <div class="flex flex-row">
            <div class="relative group">
              <img :src="getProfileImageUrl(user?.image)" alt="Artist Image"
                class="w-60 h-60 border-4 rounded-full border-red-800">
              <div
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                @click="triggerFileInput">
                <span class="text-white" v-show="isArtistOwner">Choose Photo</span>
              </div>
              <input type="file" ref="fileInput" class="hidden" @change="onImageChange">
            </div>


            <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
              {{ user?.first_name }} {{ user?.last_name }}
              <button @click="toggleEditForm"
                class="border-2 border-red-800 text-white -mt-9 hover:ring-2 hover:ring-red-500 text-xl rounded-lg px-4 py-2">
                Edit
              </button>
            </p>
            <!-- <div>

              <ArtistTourCol :tours="tours" class="mt-5 px-6 ml-10 w-full" />
            </div> -->
          </div>



        </div>

      </header>
      <main class="flex-grow bg-black flex flex-col space-y-4">
        <div class="rounded-lg glass-effect">
          

          <TracksInTable :tracks="tracks" class="mb-4"/>

          <section>
            <h2 class=" text-3xl font-bold text-white  ml-5 ">Tour details</h2>
            <span v-if="tours?.length > 0">
              <ArtistTourCol :tours="tours" class="mt-5 px-6 w-full" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Tours Available</h2>
            </span>
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10 ml-5"> Favourite Albums</h2>
            <span v-if="albums?.length > 0">
              <AlbumCollection :albums="albums" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Albums Available</h2>
            </span>
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10 ml-5">Favourite Playlists</h2>
            <span v-if="favouriteplaylists.length > 0">
              <FavouritePlaylistCollection :favouriteplaylists="favouriteplaylists" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Playlists Available</h2>
            </span>
          </section>

        <transition name="fade">
          <div v-if="showImageForm"
            class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div class="bg-black p-8 rounded-lg">
              <h2 class="text-2xl font-bold mb-4 text-white">Save Image</h2>
              <img :src="imageUrl" alt="Selected Image" class="w-60 h-60 border-4 border-blood mb-4">
              <div class="flex justify-end space-x-4">
                <button @click="saveImage" class="px-4 py-2 bg-gray-300 text-white rounded-md">Save</button>
                <button @click="cancelImage" class="px-4 py-2 bg-gray-300 text-white rounded-md">Cancel</button>
              </div>
            </div>
            </div>
          </transition>
        </div>
      </main>
    </template>


  </Layout>

</template>

<script setup>
import ArtistTour from '../../components/Tour/ArtistTour.vue'
import ArtistTourCol from '../../components/Tour/ArtistTourCol.vue'
import { ref, onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';
import 'vue3-toastify/dist/index.css';

import UpdateProfile from './UpdateProfile.vue';
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue';
import TracksInTable from '../../components/Track/TracksInTable.vue';
import ArtistCollection from '../../components/Artist/ArtistCollection.vue';
import UserPlaylist from '../../temp/saloni/components/User/UserPlaylist.vue';
import AlbumCollection from '../../components/Album/AlbumCollection.vue';

import { fetchAllArtists, fetchArtist, updateArtist, updateArtistProfileImage } from '../../api/Artist';
import { fetchArtistTracks } from '../../api/Track';
import { fetchUserFavouriteAlbums } from '../../api/Album.js'
import { fetchUserFavouritePlaylists } from '../../api/Playlist.js'

import { getProfileImageUrl } from '../../utils/imageUrl.js';
import defaultImageUrl from '../../assets/placeholders/image.png';
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import {
  fetchArtistTour
} from '../../api/Tour.js';
import FavouritePlaylistCollection from '../../components/Track/FavouritePlaylistCollection.vue';


const store = useStore();

const artists = ref([]);
const tracks = ref([]);
const user = ref(store.getters.getUser);
const artist = ref();
const showEditForm = ref(false);
const fileInput = ref(null);
const tours = ref([])
const imageUrl = ref(defaultImageUrl);
const imageFile = ref(null);
const showImageForm = ref(false);
const showEditButton = ref(false);

const router = useRouter();
let albums = ref([]);
let playlists = ref([]);
let favouriteplaylists = ref([]);
let favouritealbums = ref([]);

const isArtistOwner = computed(() => {
  return user.id === artists.value?.id;
});


const loadArtistData = async (artistId) => {
  try {
    artist.value = await fetchArtist(artistId);
    if (artist.value.imageUrl) {
      imageUrl.value = artist.value.imageUrl;
    } else {
      imageUrl.value = defaultImageUrl;
    }
  } catch (error) {
    console.log("error in fetching artist")
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
  favouriteplaylists.value = favouriteplaylists.value.playlist
  console.log(favouriteplaylists.value)
}

const loadfavouritealbum = async (userId) => {
  console.log("Load favourite album", userId)
  const response = await fetchUserFavouriteAlbums(userId)
  favouritealbums.value = response
  albums.value = favouritealbums.value.album
  console.log(albums.value)
}

const triggerFileInput = () => {
  fileInput.value.click();
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageFile.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
    showImageForm.value = true;
  }
};

const saveImage = async () => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile.value);
    console.log(formData)
    const response = await saveImageToArtist(formData);

    console.log("saveImage", response)

    user.value = response
    window.localStorage.setItem("user", JSON.stringify(user.value))
    showImageForm.value = false;
    toast.success("Images saved successfully")
  } catch (error) {
    toast.error("Failed to save the image")
  }
};

const saveImageToArtist = async (formData) => {
  try {
    // console.log(user.value.id);
    console.log(formData);
    return await updateArtistProfileImage(user.value.id, formData);
  } catch (error) {
    toast.error('Error saving image to artist:');
  }
};
const cancelImage = () => {
  imageUrl.value = artist.value.imageUrl ? artist.value.imageUrl : defaultImageUrl;
  showImageForm.value = false;
};



const toggleEditForm = () => {
  showEditForm.value = !showEditForm.value;
};

const updateArtistDetails = async (updatedUser) => {
  try {
    const response = await updateArtist(user.value.id,updatedUser);
    user.value = response;
    toast.success("Profile updated successfully")
    console.log(user.value)
    showEditForm.value = false;
  } catch (error) {
    toast.error('Error updating user:');
  }
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

const loadTourDetail = async () => {
  try {
    const loadArtistTour = await fetchArtistTour(user.value.id);
    tours.value = loadArtistTour;
    console.log("tour details", tours.value)
  } catch (error) {
    console.log("Error in fetching tour details");
  }
}
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
  loadArtistData(user.value.id);
  loadArtistTracks();
  loadAllArtists();
  loadfavouriteplaylist(user.value.id)
  loadfavouritealbum(user.value.id)
  loadTourDetail()

});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
