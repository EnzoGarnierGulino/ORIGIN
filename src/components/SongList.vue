<template>
  <div class="song-list">
    <SearchBar @search-query="filterSongs"/>
    <Song :title="song.title" :artist="song.artist" :duration="song.duration" v-for="song in songs" :key="song.id" />
  </div>
</template>

<script>
import Song from "@/components/Song.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: 'SongList',
  components: {SearchBar, Song },
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      songs: [
        {id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45'},
        {id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:15'},
        {id: 3, title: 'Song 3', artist: 'Artist 3', duration: '2:30'}
      ]
    };
  }
}
</script>

<style scoped>

</style>