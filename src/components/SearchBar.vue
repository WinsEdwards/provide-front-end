<script>
import {ref, computed} from 'vue'
import axios from 'axios'

export default {
    setup() {
        let searchTerm = ref('')
        let providers = axios.get('https://jsonplaceholder.typicode.com/users')

        const searchProviders = computed(() => {
            if (searchTerm.value === '') {
                return []
            }

            let matches = 0

            return users.filter(user => {
                if (
                user.name.toLowerCase().includes(searchTerm.value.toLowerCase())
                && matches < 10
                ) {
                matches++
                return user
                }
            })
            });
        return {
        searchTerm,
        providers
        }
    }
}
</script>

<template>
    <div class="greetings">
        <p>search box</p>
        <!-- <h1 class="green">{{ msg }}</h1>
        <label for="search">
            Type the name of a country to search
        </label>

        <input type="text" id="search" placeholder="Type here..." v-model="searchTerm">
        <ul v-if="searchProviders.length">
            <li>
                Showing {{ searchProviders.length }} of {{ providers.length }} results
            </li>
            <li
                v-for="provider in searchProviders"
                :key="provider.name"
            >
                {{ provider.name }}
            </li>
            </ul> -->
    </div>
</template>

<!-- 
what needs to go in here: 
- search field
- search button
- filter by dropdown

-->
