<script setup>
import Navbar from './components/Navbar.vue'
import Headers from './components/Header.vue'
import Services from './components/Services.vue'
import Work from './components/Work.vue'
import { user } from './common/'

</script>

<template>
  <div class="max-w-[1400px] min-w-[1300px] w-full ml-auto mr-auto">
    <Navbar />
    <Headers />
    <Services />
    <Work />

  </div>
</template>

<style scoped></style>