<script setup>
import ReviewItem from "../components/ReviewItem.vue"
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
            This is a single review instance
        </h3>
        <ReviewItem></ReviewItem>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->