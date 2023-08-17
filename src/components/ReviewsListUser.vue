<script setup>
import { store } from '../store';
import { onMounted, onUpdated } from "vue";
import '../components/ReviewsListUser.css'

//functions
onMounted(() => {
    store.getReviewsWrittenByUser()
    store.getReviewsLikedByUser()
});

onUpdated(() => {
    store.getReviewsWrittenByUser()
    store.getReviewsLikedByUser()
})

const handleClick = (reviewData) => {
    store.toggleLike(reviewData)
}

</script>
<template>
    <div class="user-reviews-container">
        <div class="written-reviews-container">
            <h3>
                {{ store.currentUser["username"] }}'s {{ store.userWrittenReviews.length }} written reviews:
            </h3>

            <br>
            <div v-if="store.userWrittenReviews.length === 0">You have no written reviews. Search a provider to write one.</div>
            <ul v-else class="written-reviews-list">
                <li class="single-user-review" v-for="(review, index) in store.userWrittenReviews" :key="index">
                You said:
                "{{ review.description }}"
                <br>
                Emoji Rating: 
                {{ review.emoji_rating }}
                <br>
                Recommended to a friend?
                {{ review.recommended ? 'Yes' : 'No' }}
                <br>
                <button class="button-33" @click="store.deleteReview(review.review_id)">Delete</button>
                </li>
            </ul>
        </div>

        <br>

        <div class="liked-reviews-container">
            <h3>
                {{ store.currentUser["username"] }}'s {{store.userLikedReviews.length}} liked reviews:
            </h3>

            <br>
            <div v-if="store.userLikedReviews.length === 0">You have no liked reviews. Visit a provider to like a review.</div>
            <ul class="liked-reviews-list">
                <li class="single-user-review" v-for="(review, index) in store.userLikedReviews" :key="index">
                "{{ review.description }}"
                <br>
                Emoji Rating: 
                {{ review.emoji_rating }}
                <br>
                Recommended to a friend?
                {{ review.recommended ? 'Yes' : 'No' }}
                <br>
                <div class="like-button" v-if="store.isLoggedIn"><button type="button" class="ReviewLikeCount" @click="handleClick(review)"><div v-if="store.currentUser.liked_reviews.includes(review.review_id) ">❤️</div><div v-else>🤍</div></button>{{ review.liked_count }}</div>
                </li>
            </ul>

        </div>

    </div>
</template>