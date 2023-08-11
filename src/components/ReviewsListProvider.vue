<script setup>
import ReviewForm from "../components/ReviewForm.vue"
import { store } from '../store';

//functions
const handleClick = () => {
    store.toggleLike()
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
            <button type="button" class="ReviewLikeCount" @click="handleClick">+</button>{{ review.liked_count }}
            </li>
        </ul>
    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->
