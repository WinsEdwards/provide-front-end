<script setup>
import { store } from '../store';
import { useRouter} from 'vue-router'
import axios from 'axios';
import '../assets/login.css'

// variables
const router = useRouter()
const userData = {
    username:'',
    password : ''
}

// methods
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

</script>

<template>
    <div login-form-container>

        <form name="login-form" @submit.prevent="doLogin(userData)" >
            <h1>Login</h1>
            <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" placeholder="username" v-model="userData.username" required/>
            </div>

            <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" placeholder="password" v-model="userData.password" required/>
            </div>
            
            <button class="btn btn-outline-dark, login" type="submit">
                Login
            </button>

            <p>Don't have an account? <button><RouterLink to="/register">Register Here</RouterLink></button></p>

            <p v-if="store.isResponseVisible" class="error-message"> {{ store.responseMessage }}</p>
        </form>
    </div>
</template>
