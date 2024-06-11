<template>
<AdminLayout>
    <template #Main>
        <h1 class="text-white text-2xl ">Analytics of Artist {{ id }}</h1>
        <div class="flex justify-between">

            <div class="flex-2 mr-4">

                <div class=" mt-10">
                    <span>
                        <AdminCard :totalAlbums="totalAlbums" :totalTracks="totalTracks" /></span>
                </div>
                <div class="bg-zinc-700 mx-10 my-10 h-2/4 rounded-lg">

                    <h6 class="text-white text-2xl mx-10 mt-10">Favorite album based on number of user (gender wise) </h6>
                    <span v-if="dataLoaded">
                        <Bar :data="albumMaleFemaleRatioData" :options="chartOptionsForBar" class="w-48 h-36" />
                    </span>

                </div>
                <div>
          <button class="text-white ring-2 ring-red-800 px-5 py-3 rounded-lg hover:bg-red-800 hover:text-white mb-3 ml-10">Export Stats</button>
        </div>
            </div>

            <div class="flex-1 bg-zinc-700 mx-10 my-10 rounded-lg">

                <span v-if="dataLoaded">
                    <h6 class="text-white text-2xl mx-10 mt-10">Number of favorite songs in an album</h6>
                    <Pie :data="albumFavouriteData" :options="chartOptionsForPie" />
                </span>
            </div>
        </div>
    </template>
</AdminLayout>
</template>

<script setup>
import AdminCard from '../Dashboard/AdminCard.vue'

import {
    onMounted,
    ref
} from 'vue'
import {
    Bar,
    Pie
} from 'vue-chartjs'

import {
    fetchArtistAlbumFavouriteStates
} from '../../api/Dashboard.js'

import LandingLayout from '../../pages/LandingLayout.vue'
import AdminLayout from '../../pages/AdminLayout.vue';
import {
    fetchArtistTotalTracks,
    fetchArtistTotalAlbums
} from '../../api/Dashboard.js';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const dataLoaded = ref(false)
const totalAlbums = ref(0)
const totalTracks = ref(0)
const artistAlbums = ref([])
const favouriteCount = ref([])

const albumMaleFemaleRatioData = ref({
    labels: [],
    datasets: [{
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
    },
    elements: {
        arc: {
            borderColor: '#ffffff'
        }
    }
})

const albumFavouriteData = ref({
    labels: [],
    datasets: [{
        label: 'Number of Plays',
        data: [],
        backgroundColor: ["#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064"],
        borderColor: '#ffffff',
        borderWidth: 1
    }]
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
        if (res[0] && res[0].user__gender === "male") return res[0].count
        else return 0
    })
    const favouriteByFemale = favouriteByGender.map((res) => {
        if (res[0] && res[0].user__gender === "female") return res[0].count
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

const loadCount = async (id) => {
    const tracks = await fetchArtistTotalTracks(id);
    const albums = await fetchArtistTotalAlbums(id);
    totalTracks.value = tracks.total_tracks
    totalAlbums.value = albums.total_albums

}

onMounted(() => {
    loadCount(props.id)
    loadArtistAlbumFavouriteStats()

})
</script>
