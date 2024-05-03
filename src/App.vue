<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import router from "@/router.js";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  router,
};

</script>
