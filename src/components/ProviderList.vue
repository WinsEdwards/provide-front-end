<script setup>
import ProviderListItem from '../components/ProviderListItem.vue';
// defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// })
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
        This is a list of all providers that have been reviewed
        </h3>
        <ProviderListItem></ProviderListItem>
    </div>
</template>

<!-- 
    
what needs to go in here: 
- provider photo ???
- provider name
- provider type
- aggregate score
- address / contact info
- licenses
- ReviewList component - maybe? 

-->