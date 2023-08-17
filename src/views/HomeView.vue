<script setup>
import SearchBar from '../components/SearchBar.vue'
import '../assets/home.css'
import '../assets/searchbar.css'
</script>

<template>
  <main class="home-view-container">
    <img class="home-view-img" src="../assets/images/3-friends-selfie.jpg">
    <div class="everyone-deserves">
      <img class="everyone-deserves-img" src="../assets/images/everyonedeserves-final.png" alt="an image that says everyone deserves safe healthcare, find your provider below, with an image of a stethoscope underlaid">
      <SearchBar class="home-view-search-bar"></SearchBar>
    </div>
    
    <div class="provide-explanation">
      <div class="why-provide-img-container">
        <img src="../assets/images/why-provide-pink-checker.png">
      </div>
    
      <!-- <div class="laptop-search-img"><img src="../assets/images/laptop-use.jpg"></div> -->

      <div class="lgbtq-explanation">
        <h4>We created Provide because we know how hard it can be to locate health care providers who create a safe and affirming environment for LGBTQIA2S+ folks. When we say LGBTQIA2S+, we mean:</h4> 
        <ul>
          <li>lesbian</li>
          <li>gay</li>
          <li>bisexual</li>
          <li>transgender</li>
          <li>queer + questioning</li>
          <li>intersex</li>
          <li>asexual</li>
          <li>Two-spirit</li>
          <li>+ infinite ✨magical✨ expressions of diverse genders and sexualities</li>
        </ul>
      </div>
      
      <div class="what-provide-is">
        <h2>How does Provide work?</h2>
        <h4>Provide allows you to search and review any provider with an NPI (National Provider Identification) number, which includes any health care provider who accepts any kind of health insurance (including Medicare and Medicaid), including:</h4>
        <ul>
          <li>doctors</li>
          <li>physician assistants</li>
          <li>nurse practitioners</li>
          <li>physical and occupational therapists</li>
          <li>dentists</li>
          <li>optometrists</li>
          <li>social workers, counselors and therapists</li>
          <li>psychiatrists</li>
          <li>and more!</li>
        </ul>
      </div>
      
    </div>
  </main>
</template>

<!-- 
what needs to go in here: 
- search bar
- review carousel 
-->