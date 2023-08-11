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

    <h2>
        Hello, {{ store.currentUser['first_name'] }}! We are so grateful you are a part of the Provide community and a part of the world! 
        <br>
        <br>
        In case you don't hear it enough, let us just take this moment to say: you matter, you are wonderful and you are enough.
        <br>
        <br>
        Below, you can find reviews that you have written for providers you have seen and reviews that you have liked.
    </h2>
    <br>
    <div class="review-container">
    <h3>
        {{ store.currentUser["username"] }}'s written reviews:
    </h3>
        <ul>
            <li v-for="(review, index) in store.userReviews" :key="index">
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