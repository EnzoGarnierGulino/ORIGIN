<template>
  <nav class="navbar navbar-expand-lg p-4 grey mb-5 rounded-2">
    <img src="../assets/ORIGIN.png" alt="ORIGIN Records logo" class="mx-auto" width="20%"/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto d-flex justify-content-around" style="width: 100%;">
        <li class="nav-item">
          <router-link to="/songs" class="nav-link" style="font-size: 20px; color: white">Songs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/artists" class="nav-link" style="font-size: 20px; color: white">Artists</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" style="font-size: 20px; color: white">About</router-link>
        </li>
        <li class="nav-item">
          <a href="https://www.youtube.com/@origin_records">
            <img src="../assets/YouTube.png" alt="YouTube" width="10%"/>
          </a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>

export default {
  name: 'Navbar'
};

</script>

<style>

.grey {
  background-color: #2f2f2f;
}

</style>
