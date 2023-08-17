<script setup>
import ReviewsListUser from "../components/ReviewsListUser.vue";
import { store } from "../store";
import '../assets/UserAccountView.css'
</script>

<template>
    <main class="account-container">
        <img class="account-logo-img-left" src="../assets/images/provide_logo_no_bg.png">
        <img class="account-logo-img-right" src="../assets/images/green-logo-no-bg.png">
        <div class="welcome-message-account">
            <div class="welcome-message-text">
                <h1 class="intro">Hello, {{ store.currentUser['first_name'] }}! We are so grateful you are a part of the Provide community and a part of the world!</h1> 
                <br>
                <p>In case you don't hear it enough, let us just take this moment to say: you matter, you are wonderful and you are enough.</p>
                <br>
                <p>Below, you can find reviews that you have written for providers you have seen and reviews that you have liked.</p>
            </div>
        </div>
            <br>
        <ReviewsListUser></ReviewsListUser>
        
    </main>
</template>

<!-- 
what needs to go in here: 
- user component
- reviews list (reviews written by user) (allows them to edit?)
- toggle to see:
    - reviews list (reviews liked by user)
-->