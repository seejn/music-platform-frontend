<template>
    <Layout>
      <template #Main>
        <div class="p-0 bg-black text-white ">
  
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Banned Songs</h2>
            <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
              <thead class="bg-zinc-800 text-center">
                <tr>
                  <th class="py-2 px-4  border-b border-red-800">Title</th>
                  <th class="py-2 px-4  border-b border-red-800">Artist</th>
                  <th class="py-2 px-4  border-b border-red-800">Duration</th>
                  <th class="py-2 px-4  border-b border-red-800">Released Date</th>
                  <th class="py-2 px-4  border-b border-red-800">Reports</th>
                  <th class="py-2 px-4  border-b border-red-800">Actions</th>
                  <th class="py-2 px-4  border-b border-red-800">Is Banned</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(report, reportIndex) in bannedTracks" :key="report.id">
                  <td class="py-2 px-4  border-b border-red-800">{{ report.track.title }}</td>
                  <td class="py-2 px-4  border-b border-red-800">
                    {{ report.track.artist ? report.track.artist.first_name + ' ' + report.track.artist.last_name : 'Unknown Artist' }}
                  </td>
                  <td class="py-2 px-4  border-b border-red-800">{{ report.track.duration }}</td>
                  <td class="py-2 px-4  border-b border-red-800">{{ report.track.released_date }}</td>
                  <td class="py-2 px-4  border-b border-red-800">{{ report.report_count }}</td>
                  <td class="py-2 px-4  border-b border-red-800">
                    <button @click="unbanTrack(report.track.id)" class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2">
                      Unban
                    </button>
                  </td>
                  <td class="py-2 px-4 border-b border-red-800">{{ report.track.is_banned ? 'Yes' : 'No' }}</td>
                </tr>
                <tr v-show="bannedTracks.length==0"><td colspan="7" class=" text-center"> <h1 >No banned Tracks</h1></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </Layout>
  </template>
  
  <script setup>
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import { ref, onMounted } from 'vue';
  import { getAllBannedTracks, getUnBannedTracksOfArtist } from '../../api/Reports';
  
  const artistName = ref('');
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
  
  const unbanTrack = async (trackId) => {
    try {
      await getUnBannedTracksOfArtist(trackId);
      toast.success("Track unban successful");
      fetchBannedTracksData();
    } catch (error) {
      toast.error("Error unbanning track" );
    }
  };
  </script>
  