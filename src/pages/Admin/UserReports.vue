<template>
  <Layout>
    <template #Main>
      <div class="p-0 bg-black text-white">
        <h1 class="text-4xl font-bold mb-8">{{ artistName }}</h1>

        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Reported Songs of the Artists</h2>
          <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
            <thead class="bg-zinc-800">
              <tr>
                <th class="py-2 px-4 text-left border-b border-red-800">Title</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Artist</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Duration</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Released Date</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Reports</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Is Banned</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(report, reportIndex) in reportedTracks" :key="report.id">
                <td class="py-2 px-4 text-left border-b border-red-800">{{ report.track.title }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ report.track.artist.first_name }} {{ report.track.artist.last_name }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ report.track.duration }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ report.track.released_date }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ report.report_count }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ report.track.is_banned ? 'Yes' : 'No' }}</td>
              </tr>
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
import { getAllReportedTracks } from '../../api/Reports';

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
