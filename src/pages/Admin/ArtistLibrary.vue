<template>
  <AdminLayout>
    <template #Main>
      <div class="p-0 bg-black text-white">
        <h1 class="text-4xl font-bold mb-8">{{ artistName }}</h1>

        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">All Songs and Reported Songs by the Artist</h2>
          <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
            <thead class="bg-zinc-800">
              <tr>
                <th class="py-2 px-4 text-left border-b border-red-800">Title</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Duration</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Released Date</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Genre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(track, trackIndex) in allTracks" :key="track.id">
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track?.title }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track?.duration }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track?.released_date }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">
                  {{ track?.genre?.name }}
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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchArtistTrack } from '../../api/Track';
import { fetchArtist } from '../../api/Artist';
import { getReportedTracksOfArtist } from '../../api/Reports';
import AdminLayout from '../AdminLayout.vue';

const route = useRoute();
const artistId = route.params.id;
const artistName = ref('');
const allTracks = ref([]);
const reportedTracks = ref([]);

const fetchArtistData = async () => {
  try {
    const [artistInfo, allArtistTracks] = await Promise.all([
      fetchArtist(artistId),
      fetchArtistTrack(artistId)
    ]);

    artistName.value = `${artistInfo.first_name} ${artistInfo.last_name}`;
    allTracks.value = allArtistTracks;

    const reportedArtistTracks = await getReportedTracksOfArtist(artistId);
    reportedArtistTracks.forEach(reportedTrack => {
      const index = allTracks.value.findIndex(track => track.id === reportedTrack.track.id);
      if (index !== -1) {
        allTracks.value[index] = {
          ...reportedTrack.track,
          report_count: reportedTrack.report_count,
          is_banned: reportedTrack.banned
        };
      } else {
        allTracks.value.push({
          ...reportedTrack.track,
          report_count: reportedTrack.report_count,
          is_banned: reportedTrack.banned
        });
      }
    });
  } catch (error) {
    console.error("Error fetching artist data:", error);
  }
};

onMounted(() => {
  fetchArtistData();
});
</script>
