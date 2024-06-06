<template>
  <Layout>
    <template #Main>

      <div class="text-white">
        {{ artist }}
      </div>
      <div class="flex flex-col" style="background-attachment: url('/public/con.jpeg');">

        <div class="flex flex-grow min-h-0">

          <div class="flex-grow flex-row  bg-black relative">
            <!-- <div class=" inset-0 opacity-20 z-0">
                      <img src="/public/con.jpeg" alt="Background Image" class="w-full object-cover">
                    </div> -->
            <div class="relative mt-48 p-6 w-full bg-black bg-opacity-90 overflow-hidden z-10">
              <div class="flex items-center mb-5">
                <img :src="imageUrl" alt="Conan Gray" class="rounded-full w-40 mr-4">
                <div>
                  <p class="text-white text-5xl font-bold mb-3">{{ artist.first_name }}</p>
                  <p class="text-white">{{artist.biography}}</p>
                </div>
              </div>

              <div class="bg-black bg-opacity-50 rounded-lg p-6 overflow-y-auto shadow-lg max-h-full">
                <h2 class="text-2xl font-bold text-white mb-4">New tracks</h2>
                <table class="min-w-full bg-transparent text-white">
                  <thead>
                    <tr>
                      <th class="py-2 px-4 text-left">Title</th>
                      <th class="py-2 px-4 text-left">Release Date</th>
                      <th class="py-2 px-4 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(track, index) in tracks" :key="index">
                      <td class="py-2 px-4 text-left border-b border-white">{{ track.title }}</td>
                      <td class="py-2 px-4 text-left border-b border-white">{{ track.release_date }}</td>
                      <td class="py-2 px-4 text-left border-b border-white">{{ track.duration }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-opacity-0">
                <Album />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>
<script setup>
import { ref ,computed} from 'vue';
import { useRoute } from 'vue-router';
import { fetchArtist } from '../api/Artist';



const route = useRoute();
const artistId = ref(null);
const artist = ref({});
const album = ref({});
const track = ref({});

artistId.value = route.params.id;

const fetchArtistData = async () => {
  try {
    artist.value = await fetchArtist(artistId.value);
    album.value = artist.value.album || [];
    track.value = album.value.track || [];
    console.log("artist value", artist.value);
    console.log("album value", album.value);




  }
  catch (error) {
    console.log("error fetching artist data");
  }
}

fetchArtistData();



const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_BASE_URL}${artist.value.image || ''}`;
});
</script>
