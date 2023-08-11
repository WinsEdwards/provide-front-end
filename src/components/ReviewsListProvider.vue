<script setup>
import ReviewForm from "../components/ReviewForm.vue"
import { store } from '../store';

defineProps({
reviews: {
    type: Array,
    required: true
}})

//functions
const handleClick = () => {
    store.toggleLike()
}
</script>

<template>

    <ReviewForm></ReviewForm>

    <div class="review-container">
    <h3>
        Reviews for provider {{ store.currentProvider}}:
    </h3>
        <ul>
            <li v-for="(review, index) in store.providerReviews" :key="index">
            A community member says:
            "{{ review.description }}"
            <br>
            Emoji Rating: 
            {{ review.emoji_rating }}
            <br>
            Recommended to a friend?
            {{ review.recommended ? 'Yes' : 'No' }}
            <br>
            <button className='ReviewLikeCount' @click="handleClick">+</button>{{ review.liked_count }} 
            </li>
        </ul>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->
