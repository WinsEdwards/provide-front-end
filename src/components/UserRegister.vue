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
        This is a single instance of the register form
        </h3>
        <p>Already have an account?<button>Login Here</button></p>
    </div>
</template>

<!-- 
what needs to go in here: 
- firstname
- lastname
- username
- password
- email???
- button to switch to login

-->