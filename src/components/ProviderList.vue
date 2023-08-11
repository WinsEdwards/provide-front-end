<script setup>
import ProviderListItem from '../components/ProviderListItem.vue';
import {store} from '../store'
// defineProps({
//     providers: {
//         type: Array,
//         required: true
//     }
// })
const handleClick = (provider) => {
    store.currentProvider = provider
}
</script>

<template>
    <div class="provider-list">
<!--         
        <button @click="store.getProvidersList">Hi!</button> -->
        <div v-for="provider in store.currentProvidersListFromDatabase">
            <p><RouterLink to="/providers/provider" @click="handleClick(provider)">{{  provider.first_name }} {{ provider.last_name }}</RouterLink></p>
            <p>{{ provider.provider_type }} {{ provider.licenses }}</p>
            <p>{{ provider.address_1 }} {{ provider.city }} {{ provider.state }}</p>
            <p>{{ provider.telephone_number }}</p>
        </div>

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