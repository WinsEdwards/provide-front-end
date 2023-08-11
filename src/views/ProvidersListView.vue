<script setup>
import SearchBar from '../components/SearchBar.vue';
import ProviderList from '../components/ProviderList.vue'

</script>

<template>
  <main>
    <h1>Select a provider from the list below!</h1>
    <SearchBar key="providersList"></SearchBar>
    <ProviderList></ProviderList>
    
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar 
- list of single provider list components 

-->