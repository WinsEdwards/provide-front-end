<script setup>
// defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// })
</script>

<template>
    <div login-form-container>
        <form name="login-form" >
            <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" />
            </div>
            <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" />
            </div>
            <button class="btn btn-outline-dark" type="submit">
                Register
            </button>
            <p>Don't have an account?<button><RouterLink to="/register">Register Here</RouterLink></button></p>
        </form>
    </div>
</template>

<!-- 
what needs to go in here: 
- username
- password
- button to switch to register

-->