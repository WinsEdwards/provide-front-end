import {reactive} from 'vue';
import axios from 'axios';
// variables
export const store = reactive({
    currentUser: null,
    currentProvider: {
        "address_1": "123 Main St.",
        "city": "Seattle",
        "first_name": "Meredith",
        "last_name": "Grey",
        "licenses": "M.D., F.A.C.S.",
        "postal_code": 98122,
        "provider_id": 2,
        "provider_type": "General Surgeon",
        "state": "Washington",
        "telephone_number": "123-456-7890"
      },
    review_ID: null,
    isLoggedIn: false,
    currentProvidersList: null,
    searchedProvidersList: null,
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
        reviewData['author_id'] = this.currentUser['user_id']
        console.log("reviewData: ", reviewData)
        axios.post(`https://provide-api.onrender.com/providers/${this.currentProvider['provider_id']}/reviews`, reviewData)
            .then(response => {
            response})
            .catch((error) => {
                this.createResponseMessage('Oh dear, create review did not work...')
            })
    },

    getReviewsForProvider() {
        axios.get(`https://provide-api.onrender.com/providers/${this.currentProvider['provider_id']}/reviews`)
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
        axios.get(`https://provide-api.onrender.com/user/${this.currentUser['user_id']}/reviews`)
        .then(response => { 
            store.userReviews = response.data
            console.log(store.reviews)})
        .catch((error) => {
            this.createResponseMessage('Oh dear, get reviews for user did not work...')
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
