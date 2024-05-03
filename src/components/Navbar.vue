<template>
  <nav class="navbar navbar-expand-lg p-3 grey mb-5 rounded-2">
    <img src="../assets/ORIGIN.png" alt="ORIGIN Records logo" class="mx-auto" width="20%"/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto d-flex justify-content-start" style="width: 100%;">
        <li class="nav-item">
          <router-link to="/songs" class="nav-link" style="font-size: 20px; color: white">Songs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/artists" class="nav-link" style="font-size: 20px; color: white">Artists</router-link>
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
