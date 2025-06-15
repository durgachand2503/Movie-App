<template>
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Directors</h2>
    <ul>
      <li v-for="director in directors" :key="director" style="margin-bottom: 0.5rem;">
        {{ director }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ directors: Array });
</script>
