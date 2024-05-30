<template>

    <div class="w-full flex">
        <!-- Sidebar -->
        <div class="sidebar w-1/5 flex-grow min-h-screen p-6 bg-black flex flex-col">
            <div class="sidebar1 bg-black text-white p-6 rounded-lg h-min">
                <nav>
                    <ul class="space-y-6">
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <i class="fas fa-home mr-3"></i>Home
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <i class="fas fa-search mr-3"></i>Search
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="sidebar2 mt-10 bg-black text-white p-6 rounded-lg overflow-y-auto flex-grow min-h-screen">
                <nav>
                    <ul class="space-y-6">
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <i class="fas fa-book mr-3"></i>Library
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <img src="/src/assets/tay.jpg" alt="Playlist1" class="w-8 h-8 mr-3 rounded-full" />Playlist1
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <img src="/src/assets/tay.jpg" alt="Playlist2" class="w-8 h-8 mr-3 rounded-full" />Playlist2
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <img src="/src/assets/billie.jpg" alt="ArtistAlbum1" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum1
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <img src="/src/assets/billie.jpg" alt="ArtistAlbum2" class="w-8 h-8 mr-3 rounded-full" />ArtistAlbum2
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="flex items-center text-3xl leading-loose font-semibold hover:underline">
                                <img src="/src/assets/billie.jpg" alt="LikedSongs" class="w-8 h-8 mr-3 rounded-full" />LikedSongs
                            </router-link>
                        </li>
                        <!-- Add more items as needed -->
                    </ul>
                </nav>
            </div>
        </div>

        <!-- Main Content -->
        <div class="w-4/5 h-20">
            <nav class="relative w-full">
                <div class="bg-black text-white  h-20 p-6 flex items-center justify-between">
                    <div>
                        <button
                            class="p-5 font-bold text-3xl hover:text-orange-800"
                            @click="goToPrevious"
                        >
                            &lt;
                        </button>
                        <button
                            class="p-5 font-bold text-3xl hover:text-orange-800"
                            @click="goToNext"
                        >
                            &gt;
                        </button>
                    </div>
                    <div class="relative flex items-center">
                        <button 
                            class="p-5 font-bold text-3xl hover:text-orange-800"
                        >
                            Upload
                        </button>
                        <button
                            id="dropdownHoverButton"
                            @click="toggleDropdown"
                            class="relative p-6 text-white focus:outline-none font-medium rounded-full"
                            type="button"
                        >
                            <img src="/src/assets/tay.jpg" alt="Tay" class="w-10 h-10 rounded-full" />
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            v-show="isDropdownVisible"
                            class="absolute top-20 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        
                <!-- <HomePage/> -->
     
        
        </div>
    </div>
</template>

<script>
// import HomePage from '../Artist/HomePage.vue';


export default {
    // components: {
    //     HomePage
    // },
    data() {
        return {
            isDropdownVisible: false
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isDropdownVisible = false;
            }
        },
        goToPrevious() {
            // Logic for previous button
        },
        goToNext() {
            // Logic for next button
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    }
};
</script>

<style scoped>
#dropdownHoverButton img {
    width: 4rem; /* Adjust the size as needed */
    height: 4rem; /* Adjust the size as needed */
    border-radius: 50%;
}
.sidebar2 {
    max-height: calc(100vh - 16rem); /* Adjust the height as needed */
    overflow-y: auto;
}
</style>
