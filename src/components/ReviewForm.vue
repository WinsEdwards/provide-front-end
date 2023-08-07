<script setup>
import axios from 'axios';
import { store } from '../store';
import { routerKey } from 'vue-router';
// import currentUser from '../store';

// variables
const reviewData = {
    review: null,
    rating: null,
    recommend: null,
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
            <h3>Leave a review:</h3>
            <div>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="reviewData.review" required></textarea>
            </div>
            <br>
            <div>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="reviewData.rating" required>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </div>
            <br>    
            <h3>Please answer a few quick questions to help others:</h3>
            <!-- note: this section needs to be built into backend if Maz likes -->
            <ul>
                <li>
                    <label for="recommend">Would you recommend this provider to a friend?</label>
                    <select id="recommend" v-model.number="reviewData.recommend">
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>
                <li>
                    <label for="user-comfort">Did you feel comfortable and respected while receiving care from this provider?</label>
                    <select id="user-comfort" v-model.number="reviewData.usercomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>         
                </li>
                <li>
                    <label for="prov-comfort">Did the provider seem comfortable treating and/or interacting with you?</label>
                    <select id="prov-comfort" v-model.number="reviewData.provcomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>           
                <li>
                    <label for="staff-comfort">Did the support staff (i.e. nurses, dental hygienists, schedulers and front desk staff) seem comfortable treating and/or interacting with you?</label>
                    <select id="staff-comfort" v-model="reviewData.staffcomfort" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>       
                </li>
                <li>
                    <label for="prov-knowledge">If applicable, did this provider seem knowledgeable about your unique health needs as an LGBTQIA2S+ person (i.e. PrEP, HIV care, multi-site STI screenings, routine cancer screenings, gender affirming care and experiences of stigma)?</label>
                    <select id="prov-knowledge" v-model="reviewData.provknowledge" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        <option value="NA">Not applicable</option>
                    </select>        
                </li>     
                <li>
                    <label for="intake">Do intake forms include LGBTQIA2S+ affirming language (such as asking about partners, pronouns, preferred name, gender identity and sex assigned at birth with options for intersex, trans and nonbinary folks)?</label>
                    <select id="intake" v-model="reviewData.intake" required>
                        <option>Yes, some of these</option>
                        <option>Yes, all of these</option>
                        <option>No, none of these</option>
                    </select>         
                </li>
                <li>
                    <label for="misgender">If applicable, did the provider and support staff consistently use your preferred name and pronouns?</label>
                    <select id="misgender" v-model="reviewData.misgender" required>
                        <option>Yes, the provider</option>
                        <option>Yes, support staff</option>
                        <option>Yes, both the provider and support staff</option>
                        <option value=0>No, neither the provider nor support staff</option>
                        <option>Not applicable</option>
                    </select>          
                </li>
                <li>
                    <label for="bathrooms">Does the office have gender neutral bathrooms?</label>
                    <select id="bathrooms" v-model.number="reviewData.bathrooms" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                    </select>        
                </li>
            </ul>
            <button class="btn btn-outline-dark" type="submit">
                Submit Review
            </button>
            </form>
            <h3>Thank you so much for leaving a review! This will help other LGBTQIA2S+ folks locate safe and affirming providers. You rock.</h3>
        
    </div>
    
    </template>

<!-- 

what needs to go in here: 
- ReviewForm component 
- list of SingleProviderList components
- competencies: were there gender neutral bathrooms? do intake forms include LGBTQIA2S+ affirming language (such as asking about partners, pronouns, gender identity and sex assigned at birth with options for intersex, trans and nonbinary folks)? did the provider seem comfortable treating and interacting with you? did the provider seem knowledgeable about your unique health needs as an LGBTQIA2S+ person? did the support staff (i.e. nurses, dental hygienists, front desk staff) seem comfortable treating and interacting with you? did you feel comfortable receiving care from this provider? did you feel respected by this provider? would you recommend this provider to a friend?

-->