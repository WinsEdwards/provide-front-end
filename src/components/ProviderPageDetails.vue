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
  <div class="provider-details">
    <h1>
        {{ store.currentProvider["first_name"] }} {{ store.currentProvider["last_name"] }}, {{ store.currentProvider["licenses"] }}:
    </h1>
        <ul>
            <li>{{ store.currentProvider.address_1 }} {{ store.currentProvider.city }}, {{ store.currentProvider.state }} {{ store.currentProvider.zipCode }}</li>
            <li>{{ store.currentProvider.telephone_number }}</li>
        </ul>
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