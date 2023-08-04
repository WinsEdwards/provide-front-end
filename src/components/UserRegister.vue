<script setup>
import { RouterLink} from 'vue-router'
// defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// })
</script>

<template>
    <div registration-form-container>
        <form name="registration-form" >
            <div class="mb-3">
                <label for="firstname">First Name: </label>
                <input id="firstname" type="text" />
            </div>
            <div class="mb-3">
                <label for="lastname">Last Name: </label>
                <input id="lastname" type="text" />
            </div>
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
            <p>Already have an account?<button><RouterLink to="/login">Login Here</RouterLink></button></p>
        </form>
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