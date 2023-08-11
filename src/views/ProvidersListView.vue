<script setup>
import ProviderListItem from '../components/ProviderListItem.vue';
import SearchBar from '../components/SearchBar.vue';
import ReviewForm from '../components/ReviewForm.vue';
import ReviewsListProvider from '../components/ReviewsListProvider.vue';
import { store } from '../store';
import { RouterLink, RouterView } from 'vue-router'
import ProviderList from '../components/ProviderList.vue'

// functions
const handleClick = () => {
    store.getReviewsForProvider()
}
</script>

<template>
  <main>
    <h1>This is the provider page, will have a list of providers</h1>
    <SearchBar></SearchBar>
    <ProviderList></ProviderList>
    
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar 
- list of single provider list components 

-->