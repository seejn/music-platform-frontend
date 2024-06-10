<template>

  <div class="guest w-full bg-black text-white">
      <nav class="bg-black text-white  h-20 p-6 flex items-center justify-between">
          <div class="container mx-auto p-6 flex justify-between items-center">
        <div class="absolute left-0 p-6 text-lg font-semibold">
          Artist Management System
        </div>
        <ul class="absolute right-0 flex space-x-4 p-6">
          <li>
            <router-link to="/login" class="p-6 font-lg text-lg hover:text-orange-800">Login</router-link>
          </li>
          <li>
            <router-link to="/signup" class="p-6 font-lg text-lg hover:text-orange-800">SignUp</router-link>
          </li>
          <li>
            <router-link to="/artist-signup" class="p-6 font-lg text-lg hover:text-orange-800">For Artist</router-link>
          </li>
      
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>
nav {
  box-shadow: 0 4px 2px -2px gray;
}
.guest
  {
    font-family: 'Inter', sans-serif;
    font-size: small;
  }

</style>
