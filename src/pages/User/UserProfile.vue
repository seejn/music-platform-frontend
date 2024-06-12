<template>
  <Layout>
    <template #Main>
      <div class="relative z-10">
        <UpdateUserProfile
          :show="showEditForm"
          :user="user"
          @close="toggleEditForm"
          @update="updateUserDetails"
        />
      </div>

      <div class="p-6 pt-16 bg-black max-h-full flex-grow">
        <div class="flex flex-row">
          <img
            :src="profileImageUrl"
            alt=""
            class="rounded-full border-2 border-white w-60 h-60"
          />
          <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
            {{ user?.first_name }} {{ user?.last_name }}
            <button
              @click="toggleEditForm"
              class="border-2 border-red-800 text-white hover:ring-2 hover:ring-red-500 text-xl rounded-lg px-4 py-2"
            >
              Edit
            </button>
          </p>
          <span v-if="!isLoggedInUser">
            <span v-if="!isFollowing">
              <button
                
                @click="toggleFollow"
                class="ml-4 bg-blue-500 text-white hover:bg-blue-700 text-xl rounded-lg px-4 py-2"
              >
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                Follow
              </button>
            </span>

            <span v-if="isFollowing">
              <button
                
                @click="toggleFollow"
                class="ml-4 bg-red-500 text-white hover:bg-red-700 text-xl rounded-lg px-4 py-2"
              >
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
                Unfollow
              </button>
            </span>
          </span>
        </div>
        <div class="mt-8 rounded-lg glass-effect">
          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10 ml-5">
              Artist
            </h2>
            <ArtistCollection :artists="artists" />
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10">Shared Playlists</h2>
            <span v-if="playlists.length > 0">
              <PlaylistCollection :playlists="playlists" />
            </span>
            <span v-else class="font-bold text-xl text-center text-white">
              <h2>No Playlists Available</h2>
            </span>
          </section>

          <section>
            <div class="scrollable-table-container mt-10">
              <TracksInTable :tracks="tracks" />
            </div>
          </section>
          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10">Playlists</h2>
            <PlaylistCollection :playlists="playlists" />
          </section>
          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10">
              Favourite Albums
            </h2>
            <span v-if="albums.length > 0">
              <AlbumCollection :albums="albums" />
            </span>
            <span class="font-bold text-xl text-center text-white" v-else>
              <h2>No Albums Available</h2>
            </span>
          </section>
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
import TracksInTable from '../../components/Track/TracksInTable.vue';
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue';
import ArtistCollection from '../../components/Artist/ArtistCollection.vue';
import { fetchAllArtists } from '../../api/Artist';
import { fetchAllTracks } from '../../api/Track';
import { fetchUserPlaylists, fetchSharedPlaylists } from '../../api/Playlist';
import { updateUser, fetchUser, followUser, unfollowUser, isFollowing as fetchIsFollowing } from '../../api/User';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const route = useRoute();
const store = useStore();

const loggedInUser = store.getters.getUser

const visitedUser = ref(props.id) 
const isLoggedInUser = ref(loggedInUser.id === parseInt(visitedUser.value));

const artists = ref([]);
const tracks = ref([]);
const albums = ref([]);
const showEditForm = ref(false);
const user = ref({});
const isFollowing = ref(false);
const playlists = ref([]);
const sharedplaylists = ref([]);


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
    artists.value = await fetchAllArtists();
  } catch (error) {
    console.error('Error fetching artists', error);
  }
};

const loadSharedplaylist = async (userId) => {
  console.log('Load shared playlist', );
  try {
    const response = await fetchSharedPlaylists(userId);
    console.log('Shared playlist response:', response);
    sharedplaylists.value = response;
    playlists.value = response.map(item => item.playlist); 
    console.log('Extracted playlists:', playlists.value);
  } catch (error) {
    console.error('Error fetching shared playlists', error);
  }
};

const profileImageUrl = computed(() => {
  return user.value && user.value.image
    ? `${import.meta.env.VITE_API_BASE_URL}${user.value.image}`
    : 'default-profile-image-url.jpg'; // Replace with your default image URL
});

const toggleEditForm = () => {
  showEditForm.value = !showEditForm.value;
};

const updateUserDetails = async (updatedUser) => {
  try {
    const response = await updateUser(user.value.id, updatedUser);
    user.value = response.data;
  } catch (error) {
    console.error('Error updating user', error);
  }
};

const toggleFollow = async () => {
  try {
    if (isFollowing.value) {
      await unfollowUser(props.id);
      isFollowing.value = false;
    } else {
      await followUser(props.id);
      isFollowing.value = true;
    }
  } catch (error) {
    console.error('Error toggling follow status', error);
  }
};

const checkFollowing = async (userId) => {
  try{
    const response = await fetchIsFollowing(loggedInUser.id, userId)
    isFollowing.value = response.is_following    
  }catch(error){
    console.log(error)
  }
}

watch(() => props.id, (newId) => {
  isLoggedInUser.value = loggedInUser.id === parseInt(newId)
  loadUserData(newId);
  loadAllTracks();
  loadAllArtists();
  loadSharedplaylist(newId);
  checkFollowing(newId)
})

onMounted(() => {
  loadUserData(props.id);
  loadAllTracks();
  loadAllArtists();
  loadSharedplaylist(props.id);
  checkFollowing(props.id)
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
