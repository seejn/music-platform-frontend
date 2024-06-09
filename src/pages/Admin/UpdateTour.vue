<template>
    <div class="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
      <h2 class="text-xl font-semibold mb-4">Update Event Details</h2>
      <form @submit.prevent="tourUpdate">
        <div class="mb-4">
          <label for="date-update" class="block text-gray-700">Date:</label>
          <input type="date" v-model="formData.date" id="date-update" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
        </div>
        <div class="mb-4">
          <label for="location-update" class="block text-gray-700">Location:</label>
          <input type="text" v-model="formData.location" id="location-update" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
        </div>
        <div class="mb-4">
          <label for="venue-update" class="block text-gray-700">Venue:</label>
          <input type="text" v-model="formData.venue" id="venue-update" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
        </div>
        <div class="mb-4">
          <label for="time-update" class="block text-gray-700">Time:</label>
          <input type="time" v-model="formData.time" id="time-update" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
        </div>
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md">Update</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { updateTour } from '../../api/Tour'
  import { ref } from 'vue'
  
  const formData = ref({
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
  
  const tourUpdate = async () => {
    try {
      const response = await updateTour(tourId, formData.value);
      console.log("Updated tour from tour page", response);
    } catch (error) {
      console.error("Error updating tour:", error);
      // Handle errors
    }
  }
  </script>
  
  