<script setup>
import { store } from '../store';
import { ref } from 'vue';
import '../components/ReviewForm.css'

// variables
const reviewData = {
    description: null,
    rating: null,
    emoji_rating: null,
    recommended: null,
    usercomfort: null,
    provcomfort: null,
    staffcomfort: null,
    provknowledge: null,
    intake: null,
    misgender: null,
    bathrooms: null,
}

var submitted = ref(false)

// functions
const handleSubmit = () => {
    console.log("submitting review")
    store.createReview(reviewData)
    console.log("review submitted")    
}

</script>

<template>

    <div class="review-form-container">
        <form class="review-form" @submit.prevent="(!submitted ? handleSubmit():console.log(submitted)),(submitted = true)">
            <h3>Leave a review for {{ store.currentProvider["first_name"] }} {{ store.currentProvider["last_name"] }}, {{ store.currentProvider["licenses"] }}:</h3>
            
            <br>
            <div class="review-and-ratings">
            <div class="description">
                <label for="description">Review: </label>      
                <textarea id="description" v-model="reviewData.description" maxlength="4096" required></textarea>
            </div>

            <br>
            <div class="rating-container">
                <div>Rating:</div>
                <div class="rate">
                    <!-- <label for="rating">Rating: </label>
                    <select id="rating" v-model.number="reviewData.rating" required>
                        <option value=5>5 🌟s</option>
                        <option value=4>4 🌟s</option>
                        <option value=3>3 🌟s</option>
                        <option value=2>2 🌟s</option>
                        <option value=1>1 🌟</option>
                    </select> -->
                    <input type="radio" id="star5" name="rate" value=5 v-model.number="reviewData.rating" required />
                    <label for="star5" title="5 stars">5 stars</label>
                    <input type="radio" id="star4" name="rate" value=4 v-model.number="reviewData.rating" required />
                    <label for="star4" title="4 stars">4 stars</label>
                    <input type="radio" id="star3" name="rate" value=3 v-model.number="reviewData.rating" required />
                    <label for="star3" title="3 stars">3 stars</label>
                    <input type="radio" id="star2" name="rate" value=2 v-model.number="reviewData.rating" required />
                    <label for="star2" title="2 stars">2 stars</label>
                    <input type="radio" id="star1" name="rate" value=1 v-model.number="reviewData.rating" required />
                    <label for="star1" title="1 star">1 star</label>
                </div>
            </div>

            <br>

            <div>
                <!-- consider accessibility of emoji selection -->
                <label for="emoji-rating">Emoji Rating: </label>
                <select id="emoji-rating" v-model="reviewData.emoji_rating" required>
                    <option>😍</option>
                    <option>😊</option>
                    <option>❤️</option>
                    <option>👍</option>
                    <option>🤷🏽</option>
                    <option>☠️</option>
                    <option>🤢</option>
                    <option>😭</option>
                    <option>😡</option>
                </select>
            </div>
            </div>
            <br>
            
            <h3>Please answer a few quick questions to help others:</h3>

            <br>

            <ul>
                <li>
                    <label for="recommended">🧐 Would you recommend this provider to a friend? </label>
                    <select id="recommended" v-model.number="reviewData.recommended">
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>
                <li>
                    <label for="user-comfort">🧐 Did you feel comfortable and respected while receiving care from this provider? </label>
                    <select id="user-comfort" v-model.number="reviewData.usercomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>         
                </li>
                <li>
                    <label for="prov-comfort">🧐 Did the provider seem comfortable treating and/or interacting with you? </label>
                    <select id="prov-comfort" v-model.number="reviewData.provcomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>           
                <li>
                    <label for="staff-comfort">🧐 If applicable, did the support staff (i.e. nurses, dental hygienists, schedulers and front desk staff) seem comfortable treating and/or interacting with you? </label>
                    <select id="staff-comfort" v-model="reviewData.staffcomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        <option value=99>Not applicable</option>
                    </select>       
                </li>
                <li>
                    <label for="prov-knowledge">🧐 If applicable, did this provider seem knowledgeable about your unique health needs as an LGBTQIA2S+ person (i.e. PrEP, HIV care, multi-site STI screenings, routine cancer screenings, gender affirming care and experiences of stigma)? </label>
                    <select id="prov-knowledge" v-model.number="reviewData.provknowledge" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        <option value=99>Not applicable</option>
                    </select>        
                </li>     
                <li>
                    <label for="intake">🧐 Do intake forms include LGBTQIA2S+ affirming language (such as asking about partners, pronouns, preferred name, gender identity and sex assigned at birth with options for intersex, trans and nonbinary folks)? </label>
                    <select id="intake" v-model.number="reviewData.intake" required>
                        <option value=1>Yes, some of these</option>
                        <option value=2>Yes, all of these</option>
                        <option value=0>No, none of these</option>
                    </select>         
                </li>
                <li>
                    <label for="misgender">🧐 If applicable, did the provider and support staff consistently use your preferred name and pronouns? </label>
                    <select id="misgender" v-model.number="reviewData.misgender" required>
                        <option value=1>Yes, the provider</option>
                        <option value=2>Yes, support staff</option>
                        <option value=3>Yes, both the provider and support staff</option>
                        <option value=0>No, neither the provider nor support staff</option>
                        <option value=99>Not applicable</option>
                    </select>          
                </li>
                <li>
                    <label for="bathrooms">🧐 If applicable, does the office have gender neutral bathrooms? </label>
                    <select id="bathrooms" v-model.number="reviewData.bathrooms" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        <option value=99>Not applicable</option>
                    </select>        
                </li>
            </ul>
            <br>

            <button class="button-33" type="submit" :disabled="submitted">
                ✨ Submit Review ✨
            </button>
        </form>
        
        <p v-if="submitted">🦋 Thank you so much for leaving a review, {{ store.currentUser.first_name }}! This will help other LGBTQIA2S+ folks find safe and affirming providers in their neighborhoods. You rock!! 🌺</p>
        
    </div>
    
    </template>
