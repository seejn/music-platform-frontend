<template>
  <LandingLayout>
    <template #Main>
      <div class="relative w-full h-full bg-black overflow-hidden">
        <!-- <img src="/src/assets/pic/banner.png" alt="Banner" class="w-full h-full object-cover"> -->
        <img src="/src/assets/pic/bnw.jpg" alt="" class=" relative left-[95rem] h-[25rem] w-[25rem] border-4 border-red-800 rounded-full object-cover">
        <img src="/src/assets/pic/ari.jpeg" alt="" class=" relative left-[76rem] top-[-30rem] h-[20rem] w-[20rem] border-4 border-red-800 rounded-full object-cover">
        <img src="/src/assets/pic/tyler.jpeg" alt="" class=" relative left-[78rem] top-[-30rem] h-[20rem] w-[20rem] border-4 border-red-800 rounded-full object-cover">
        <img src="/src/assets/pic/mac.jpg" alt="" class=" relative left-[65rem] top-[-56rem] h-[15rem] w-[15rem] border-4 border-red-800 rounded-full object-cover">
        <img src="/src/assets/pic/post.jpg" alt="" class=" relative left-[94rem] top-[-54rem] h-[25rem] w-[25rem] border-4 border-red-800 rounded-full object-cover">
        <img src="/src/assets/pic/rex.jpg" alt="" class=" relative left-[60rem] top-[-80rem] h-[20rem] w-[20rem] border-4 border-red-800 rounded-full object-cover">
        <img src="/src/assets/pic/hoz.jpg" alt="" class=" relative left-[79rem] top-[-89rem] h-[15rem] w-[15rem] border-4 border-red-800 rounded-full object-cover">
        <div class="absolute inset-0 flex flex-col items-start justify-start top-60 space-y-4">
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
