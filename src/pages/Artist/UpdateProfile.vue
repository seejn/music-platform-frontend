<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div class="bg-black bg-opacity-50 rounded-lg p-3 w-full max-w-lg shadow-lg border-2 border-red-800">
        <h2 class="text-2xl font-bold text-white mb-4">Edit Profile</h2>
        <form @submit.prevent="handleFormSubmit">
          <div class="mb-4">
            <label for="firstName" class="block text-white mb-2">First Name</label>
            <input type="text" id="firstName" v-model="cuser.first_name" @input="clearError('first_name')"
              class="w-full p-2 rounded outline-none bg-gray-700 text-black  focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
            <span v-if="errors.first_name" class="text-red-500">{{ errors.first_name }}</span>
          </div>
          
          <div class="mb-4">
            <label for="lastName" class="block text-white mb-2">Last Name</label>
            <input type="text" id="lastName" v-model="cuser.last_name" @input="clearError('last_name')"
              class="w-full p-2 rounded outline-none bg-gray-700 text-black  focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
            <span v-if="errors.last_name" class="text-red-500">{{ errors.last_name }}</span>
          </div>
       
          <div class="mb-4">
            <label for="dob" class="block text-white mb-2">Date of Birth</label>
            <input type="date" id="dob" v-model="cuser.dob" @input="clearError('dob')"
              class="w-full p-2 rounded outline-none bg-gray-700 text-black  border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
            <span v-if="errors.dob" class="text-red-500">{{ errors.dob }}</span>
          </div>
     
          <div class="mb-4">
            <label for="gender" class="block text-white mb-2">Gender</label>
            <select v-model="cuser.gender" id="gender" @input="clearError('gender')"
              class="w-full p-2 rounded bg-gray-700 outline-none text-black  border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span v-if="errors.gender" class="text-red-500">{{ errors.gender }}</span>
          </div>
          <!-- <div class="mb-4">
          <label for="image" class="block text-white mb-2">Profile Image</label>
          <input type="file" id="image" @change="handleImageChange" @input="clearError('image')"
            class="w-full p-2 rounded outline-none bg-gray-700 text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
          <span v-if="errors.image" class="text-red-500">{{ errors.image }}</span>
        </div> -->

          <div class="mb-4 flex justify-between">
            <button type="button" @click="$emit('close')"
              class="ring-2 ring-gray-600 text-white px-4 py-2 rounded hover:bg-gray-600 hover:text-white">Cancel</button>
            <button type="submit"
              class="ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-white w-1/3">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    show: Boolean,
    user: Object,
  })
  
  const emits = defineEmits(['close', 'update'])
  
  const cuser = ref({ ...props.user })
  
  const errors = ref({})
  
  watch(() => props.user, (newUser) => {
    cuser.value = { ...newUser }
  })
  
  const clearError = (field) => {
    errors.value[field] = ''
  }
  
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]
//     cuser.value.image = file
//   }
  
  const handleFormSubmit = () => {
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      emits('update', { ...cuser.value})
    } else {
      errors.value = validationErrors
    }
  }
  
  const validateForm = () => {
    const validationErrors = {}
    if (!cuser.value.first_name) validationErrors.first_name = 'First name is required'
    if (!cuser.value.last_name) validationErrors.last_name = 'Last name is required'
    if (!cuser.value.dob) validationErrors.dob = 'Date of birth is required'
    if (!cuser.value.gender) validationErrors.gender = 'Gender is required'
    return validationErrors
  }
  </script>
  