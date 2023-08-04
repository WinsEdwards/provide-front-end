<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ProviderListItem from '../components/ProviderListItem.vue';
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
  <main>
    <h1>This is the provider page, will have a list of providers</h1>
    <SearchBar></SearchBar>
    <RouterLink to="/providers/provider">Provider</RouterLink>
    <SingleProviderList></SingleProviderList>
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar 
- list of single provider list components 

-->