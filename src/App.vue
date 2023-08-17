<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { store } from './store'
import './App.css'


// functions


</script>

<template>
  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <RouterLink to="/"><img alt="Provide logo" class="logo" src="@/assets/images/provide_header_no_bg.png" width="135" height="45" /> </RouterLink>
    <div></div>
    <div class="wrapper">
      <nav>
        <ul>
          <RouterLink to="/">home</RouterLink>
          <RouterLink to="/search">search</RouterLink>
          <RouterLink to="/providers">providers</RouterLink>
          <RouterLink to="/about">about</RouterLink>
          <RouterLink to="/user" v-if="store.isLoggedIn">account</RouterLink>
          <RouterLink to ="/login" v-if="store.isLoggedIn" @click="store.doLogout()"><button class="button-33 logout">logout</button></RouterLink>
          <RouterLink to="/login" v-else><button class="button-33">login</button></RouterLink>
        </ul>
      </nav>
    </div>
  </header>
  <br>
  <RouterView />
  <br>
</template>