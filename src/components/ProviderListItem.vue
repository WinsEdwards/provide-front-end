<script setup>
import { RouterLink } from 'vue-router'
// defineProps({
//   provider: {
//     type: Object,
//     required: true
//   }
// })
</script>

<template>
  <div class="single-provider">
    <h3>
      This is a single instance of a provider component that will go into a list
    </h3>
    <RouterLink to="/providers/provider">Provider</RouterLink>
  </div>
</template>

<!-- 
    
what needs to go in here: 
- provider photo OR provider type icon
- provider name
- provider type
- aggregate score
- address / contact info
- NPI number

-->