<template>
    <AdminLayout>
        <template #Main>
            <div class="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
              <h2 class="text-xl font-semibold mb-4">Enter Event Details</h2>
              <form @submit.prevent="tourCreate">
                <div class="mb-4">
                  <label for="date" class="block text-gray-700">Date:</label>
                  <input type="date" v-model="date" id="date" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                  <label for="location" class="block text-gray-700">Location:</label>
                  <input type="text" v-model="location" id="location" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                  <label for="venue" class="block text-gray-700">Venue:</label>
                  <input type="text" v-model="venue" id="venue" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <div class="mb-4">
                  <label for="time" class="block text-gray-700">Time:</label>
                  <input type="time" v-model="time" id="time" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              </form>
            </div>
          </template>
    </AdminLayout>
</template>

<script setup>
import { CreateTour } from '../../api/Tour'

import { ref } from 'vue'
import AdminLayout from '../AdminLayout.vue';

const artist = ref([])
const tour = ref({
  date: '',
  location: '',
  venue: '',
  time: ''
})

const tourErrors = ref({
  date: "",
  location: "",
  venue: "",
  time: ""
})

const tourCreate = async () => {
  try {
    const response = await CreateTour(tour.value)
    console.log("created track from tour page", response)
  } catch (error) {
    console.error("Error creating tour:", error)
    // Handle specific error messages if available
    if (error.response && error.response.data) {
      const errors = error.response.data.errors
      if (errors) {
        for (const key in errors) {
          if (Object.hasOwnProperty.call(errors, key)) {
            if (key in tourErrors.value) {
              tourErrors.value[key] = errors[key].join(', ')
            }
          }
        }
      }
    }
  }
}
</script>
