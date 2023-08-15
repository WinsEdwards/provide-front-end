<script setup>
import { store } from '../store';
import { onMounted, onUpdated } from "vue";

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
onMounted(() => {
    store.getReviewsWrittenByUser()
    store.getReviewsLikedByUser()
});

onUpdated(() => {
    store.getReviewsWrittenByUser()
    store.getReviewsLikedByUser()
})


</script>
<template>
    <div class="user-reviews-container">
        <div class="written-reviews-container">
            <h3>
                {{ store.currentUser["username"] }}'s reviews:
            </h3>

            <br>

            <ul>
                <li v-for="(review, index) in store.userWrittenReviews" :key="index">
                You said:
                "{{ review.description }}"
                <br>
                Emoji Rating: 
                {{ review.emoji_rating }}
                <br>
                Recommended to a friend?
                {{ review.recommended ? 'Yes' : 'No' }}
                <br>
                <button @click="store.deleteReview(review.review_id)">Delete</button>
                </li>
            </ul>
            
        </div>

        <br>

        <div class="liked-reviews-container">
            <h3>
                {{ store.currentUser["username"] }}'s liked reviews:
            </h3>

            <br>

            <ul>
                <li v-for="(review, index) in store.userLikedReviews" :key="index">
                You said:
                "{{ review.description }}"
                <br>
                Emoji Rating: 
                {{ review.emoji_rating }}
                <br>
                Recommended to a friend?
                {{ review.recommended ? 'Yes' : 'No' }}
                <br>
                <button type="button" class="ReviewLikeCount" @click="store.toggleLike(review)">+</button>
                </li>
            </ul>

        </div>

    </div>
</template>