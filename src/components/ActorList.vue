<template>
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Actors</h2>
    <ul>
      <li v-for="actor in actors" :key="actor" style="margin-bottom: 0.5rem;">
        {{ actor }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ actors: Array });
</script>
