<template>
    <Layout>
        <template #Main>
            <div>
             
            </div>
    <div class="rounded-lg">
      <h1 class="text-3xl font-bold mb-6 text-primary-text-color">Stats</h1>
  
      <div class="justify-around">
        <div class="card w-[45vw] mb-8 bg-white">
          <h2 class="text-3xl font-semibold mb-4 text-center text-black">
            Genre Distribution
          </h2>
          <div class="chart-container">
            <Pie :data="genreDistributionData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-col bg-dark-primary-color">
    <main class="flex-1 p-6 bg-primary-color flex justify-end">
      <div class="bg-primary-color w-[20rem] bg-opacity-75 rounded-lg ml-24">
        <h1 class="text-3xl font-bold mb-6 mt-6 text-primary-text-color text-center">
          Information
        </h1>

        <div
          class="p-5 rounded-md w-full bg-light-primary-color text-primary-text-color mb-8 text-center hover:bg-secondary-color hover:text-dark-primary-color cursor-pointer"
        >
          <h2 class="text-xl font-bold mb-2">Total Artists</h2>
          <p class="text-2xl">{{ totalArtists }}</p>
        </div>

        <div
          class="p-5 rounded-md bg-light-primary-color text-primary-text-color hover:bg-secondary-color hover:text-dark-primary-color cursor-pointer mb-10 text-center"
        >
          <h2 class="text-xl font-bold mb-2">Total Users</h2>
          <p class="text-2xl">{{ totalUsers }}</p>
        </div>

        <div
          class="p-5 rounded-md bg-light-primary-color text-primary-text-color hover:bg-secondary-color hover:text-dark-primary-color cursor-pointer mb-10 text-center"
        >
          <h2 class="text-xl font-bold mb-2">Total Albums</h2>
          <p class="text-2xl">{{ totalAlbums }}</p>
        </div>

        <div
          class="p-5 rounded-md bg-light-primary-color text-primary-text-color hover:bg-secondary-color hover:text-dark-primary-color cursor-pointer selection mb-10 text-center"
        >
          <h2 class="text-xl font-bold mb-2">Total Songs</h2>
          <p class="text-2xl">{{ totalSongs }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
</Layout>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { Bar, Pie } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement
  } from 'chart.js'
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement
  )
  
  export default {
    name: 'ArtistDashboard',
    components: {
      Bar,
      Pie
    },
    setup() {
      const songPerformanceData = ref({
        labels: ['Song One', 'Song Two', 'Song Three', 'Song Four', 'Song Five'],
        datasets: [
          {
            label: 'Number of Plays',
            data: [1500, 1200, 1100, 900, 700],
            backgroundColor: ['#4a90e2', '#50e3c2', '#f5a623', '#e94e77', '#7ed321'],
            borderColor: '#080727',
            borderWidth: 1
          }
        ]
      })
  
      const genreDistributionData = ref({
        labels: ['Rock', 'Pop', 'Jazz', 'Classical', 'Hip Hop'],
        datasets: [
          {
            label: 'Genre Distribution',
            data: [12, 19, 3, 5, 2],
            backgroundColor: ['#4a90e2', '#50e3c2', '#f5a623', '#e94e77', '#7ed321'],
            borderColor: '#080727',
            borderWidth: 1
          }
        ]
      })
  
      const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#302f31'
            }
          },
          x: {
            ticks: {
              color: '#302f31'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#302f31'
            }
          },
          tooltip: {
            titleColor: '#000000',
            bodyColor: ''
          }
        }
      })
  
      return {
        songPerformanceData,
        genreDistributionData,
        chartOptions
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    backdrop-filter: blur(10px);
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }
  </style>