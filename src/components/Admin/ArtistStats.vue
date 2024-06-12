<template>
    <LandingLayout>
        <template #Main>
            <h1 class="text-white">Analytics of Artist {{ id }}</h1>

            <span v-if="dataLoaded">
                <Pie :data="albumFavouriteData" :options="chartOptionsForPie" />
            </span>

            <span v-if="dataLoaded">
                <Bar :data="albumMaleFemaleRatioData" :options="chartOptionsForBar" />
            </span>


        </template>
    </LandingLayout>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { Bar, Pie } from 'vue-chartjs'

import { fetchArtistAlbumFavouriteStates } from '../../api/Dashboard.js'

import LandingLayout from '../../pages/LandingLayout.vue'


const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const dataLoaded = ref(false)

const artistAlbums = ref([])
const favouriteCount = ref([])

const albumMaleFemaleRatioData = ref({
    labels: [],
    datasets: [
      {
        label: 'Male',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Female',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  })
  
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


  const albumFavouriteData = ref({
      labels: [],
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


const loadArtistAlbumFavouriteStats = async () => {
    const response = await fetchArtistAlbumFavouriteStates(props.id)

    const albums = response.data.map((res) => res.title)

    const favouriteCount = response.data.map((res) => res.favourite_count)

    const favouriteByGender = response.data.map((res) => res.favourites_by_gender)

    const favouriteByMale = favouriteByGender.map((res) => {
       if(res[0] && res[0].user__gender === "male") return res[0].count
       else return 0
    })
    const favouriteByFemale = favouriteByGender.map((res) => {
        if(res[0] && res[0].user__gender === "female") return res[0].count
        else return 0
    })
    
    albumMaleFemaleRatioData.value.labels = albums
    albumMaleFemaleRatioData.value.datasets[0].data = favouriteByMale
    albumMaleFemaleRatioData.value.datasets[1].data = favouriteByFemale
    
    albumFavouriteData.value.labels = albums
    albumFavouriteData.value.datasets[0].data = favouriteCount

    console.log(favouriteByMale)
    console.log(favouriteByFemale)
    dataLoaded.value = true
}



onMounted(() => {
    loadArtistAlbumFavouriteStats()
})

</script>