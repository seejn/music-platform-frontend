<template>
  <Layout>
    <template #Main>
      <div class="p-0 bg-black text-white">
        <h1 class="text-4xl font-bold mb-8">{{ artistName }}</h1>

        <!-- Songs -->
        <div class="overflow-x-auto mb-12">
          <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
            <thead class="bg-zinc-800">
              <tr>
                <th class="py-2 px-4 text-left border-b border-red-800">Title</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Duration</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Released Date</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Reports</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Actions</th>
                <th class="py-2 px-4 text-left border-b border-red-800">Is Banned</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(track, trackIndex) in tracks" :key="track.id">
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track.released_date }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track.reportsCount }}</td>
                <td class="py-2 px-4 text-left border-b border-red-800 flex space-x-2 relative">
                  <button :disabled="track.reportsCount < 5" class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2" @click="banTrack(track.id)">
                    Ban
                  </button>
                </td>
                <td class="py-2 px-4 text-left border-b border-red-800">{{ track.isBanned ? 'Yes' : 'No' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { banTracks, reportTrack, fetchAllTracks } from '../../api/Track'; // Assuming there's a new API function fetchAllTracks
import { fetchArtist } from '../../api/Artist';

const route = useRoute();
const artistId = computed(() => route.params.id);
const artistName = ref('');
const tracks = ref([]);

const fetchAllReportedTracks = async () => {
  try {
    const allTracks = await fetchAllTracks(); // Fetch all tracks
    const reportedTracks = allTracks.filter(track => track.reportsCount > 0); // Filter reported tracks
    tracks.value = reportedTracks;
  } catch (error) {
    console.error("Error fetching tracks:", error);
  }
};

onMounted(() => {
  fetchAllReportedTracks();
});

// Function to ban a track
const banTrack = async (trackId) => {
  try {
    // Perform banning action in backend
    await banTracks(trackId);
    // Refresh track list after banning
    fetchAllReportedTracks();
  } catch (error) {
    console.error("Error banning track:", error);
  }
};

// Computed property to determine if a track is banned
const bannedTracks = computed(() => {
  return tracks.value.map(track => {
    return {
      ...track,
      isBanned: track.banned ? true : false // Assuming 'banned' property exists in each track object
    };
  });
});
</script>
