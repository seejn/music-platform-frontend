<template>
    <Layout>
        <template #Main>
            <main class="">
                <section class="bg-blue-600 text-white rounded-lg p-6 mb-8">
                    <h1 class="text-3xl font-bold mb-2">Welcome to MusicPlatform</h1>
                    <p class="text-lg">Discover new music, listen to your favorite tracks, and explore curated
                        playlists.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold mb-4">Recommended for You</h2>
                    <TrackCollection />
                </section>

                <section>
                    <h2 class="text-2xl font-bold mb-4">Trending Songs</h2>
                    <TrackCollection />
                </section>

                <section>
                    <h2 class="text-2xl font-bold mb-4">Curated Playlists</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4">
                            <img src="https://via.placeholder.com/150" alt="Playlist Cover" class="rounded mb-4">
                            <h3 class="text-lg font-bold">Playlist Name</h3>
                            <p class="text-gray-600">Description of the playlist.</p>
                        </div>
                    </div>
                </section>
            </main>
        </template>
    </Layout>
</template>

<script setup>
import TrackCollection from '../../components/Track/TrackCollection.vue'
import Navbar from '../../components/Header/Navbar.vue'
import Sidebar from '../../components/Sidebar/Sidebar.vue';

</script>