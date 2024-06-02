<template>
    <!-- Create Album Section -->
    <section id="create-album">
        <h2 class="text-3xl font-semibold mb-6">Create Album</h2>
        <form action="create-album-url" method="POST" enctype="multipart/form-data"
            class="bg-white rounded-lg shadow-md">
            <div class="mb-4">
                <label for="album-title" class="block text-lg font-medium text-gray-700 mb-2">Album Title</label>
                <input type="text" id="album-title" name="album-title" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="album-artist" class="block text-lg font-medium text-gray-700 mb-2">Artist Name</label>
                <input type="text" id="album-artist" name="album-artist" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="album-cover" class="block text-lg font-medium text-gray-700 mb-2">Upload Album Cover</label>
                <input type="file" id="album-cover" name="album-cover" accept="image/*" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label for="album-description" class="block text-lg font-medium text-gray-700 mb-2">Album
                    Description</label>
                <textarea id="album-description" name="album-description" rows="4" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md">Create Album</button>
        </form>
    </section>
</template>