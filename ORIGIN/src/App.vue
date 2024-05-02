<template>
  <img src="./assets/ORIGIN.png" alt="ORIGIN Records logo" class="mx-auto" width="20%"/>
  <div id="app">
    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from './components/SongList.vue';

export default {
  name: 'App',
  components: {
    SongList
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
};
</script>
