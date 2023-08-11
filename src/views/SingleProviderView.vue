<script setup>
import ReviewsListProvider from '../components/ReviewsListProvider.vue';
import ReviewForm from '../components/ReviewForm.vue';
import {store} from '../store'

const handleClick = () => {
    store.getReviewsForProvider()
}
</script>

<template>
    <main>
        <h1>This is a single provider's page!</h1>
        <ReviewsListProvider providerReviews="reviews"></ReviewsListProvider>
        <ReviewForm></ReviewForm>
    <br>
    <br>
    <button @click="handleClick">View Provider Reviews</button>
    <ReviewsListProvider></ReviewsListProvider>
    </main>
</template>

<!-- 
what needs to go in here: 
- nav bar 
- single provider page component 
- reviews list component 
- potentially provider score component (could also be nested in provider details)
-->