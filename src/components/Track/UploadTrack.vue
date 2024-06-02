<template>
    <section id="upload-song" >
        <h2 class="text-3xl font-semibold mb-6">Upload Song</h2>
        <form action="upload-song-url" method="POST" enctype="multipart/form-data"
            class="bg-white rounded-lg shadow-md ">
            <div class="mb-4">
                <label for="song-title" class="block text-lg font-medium text-gray-700 mb-2">Song Title</label>
                <input type="text" id="song-title" name="song-title" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="song-artist" class="block text-lg font-medium text-gray-700 mb-2">Artist Name</label>
                <input type="text" id="song-artist" name="song-artist" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="song-file" class="block text-lg font-medium text-gray-700 mb-2">Upload Song File</label>
                <input type="file" id="song-file" name="song-file" accept="audio/*" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md">
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md">Upload Song</button>
        </form>
    </section>
</template>