import {reactive} from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
// variables
export const store = reactive({
    router : useRouter(),
    route : useRoute()
    // logged in
    isLoggedIn: true,
    toggleIsLoggedIn(value) {
        this.isLoggedIn = value
    },
    // axios calls
    doRegister(userData) {
        axios.post('http://localhost:5000/user/register', userData)
        .then(response => {
            console.log(response)
            router.push({ name: 'home' })
        })
        }
})
