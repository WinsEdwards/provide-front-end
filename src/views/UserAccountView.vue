<script setup>
import ReviewsListUser from "../components/ReviewsListUser.vue";
import { store } from "../store";
</script>

<template>
    <main>
        <h2>
            Hello, {{ store.currentUser['first_name'] }}! We are so grateful you are a part of the Provide community and a part of the world! 
            <br>
            <br>
            In case you don't hear it enough, let us just take this moment to say: you matter, you are wonderful and you are enough.
            <br>
            <br>
            Below, you can find reviews that you have written for providers you have seen and reviews that you have liked.
        </h2>
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