<script setup>
import ReviewsListProvider from '../components/ReviewsListProvider.vue';
import ReviewForm from '../components/ReviewForm.vue';
import ProviderPageDetails from '../components/ProviderPageDetails.vue';
import { store } from '../store';

</script>

<template>
    <main>
        <ProviderPageDetails></ProviderPageDetails>
        <ReviewForm v-if="store.isLoggedIn"></ReviewForm>
        <ReviewsListProvider providerReviews="reviews"></ReviewsListProvider>
    </main>
</template>

<!-- 
what needs to go in here: 
- nav bar 
- single provider page component 
- reviews list component 
- potentially provider score component (could also be nested in provider details)
-->