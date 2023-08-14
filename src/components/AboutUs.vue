<script setup>
defineProps({
  team_mbr_info: {
    type: Object,
    required: false
  },
})

</script>

<template>
  <div class="about-us-container">
    <img src="`${team_mbr_info.profile_pic}`">
    <h2>{{ team_mbr_info.name }}</h2>
    <h3>{{ team_mbr_info.pronouns }}</h3>
    <p>{{ team_mbr_info.bio }}</p>
      <!-- <li><img src=team_mbr_img alt="Digital artist's rendering of "></li> -->
  </div>
</template>


