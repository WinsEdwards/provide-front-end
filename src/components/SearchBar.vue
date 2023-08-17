<script setup>
import { store } from '../store';
import { RouterLink, useRouter} from 'vue-router'
import '../assets/home.css'
import '../assets/searchbar.css'

const router = useRouter()
const searchData = {
    firstName : '',
    lastName : '',
    zipCode : ''
    
}

const handleSearch = () => {
    router.push('/search')
    store.getProviders(searchData)
    
}

const handleClick = (provider) => {
    store.currentProvider = provider
    store.addProviderToDatabase(provider)
    store.currentProvidersList = null
}

        
</script>

<template>
    <div class="search-bar-container">
        <div class="search-form-container">
            <form name="search-form" @submit.prevent="handleSearch">
                <div>
                    <label>first name</label>
                    <input type="text" id="search" placeholder="first name" v-model="searchData.firstName" required>
                </div>

                <div>
                    <label>last name</label>
                    <input type="text" id="search" placeholder="last name" v-model="searchData.lastName" required>
                </div>

                <div>
                    <label>zip code</label>
                    <input type="text" id="search" placeholder="zip code" v-model="searchData.zipCode">
                </div>

                <div class="submit-button">
                    <label></label>
                    <button class="button-33" type="submit">search</button>
                </div>
            </form>
        </div>
        <div>
        <div class="search-results-list-container">
            <div class="single-search-result"  v-for="provider in store.currentProvidersList">
                <p><RouterLink to="/providers/provider" @click="handleClick(provider)"><h2>{{  provider.first_name.toLowerCase() }} {{ provider.last_name.toLowerCase() }}</h2></RouterLink> {{ provider.provider_type }}</p>
                <br>
                <p>{{ provider.address_1.toLowerCase() }}</p> 
                <p>{{ provider.city.toLowerCase() }} {{ provider.state }} {{ provider.zipCode}}</p>
                <br>
                <p>{{ provider.telephone_number }}</p>
            </div>
        </div> 
        </div>

    </div>
</template>

<!-- 
<script>
import {ref, computed} from 'vue'
import axios from 'axios'

export default {
    setup() {
        // let searchTerms = reactive({
        //     firstName: '',
        //     lastName:'',
        //     zipCode:''
        // })
        let firstName = ref('')
        let lastName = ref('')
        let zipCode = ref('')
        // axios.get('https://npiregistry.cms.hhs.gov/api/?last_name=',{{searchTerm}},'&version=2.1')
        let providers = 
        [
    {
        "addr_practice_full": "123 Happy Street",
        "firstName" : "John",
        "lastName" : "Smith",
        "zipCode" : 30076,
        "licenses": "fun, happy, silly",
        "name_full": "Happy Doctor Place",
        "provider_id": 2,
        "provider_type": "A type"
    },
    {
        "addr_practice_full": "123 Sad Street",
        "licenses": "sad, sad, sad",
        "firstName" : "Jerry",
        "lastName" : "Beck",
        "zipCode" : 30069,
        "name_full": "Sad Doctor Place",
        "provider_id": 1,
        "provider_type": "A sad type"
    },
    {
        "addr_practice_full": "123 Mid Street",
        "licenses": "mid, mid, mid",
        "firstName" : "Jenny",
        "lastName" : "Dallow",
        "zipCode" : 30076,
        "name_full": "Mid Doctor Place",
        "provider_id": 4,
        "provider_type": "A mid type"
    }
]
        // axios.get('https://jsonplaceholder.typicode.com/users')

        const searchProviders = computed(() => {
            if (firstName.value === '' && lastName.value === '' && zipCode.value === '') {
                return []
            }

            let matches = 0
            return providers.filter(provider => {
                if (
                (provider.firstName.toLowerCase().includes(firstName.value.toLowerCase()) ||
                provider.lastName.toLowerCase().includes(lastName.value.toLowerCase()) || 
                provider.zipCode.includes(zipCode.value))
                && matches < 10
                ) {
                matches++
                return provider
                }
            })
            });
        return {
        firstName,
        lastName,
        zipCode,
        providers,
        searchProviders
        }
    }
}
</script>

<template>
    <div class="greetings">
        <label for="search">
            Type the name of a country to search
        </label>

        <input type="text" id="search" placeholder="First Name" v-model="firstName">
        <input type="text" id="search" placeholder="Last Name" v-model="lastName">
        <input type="text" id="search" placeholder="Zip Code" v-model="zipCode">
        
        <ul v-if="searchProviders.length">
            <li>
                Showing {{ searchProviders.length }} of {{ providers.length }} results
            </li>
            <li
                v-for="provider in searchProviders"
                :key="provider.provider_id"
            >
                {{ provider.firstName }}
                {{ provider.lastName }}
                {{ provider.addr_practice_full }}
            </li>
            </ul>
    </div>
</template> -->
