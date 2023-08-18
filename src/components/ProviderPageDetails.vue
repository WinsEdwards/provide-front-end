<script setup>
import { store } from '../store';
import '../components/ProviderPageDetail.css'

</script>

<template>
  <div class="provider-details-container">

    <div class="provider-details-header">
      <h1>
          {{ store.currentProvider["first_name"] }} {{ store.currentProvider["last_name"] }}, {{ store.currentProvider["licenses"] }}: 
      </h1>
    </div>

    <div class="provider-details-info">
      <ul>
          <li>{{ store.currentProvider.address_1 }}</li>
          <li>{{ store.currentProvider.city }}, {{ store.currentProvider.state }}</li>
          <li>{{ store.currentProvider.postal_code }}</li>
          <li>{{ store.currentProvider.telephone_number }}</li>
      </ul>
    </div>

  </div>
</template>

