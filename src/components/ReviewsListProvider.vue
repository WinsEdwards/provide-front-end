<script setup>
import ReviewItem from "../components/ReviewItem.vue"
import ReviewForm from "../components/ReviewForm.vue"
import { store } from '../store';
// defineProps({
// reviews: {
//     type: Array,
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
        <ReviewForm></ReviewForm>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->
