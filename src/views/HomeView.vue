<script setup>
import SearchBar from '../components/SearchBar.vue'
import '../assets/home.css'
import '../assets/searchbar.css'
</script>

<template>
  <main class="home-view-container">
    <img class="home-view-img" src="../assets/images/3-friends-selfie.jpg">
    <div class="everyone-deserves">
      <img class="everyone-deserves-img" src="../assets/images/everyonedeserves-final.png" alt="an image that says everyone deserves safe healthcare, find your provider below, with an image of a stethoscope underlaid">
      <SearchBar class="home-view-search-bar"></SearchBar>
    </div>
    
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar
- review carousel 
-->