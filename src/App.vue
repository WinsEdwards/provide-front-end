<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { store } from './store'
import './App.css'

// functions

</script>

<template>
  <header>
    <img alt="Provide logo" class="logo" src="@/assets/images/provide_logo_no_bg.png" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search">Search</RouterLink>
        <RouterLink to="/providers">Providers</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/user" v-if="store.isLoggedIn">Account</RouterLink>
        <button v-if="store.isLoggedIn" @click="store.doLogout()"><RouterLink to ="/login">Logout</RouterLink></button>
        <RouterLink to="/login" v-else>Login</RouterLink>
      </nav>
    </div>
  </header>
  <br>
  <RouterView />
  <br>
</template>