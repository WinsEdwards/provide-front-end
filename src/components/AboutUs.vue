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
    <ul>
      <li><img src="{{ team_mbr_info.img }}" alt="Digital artist's rendering of {{ team_mbr_info.name }}"></li>
      <li>{{ team_mbr_info.name }}</li>
      <li>{{ team_mbr_info.pronouns }}</li>
      <li>{{ team_mbr_info.bio }}</li>
    </ul>
  </div>
</template>


