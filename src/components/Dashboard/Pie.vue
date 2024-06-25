<template>
  <div class="rounded-lg">
    <div class="justify-center">
      <div class="card  ml-10 mb-10 w-11/12 my-10 bg-zinc-700 hover:bg-zinc-500">
        <h2 class="text-3xl font-semibold mb-4 text-center text-white">
          Genre Distribution
        </h2>
        <div class="chart-container">
          <Pie :data="genreDistributionData" :options="chartOptions" />
        </div>
      </div>
    </div>
  </div>
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
          backgroundColor: ["#f9b8ae", "#e4bcad", "#df979e", "#d7658b", "#c80064"],
          borderColor: '#ffffff',
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
          backgroundColor: ["#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064"],
          borderColor: '#000000',
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
            color: '#00000'
          }
        },
        tooltip: {
          titleColor: '#ffffff',
          bodyColor: '#ffffff'
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
