<template>
    <div class="p-6">
             <p class="font-semibold text-white text-4xl">Top Artist</p>
         </div>
         <div class="w-full overflow-hidden">
           <div id="carousel" class="flex transition-transform ease-in-out duration-500 bg-opacity-0">
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/ha.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                  
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/ade.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/ar.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/ji.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/jo.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/tay.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/beat.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/src/assets/pic/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
                   <p class="text-white text-center">Artist name</p>
               </div>
           </div>
           <div  class="w-full flex">
                   <Button/>
   </div>
       </div>
      
</template>
<script setup>
import Button from '../Button.vue';
</script>