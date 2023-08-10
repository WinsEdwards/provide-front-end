<script setup>
import {ref, computed} from 'vue'
import axios from 'axios'
import { store } from '../store';

const searchData = {
    firstName : '',
    lastName : '',
    zipCode : ''
    
}
let providers = ref('')

const handleSearch = () => {
    // console.log(searchData)
    store.getProviders(searchData)
}


        
</script>

<template>
    <div class="greetings">
        <form name="search-form" @submit.prevent="handleSearch">
        <label for="search">
            Type the name of a country to search
        </label>

        <input type="text" id="search" placeholder="First Name" v-model="searchData.firstName" required>
        <input type="text" id="search" placeholder="Last Name" v-model="searchData.lastName" required>
        <input type="text" id="search" placeholder="Zip Code" v-model="searchData.zipCode">
        
        <button type="submit">search</button>
        </form>
        <p>{{ store.currentProvidersList }}</p>
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
