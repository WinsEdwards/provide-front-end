import {reactive} from 'vue';
import axios from 'axios';
// variables
export const store = reactive({
    currentUser: null,
    currentProvider: 1,
    review_ID: null,
    isLoggedIn: false,
    currentProvidersList: null,
    providerReviews: [],
    userReviews: [],
    userLikedReviews: [],

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
            console.log('CURRENT USER',this.currentUser)
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

    toggleLike() {
        // still need to set review_ID somewhere
        axios.patch(`https://provide-api.onrender.com/reviews/${this.review_ID}`)
            .then(response => {
            response})
            .catch((error) => {
            console.log(error);
            });
        },
    
    createReview(reviewData) {
        reviewData['author_id'] = this.currentUser
        axios.post(`https://provide-api.onrender.com/providers/${this.currentProvider}/reviews`, reviewData)
            .then(response => {
            response})
            .catch((error) => {
                this.createResponseMessage('Oh dear, create review did not work...')
            })
    },

    getReviewsForProvider() {
        axios.get(`https://provide-api.onrender.com/providers/${this.currentProvider}/reviews`)
        .then(response => { 
            store.providerReviews = response.data
            console.log("printing store.providerReviews", store.providerReviews)
            console.log("printing store.providerReviews[0]", store.providerReviews[0])
            console.log("printing store.providerReviews[0]", store.providerReviews[0]["emoji_rating"])})
        .catch((error) => {
            this.createResponseMessage('Oh dear, get reviews for provider did not work...')
        })
    },
    
    getReviewsForUser() {
        axios.get(`https://provide-api.onrender.com/user/${this.currentUser}/reviews`)
        .then(response => { 
            store.userReviews = response.data
            console.log(store.reviews)})
        .catch((error) => {
            this.createResponseMessage('Oh dear, get reviews for user did not work...')
        })
    },

    // search functionality 

    async getProviders(searchData) {
        console.log(searchData)
        await axios.post('http://127.0.0.1:5000/providers/provider-search', searchData)
        .then(response => this.currentProvidersList = response.data)
    },

    // add provider to database

    addProviderToDatabase(providerData) {
        console.log(providerData)
        axios.post('https://provide-api.onrender.com/providers', providerData)
        .then(response => response)
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
