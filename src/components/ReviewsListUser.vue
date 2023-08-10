<script setup>
import ReviewItem from "../components/ReviewItem.vue"
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
        Hello, {{ store.username }}! We are so grateful you are a part of the Provide community.
    </h2>
    <br>
    <div class="review-container">
    <h3>
        Reviews for {{ store.currentUser }}:
    </h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            You said:
            "{{ review.description }}"
            <br>
            Emoji Rating: 
            {{ review.emoji_rating }}
            <br>
            Recommended to a friend?
            {{ review.recommended ? 'Yes' : 'No' }}
            <br>
            </li>
        </ul>
    </div>
</template>