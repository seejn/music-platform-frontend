<template>
    <Layout>
        <template #Main>
            <header class="profile-header text-white py-10">
                <div class="container mx-auto px-6 text-center">
                    <img src="https://via.placeholder.com/150" alt="Artist Name"
                        class="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg">
                    <h1 class="text-4xl font-bold mt-4">Artist Name</h1>
                    <p class="mt-2 text-lg italic">"A quote or highlight from the artist"</p>
                    <div class="mt-4 flex justify-center space-x-4">
                        <a href="https://facebook.com" class="text-white hover:text-gray-200"><i
                                class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" class="text-white hover:text-gray-200"><i
                                class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" class="text-white hover:text-gray-200"><i
                                class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com" class="text-white hover:text-gray-200"><i
                                class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </header>

            <section>
                <h2 class="text-2xl font-bold my-4">Musics</h2>
                <TrackCollection />
            </section>
            <section class="py-4">
                <h2 class="text-2xl font-bold my-4">Albums</h2>
                <AlbumCollection />
            </section>
            <section class="py-4">
                <h2 class="text-2xl font-bold my-4">Popular Songs</h2>
                <TrackCollection />
            </section>
        </template>
    </Layout>
</template>

<script setup>
import AlbumCollection from '../../components/Album/AlbumCollection.vue'
import TrackCollection from '../../components/Track/TrackCollection.vue'
</script>

<style scoped>
.profile-header {
    background: linear-gradient(135deg, rgba(29, 78, 216, 0.8), rgba(56, 189, 248, 0.8)), url('cover-image-url.jpg') no-repeat center center;
    background-size: cover;
}
</style>