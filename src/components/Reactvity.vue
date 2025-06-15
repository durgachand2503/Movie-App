<template>
  <div>
    <input v-model="inputValue" placeholder="Enter your name" />
    <p>{{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
