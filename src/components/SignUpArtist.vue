<template>
  <div class="main min-h-screen flex justify-center items-center bg-black ">
    <div class="container max-w-7xl w-full bg-white rounded-lg shadow-lg flex">
      <div class="w-2/3">
        <img src="@/assets/billie.jpg" alt="Billie" class="w-full h-full object-cover"/>
      </div>
      <div class="w-1/2 p-8">
        <form @submit.prevent="submitForm">
          <div>
            <h2 class="text-3xl font-bold mb-8 text-black text-center">Registration Form</h2>
            <div class=" space-y-6">
              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="first_name">First Name</label>
                <input type="text" v-model="info.first_name" id="first_name" class="form-input w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1" required />
              </div>
              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="lname">Last Name</label>
                <input type="text" v-model="info.last_name" id="last_name" class="form-input w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1" required />
              </div>

              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="dob">Date of Birth</label>
                <input type="date" v-model="info.dob" id="dob" class="form-input w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1" />
              </div>

              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="email">Email</label>
                <input type="email" v-model="info.email" id="email" class="form-input w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1" />
              </div>

              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="gender">Gender</label>
                <select v-model="info.gender" id="gender" class="form-select w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1">
                  <option disabled value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="address">Address</label>
                <input type="text" v-model="info.address" id="address" class="form-input w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1" />
              </div>

              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="password">Password</label>
                <input type="password" v-model="info.password" id="password" class="form-input w-full rounded-md border border-gray-300 bg-white text-gray-900 p-1" />
              </div>

              <div class="form-submit flex justify-center mt-8">
                <button type="submit" class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mb">Submit</button>
              </div>
              
              <div class="flex justify-center mt-8">
                <p>Already have an account?</p>
              </div>
    
              <div class="flex justify-center mt-4">
                <button @click="navigateToLogin" class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mb">Login</button>
              </div>
            
            </div>
          </div>
        </form>  
   
      </div>
    </div>
  </div>
</template>

