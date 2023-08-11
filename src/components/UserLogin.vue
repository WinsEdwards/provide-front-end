<script setup>
import { store } from '../store';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';

// variables
const router = useRouter()
const userData = {
    username:'',
    password : ''
}

// login button has to be clicked twice for login to take us to home page

const doLogin = (userData) => {
        console.log(userData)
        axios.post('https://provide-api.onrender.com/user/login', userData)
    .then(response => {
            store.currentUser = response.data.user
            store.isLoggedIn = true
            router.push('/')
        }).catch((error) => {
            if (error.response.status == 401) {
                store.createResponseMessage('Please enter a valid username and password')
        } 
        else {
            store.createResponseMessage('Please complete all fields')
        }
        });
    }

const handleClick = () => {
    router.push('/')
}

</script>

<template>
    <div login-form-container>
        <form name="login-form" @submit.prevent="doLogin(userData)" >
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