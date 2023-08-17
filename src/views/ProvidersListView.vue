<script setup>
import SearchBar from '../components/SearchBar.vue';
import ProviderList from '../components/ProviderList.vue'

</script>

<template>
  <main class="provider-database-list-container">
    <img class="provider-view-img" src="../assets/images/select-a-provider.png">
    <!-- <SearchBar key="providersList" class="providers-list-view search-view-search-bar"></SearchBar> -->
    <ProviderList ></ProviderList>
    
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar 
- list of single provider list components 

-->