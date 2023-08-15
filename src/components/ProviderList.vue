<script setup>
import {store} from '../store'
import { onMounted } from 'vue';

onMounted(() => store.getProvidersList());
const handleClick = (provider) => {
    store.currentProvider = provider
}
</script>

<template>
    <div class="provider-database-list-container">
        <div class="provider-database-list-child" v-for="provider in store.currentProvidersListFromDatabase">
            <h2><RouterLink to="/providers/provider" @click="handleClick(provider)">{{  provider.first_name }} {{ provider.last_name }}</RouterLink></h2>
            <h3>{{ provider.provider_type }} {{ provider.licenses }}</h3>
            <p>{{ provider.address_1 }} {{ provider.city }} {{ provider.state }}</p>
            <p>{{ provider.telephone_number }}</p>
        </div>

    </div>
</template>
