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
            This is the review form
        </h3>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->