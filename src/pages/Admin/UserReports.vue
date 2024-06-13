<template>
  <AdminLayout>
    <template #Main>
      <div class="p-0 bg-black text-white">
        <h1 class="text-4xl font-bold mb-8">{{ artistName }}</h1>

        <div>
          <h2 class="text-2xl font-bold mb-4">Reported Songs of the Artists</h2>
          <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
            <thead class="bg-zinc-800 text-xl text-center border-b-2 border-b-darkgray">
              <tr>
                <th class="py-2 px-4 ">Title</th>
                <th class="py-2 px-4 ">Artist</th>
                <th class="py-2 px-4 ">Report Count</th>
                <th class="py-2 px-4 ">Is Banned</th>
                <th class="py-2 px-4 ">Actions</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-if="reportedTracks?.length <= 0">
                <td
                  colspan="5"
                  class="py-4 px-4 text-center text-lg"
                >
                  No reported tracks
                </td>
              </tr>
              <tr v-for="(report, reportIndex) in reportedTracks" :key="report.id">
                <td class="py-4 px-4 ">{{ report.track__title }}</td>
                <td class="py-4 px-4 ">{{ report.artist_first_name }} {{ report.artist_last_name
                  }}</td>
                <td class="py-4 px-4 ">{{ report.report_count }}</td>
                <td class="py-4 px-4 ">{{ report.is_banned ? 'Yes' : 'No' }}</td>
                <td class="py-4 px-4 ">
                  <RouterLink :to="{ name: 'ReportedTrackDetails', params: { id: report.track__id } }">
                    <button
                      class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2">View
                      Details</button>
                  </RouterLink>
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
import { getAllReportedTracks } from '../../api/Reports';
import AdminLayout from '../AdminLayout.vue';

const artistName = ref('');
const reportedTracks = ref([]);

const fetchReportedTracksData = async () => {
  try {
    const response = await getAllReportedTracks();
    console.log(response)
    reportedTracks.value = response;
    console.log(reportedTracks.value)
  } catch (error) {
    toast.error("Error fetching reported tracks");
  }
};

onMounted(() => {
  fetchReportedTracksData();
});


</script>
