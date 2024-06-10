<template>
    
        <div>
          <div class="rounded-xl">  
            <div class="justify-around">
              <div class="card w-11/12 ml-10 mb-8 bg-zinc-600">
                <h2 class="text-3xl font-semibold mb-4 text-center text-white">Male-Female Ratio per Album</h2>
                <div class="chart-container">
                  <Bar :data="albumMaleFemaleRatioData" :options="chartOptions" />
                </div>
              </div>
            </div>
          </div>
        </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Bar } from 'vue-chartjs'
  
 
  const albumMaleFemaleRatioData = ref({
    labels: ['Album One', 'Album Two', 'Album Three', 'Album Four', 'Album Five'],
    datasets: [
      {
        label: 'Male',
        data: [15, 20, 12, 18, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Female',
        data: [10, 15, 8, 12, 18],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  })
  
  // Chart options
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
          color: '#ffffff'
        }
      },
      tooltip: {
        titleColor: '#ffffff',
        bodyColor: ''
      }
    }
  })
  </script>
  
  <style scoped>
  .card {
    backdrop-filter: blur(10px);
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }
  </style>
  