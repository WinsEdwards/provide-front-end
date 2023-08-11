<script setup>
import { store } from '../store';
import ReviewsListProvider from './ReviewsListProvider.vue';
// defineProps({
//   provider: {
//     type: Object,
//     required: true
//   }
// })
</script>

<template>
  <div class="provider-page">
    <h3>
      These are the details of a provider that will go onto each individual provider page
    </h3>
    <!-- get reviews on load -->
    <!-- <ReviewsListProvider></ReviewsListProvider> -->
  </div>
</template>

<!-- 
    
what needs to go in here: 
- provider photo OR type icon
- provider name
- provider type
- aggregate score
- address / contact info
- licenses
- NPI number
- ReviewList component - maybe? 

-->