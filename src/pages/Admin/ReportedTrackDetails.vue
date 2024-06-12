<template>
  <LandingLayout>
    <template #Main>
      <h1 class="text-white font-bold"></h1>
      <div class="text-white mb-12">
        <div class="flex items-center mb-4">
          <img
            :src="getProfileImageUrl(reportedTrackDetail?.track?.image)"
            alt="Cover Image"
            class="w-24 h-24 mr-4 rounded-lg shadow-md"
          />
          <div class="items-center relative">
            <h2 class="text-2xl font-semibold">
              {{ reportedTrackDetail?.track?.title }}
            </h2>
            <div class="flex">
              <h1>
                {{ reportedTrackDetail?.artist?.first_name }}
                {{ reportedTrackDetail?.artist?.last_name }}
              </h1>
            </div>
            <span v-show="trackIsBanned">
              <button class="py-2 px-4 border-2 border-red-800">Banned</button>
            </span>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table
            class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full"
          >
            <thead class="bg-zinc-800">
              <tr>
                <th class="py-2 px-4 text-left border-b border-red-800 w-1/5">
                  Reported By
                </th>
                <th class="py-2 px-4 text-left border-b border-red-800 w-1/5">
                  Reported At
                </th>
                <th class="py-2 px-4 text-left border-b border-red-800 w-1/5">
                  Reason
                </th>
                <th class="py-2 px-4 text-left border-b border-red-800 w-1/5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="reportInfos?.length <= 0">
                <td
                  colspan="4"
                  class="py-2 px-4 text-left border-b border-red-800 text-center"
                >
                  No Reports for this song
                </td>
              </tr>
              <tr v-for="reportInfo in reportInfos" :key="reportInfo.id">
                <td class="py-2 px-4 text-left border-b border-red-800">
                  <p>
                    {{ reportInfo?.reported_by?.first_name }}
                    {{ reportInfo?.reported_by?.last_name }}
                  </p>
                  <p>
                    [ {{ reportInfo?.reported_by?.email }} ]
                  </p>
                </td>
                <td class="py-2 px-4 text-left border-b border-red-800">
                  {{ reportInfo?.reported_at }}
                </td>
                <td class="py-2 px-4 text-left border-b border-red-800">
                  {{ reportInfo?.description }}
                </td>
                <td class="py-2 px-4 border-b border-red-800">
                  {{ reportInfo }}
                  <button
                    @click="handleReportRemove(reportInfo.id)"
                    class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </LandingLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import LandingLayout from "../LandingLayout.vue";
import { fetchReportedTrackDetails } from "../../api/Reports.js";
import { getProfileImageUrl } from "../../utils/imageUrl.js";

import { removeReport } from "../../api/Reports.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const reportedTrackDetail = ref({});
const reportInfos = ref([]);
const trackIsBanned = ref(null)

const handleReportRemove = async (reportId) => {
  try {
    const response = await removeReport(reportId);

    const updatedReportInfos = reportInfos.value.filter(
      (reportInfo) => reportInfo.id !== reportId
    );
    reportInfos.value = updatedReportInfos;
    trackIsBanned.value = response.data.is_banned
    toast.success(response.message);
  } catch (error) {
    toast.error(error.message);
  }
};

const loadReportedTrackDetails = async () => {
  const response = await fetchReportedTrackDetails(props.id);
  reportedTrackDetail.value = response;
  trackIsBanned.value = response.is_banned
  reportInfos.value = reportedTrackDetail.value.data;
};

onMounted(() => {
  loadReportedTrackDetails();
});
</script>
