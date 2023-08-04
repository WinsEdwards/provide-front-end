<script setup>
import ProviderListItem from '../components/ProviderListItem.vue';
// defineProps({
//     providers: {
//         type: Array,
//         required: true
//     }
// })
</script>

<template>
    <div class="provider-list">
        <h3>
        This is a list of all providers that have been reviewed
        </h3>
        <ProviderListItem></ProviderListItem>
    </div>
</template>

<!-- 
    
what needs to go in here: 
- provider photo OR icon representing provider type
- provider name
- provider type
- aggregate score
- address / contact info
- licenses
- NPI number
- ReviewList component - maybe? 

-->