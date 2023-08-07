<script setup>
import axios from "axios";
import { store } from '../store';
// variables
const userData = {
    username:'',
    password : ''
}

// functions
const doLogin = () => {
    axios.post('http://localhost:5000/user/login', userData)
    .then(response => {
        console.log(response)
        console.log(store)
        store.toggleIsLoggedIn(true)
        // console.log(store)
    })
    }

</script>

<template>
    <div login-form-container>
        <form name="login-form" @submit.prevent="doLogin" >
            <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" placeholder="username" v-model="userData.username" />
            </div>
            <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" placeholder="password" v-model="userData.password" />
            </div>
            <button class="btn btn-outline-dark" type="submit">
                Login
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