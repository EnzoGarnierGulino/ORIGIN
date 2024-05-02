<template>
  <div class="song-list">
    <Song :title="song.title" :artist="song.artist" :duration="song.duration" v-for="song in songs" :key="song.id" />
  </div>
</template>

<script>
import Song from "@/components/Song.vue";

export default {
  name: 'SongList',
  components: { Song },
  props: {
    songs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>