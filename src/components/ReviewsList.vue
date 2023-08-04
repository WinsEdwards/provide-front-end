<script setup>
import ReviewItem from "../components/ReviewItem.vue"
import ReviewForm from "../components/ReviewForm.vue"
defineProps({
// msg: {
//     type: String,
//     required: true
// }
// })
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            This will contain a bunch of review items
        </h3>
        <ReviewItem></ReviewItem>
        <ReviewForm></ReviewForm>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->