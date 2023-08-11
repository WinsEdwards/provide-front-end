<script setup>
import ReviewsList from "../components/ReviewsList.vue"
import ReviewsListUser from "../components/ReviewsListUser.vue";
</script>

<template>
    <main>
        <h1>This is the user page</h1>
        <p> this review list shows reviews written by user</p>
        <ReviewsListUser userReviews="reviews"></ReviewsListUser>

        <button>Show liked reviews</button>
        <p> this review list shows reviews liked by user</p>
        

    </main>
</template>

<!-- 
what needs to go in here: 
- user component
- reviews list (reviews written by user) (allows them to edit?)
- toggle to see:
    - reviews list (reviews liked by user)
-->