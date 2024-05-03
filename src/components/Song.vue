<template>
  <div class="card song-card mb-3">
    <div class="row g-0">
      <div class="col-md-4 song-cover">
        <img class="img-fluid" :src="coverImage" alt="Song cover image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text mb-0"><em>{{ artist }}</em></p>
          <p class="card-text">{{ duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    coverImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.song-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.song-cover img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  color: #181818;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #666;
}

</style>
