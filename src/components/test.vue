<template>
    <button class="light-button" @click="toggle = !toggle">Turn on the light</button>

    <p v-if="toggle">Light off</p>
    <p v-else class="light-on">Light on</p>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref(true)
</script>

<style scoped>
.light-button {
    background-color: #000000;
    border: none;
    color: white;
    padding: 15px 32px;
    cursor: pointer;
}

.light-on {
    color: yellow;
    font-weight: bold;
    font-size: 30px;
}
</style>