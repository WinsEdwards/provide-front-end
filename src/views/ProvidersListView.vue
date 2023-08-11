<script setup>
import ProviderListItem from '../components/ProviderListItem.vue';
import SearchBar from '../components/SearchBar.vue';
import ReviewForm from '../components/ReviewForm.vue';
import ReviewsListProvider from '../components/ReviewsListProvider.vue';
import { store } from '../store';

// functions
const handleClick = () => {
    store.getReviewsForProvider()
}
</script>

<template>
  <main>
    <h1>This is the provider page, will have a list of providers</h1>
    <SearchBar></SearchBar>
    <ProviderListItem></ProviderListItem>
    <ReviewForm></ReviewForm>
    <br>
    <h3>I'm importing ReviewsListProvider to see if it's working below this line</h3>
    <br>
    <button @click="handleClick">View Provider Reviews</button>
    <ReviewsListProvider></ReviewsListProvider>
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar 
- list of single provider list components 

-->