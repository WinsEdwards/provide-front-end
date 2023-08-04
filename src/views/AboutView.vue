<script setup>
import AboutUs from '../components/AboutUs.vue'
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutUs></AboutUs>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<!-- 
what needs to go in here: 
- Creator component (one for each, contains deets about each creator)
- nav bar 
-->