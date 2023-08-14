<script setup>
import AboutUs from '../components/AboutUs.vue'


const winslow_info = {
  name: "O. Winslow Edwards",
  pronouns: "they/them",
  bio: "Winslow is a queer, nonbinary transmasc-ish southerner of mixed Jamaican and white US settler ancestry. Born in Tampa, FL and having lived all over, they are currently based in Atlanta, GA. They love spending time in their garden with their dog Regina, foraging for mushrooms and eating delicious food with friends. They earned their Bachelors in Biology from Swarthmore University (2014) and completed their Masters of Public Health at Simon Fraser University (2020). A published scholar in the field of LGBTQIA2S+ health and resilience, they are passionate about intersectional, anti-oppressive approaches to wellbeing for sexual and gender diverse communities. More recently, Winslow has completed education in full-stack software development and looks to apply their passion in public health to the creation of websites and apps that can support LGBTQIA2S+ communities. As someone who is neurodivergent, navigating chronic illness and pain, and on HRT, they see a lot of different health care providers. They hope PRovIDE will help people to have an easier time finding providers who help and don't harm."
}

const maz_info = {
  name: "Maz Weir",
  pronouns: "they/them",
  bio: "Born and raised in Atlanta, Maz is an avid reader, outdoor adventurer, yoga practitioner and community-builder. They spent the last 6 years in Athens, where they attended the University of Georgia, receiving degrees in International Affairs and Spanish. Post-graduation, Maz ran an event company, hosting dance events for the queer community and a mutual aid group, providing support to houseless folks. They returned to Atlanta in September of 2022 to attend a full-stack coding bootcamp. Maz looks forward to using their community-building and computer programming skills to create more equitable outcomes for LGBTQIA2S+ folks in tech spaces.",
  profile_pic: "../assets/maz.jpg"
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutUs :team_mbr_info="winslow_info"></AboutUs>
    <AboutUs :team_mbr_info="maz_info"></AboutUs>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<!-- 
what needs to go in here: 
- Creator component (one for each, contains deets about each creator)
- nav bar 
-->