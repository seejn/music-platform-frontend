<template>
    <Layout>
      <template #Main>
        <div class="p-6 pt-16 bg-black max-h-full flex-grow">
          <div class="flex flex-col items-center md:flex-row md:items-start">
            <img src="/src/assets/pic/goz.jpeg" alt="" class="rounded-lg border-2 border-white w-60 h-60 mb-6 md:mb-0">
            <div class="ml-5 mt-40">
              <p class="font-bold text-white text-5xl align-text-bottom">
                SongName
                <i @click="toggleEditForm" class="fa-regular fa-pen-to-square fa-2xs ml-5 cursor-pointer"></i>
              </p>
              <div class="flex flex-col space-y-2 mt-4 md:flex-row md:space-x-4 md:space-y-0">
                <div class="text-white">
                  <p>Artist Name</p>
                </div>
                <div class="text-white">
                  <p>Albumname/single</p>
                </div>
                <div class="text-white">
                  <p>Duration</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-col md:flex-row">
          
            <div class="w-full md:w-1/2 pr-4">
              <h2 class="text-3xl font-bold mb-4 text-white">Lyrics</h2>
              <div class="lyrics-box rounded-lg border-2 border-white p-4 bg-white bg-opacity-10 overflow-y-auto max-h-60">
                <p v-for="(line, index) in lyricsLines" :key="index" class="text-white whitespace-pre-line">{{ line }}</p>
              </div>
            </div>
      
            <div class="w-full md:w-1/2 pl-4">
              <h2 class="text-3xl font-bold mb-4 text-white">Songs</h2>
              <table class="min-w-full bg-transparent text-white">
                <thead>
                  <tr>
                    <th class="py-2 px-4 text-left">Title</th>
                    <th class="py-2 px-4 text-left">Release Date</th>
                    <th class="py-2 px-4 text-left">Artist</th>
                    <th class="py-2 px-4 text-left">Image</th>
                    <th class="py-2 px-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 text-left border-b border-red-800">Physical</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">2024-01-02</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">Dua</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">image.png</td>
                    <td class="py-2 px-4 text-left border-b border-red-800">3:08</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
    </Layout>
  </template>

  
  
<script setup>
import { ref, onMounted } from 'vue';


const lyrics = `[Verse 1]
Common love isn't for us
We created something phenomenal
Don't you agree?
Don't you agree?
You got me feeling diamond rich
Nothing on this planet compares to it
Don't you agree?
Don't you agree?

[Pre-Chorus]
Who needs to go to sleep when I got you next to me?

[Chorus]
All night, I'll riot with you
I know you got my back and you know I got you
So come on (Come on), come on (Come on), come on (Come on)
Let's get physical
Lights out, follow the noise
Baby, keep on dancing like you ain't got a choice
So come on (Come on), come on (Come on), come on
Let's get physical

[Bridge]
Hold on just a little tighter
Come on, hold on, tell me if you're ready
Come on (Come on, come on)
Baby, keep on dancing
Let's get physical
Hold on just a little tighter
Come on, hold on, tell me if you're ready
Come on (Come on, come on)
Baby, keep on dancing
Let's get physical

[Outro]
Let's get physical (Physical, physical)
Physical (Physical, physical)
Let's get physical (Physical, physical)
Come on, phy-phy-phy-physical`;


const lyricsLines = ref([]);

onMounted(() => {
  console.log(lyrics.split('\n'));
  lyricsLines.value = lyrics.split('\n');
});
</script>

  
  
<style scoped>
.lyrics-box {
    border-color: white;
    /* Set border color */
}
</style>
