<template>
    <Layout>
        <template #Main>
            <!-- Main Content Area -->
            <div class="bg-white rounded-lg shadow p-6 mb-8">
                <h2 class="text-2xl font-bold mb-4">Search Music</h2>
                <div class="flex mb-4">
                    <input type="text" placeholder="Search for songs, albums, artists, or playlists"
                        class="w-full p-2 rounded-l-lg border border-gray-300">
                    <button class="bg-blue-600 text-white px-4 rounded-r-lg">Search</button>
                </div>
            </div>

            <!-- Search Filters -->
            <section class="bg-white rounded-lg shadow p-6 mb-8">
                <h3 class="text-xl font-bold mb-4">Filters</h3>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select class="p-2 border border-gray-300 rounded">
                        <option value="">All</option>
                        <option value="songs">Songs</option>
                        <option value="albums">Albums</option>
                        <option value="artists">Artists</option>
                        <option value="playlists">Playlists</option>
                    </select>
                    <select class="p-2 border border-gray-300 rounded">
                        <option value="">Genre</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="jazz">Jazz</option>
                        <!-- Add more genres as needed -->
                    </select>
                    <select class="p-2 border border-gray-300 rounded">
                        <option value="">Release Date</option>
                        <option value="last_week">Last Week</option>
                        <option value="last_month">Last Month</option>
                        <option value="last_year">Last Year</option>
                    </select>
                    <select class="p-2 border border-gray-300 rounded">
                        <option value="">Sort By</option>
                        <option value="popularity">Popularity</option>
                        <option value="release_date">Release Date</option>
                    </select>
                </div>
            </section>

            <div class="mt-8">
                <h2 class="text-xl font-bold">Playlists</h2>
                <PlaylistCollection />
            </div>

            <div class="mt-8">
                <h2 class="text-xl font-bold">Artists</h2>
                <ArtistCollection />
            </div>

            <div class="mt-8">
                <h2 class="text-xl font-bold">Songs</h2>
                <TrackCollection />
            </div>

            <div class="mt-8">
                <h2 class="text-xl font-bold">Albums</h2>
                <AlbumCollection />
            </div>
        </template>
    </Layout>
</template>

<script setup>
import AlbumCollection from '../../components/Album/AlbumCollection.vue'
import TrackCollection from '../../components/Track/TrackCollection.vue'
import ArtistCollection from '../../components/Artist/ArtistCollection.vue'
import PlaylistCollection from '../../components/Track/PlaylistCollection.vue'
</script>