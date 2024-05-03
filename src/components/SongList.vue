<template>
  <div class="song-list">
    <div class="form-outline mb-3" data-mdb-input-init>
      <input type="search" id="form1" class="form-control" placeholder="Search for something here !" aria-label="Search"
      v-model="searchQuery"/>
    </div>
    <Song :title="song.title" :artist="song.artist" :duration="song.duration" :cover-image="song.coverImage"
          v-for="song in filteredSongs" :key="song.id" />
  </div>
</template>

<script>
import Song from "@/components/Song.vue";

export default {
  name: 'SongList',
  components: {Song },
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      songs: [
        {id: 1, title: 'Explorers', artist: 'Azix09 & ImLimaah', duration: '3:45', coverImage: "https://i1.sndcdn.com/avatars-VKbSYyYcaXWvO2et-aOvzhg-t240x240.jpg"},
        {id: 2, title: 'Shine', artist: 'GWN & Mijinko', duration: '4:15', coverImage: "https://i1.sndcdn.com/avatars-VKbSYyYcaXWvO2et-aOvzhg-t240x240.jpg"},
        {id: 3, title: 'Sunrise Serenade', artist: 'Manila ChriZ', duration: '2:30', coverImage: "https://i1.sndcdn.com/avatars-VKbSYyYcaXWvO2et-aOvzhg-t240x240.jpg"}
      ],
      searchQuery: ''
    };
  },
  computed: {
    filteredSongs() {
      const query = this.searchQuery.toLowerCase();
      return this.songs.filter(song =>
          song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
      );
    }
  }
}
</script>