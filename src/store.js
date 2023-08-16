import {reactive} from 'vue';
import axios from 'axios';
import { mean, round, mode } from 'mathjs';

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
    userWrittenReviews: [],
    userLikedReviews: [],
    currentProvidersListFromDatabase: null,
    isLiked: false,
    summaryStats: {
            rating: [],
            emoji_rating: [],
            recommended: [],
            usercomfort: [],
            provcomfort: [],
            staffcomfort: [],
            provknowledge: [],
            intake: [],
            misgender: [],
            bathrooms: []
        },
    
    
    // statistics to go with provider reviews
    // calcSummaryStats() {
    //     // if (this.providerReviews.length > 0) {
    //     //     this.providerReviews.forEach(function(value,index) {
    //     //         // store.summaryStats.rating.push(value["rating"]),
    //     //         store.summaryStats["emoji_rating"].push(value["emoji_rating"]),
    //     //         store.summaryStats["recommended"].push(value["recommended"]),
    //     //         store.summaryStats["usercomfort"].push(value["usercomfort"]),
    //     //         store.summaryStats["provcomfort"].push(value["provcomfort"]),
    //     //         store.summaryStats["staffcomfort"].push(value["staffcomfort"]),
    //     //         store.summaryStats["provknowledge"].push(value["provknowledge"]),
    //     //         store.summaryStats["misgender"].push(value["misgender"]),
    //     //         store.summaryStats["bathrooms"].push(value["bathrooms"]),
    //     //         store.summaryStats["intake"].push(value["intake"])
    //     //         console.log("pre stat", store.summaryStats)
    //     //     })
    //     //     // calculating statistics
    //     //     // store.summaryStats["rating"] = mean(store.summaryStats["rating"])
    //     //     // store.summaryStats["rating"] = round(store.summaryStats["rating"])
    //     //     store.summaryStats["emoji_rating"] = mode(store.summaryStats["emoji_rating"])
    //     //     store.summaryStats["recommended"] = mode(store.summaryStats["recommended"])
    //     //     store.summaryStats["usercomfort"] = mode(store.summaryStats["usercomfort"])
    //     //     store.summaryStats["provcomfort"] = mode(store.summaryStats["provcomfort"])
    //     //     store.summaryStats["staffcomfort"] = mode(store.summaryStats["staffcomfort"])
    //     //     store.summaryStats["provknowledge"] = mode(store.summaryStats["provknowledge"])
    //     //     store.summaryStats["misgender"] = mode(store.summaryStats["misgender"])
    //     //     store.summaryStats["bathrooms"] = mode(store.summaryStats["bathrooms"])
    //     //     store.summaryStats["intake"] = mode(store.summaryStats["intake"])
    //     //     console.log("post stat", store.summaryStats)
    //     // }
    // },


    // login functionality
    doLogout() {
        this.isLoggedIn = false;
        this.currentUser = null;
    },

    
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


    setReviews(newValue) {
        this.providerReviews = newValue
    },


    toggleLike(reviewData) {
        const review_id = reviewData.review_id
        const requestData = {"user_id" : this.currentUser.user_id}
        axios.patch(`https://provide-api.onrender.com/reviews/${review_id}`, requestData)
            .then(response => {
            this.getUpdatedUser()
            this.setReviews(prevReviews =>{
                const updatedReviews = prevReviews.map(review => {
                    return review.review_id === review_id ? response.data : review
                })
                return updatedReviews
            })
        })
        },

    getUpdatedUser() {
        axios.get(`http://localhost:5000/user/${this.currentUser.user_id}`)
        .then(response => {
            this.currentUser.liked_reviews = response.data.liked_reviews
        })
    },


    // review functionality 
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
            })
        // .then(this.calcSummaryStats())
        .catch((error) => {
            console.log(error)
            if (error.response.status == 404) {
                this.createResponseMessage('Be the first to leave a review for this provider!')
            } 
        })
    },
    

    getReviewsWrittenByUser() {
        axios.get(`https://provide-api.onrender.com/user/${this.currentUser['user_id']}/reviews`)
        .then(response => { 
            store.userWrittenReviews = response.data
        })
        .catch((error) => {
            this.createResponseMessage('Oh dear, get reviews for user did not work...')
        })
    },

    getReviewsLikedByUser() {
        axios.get(`https://provide-api.onrender.com/user/${this.currentUser['user_id']}/liked-reviews`)
        .then(response => { 
            console.log(response)
            store.userLikedReviews = response.data
            console.log(store.userLikedReviews)})
        .catch((error) => {
            this.createResponseMessage('Oh dear, get reviews for user did not work...')
        })
    },


    deleteReview(reviewID) {
        axios.delete(`https://provide-api.onrender.com/reviews/${reviewID}`)
        .then(response => {
            response
        })
    },


    // search functionality 
    async getProviders(searchData) {
        await axios.post('https://provide-api.onrender.com/providers/provider-search', searchData)
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
