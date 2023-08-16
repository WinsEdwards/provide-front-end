<script setup>
import { store } from '../store';
import { onMounted, onUpdated } from 'vue';
import './reviewslistprovider.css'

//functions
onMounted(() => store.getReviewsForProvider());
onUpdated(() => {
    store.getReviewsForProvider()
});

const handleClick = (reviewData) => {
    store.toggleLike(reviewData)
}


// renaming keys so things print pretty on page
// const subKeyForQuest = () => {
//     if (key == "recommended") {return key = "would the reviewer recommend to a friend?:"}
//     else if (key == "usercomfort") {return key = "did the reviewer feel comfortable?: "}
//     else if (key == "provcomfort") {return key = "did the provider seem comfortable?"}
//     else if (key == "staffcomfort") {return key = "did support staff seem comfortable?"}
//     else if (key == "provknowledge") {return key = "did the provider seem knowledgeable about LGBTQIA2S+ health topics?"}
//     else if (key == "intake") {return key = "did intake forms include LGBTQIA2S+ inclusive language?"}
//     else if (key == "misgender") {return key = "did the provider and staff use the reviewers' name and preferred pronouns?"}
//     else if (key == "bathrooms") {return key = "were gender-neutral bathrooms available?"}
// }

</script>

<template>

    <div class="provider-reviews-container">

        <div v-if="store.providerReviews.length > 0">

            <!-- <div class="provider-ratings-container">
                <h3>
                    Average ratings for {{ store.currentProvider["first_name"] }} {{ store.currentProvider["last_name"] }}, {{ store.currentProvider["licenses"] }}:
                </h3>

                <ul>
                    <li v-for="(value, key) in store.summaryStats">{{ key }}: {{ value }}</li> 
                </ul>
                <br>
            </div> -->
            <div class="provider-name-container">
            <h3>
                {{store.providerReviews.length}} Available Reviews for {{ store.currentProvider.first_name}} {{ store.currentProvider.last_name }}:
            </h3>
            </div>
            
            <div class="provider-reviews-list">
                    <div class="single-provider-review" v-for="(review, index) in store.providerReviews" :key="index">
                    "{{ review.description }}"
                    <br>
                    Emoji Rating: 
                    {{ review.emoji_rating }}
                    <br>
                    Recommend to a friend?
                    {{ review.recommended ? 'Yes' : 'No' }}
                    <br>
                    <!-- liked button -->
                    <div class="like-button" v-if="store.isLoggedIn"><button type="button" class="ReviewLikeCount" @click="handleClick(review)"><div v-if="store.currentUser.liked_reviews.includes(review.review_id) ">❤️</div><div v-else>🤍</div></button>{{ review.liked_count }}</div>
                    </div>
            </div>

        </div>

        <div v-else>There are no reviews for this provider. Be the first to leave one!</div>

    </div>
</template>


