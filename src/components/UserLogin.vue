<script setup>
import { store } from '../store';
import { useRouter, useRoute } from 'vue-router'
// variables
const router = useRouter()
const userData = {
    username:'',
    password : ''
}

const handleSubmit = () => {
    store.doLogin(userData)
    router.push('/')
}

</script>

<template>
    <div login-form-container>
        <form name="login-form" @submit.prevent="handleSubmit" >
            <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" placeholder="username" v-model="userData.username" required/>
            </div>
            <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" placeholder="password" v-model="userData.password" required/>
            </div>
            <button class="btn btn-outline-dark" type="submit">
                Login
            </button>
            <p>Don't have an account?<button><RouterLink to="/register">Register Here</RouterLink></button></p>
            <p v-if="store.isResponseVisible"> {{ store.responseMessage }}</p>
        </form>
    </div>
</template>

<!-- 
what needs to go in here: 
- username
- password
- button to switch to register

-->