import {reactive} from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
// variables
export const store = reactive({
    router : useRouter(),
    route : useRoute(),
    
    currentUser: null,
    currentProvider: null,
    isLoggedIn: false,

    // login functionality

    doRegister(userData) {
        axios.post('http://localhost:5000/user/register', userData)
        .then(response => {
            response
        }).catch((error) => {
            if (error.response.status == 409) {
                this.createResponseMessage('Sorry, that username is already taken')
            } 
            else {
                this.createResponseMessage('Please complete all fields')
            }
            })
        },

    doLogin(userData) {
        axios.post('http://localhost:5000/user/login', userData)
    .then(response => {
            this.currentUser = response.data.user.user_id
            this.isLoggedIn = true
        }).catch((error) => {
            console.log(error)
            if (error.response.status == 401) {
                this.createResponseMessage('Please enter a valid username and password')
        } 
        else {
            this.createResponseMessage('Please complete all fields')
        }
        });
    },

    doLogout() {
        this.isLoggedIn = false;
        this.currentUser = null;
    },

    createReview(reviewData) {
        // axios.post($`http://localhost:5000/{currentProvider}/reviews`, currentUser)
        // .then(response => {
        // response})
        // .catch((error) => {
        //     this.createResponseMessage('Oh dear, that did not work...')
        // })
        console.log(reviewData)
    },

    // error message functionality

    responseMessage: null,

    isResponseVisible: false,

    createResponseMessage(responseMessage) {
        this.responseMessage = responseMessage
        this.isResponseVisible = true
        setTimeout(() => {this.isResponseVisible=false;}, 4000);
    },

})
