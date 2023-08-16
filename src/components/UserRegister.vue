<script setup>
import { RouterLink} from 'vue-router'
import { useRouter } from 'vue-router';
import { store } from '../store';
import '../assets/registration.css'

// variables
const router = useRouter()
const userData = {
    firstName : '',
    lastName : '',
    username : '',
    password : ''
}

// functions 
const handleSubmit = () => {
    store.doRegister(userData) 
    if (store.currentUser != null) {
        router.push('/login')
    }
}

</script>

<template>
    <div class="registration-form-container">

        <form name="registration-form" @submit.prevent="handleSubmit">
            
            <img src="../assets/images/register-header.png">
            <div class="mb-3">
                <label for="firstname">First Name: </label>
                <input id="firstname" type="text" placeholder="First Name" v-model="userData.firstName" required/>
            </div>

            <div class="mb-3">
                <label for="lastname">Last Name: </label>
                <input id="lastname" type="text" placeholder="Last Name" v-model="userData.lastName" required/>
            </div>

            <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" placeholder="Username" v-model="userData.username" required/>
            </div>

            <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" placeholder="Password" v-model="userData.password" required/>
            </div>

            <button class="btn btn-outline-dark" type="submit">
                Register
            </button>

            <p>Already have an account?<button><RouterLink to="/login">Login Here</RouterLink></button></p>

            <p v-if="store.isResponseVisible" class="error-message"> {{ store.responseMessage }}</p>
        </form>
    </div>
</template>