<script setup>
import ReviewForm from "../components/ReviewForm.vue"
import { store } from '../store';
import { ref } from "vue";

defineProps({
reviewtype: {
    type: String,
    required: true
},
reviewarray: {
    type: String,
    required: true
}})

//functions
const handleClick = () => {
    store.toggleLike()
}

const handleWrittenClick = () => {
    console.log("inside handleWrittenClick")
    store.getReviewsForUser()   
}

const handleLikedClick = () => {
    console.log("inside handleLikedClick")
    store.getUserLikedReviews()
    }    

</script>
<template>
    <div class="review-container">
    <h3>
        {{ store.currentUser["username"] }}'s {{reviewtype}} reviews:
    </h3>
    <br>
    <button type="button" class="GetReviews" @click="(reviewtype === 'written') ? handleWrittenClick : handleLikedClick">View {{ reviewtype }} reviews</button>
    <br>
        <ul>
            <li v-for="(review, index) in store.reviewarray" :key="index">
            You said:
            "{{ review.description }}"
            <br>
            Emoji Rating: 
            {{ review.emoji_rating }}
            <br>
            Recommended to a friend?
            {{ review.recommended ? 'Yes' : 'No' }}
            <br>
            <button type="button" class="ReviewLikeCount" @click="handleClick">+</button>{{ review.liked_count }}
            </li>
        </ul>
    </div>
</template>