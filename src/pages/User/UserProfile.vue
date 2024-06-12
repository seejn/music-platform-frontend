<template>
  <Layout>
      <template #Main>
          <div class="relative z-10">
              <UpdateUserProfile :show="showEditForm" :user="user" @close="toggleEditForm"
                  @update="updateUserDetails" />
          </div>
          <div class="p-6 pt-16 bg-black max-h-full flex-grow relative z-1">
              <div class="flex flex-row">
                  <div class="relative group">
                      <img :src="getProfileImageUrl(user?.image)" alt="Artist Image" 
                          class="w-60 h-60 border-4 rounded-full border-red-800">
                      <div
                          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          @click="triggerFileInput">
                          <span class="text-white">Choose Photo</span>
                      </div>
                      <input type="file" ref="fileInput" class="hidden" @change="onImageChange">
                  </div>
                  <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
                      {{ user.first_name }} {{ user.last_name }}
                      <button @click="toggleEditForm"
                          class="border-2 border-red-800 text-white hover:ring-2 hover:ring-red-500 text-xl rounded-lg px-4 py-2">Edit</button>
                  </p>
              </div>
              <div class="mt-8 rounded-lg glass-effect">
                  <section>
                      <h2 class="text-3xl font-bold mb-4 text-white mt-10 ml-5">Artist</h2>
                      <ArtistCollection :artists="artists" />
                  </section>
                  <section>
                      <div class="scrollable-table-container mt-10">
                          <TracksInTable :tracks="tracks" />
                      </div>
                  </section>
                  <section>
                      <h2 class="text-3xl font-bold mb-4 text-white mt-10">Favourite Playlists</h2>
                      <span v-if="playlists.length > 0">
                        <PlaylistCollection :playlists="playlists" />
                      </span>
                      <span v-else class="font-bold text-xl text-center text-white">
                        <h2>No Playlists Available</h2>
                      </span>
                  </section>
                  <section>
                      <h2 class="text-3xl font-bold mb-4 text-white mt-10">Favourite Albums</h2>
                      <span v-if="albums.length > 0">
                        <AlbumCollection :albums="albums" />
                      </span>
                      <span v-else class="font-bold text-xl text-center text-white">
                        <h2>No Albums Available</h2>
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
          </div>
      </template>
  </Layout>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';


import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import UpdateUserProfile from '../Artist/UpdateProfile.vue';
import AlbumCollection from '../../components/Album/AlbumCollection.vue';
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue'
import TracksInTable from '../../components/Track/TracksInTable.vue'
import ArtistCollection from '../../components/Artist/ArtistCollection.vue'
import UserPlaylist from '../../temp/saloni/components/User/UserPlaylist.vue'
import { fetchAllArtists, fetchArtist } from '../../api/Artist'
import { fetchAllTracks } from '../../api/Track'
import { fetchUserPlaylists } from '../../api/Playlist'
import { fetchUserFavouriteAlbums } from '../../api/Album.js'
import { fetchUserFavouritePlaylists } from '../../api/Playlist.js'
import { updateUser, fetchUser ,updateUserProfileImage} from '../../api/User'
import { getProfileImageUrl } from '../../utils/imageUrl.js';

import defaultImageUrl from '../../assets/placeholders/image.png';
const store = useStore()
const artists = ref([])
const tracks = ref([])
const user = ref(store.getters.getUser)

const showEditForm = ref(false)
const userId = computed(() => store.getters.getUser.id)
const fileInput = ref(null)

const imageUrl = ref(getProfileImageUrl(user.value.image))
const imageFile = ref(null)
const showImageForm = ref(false)

const albums = ref([])
const playlists = ref([])

const loadUserData = async (userId) => {
  try {
    user.value = await fetchUser(userId);
    console.log("user is",user.value)
  } catch (error) {
    console.log(error)
    toast.error(error);
    console.log('user id:', user.value.id);
  }
};

const loadAllTracks = async () => {
  try {
    tracks.value = await fetchAllTracks();
  } catch (error) {
    console.error('Error fetching tracks', error);
  }
};

const loadAllArtists = async () => {
    try {
        artists.value = await fetchAllArtists()
    } catch (error) {
        console.error(error)
    }
}

const loadFavouritePlaylists = async (userId) => {
    try {
        const response = await fetchUserFavouritePlaylists(userId)
        playlists.value = response.playlist
    } catch (error) {
        console.error(error)
    }
}

const loadFavouriteAlbums = async (userId) => {
    try {
        const response = await fetchUserFavouriteAlbums(userId)
        albums.value = response.album
    } catch (error) {
        console.error(error)
    }
}

const toggleEditForm = () => {
  showEditForm.value = !showEditForm.value;
};

const updateUserDetails = async (updatedUser) => {
    try {
        await updateUser(updatedUser)
        user.value = updatedUser
        showEditForm.value = false
    } catch (error) {
        console.error("Error updating user:", error)
    }
}

const triggerFileInput = () => {
    fileInput.value.click()
}

const onImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        imageFile.value = file
        const reader = new FileReader()
        reader.onload = (e) => {
            imageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
        showImageForm.value = true
    }
}
const saveImage = async () => {
    try {
        const formData = new FormData()
        formData.append('image', imageFile.value)
        const response = await updateUserProfileImage(user.value.id, formData)
        user.value.image = response.image
        showImageForm.value = false
    } catch (error) {
        console.error("Failed to save the image", error)
    }
}
const cancelImage = () => {
    imageUrl.value = getProfileImageUrl(user.value.image)
    showImageForm.value = false
}


watch(() => props.id, (newId) => {
  isLoggedInUser.value = loggedInUser.id === parseInt(newId)
  loadUserData(newId);
  loadAllTracks();
  loadAllArtists();
  loadSharedplaylist(newId);
  checkFollowing(newId)
const triggerFileInput = () => {
    fileInput.value.click()
}
});
onMounted(() => {
  loadUserData(props.id);
  loadAllTracks();
  loadAllArtists();
  loadSharedplaylist(props.id);
  checkFollowing(props.id)
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
