<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
        This is a single instance of the login form
        </h3>
        <p>Don't have an account?<button>Register Here</button></p>
    </div>
</template>

<!-- 
what needs to go in here: 
- username
- password
- button to switch to register

-->