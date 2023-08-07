<script setup>
import { RouterLink, stringifyQuery} from 'vue-router'
import { store } from '../store';
// variables
const userData = {
    firstName : '',
    lastName : '',
    username : '',
    password : ''
}

// functions 

</script>

<template>
    <div registration-form-container>
        <form name="registration-form" @submit.prevent="store.doRegister(userData)">
            <div class="mb-3">
                <label for="firstname">First Name: </label>
                <input id="firstname" type="text" placeholder="First Name" v-model="userData.firstName" />
            </div>
            <div class="mb-3">
                <label for="lastname">Last Name: </label>
                <input id="lastname" type="text" placeholder="Last Name" v-model="userData.lastName" />
            </div>
            <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" placeholder="Username" v-model="userData.username"/>
            </div>
            <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" placeholder="Password" v-model="userData.password"/>
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