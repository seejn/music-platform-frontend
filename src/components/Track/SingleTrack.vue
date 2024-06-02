<template>
    <div class="my-4 flex items-center space-x-4 w-full">
        <img class="song-cover" src="https://via.placeholder.com/150" alt="Album Cover" />
        <div class="flex-grow song-info">
            <h3 class="text-xl font-semibold">Song Title 1</h3>
            <p class="text-gray-600">Artist 1</p>
        </div>
        <audio controls class="media-player">
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Playlist
        </button>
    </div>
</template>
