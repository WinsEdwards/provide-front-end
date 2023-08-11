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
    getProvidersList(store.currentProvidersList)
}

const getProvidersList = (resultsList) => {
    const resultsDict = {}
    for (let result of resultsList.results) {
        console.log(result)
        resultsDict[resultsList.results.indexOf(result)] = {
            provider_id : result["number"],
            first_name : result["basic"]["first_name"],
            last_name : result["basic"]["last_name"],
            address_1 : result["addresses"][1]["address_1"],
            city : result["addresses"][1]["city"],
            state : result["addresses"][1]["state"],
            postal_code : result["addresses"][1]["postal_code"],
        };

        if (result["basic"]["credential"]){
            resultsDict[resultsList.results.indexOf(result)]["provider_type"] = result["basic"]["credential"]
        } else if (result["taxonomies"]["desc"]) {
            resultsDict[resultsList.results.indexOf(result)]["licenses"] = result["taxonomies"]["desc"]
        } else if (result["addresses"][1]["telephone_number"]){
            resultsDict[resultsList.results.indexOf(result)]["telephone_number"] = result["addresses"][1]["telephone_number"]
        } ;
            
    }
    store.searchedProvidersList = resultsDict

    return resultsDict;
        
}

        
</script>

<template>
    <div class="greetings">
        <form name="search-form" @submit.prevent="handleSearch">
        <label for="search">
            Search for a provider here: 
        </label>

        <input type="text" id="search" placeholder="First Name" v-model="searchData.firstName" required>
        <input type="text" id="search" placeholder="Last Name" v-model="searchData.lastName" required>
        <input type="text" id="search" placeholder="Zip Code" v-model="searchData.zipCode">
        
        <button type="submit">search</button>
        </form>
        <div v-for="provider in store.searchedProvidersList">
            <div>
            <p>{{  provider.first_name }} {{ provider.last_name }} {{ provider.provider_type }}</p>
            <p>{{ provider.address_1 }} {{ provider.city }} {{ provider.state }} {{ provider.zipCode}}</p>
            <p>{{ provider.telephone_number }}</p>
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
