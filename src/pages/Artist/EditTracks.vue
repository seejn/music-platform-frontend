<template>
    <div class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
        <div class="bg-black bg-opacity-50 rounded-lg p-3 w-full max-w-lg shadow-lg">
            <h2 class="text-2xl font-bold text-red-800 mb-4">Edit Song</h2>
            <form @submit.prevent="handleTrackEdit">
                <div class="mb-4">
                    <label for="songTitle" class="block text-white mb-2">Title</label>
                    <input type="text" id="songTitle" v-model="track.title" @input="clearError('title')"
                        class="w-full p-2 rounded outline-none bg-gray-700 text-white focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                    <span v-if="trackErrors.title" class="text-red-500">{{ trackErrors.title }}</span>
                </div>

                <div class="mb-4">
                    <label for="songDuration" class="block text-white mb-2">Duration</label>
                    <input type="text" id="songDuration" v-model="track.duration" @input="clearError('duration')"
                        class="w-full p-2 rounded outline-none bg-gray-700 text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                    <span v-if="trackErrors.duration" class="text-red-500">{{ trackErrors.duration }}</span>
                </div>

                <div class="mb-4">
                    <label for="songReleasedDate" class="block text-white mb-2">Released Date</label>
                    <input type="date" id="songReleasedDate" v-model="track.released_date"
                        @input="clearError('released_date')"
                        class="w-full p-2 rounded outline-none bg-gray-700 text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                    <span v-if="trackErrors.released_date" class="text-red-500">{{ trackErrors.released_date }}</span>
                    <span v-if="isFutureDate(track.released_date)" class="text-red-500">Select a date before
                        today</span>
                </div>

                <div class="mb-4">
                    <label for="songGenre" class="block text-white mb-2">Genre</label>
                    <select v-model="track.genre.id" name="genre" id="genre" @input="clearError('genre')"
                        class="w-full p-2 rounded bg-gray-700 outline-none text-white border border-gray-600 focus:border-red-800 focus:ring-2 focus:ring-red-800 caret-red-800">
                        <option value="" disabled>Choose genre of track</option>
                        <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
                    </select>
                    <span v-if="trackErrors.genre" class="text-red-500">{{ trackErrors.genre }}</span>
                </div>

                <div class="mb-4 flex justify-between">

                    <button type="button" @click="$emit('close')"
                        class="ring-2 ring-gray-600 text-white px-4 py-2 rounded hover:bg-gray-600 hover:text-white">Cancel</button>

                </div>

                <button type="submit"
                    class="w-full ring-2 ring-red-800 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-white">Save
                    Changes</button>
            </form>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    props: {
        track: {
            type: Object,
            required: true,
        },
        genres: {
            type: Array,
            required: true,
        },
        trackErrors: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        handleTrackEdit() {
            const { genre,artist, ...rest } = this.track;  

            const genre_id = genre.id;
            console.log(genre_id)
            const artist_id = artist;

            const updatedTrack = {
                ...rest,        
                genre_id:genre_id,      
                artist_id:artist_id,      
            };

            toast.success("updated track");

            this.$emit('save', updatedTrack);
        },

        clearError(subField) {
            this.$emit('clear-error', subField);
        },
        isFutureDate(date) {
            const today = new Date().toISOString().split('T')[0];
            return date > today;
        },
        handleTrackImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.track.image = file;
            }
        }
    },
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
