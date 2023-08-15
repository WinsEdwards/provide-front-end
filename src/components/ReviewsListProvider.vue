<script setup>
import ReviewForm from "../components/ReviewForm.vue"
import { store } from '../store';
import { onMounted, onUpdated } from 'vue';

//functions
onMounted(() => store.getReviewsForProvider());
onUpdated(() => {
    store.getReviewsForProvider()
});
const handleClick = (reviewData) => {
    store.toggleLike(reviewData)
}

// const checkLiked = (review) => {
//     console.log("USER LIKED",store.currentUser.liked_reviews)
//     console.log(store.currentUser.liked_reviews.length)
//     console.log(review.review_id)
//     if (store.currentUser.liked_reviews.length > 0) {
//         for (key in store.currentUser.liked_reviews) {
//             if (review.review_id === store.currentUser.liked_reviews[key]){
//                 return true
//             }
//         }
//     } else {
//         return false
//     }
// }
</script>

<template>

    <div class="review-container">
        <div v-if="store.providerReviews.length > 0">
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
                    {{ store.currentUser.liked_reviews }}
                    <!--  -->
                    <div v-if="store.isLoggedIn"><button type="button" class="ReviewLikeCount" @click="handleClick(review)"><div v-if="store.currentUser.liked_reviews.includes(review.review_id) ">❤️</div><div v-else>🤍</div></button>{{ review.liked_count }}</div>
                    </li>
                </ul>
        </div>
        <div v-else>There are no reviews for this provider. Be the first to leave one!</div>

    </div>
</template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components

-->
