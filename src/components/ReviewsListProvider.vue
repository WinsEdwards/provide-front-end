<script setup>
import ReviewForm from "../components/ReviewForm.vue"
import { store } from '../store';

defineProps({
reviews: {
    type: Array,
    required: true
}})

//functions
const handleClick = (reviewData) => {
    store.toggleLike(reviewData)
}
</script>

<template>

    <div class="review-container">
    <h3>
        Reviews for {{ store.currentProvider["first_name"] }} {{ store.currentProvider["last_name"] }}, {{ store.currentProvider["licenses"] }}:
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
            <!--  -->
            <div v-if="store.isLiked === false"><button type="button" class="ReviewLikeCount" @click="handleClick(review)" >+</button>{{ review.liked_count }}</div>
            <button type="button" class="ReviewLikeCount" @click="handleClick(review)" v-else>-</button>
            </li>
        </ul>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->
