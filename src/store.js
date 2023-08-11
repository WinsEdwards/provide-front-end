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
    providerReviews: [],
    userReviews: [],
    userLikedReviews: [],
    currentProvidersListFromDatabase: null,
    isLiked: false,

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

    

    doLogout() {
        this.isLoggedIn = false;
        this.currentUser = null;
    },

    // like a review 

    async toggleLike(reviewData) {
        console.log(reviewData)
        const review_id = reviewData.review_id
        const requestData = {"user_id" : this.currentUser.user_id}
        // console.log(this.currentUser.liked_reviews)
        await axios.patch(`http://127.0.0.1:5000/reviews/${review_id}`, requestData)
            .then(response => {
            console.log(this.providerReviews)
            for (let review of this.providerReviews) {
                if (review.review_id === review_id) {
                        review["liked_by"] = response.liked_by
                }
            }
            console.log(this.providerReviews)
            console.log(this.currentUser)
            this.currentUser["liked_reviews"] = this.getUpdatedUser().liked_reviews
            })
            console.log(this.currentUser)
            .catch((error) => {
            
            });
        },

    // updateLiked() {
    //     if (this.currentUser.liked_reviews && this.currentUser.liked_reviews.includes(review_id)) {
    //         this.isLiked = false
    //     } else {
    //         this.isLiked = true
    //     }
    // },

    
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

    async getProviders(searchData) {
        await axios.post('http://127.0.0.1:5000/providers/provider-search', searchData)
        .then(response => this.currentProvidersList = response.data)
    },

    // add provider to database

    addProviderToDatabase(providerData) {
        console.log(providerData)
        axios.post('https://provide-api.onrender.com/providers', providerData)
        .then(response => response)
    },

    // get providers from our database 

    getProvidersList () {
        axios.get('https://provide-api.onrender.com/providers')
        .then(response => this.currentProvidersListFromDatabase= response.data)
        
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
