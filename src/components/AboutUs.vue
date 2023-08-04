<script setup>
defineProps({
  team_img: {
    type: String,
    required: false
  },
  team_mbr_name: {
    type: String,
    required: true
  },
  team_mbr_pronouns: {
    type: String,
    required: true
  },
  team_bio: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="about-us-container">
    <ul>
      <li><img src="{{ team_img }}" alt="Digital artist's rendering of {{ team_mbr_name }}"></li>
      <li>{{ team_mbr_name }}</li>
      <li>{{ team_mbr_pronouns }}</li>
      <li>{{ team_bio }}</li>
    </ul>
  </div>
</template>


