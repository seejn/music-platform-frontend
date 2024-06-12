<template>
    <div v-for="(track, trackIndex) in tracks" :key="track.id" class="mb-12">
        <div class="flex items-center mb-4">
            <img :src="getImageUrl(track.image)" alt="Album Cover" class="w-24 h-24 mr-4 rounded-lg shadow-md">
            <div>
                <h2 class="text-2xl font-semibold">{{ track.title }}</h2>
                <h3>Singles</h3>
            </div>

        </div>

        <div class="overflow-x-auto">
            <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-full">
                <thead class="bg-zinc-800">
                    <tr>
                        <th class="py-2 px-4 text-left border-b border-red-800 ">Title</th>
                        <th class="py-2 px-4 text-left border-b border-red-800 ">Duration</th>
                        <th class="py-2 px-4  text-left border-b border-red-800 ">Released Date</th>
                        <th class="py-2 px-4 text-left border-b border-red-800 "></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="last:border-0">
                        <td class="py-2 px-4 text-left border-b border-red-800">{{ track.title }}</td>
                        <td class="py-2 px-4 text-left border-b border-red-800">{{ track.duration }}</td>
                        <td class="py-2 px-4 text-left border-b border-red-800">{{ track.released_date }}</td>
                        <td class="py-2 px-4 text-left border-b border-red-800 flex space-x-2 relative">
                            <button class="bg-black text-white rounded-md shadow-md text-md"
                                @click="toggleOptions(trackIndex)">
                                <i class="fas fa-ellipsis-v">...</i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>