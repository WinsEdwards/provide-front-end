<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import ReviewList from '../components/ReviewList.vue'
</script>

<template>
    <main>
        <h1>This is the user page</h1>
        <p> this review list shows reviews written by user</p>
        <ReviewList></ReviewList>

        <button>Show liked reviews</button>
        <p> this review list shows reviews liked by user</p>
        <ReviewList></ReviewList>

    </main>
</template>

<!-- 
what needs to go in here: 
- user component
- reviews list (reviews written by user) (allows them to edit?)
- toggle to see:
    - reviews list (reviews liked by user)
-->