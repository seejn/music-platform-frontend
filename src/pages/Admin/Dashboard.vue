<template>
  <AdminLayout>
    <template #Main>
      <button @click="showChart">Click</button>
      <h6 class="text-center text-4xl mx-10 mb-10 text-white">Dashboard</h6>
      <div class="flex justify-between">

        <div class="flex-2 mr-4">
          <div class="rounded-xl mb-8">
            <div class="chart-container">

              <span v-if="dataLoaded">
                <div class="rounded-xl">
                  <div class="justify-around">
                    <div class="card w-11/12 ml-10 mb-8 bg-zinc-600 hover:bg-zinc-500">
                      <h2 class="text-3xl font-semibold mb-4 text-center text-white">Artist Popularity</h2>
                      <div class="chart-container">
                        <Bar :data="artistPopularityDataForBar" :options="chartOptionsForBar" />
                      </div>
                    </div>
                  </div>
                </div> 
              </span>
              
            </div>
          </div>

          <div class="rounded-lg">
            <div class="justify-center">
              <div class="card  ml-10 w-11/12 my-10 bg-zinc-700 hover:bg-zinc-500">
                <h2 class="text-3xl font-semibold mb-4 text-center text-white">
                  Artist Popularity
                </h2>
                <div class="chart-container">
                  <span v-if="dataLoaded">
                    <Pie :data="artistPopularityDataForPie" :options="chartOptionsForPie" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
          <button class="text-white ring-2 ring-red-800 px-5 py-3 rounded-lg hover:bg-red-800 hover:text-white mb-3 ml-10">Export Stats</button>
        </div>
        </div>
        <!-- Right Column -->
        <div class="flex-1 mr-10 w-full">
          <Card 
            :totalArtists="totalArtists"
            :totalUsers="totalUsers"
            :totalAlbums="totalAlbums"
            :totalTracks="totalTracks"

          />
            <!-- :totalTracksCount="totalTracksCount"  -->
        </div>
     
      </div>
    </template>
  </AdminLayout>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Card from '../../components/Dashboard/Card.vue'
// import Bar from '../../components/Dashboard/Bar.vue'
// import Pie from '../../components/Dashboard/Pie.vue'
import { 
  fetchAllArtistsAlbumFavorites,
  fetchArtistAlbumCounts,
  fetchTotalArtists,
  fetchTotalUsers,
  fetchTotalTracks,
} from '../../api/Dashboard';
import { getRandomColors } from '../../utils/randomHexColor';

import Layout from '../Layout.vue';

import { Bar, Pie } from 'vue-chartjs'
import AdminLayout from '../AdminLayout.vue';


const dataLoaded = ref(false)
const artists = ref([])
const totalArtists = ref(0)
const totalUsers = ref(0)
const totalAlbums = ref(0)
const totalTracks = ref(0)




const showChart = () => {
  dataLoaded.value = !dataLoaded.value
}


const artistPopularityDataForBar = ref({
  labels: artists.value,
  datasets: [
    {
      label: [],
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
});

const chartOptionsForBar = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#ffffff'
      }
    },
    x: {
      ticks: {
        color: '#ffffff'
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#ffffff'
      }
    },
    tooltip: {
      titleColor: '#ffffff',
      bodyColor: ''
    }
  }
})


const artistPopularityDataForPie = ref({
  labels: artists.value,
  datasets: [
    {
      label: 'Number of Plays',
      data: [],
      backgroundColor: ["#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064"],
      borderColor: '#ffffff',
      borderWidth: 1
    }
  ]
})


const chartOptionsForPie = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#ffffff'
      }
    },
    x: {
      ticks: {
        color: '#ffffff'
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#ffffff'
      }
    },
    tooltip: {
      titleColor: '#ffffff',
      bodyColor: '#ffffff'
    }
  }
})

const loadCounts = async () => {

  
  const artists = await fetchTotalArtists()
  const users = await fetchTotalUsers()
  const tracks = await fetchTotalTracks()

  totalArtists.value = artists.total_artists
  totalUsers.value = users.total_users
  totalTracks.value = tracks.total_tracks
  console.log(totalTracks.value)

  // totalAlbums = await fetchTotalArtists
  // totalTracls = await fetchTotalArtists

}

const loadTotalAlbums = async() => {
  const response = await fetchArtistAlbumCounts()
  let total = 0

  response.forEach(res => {
    total += res.total_albums
  })

  totalAlbums.value = total
}


const loadAllAlbumFavouriteData = async () => {
  try {
    const response = await fetchAllArtistsAlbumFavorites();
    console.log(response);

    const filteredResponse = response.filter(res => res.total_favourite_count > 0);

    const filtered_artists = filteredResponse.map(res => res.artist);
    const filtered_fav_count = filteredResponse.map(res => res.total_favourite_count);

    const randomColors = getRandomColors(filtered_artists.length)

    artistPopularityDataForBar.value.labels = filtered_artists
    artistPopularityDataForBar.value.datasets[0].label = 'popularity'
    artistPopularityDataForBar.value.datasets[0].data = filtered_fav_count
    artistPopularityDataForBar.value.datasets[0].backgroundColor = randomColors

    artistPopularityDataForPie.value.labels = filtered_artists
    artistPopularityDataForPie.value.datasets[0].data = filtered_fav_count
    artistPopularityDataForPie.value.datasets[0].backgroundColor = randomColors


    dataLoaded.value = true

    console.log(artistPopularityDataForBar.value)
    console.log(artistPopularityDataForPie.value)

  } catch (error) {
    console.error("Error loading album favorite data:", error);
  }
};

onMounted(() => {
  loadCounts()
  loadTotalAlbums()
  loadAllAlbumFavouriteData();
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

.flex-2 {
  flex: 2;
}

.flex-1 {
  flex: 1;
}
</style>