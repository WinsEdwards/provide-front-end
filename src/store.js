import {reactive} from 'vue';
import axios from 'axios';
// variables
export const store = reactive({
    currentUser: null,
    currentProvider: null,
    isLoggedIn: false,
    currentProvidersList: null,

    // login functionality

    doRegister(userData) {
        axios.post('https://provide-api.onrender.com/user/register', userData)
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
        console.log(userData)
        axios.post('https://provide-api.onrender.com/user/login', userData)
    .then(response => {
            this.currentUser = response.data.user
            console.log(this.currentUser)
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
        reviewData['author_id'] = this.currentUser
        console.log("hey, what's going on", reviewData)
        axios.post(`https://provide-api.onrender.com/providers/${this.currentProvider}/reviews`, reviewData)
        .then(response => {
        response})
        .catch((error) => {
            this.createResponseMessage('Oh dear, that did not work...')
        })
        console.log('post axios attempt:', reviewData)
    },

    getReviewsForProvider() {
        axios.get(`https://provide-api.onrender.com/providers/${this.currentProvider}/reviews`)
        .then(response => { 
            const reviews = response.data})
        .catch((error) => {
            this.createResponseMessage('Oh dear, that did not work...')
        })
    },
    
    getReviewsForUser() {
        axios.get(`https://provide-api.onrender.com/providers/${this.currentUser}/reviews`)
        .then(response => { 
            const reviews = response.data})
        .catch((error) => {
            this.createResponseMessage('Oh dear, that did not work...')
        })
    },

    // search functionality 

    getProviders(searchData) {
        console.log(searchData)
        axios.post('http://127.0.0.1:5000/providers/provider-search', searchData)
        .then(response => this.currentProvidersList = response.data)
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
