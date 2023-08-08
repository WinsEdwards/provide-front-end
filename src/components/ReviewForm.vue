<script setup>
import axios from 'axios';
import { store } from '../store';
import { routerKey } from 'vue-router';
// import currentUser from '../store';

// variables
const reviewData = {
    review: null,
    rating: null,
    emojirating: null,
    recommended: null,
    usercomfort: null,
    provcomfort: null,
    staffcomfort: null,
    provknowledge: null,
    intake: null,
    misgender: null,
    bathrooms: null,
}

// functions
const handleSubmit = () => {
    store.createReview(reviewData)
}

</script>

<template>

    <div class="review-form-contain">

        <form class="review-form" @submit.prevent="handleSubmit">
            <h3>Leave a review for {{ currentProvider }}:</h3>
            <br>
            <div>
                <label for="review">Review: </label>      
                <textarea id="review" v-model="reviewData.review" required></textarea>
            </div>
            <br>
            <div>
                <label for="rating">Rating: </label>
                <select id="rating" v-model.number="reviewData.rating" required>
                    <option>5 ⭐s</option>
                    <option>4 ⭐s</option>
                    <option>3 ⭐s</option>
                    <option>2 ⭐s</option>
                    <option>1 ⭐</option>
                </select>
            </div>
            <br>
            <div>
                <label for="emoji-rating">Emoji Rating: </label>
                <select id="emoji-rating" v-model.number="reviewData.emojirating" required>
                    <option>😍</option>
                    <option>👍</option>
                    <option>😐</option>
                    <option>☹️</option>
                    <option>😡</option>
                </select>
            </div>
            <br>    
            <h3>Please answer a few quick questions to help others:</h3>
            <!-- note: this section needs to be built into backend if Maz likes -->
            <ul>
                <li>
                    <label for="recommended">Would you recommend this provider to a friend? </label>
                    <select id="recommended" v-model.number="reviewData.recommended">
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>
                <li>
                    <label for="user-comfort">Did you feel comfortable and respected while receiving care from this provider? </label>
                    <select id="user-comfort" v-model.number="reviewData.usercomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>         
                </li>
                <li>
                    <label for="prov-comfort">Did the provider seem comfortable treating and/or interacting with you? </label>
                    <select id="prov-comfort" v-model.number="reviewData.provcomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>           
                <li>
                    <label for="staff-comfort">Did the support staff (i.e. nurses, dental hygienists, schedulers and front desk staff) seem comfortable treating and/or interacting with you? </label>
                    <select id="staff-comfort" v-model="reviewData.staffcomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>
                <li>
                    <label for="prov-knowledge">If applicable, did this provider seem knowledgeable about your unique health needs as an LGBTQIA2S+ person (i.e. PrEP, HIV care, multi-site STI screenings, routine cancer screenings, gender affirming care and experiences of stigma)? </label>
                    <select id="prov-knowledge" v-model.number="reviewData.provknowledge" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        <option value=99>Not applicable</option>
                    </select>        
                </li>     
                <li>
                    <label for="intake">Do intake forms include LGBTQIA2S+ affirming language (such as asking about partners, pronouns, preferred name, gender identity and sex assigned at birth with options for intersex, trans and nonbinary folks)? </label>
                    <select id="intake" v-model.number="reviewData.intake" required>
                        <option value=1>Yes, some of these</option>
                        <option value=2>Yes, all of these</option>
                        <option value=0>No, none of these</option>
                    </select>         
                </li>
                <li>
                    <label for="misgender">If applicable, did the provider and support staff consistently use your preferred name and pronouns? </label>
                    <select id="misgender" v-model.number="reviewData.misgender" required>
                        <option value=1>Yes, the provider</option>
                        <option value=2>Yes, support staff</option>
                        <option value=3>Yes, both the provider and support staff</option>
                        <option value=0>No, neither the provider nor support staff</option>
                        <option value=99>Not applicable</option>
                    </select>          
                </li>
                <li>
                    <label for="bathrooms">Does the office have gender neutral bathrooms? </label>
                    <select id="bathrooms" v-model.number="reviewData.bathrooms" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>        
                </li>
            </ul>
            <button class="btn btn-outline-dark" type="submit">
                ✨ Submit Review ✨
            </button>
            </form>
            <br>
            <h3>Thank you so much for leaving a review! This will help other LGBTQIA2S+ folks find safe and affirming providers in their neighborhoods. You rock!!</h3>
        
    </div>
    
    </template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components
- competencies: were there gender neutral bathrooms? do intake forms include LGBTQIA2S+ affirming language (such as asking about partners, pronouns, gender identity and sex assigned at birth with options for intersex, trans and nonbinary folks)? did the provider seem comfortable treating and interacting with you? did the provider seem knowledgeable about your unique health needs as an LGBTQIA2S+ person? did the support staff (i.e. nurses, dental hygienists, front desk staff) seem comfortable treating and interacting with you? did you feel comfortable receiving care from this provider? did you feel respected by this provider? would you recommend this provider to a friend?

-->