<template>
  <LandingLayout>
    <template #Main>
      <div class="relative w-full h-full">
        <img src="/src/assets/pic/banner.png" alt="Banner" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex flex-col items-start justify-start top-48 space-y-4">
          <h6 class="text-white text-4xl md:text-6xl lg:text-7xl bg-black bg-opacity-50 p-4 rounded">
            Listen to your favorite Artist,
          </h6>
          <h6 class="text-white text-4xl md:text-6xl lg:text-7xl bg-black bg-opacity-50 p-4 rounded">
            <span class="text-red-800">Anytime,</span> Anywhere
          </h6>
        </div>
      </div>
    </template>
  </LandingLayout>
</template>

<script setup>
import LandingLayout from './LandingLayout.vue'
</script>
