<template>
  <div class="card song-card-horizontal mb-3">
    <div class="row g-0">
      <div class="col-md-4 song-cover-image">
        <img class="img-fluid rounded-start " alt="Song cover image"
             src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-dark text-start">{{ title }}</h5>
          <p class="card-text text-dark text-start mb-0"><em>{{ artist }}</em></p>
          <p class="card-text text-dark text-start">{{ duration }}</p>
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
    }
  }
}
</script>

<style scoped>

.song-card-horizontal {
  max-height: 110px;
}

.song-cover-image {
  max-height: 110px;
  max-width: 109px;
}

.card-body {
  display: flex;
  flex-direction: column;
}

</style>