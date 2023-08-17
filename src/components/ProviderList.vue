<script setup>
import {store} from '../store'
import { onMounted } from 'vue';
import '../assets/providerlist.css'

onMounted(() => store.getProvidersList());
const handleClick = (provider) => {
    store.currentProvider = provider
}
</script>

<template>
    <div class="provider-database-list-container">
        <div class="provider-database-list-child" v-for="provider in store.currentProvidersListFromDatabase">
            <RouterLink to="/providers/provider" @click="handleClick(provider)"><h2>{{  provider.first_name.toLowerCase() }} {{ provider.last_name.toLowerCase() }}</h2></RouterLink>
            <p>{{ provider.provider_type }} {{ provider.licenses }}</p>
            <br>
            <p>{{ provider.address_1 }}</p>
            <p>{{ provider.city }} {{ provider.state }}</p>
            <br>
            <p>{{ provider.telephone_number }}</p>
        </div>

    </div>
</template>
