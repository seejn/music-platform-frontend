<template>
  <div v-if="isModalOpen" class="bg-black !mt-0 fixed inset-0 bg-gray-900  bg-opacity-50 flex items-center justify-center">
    <div class="bg-black p-4 rounded-lg shadow-lg w-72 relative border border-red-500">
        <button @click="$emit('closePrivacyPopup')" class="text-white hover:text-red-500 absolute top-0 right-0 text-3xl p-3">&times;</button>
        <h2 class="text-lg font-bold mb-4 text-white">Change Your Privacy</h2>
        <button @click="changePlaylistPrivacy(0)" class="block w-full text-left text-white hover:text-red-500 py-2 px-4 hover:bg-gray-500">
          Public
        </button>
        <button @click="changePlaylistPrivacy(1)" class="block w-full text-left text-white hover:text-red-500 py-2 px-4 hover:bg-gray-500">
          Private
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { updatePlaylistPrivacy } from '../api/Playlist'; 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

  
  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  });
  
  const isModalOpen = ref(true);
  
  const changePlaylistPrivacy = async (playlist_type) => {
    try {
      const response = await updatePlaylistPrivacy(props.id, { playlist_type: playlist_type });
      console.log('Response from updatePlaylist:', response);
      toast.success('Playlist privacy updated successfully');
      console.log('Playlist updated successfully');
    } catch (error) {
      toast.error('Error in updating playlist privacy');
      console.error('Error updating playlist:', error);
    }
  };
  </script>
  