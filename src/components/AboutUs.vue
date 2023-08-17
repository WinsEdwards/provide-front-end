<script setup>
import '../components/AboutUs.css'

const winslow_info = {
  name: "O. Winslow Edwards",
  pronouns: "they/them",
  bio: "Winslow is a nonbinary queer of mixed Jamaican and white US settler ancestry, based in Atlanta, GA. They love gardening with their pup Regina, foraging for mushrooms and eating tasty food with friends. They completed their Masters of Public Health in 2020 and are published in the fields of LGBTQIA2S+ health and resilience. More recently, Winslow completed a full-stack software development bootcamp. They are excited to apply their knowledge from public health to the creation of apps that can support diverse LGBTQIA2S+ communities. As someone who is neurodivergent, navigating chronic conditions, and on HRT, they regularly see many health care providers. They hope Provide will help others have an easier time finding providers who help and don't harm.",
}

const maz_info = {
  name: "Maz Weir",
  pronouns: "they/them",
  bio: "Born and raised in Atlanta, Maz is an avid reader, outdoor adventurer, yoga practitioner and community-builder. They spent the last 6 years in Athens, where they attended the University of Georgia, receiving degrees in International Affairs and Spanish. Post-graduation, Maz ran an event company, hosting dance events for the queer community and a mutual aid group, providing support to houseless folks. They returned to Atlanta in September of 2022 to attend a full-stack coding bootcamp. Maz looks forward to using their community-building and computer programming skills to create more equitable outcomes for LGBTQIA2S+ folks in tech spaces.",

}
// console.log(team_mbr_info)

</script>

<template>
  <div class="about-us-container">
    <div class="winslow">
      <div class="about-us-child-1">
        <img alt="photo of team member"
        src="../assets/images/winslow.jpg"
        height="" width="275">
      </div>
      
      <div class="about-us-child-2">
        <h2>{{ winslow_info["name"] }}</h2>
        <h3>{{ winslow_info["pronouns"] }}</h3>
        <p>{{ winslow_info["bio"] }}</p>
      </div>     
    </div>
  </div>
  <div class="about-us-container">
    <div class="maz">
      <div class="about-us-child-1">
        <img alt="photo of team member"
        src="../assets/images/maz.jpg"
        height="" width="275">
      </div>
      
      <div class="about-us-child-2">
        <h2>{{ maz_info.name }}</h2>
        <h3>{{ maz_info.pronouns }}</h3>
        <p>{{ maz_info.bio }}</p>
      </div>
    </div>
</div>
</template>


