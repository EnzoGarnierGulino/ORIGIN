<template>
  <div class="song-card">
    <div class="card-content">
      <img :src="coverart" :alt="name" class="card-image">
      <div class="card-info">
        <p class="song-name">{{ name }}</p>
        <p class="song-artists">{{ artists.map(artist => artist.name).join(', ') }}</p>
        <p class="song-duration">{{ formatDuration(duration) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    name: {
      type: String,
    },
    artists: {
      type: Array,
    },
    duration: {
      type: Number,
    },
    coverart: {
      type: String,
    }
  },
  methods: {
    formatDuration(duration) {
      const minutes = Math.floor(duration / 1000 / 60);
      const seconds = Math.floor(duration / 1000 % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }
}
</script>

<style scoped>
.song-card {
  display: inline-block;
  margin: 10px;
  width: 350px;
  background-color: #434343;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-image {
  width: 100px;
  height: fit-content;
  border-radius: 10%;
  margin-right: 10px;
}

.card-info {
  flex-grow: 1;
}

.song-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.song-artists {
  font-size: 0.9em;
  color: #b1b1b1;
}

.song-duration {
  font-size: 0.8em;
  color: #999;
}
</style>