<script setup>
import ReviewForm from "../components/ReviewForm.vue"
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

// const handleWrittenClick = () => {
//     console.log("inside handleWrittenClick")
//     store.getReviewsForUser()   
// }

// const handleLikedClick = () => {
//     console.log("inside handleLikedClick")
//     store.getUserLikedReviews()
//     }    

</script>
<template>
    <div class="review-container">
        <div class="written-review-container">
        <h3>
            {{ store.currentUser["username"] }}'s reviews:
        </h3>
        <br>
        <!-- <button type="button" class="GetReviews" @click="(reviewtype === 'written') ? handleWrittenClick : handleLikedClick">View {{ reviewtype }} reviews</button> -->
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
                <!-- <button type="button" class="ReviewLikeCount" @click="handleClick">+</button>{{ review.liked_count }} -->
                </li>
            </ul>
        </div>
        <br>
        <div class="liked-review-container">
            <h3>
                {{ store.currentUser["username"] }}'s liked reviews:
            </h3>
            <br>
            <!-- <button type="button" class="GetReviews" @click="(reviewtype === 'written') ? handleWrittenClick : handleLikedClick">View {{ reviewtype }} reviews</button> -->
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