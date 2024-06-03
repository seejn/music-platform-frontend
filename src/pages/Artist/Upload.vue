<template>
    <Layout>
        <template #Main>
            <UploadTrack />
            <div class="my-10"></div>
            <CreateAlbum />
        </template>
    </Layout>
</template>

<script setup>
import CreateAlbum from '../../components/Album/CreateAlbum.vue';
import UploadTrack from '../../components/Track/UploadTrack.vue';
</script>