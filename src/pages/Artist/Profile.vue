<template>
  <Layout>
    <template #Main>
      {{ users }}
      <div class="p-6 pt-16 bg-black max-h-full flex-grow">
        <div class="flex flex-row">
          <img :src="profileImageUrl" alt="" class="rounded-full border-2 border-white w-60 h-60">
          <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
            {{ users.first_name }} {{ users.last_name }}
            <button @click="toggleEditForm" class="border-2 border-red-800 text-white hover:ring-2 hover:ring-red-500 text-xl rounded-lg px-4 py-2">Edit</button>
          </p>
        </div>
        <div class="mt-8 rounded-lg glass-effect">
          <section>
            <h2 class="text-3xl font-bold mb-4 text-white mt-10">Artist</h2>
            <ArtistCollection :artists="artists" />
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
  <UpdateProfile :show="showEditForm" :user="users" @close="toggleEditForm" @update="updateArtistDetails" />
</template>

<script setup>
import UpdateProfile from './UpdateProfile.vue'
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue'
import TracksInTable from '../../components/Track/TracksInTable.vue'
import ArtistCollection from '../../components/Artist/ArtistCollection.vue'
import UserPlaylist from '../../temp/saloni/components/User/UserPlaylist.vue'
import { fetchAllArtists, fetchArtist } from '../../api/Artist'
import { fetchArtistTracks } from '../../api/Track'
import { fetchUserPlaylists } from '../../api/Playlist'
import { updateArtist } from '../../api/Artist'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const artists = ref([])
const tracks = ref([])
const playlists = ref([])
const showEditForm = ref(false)
const users = ref([])
const userId = computed(() => store.getters.getUser.id)

const loadArtistData = async () => {
  try {
    users.value = await fetchArtist(userId.value)
    console.log("user value", users.value)
  } catch (error) {
    console.log("Error fetching user", error)
    console.log("user id:", userId.value)
  }
}

const loadArtistTracks = async () => {
  try {
    tracks.value = await fetchArtistTracks(userId.value)
  } catch (error) {
    console.log(error)
  }
}

const loadAllArtists = async () => {
  try {
    artists.value = await fetchAllArtists()
    console.log("Artists: ", artists.value)
  } catch (error) {
    console.log("From FetchAllArtists: ", error)
  }
}

const loadUserPlaylists = async () => {
  try {
    playlists.value = await fetchUserPlaylists(userId.value)
    console.log("load user playlists: ", playlists.value)
  } catch (error) {
    console.log("From FetchAllArtists: ", error)
  }
}

const profileImageUrl = computed(() => {
  return users.value.image ? `${import.meta.env.VITE_API_BASE_URL}${users.value.image}` : '/path/to/default/image.png'
})

const toggleEditForm = () => {
  console.log(toggleEditForm)
  showEditForm.value = !showEditForm.value
}

const updateArtistDetails = async (updatedUser) => {
  try {
    console.log(updatedUser.id)
    await updateArtist(updatedUser)
    users.value = updatedUser
    showEditForm.value = false
  } catch (error) {
    console.error("Error updating user:", error)
  }
}

onMounted(() => {
  loadArtistData()
  loadArtistTracks()
  loadAllArtists()
  loadUserPlaylists()
})
</script>

