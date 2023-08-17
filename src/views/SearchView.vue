<script setup>
import SearchBar from '../components/SearchBar.vue'
import '../assets/searchbar.css'
</script>

<template>
    <main class="search-view-container">
        <!-- <img class="person-searching" src="../assets/images/A non-binary person using a laptop at work.jpg"> -->
        <img class="search-view-img" src="../assets/images/find-a-provider-yellow.png">
        <SearchBar class="search-view-search-bar" key="searchPage"></SearchBar>
    </main>
</template>

<!-- 
what needs to go in here: 
- nav bar 
- search bar 
- list of providers in database
-->