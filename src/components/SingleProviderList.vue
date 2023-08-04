<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is a single instance of a provider component that will go into a list
    </h3>
  </div>
</template>

<!-- 
    
what needs to go in here: 
- provider photo ???
- provider name
- provider type
- aggregate score? 
- address / contact info

-->