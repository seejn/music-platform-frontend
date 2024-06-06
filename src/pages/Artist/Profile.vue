<template>
  <Layout>
    <template #Main>
      {{ users }}
     <div class="p-6 pt-16 bg-black max-h-full flex-grow ">
          <div class="flex flex-row">
            <img :src="profileImageUrl" alt="" class="rounded-full border-2 border-white w-60 h-60">
            <p class="font-bold text-white text-5xl ml-2 mt-[7vw]">
              {{ users.first_name }}{{ users.last_name }}
              <i @click="toggleEditForm" class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
            </p>
            <p class="text-white mt-[11vw] -ml-[15vw]">{{ users.email }}</p>
          </div>
          <div class=" mt-8 rounded-lg glass-effect">
            <section>
                    <h2 class="text-3xl font-bold mb-4 text-white mx-10 mt-10">Artist</h2>
                    <ArtistCollection :artists="artists"/>
              </section>
            <UserSongs />
            <UserPlaylist />
          </div>
        </div>
      </template>
      </Layout>
</template>
<script setup>
import ArtistCollection from '../../components/Artist/ArtistCollection.vue'
import UserSongs from '../../temp/saloni/components/User/UserSongs.vue'
import UserPlaylist from '../../temp/saloni/components/User/UserPlaylist.vue'
import { fetchAllArtists, fetchArtist } from '../../api/Artist';
import { ref,onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
let artists =ref([]);
const users=ref([])
const userId = computed(() => store.getters.getUser.id); 

const fetchArtistData = async ()=>{
  try{
    users.value= await fetchArtist(userId.value)
    console.log("user value", users.value);
  }
  catch(error){
    console.log("Error fetching user",error);
    console.log("user id:",userId.value)
  }
}


onMounted( async () => {
  await fetchArtistData();
    artists.value = await fetchAllArtists()
    console.log("Artists:",artists.value)
})

const profileImageUrl = computed(() => {
  return users.value.image ? `${import.meta.env.VITE_API_BASE_URL}${users.value.image}` : '/path/to/default/image.png';
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
