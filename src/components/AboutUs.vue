<script setup>

defineProps({
  team_mbr_info: {
    type: Object,
    required: false
  }
})
// console.log(team_mbr_info)

</script>

<template>
  <div class="about-us-container">

    <div class="about-us-child-1">
      <img alt="photo of team member"
      src= {{team_mbr_info.profile_pic}}
      height="300" width="200">
      <h2>{{ team_mbr_info.name }}</h2>
      <h3>{{ team_mbr_info.pronouns }}</h3>
    </div>

    <div class="about-us-child-2">
      <p>{{ team_mbr_info.bio }}</p>
    </div>
      
  </div>
</template>


