<script setup>
import ProviderListItem from '../components/ProviderListItem.vue';
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
  <main>
    <h1>This is the provider page, will have a list of providers</h1>
    <SearchBar></SearchBar>
    <ProviderListItem></ProviderListItem>
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar 
- list of single provider list components 

-->