<template>
    <AdminLayout>
        <template #Main>
            <div class="p-0 bg-black text-white">
                <h1 class="text-4xl font-bold mb-8">{{ artistName }}</h1>
    
                <div v-for="(track, trackIndex) in tracks" :key="track.id" class="mb-12">
                    <div class="flex items-center mb-4">
                        <img :src="getImageUrl(track.image)" alt="Album Cover" class="w-24 h-24 mr-4 rounded-lg shadow-md">
                        <div>
                            <h2 class="text-2xl font-semibold">{{ track.title }}</h2>
                            <h3>Singles</h3>
                        </div>
                    </div>
                 
                    <div class="overflow-x-auto">
                        <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-7/12">
                            <thead class="bg-zinc-800">
                                <tr>
                                    <th class="px-4 py-2 text-left">Title</th>
                                    <th class="px-4 py-2 text-left">Duration</th>
                                    <th class="px-4 py-2 text-left">Released Date</th>
                                    <th class="px-4 py-2 text-left">Reports</th>
                                    <th class="px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="last:border-0">
                                    <td class="px-4 py-2">{{ track.title }}</td>
                                    <td class="px-4 py-2">{{ track.duration }}</td>
                                    <td class="px-4 py-2">{{ track.released_date }}</td>
                                    <td class="px-4 py-2">{{ track.reports }}</td>
                                    <td class="px-4 py-2 flex space-x-2 relative">
                                        <button 
                                            class="text-white bg-black rounded-md shadow-md text-md" 
                                            @click="toggleOptions(trackIndex)">
                                            <i class="fas fa-ellipsis-v">...</i>
                                        </button>
                                        <div v-if="showOptions[trackIndex]" class="bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-2">
                                            <button @click="editTrack(track)" class="w-full text-left px-4 py-2">Edit</button>
                                            <div v-if="showEditForm">
                                                <EditSingleTrack :track="track" :genres="genres" @save="saveTrack" @close="showEditForm = false" />
                                            </div>
                                            <button @click="deleteTrackData(track.id)" class="w-full text-left px-4 py-2">Delete</button>
                                            <button 
                                                @click="reportTrack(track)" 
                                                :disabled="track.isBanned" 
                                                class="w-full text-left px-4 py-2">
                                                Report
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    
                <div v-for="(album, albumIndex) in albums" :key="album.id" class="mb-12">
                    <div class="flex items-center mb-4">
                        <img :src="getImageUrl(album.image)" alt="Album Cover" class="w-24 h-24 mr-4 rounded-lg shadow-md">
                        <div class="items-center relative">
                            <h2 class="text-2xl font-semibold">{{ album.title }}</h2>
                            <div class="flex">
                                <h1>Album</h1>
                                <button class="text-white bg-black rounded-md shadow-md text-md ml-4" @click="toggleOptions(`album-${albumIndex}`)">
                                    <i class="fas fa-ellipsis-v">...</i>
                                </button>
                                <div v-if="showOptions[`album-${albumIndex}`]" class="absolute bg-black text-white rounded-md shadow-md py-2 w-40 z-10 right-0 mt-8">
                                    <button @click="deleteAlbum(album.id)" class="block w-full text-left px-4 py-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="bg-zinc-900 shadow-md rounded-lg overflow-hidden table-fixed w-11/12">
                            <thead class="bg-zinc-800">
                                <tr>
                                    <th class="py-2 px-4 text-center w-1/5">Cover</th>
                                    <th class="py-2 px-4 text-center w-1/5">Title</th>
                                    <th class="py-2 px-4 text-center w-1/5">Duration</th>
                                    <th class="py-2 px-4 text-center w-1/5">Released Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(track, trackIndex) in album.track" :key="track.id">
                                    <td class="py-2 px-4 text-center">
                                        <img :src="getImageUrl(track.image)" alt="Track Image" class="w-16 h-16 object-cover">
                                    </td>
                                    <td class="py-2 px-4 text-center">{{ track.title }}</td>
                                    <td class="py-2 px-4 text-center">{{ track.duration }}</td>
                                    <td class="py-2 px-4 text-center">{{ track.released_date }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </template>
    </AdminLayout>
    </template>
    
    <script setup>
    import EditSingleTrack from './EditSingleTrack.vue'
    import { ref, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { deleteTrack, updateTrack } from "../../api/Track";
    import { fetchArtistTrack } from '../../api/Track';
    import { fetchAllAlbums, deleteAlbum } from '../../api/Album';
    import { fetchGenres } from '../../api/Genre';
    import AdminLayout from '../AdminLayout.vue';
import { toast } from 'vue3-toastify';
    
    const store = useStore();
    const artistId = computed(() => store.getters.getUser.id);
    const artistName = computed(() => store.getters.getUser.first_name + ' ' + store.getters.getUser.last_name);
    const tracks = ref([]);
    const albums = ref([]);
    const showOptions = ref({});
    const showEditForm = ref(false);
    const genres = ref([]);
    
    const fetchArtistSongs = async () => {
        try {
            tracks.value = await fetchArtistTrack(artistId.value);
            console.log("Artist tracks:", tracks.value);
        } catch (error) {
            console.log("Error fetching tracks:", error);
        }
    };
    
    const fetchArtistAlbums = async () => {
        try {
            const allAlbums = await fetchAllAlbums();
            albums.value = allAlbums.filter(album => album.artist.id === artistId.value);
            console.log("Filtered Albums:", albums.value);
            albums.value.forEach(album => {
                console.log(`Tracks for album ${album.title}:`, album.track);
            });
        } catch (error) {
            console.error('Error fetching artist albums:', error);
        }
    };
    
    const loadGenres = async () => {
        try {
            genres.value = await fetchGenres();
        } catch (error) {
            console.error("Failed to fetch genres:", error);
        }
    };
    
    const editTrack = (track) => {
        showEditForm.value = true;
    };
    
    const saveTrack = async (updatedTrack) => {
        try {
            console.log("from save track", updatedTrack.id);
            await updateTrack(updatedTrack);
            fetchArtistSongs();
            showEditForm.value = false;
            toast.success("Track edited successfully");
        } catch (error) {
            toast.error("Error in updating track")
            console.error("Error updating track", error);
        }
    };
    
    const deleteTrackData = async (trackId) => {
        try {
            const response = await deleteTrack(trackId);
            console.log(response);
            const updatedTrack = tracks.value.filter((track) => track.id !== trackId);
            tracks.value = updatedTrack;
            toast.success("Track deleted successfully")
        } catch (error) {
            console.error("Error deleting track", error);
        }
    };
    
    const reportTrack = (track) => {
        track.reports += 1;
        if (track.reports >= 5) {
            banTrack(track);
        }
    };
    
    const banTrack = (track) => {
        track.isBanned = true;
        setTimeout(() => {
            track.isBanned = false;
            track.reports = 0; 
        }, 30000); 
    };
    
    onMounted(() => {
        fetchArtistSongs();
        fetchArtistAlbums();
        loadGenres();
    });
    
    const getImageUrl = (imagePath) => {
        return `${import.meta.env.VITE_API_BASE_URL}${imagePath}`;
    };
    
    const toggleOptions = (key) => {
        showOptions.value = {
            ...showOptions.value,
            [key]: !showOptions.value[key]
        };
    };
    
    const deleteArtistAlbum = async (albumId) => {
        try {
            const response = await deleteAlbum(albumId);
            console.log(response);
            const updatedAlbum = albums.value.filter((album) => album.id !== albumId);
            albums.value = updatedAlbum;
        } catch (error) {
            console.error("Error deleting track", error);
        }
    };
    </script>
    
    <style scoped>
    .flex.items-center.relative {
        position: relative;
    }
    
    .flex.items-center.relative .absolute {
        top: 100%;
        right: 0;
    }
    </style>
    