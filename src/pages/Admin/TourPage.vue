<template>
    <AdminLayout>
        <template #Main>
            <section class="py-4">
                <h2 class="text-3xl font-bold my-4 text-white">Tours by Artists</h2>
                <div class="flex flex-row">
                    <button @click="showAddTour = true"
                        class="border-2 border-red-800 text-white hover:ring-2 hover:ring-red-800 hover:text-white py-3 px-3 rounded-lg flex-end block ">
                        Add Tour
                    </button>
                </div>
                <div class="flex-grow p-6">
                    <div class="rounded-lg p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="tour in tours" :key="tour.id"
                                class="p-4 rounded-lg shadow-lg border-2 border-red-800 bg-gray-800 hover:ring-2 hover:ring-red-800">
                                <div class="flex">
                                    <div class="mr-4 flex-shrink-0">
                                        <img :src="tour.artist ? imageUrl(tour.artist) : ''" alt="Artist Image"
                                            class=" w-48 h-48 rounded-lg border-2 border-white">
                                    </div>
                                    <div class="flex-grow text-center mt-5">
                                        <h5 class="text-white text-xl">{{ tour ? tour.title : 'Unknown Title' }}</h5>
                                        <h3 class="text-white text-lg font-semibold">{{ tour.artist ?
                                            tour.artist.first_name + ' ' + tour.artist.last_name : 'Unknown Artist' }}
                                        </h3>
                                        <p class="text-white text-lg">Date : {{ tour.date }}</p>
                                        <p class="text-white text-lg">Location : {{ tour.location }}</p>
                                        <p class="text-white text-lg">Venue : {{ tour.venue }}</p>
                                        <p class="text-white text-lg">Time : {{ formatTime24to12(tour.time) }}</p>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-evenly">
                                    <button @click="editTour(tour)"
                                        class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded mr-2">
                                        Update
                                    </button>
                                    <button @click="deletedTour(tour.id)"
                                        class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div v-if="showAddTour" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 ">
                <div class=" mx-auto bg-black p-5 rounded-md shadow-md text-white border-2 border-red-800 px-10 py-10">
                    <h2 class="text-xl font-semibold mb-4">Enter Event Details</h2>
                    <form @submit.prevent="tourCreate" class="w-[36rem] ">
                        <div class="mb-4 text-white">
                            <label for="artist" class="block">Artist:</label>
                            <select v-model="tour.artist_id" id="artist"
                                class="mt-1 block w-full border-gray-300 py-2 px-4 bg-zinc-700 rounded-md shadow-sm text-white">
                                <option v-for="artist in artists" :key="artist?.id" :value="artist?.id" class=" w-min">
                                    {{ artist?.first_name }} {{ artist?.last_name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-4 text-white">
                            <label for="title" class="block">Name:</label>
                            <input type="text" v-model="tour.title" id="title"
                                class="mt-1 block w-full border-gray-300 py-2 px-4  h-10 rounded-md shadow-sm bg-zinc-700 text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="date" class="block">Date:</label>
                            <input type="date" v-model="tour.date" id="date"
                                class="mt-1 block w-full border-gray-300 py-2 px-4  h-10 rounded-md shadow-sm bg-zinc-700 text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="location" class="block">Location:</label>
                            <input type="text" v-model="tour.location" id="location"
                                class="mt-1 block w-full border-gray-300 h-10 py-2 px-4   rounded-md shadow-sm bg-zinc-700 text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="venue" class="block">Venue:</label>
                            <input type="text" v-model="tour.venue" id="venue"
                                class="mt-1 block w-full border-gray-300 rounded-md h-10 py-2 px-4 shadow-sm bg-zinc-700 text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="time" class="block">Time:</label>
                            <input type="time" v-model="tour.time" id="time"
                                class="mt-1 block w-full border-gray-300 rounded-md h-10 py-2 px-4 shadow-sm bg-zinc-700 text-white">
                        </div>
                        <div class="flex justify-between mt-5">


                            <button type="submit"
                                class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded">Submit</button>
                            <button @click="showAddTour = false"
                                class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div v-if="showEditTour"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 ">
                <div class=" mx-auto bg-black p-5 rounded-md shadow-md text-white border-2 border-red-800 px-10 py-10">

                    <h2 class="text-xl font-semibold mb-4">Update Event Details</h2>

                    <form @submit.prevent="updatedTour" class="w-[36rem] ">
                        <div class="mb-4 text-white">
                            <label for="title" class="block">Name:</label>
                            <input type="text" v-model="tour.title" id="title"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm  py-2 px-4  bg-zinc-700  text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="date" class="block">Date:</label>
                            <input type="date" v-model="tour.date" id="date"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm  py-2 px-4  bg-zinc-700  text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="location" class="block">Location:</label>
                            <input type="text" v-model="tour.location" id="location"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm  py-2 px-4  bg-zinc-700  text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="venue" class="block">Venue:</label>
                            <input type="text" v-model="tour.venue" id="venue"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm  py-2 px-4  bg-zinc-700  text-white">
                        </div>
                        <div class="mb-4 text-white">
                            <label for="time" class="block">Time:</label>
                            <input type="time" v-model="tour.time" id="time"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm  py-2 px-4  bg-zinc-700  text-white">
                        </div>
                        <div class="flex justify-between mt-5">
                            <button type="submit"
                                class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded">Update</button>
                            <button @click="showEditTour = false"
                                class="border-2 border-red-800 hover:ring-2 hover:ring-red-800 hover:text-white text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </template>
    </AdminLayout>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, onMounted } from 'vue';
import { fetchAllTours, createTour, updateTour, deleteTour } from '../../api/Tour';
import { fetchAllArtists } from '../../api/Artist';
import AdminLayout from '../AdminLayout.vue';

const tours = ref([]);
const artists = ref([]);
const showAddTour = ref(false);
const showEditTour = ref(false);

const tour = ref({
    artist_id: '',
    title: '',
    date: '',
    location: '',
    venue: '',
    time: ''
});

const tourErrors = ref({
    artist_id: "",
    title: "",
    date: "",
    location: "",
    venue: "",
    time: ""
});

const tourCreate = async () => {
    try {
        console.log("Before creating tour", tour.value)

        const response = await createTour(tour.value);
        toast.success("Tour created successfully");
        showAddTour.value = false;
        tours.value = [...tours.value, response];
    } catch (error) {
        toast.error("Error in creating tour");

    }
};

const editTour = (selectedTour) => {
    tour.value = { ...selectedTour };
    showEditTour.value = true;
};

const updatedTour = async () => {
    try {
        const response = await updateTour(tour.value);
        toast.success("Tour details updated successfully");
        // console.log(response)
        // console.log(tours.value)
        showEditTour.value = false;
        const updatedTour = tours.value.map((tour) => {
            if (tour.id === response.id) return response
            else return tour
        })
        tours.value = updatedTour
        console.log(tours.value)
    } catch (error) {
        toast.error("Error in updating tour details");

    }
};

const deletedTour = async (id) => {
    try {
        const response = await deleteTour(id);
        toast.success("Tour deleted successfully ");
        const toursafterdeletion = tours.value.filter(tour => tour.id != id)
        tours.value = toursafterdeletion;
    } catch (error) {
        toast.error("Error in deleting tour",);
    }
};

onMounted(async () => {
    try {
        artists.value = await fetchAllArtists();
        console.log("from mounted", artists.value);
    } catch (error) {
        toast.error('Error fetching artists:', error);
    }
    try {
        tours.value = await fetchAllTours();
    } catch (error) {
        toast.error('Error fetching tours:', error);
    }
});

const imageUrl = (artist) => {
    return `${import.meta.env.VITE_API_BASE_URL}${artist.image || "/src/assets/pic/ch.jpeg"}`;
};
function formatTime24to12(time24) {
    const [hour, minute] = time24.split(':');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12; 
    return `${hour12}:${minute} ${ampm}`;
}
</script>
