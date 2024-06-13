<template>
    <AdminLayout>
      <template #Main>
        <div class="p-0 bg-black text-white ">
  
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Banned Songs</h2>
            <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
              <thead class="bg-zinc-800 text-center text-xl border-b border-b-darkgray">
                <tr>
                  <th class="py-2 px-4 ">Title</th>
                  <th class="py-2 px-4 ">Artist</th>
                  <th class="py-2 px-4 ">Banned Until</th>
                  <th class="py-2 px-4 ">Actions</th>
                </tr>
              </thead>
              <tbody>

              <tr v-if="bannedTracks?.length <= 0">
                <td
                  colspan="4"
                  class="py-4 px-4 text-center text-lg"
                >
                  No banned tracks
                </td>
              </tr>
                <tr v-for="(report, reportIndex) in bannedTracks" :key="report.id" class="text-center hover:bg-zinc-800">
                  <td class="py-2 px-4">{{ report.track.title }}</td>
                  <td class="py-2 px-4">
                    {{ report?.artist ? report?.artist?.first_name + ' ' + report?.artist?.last_name : 'Unknown Artist' }}
                  </td>
                  <td class="py-2 px-4">{{ report?.banned_until }}</td>
                  <td class="py-2 px-4">
                    <button @click="unban(report?.track?.id)" class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2">
                      Unban
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </AdminLayout>
  </template>
  
  <script setup>
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import { ref, onMounted } from 'vue';
  import { getAllBannedTracks, getUnBannedTracksOfArtist, unbanTrack } from '../../api/Reports';
import AdminLayout from '../AdminLayout.vue';
  
  const bannedTracks = ref([]);
  
  const fetchBannedTracksData = async () => {
    try {
      const response = await getAllBannedTracks();
      bannedTracks.value = response;
    } catch (error) {
      toast.error("Error fetching banned tracks");
    }
  };
  
  onMounted(() => {
    fetchBannedTracksData();
  });
  
  const unban = async (trackId) => {
    try {
      const response = await unbanTrack(trackId);
      const updatedBannedTracks = bannedTracks.value.filter((bannedTrack) => bannedTrack.track.id !== trackId)
      bannedTracks.value = updatedBannedTracks
      
      toast.success(response.message);
    } catch (error) {
      console.log(error)
      toast.error("Error unbanning track" );
    }
  };
  </script>
  