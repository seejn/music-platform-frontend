<template>
    <Layout>
        <template #Main>
            <section>
                <h2 class="text-2xl font-bold my-4">My Musics</h2>
                <TrackCollection />
            </section>
            <section class="py-4">
                <h2 class="text-2xl font-bold my-4">My Albums</h2>
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