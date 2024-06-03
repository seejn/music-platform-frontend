<template>
    <div class="p-6">
             <p class="font-semibold text-white text-4xl">Top Artist</p>
         </div>
         <div class="w-full overflow-hidden">
           <div id="carousel" class="flex transition-transform ease-in-out duration-500 bg-opacity-0">
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/ha.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                  
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/ade.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/ar.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/ji.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/jo.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/tay.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/dua.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/beat.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-full">
                   <p class="text-white text-center">Artist name</p>
               </div>
               <div class="slides flex-shrink-0 mx-6">
                   <img src="/public/lana.jpeg" alt="Cover Image" class="w-60 h-60 rounded-lg">
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