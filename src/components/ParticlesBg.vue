<template>
  <Particles
    id="tsparticles"
    :options="particleOptions"
    class="particles-bg"
  />
</template>

<script setup>
import { computed } from 'vue';
import Particles from "particles.vue3";

const props = defineProps({ type: String });

const particleOptions = computed(() => {
  if (props.type === 'movie') {
    return {
      background: { color: { value: "#18181b" } },
      particles: {
        color: { value: "#818cf8" },
        links: { enable: true, color: "#818cf8" },
        move: { enable: true, speed: 1 },
        number: { value: 50 },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 }
      }
    };
  } else if (props.type === 'directors') {
    return {
      background: { color: { value: "#18181b" } },
      particles: {
        color: { value: "#fbbf24" },
        links: { enable: true, color: "#fbbf24" },
        move: { enable: true, speed: 1 },
        number: { value: 30 },
        shape: { type: "polygon", sides: 5 },
        opacity: { value: 0.6 },
        size: { value: 4 }
      }
    };
  } else if (props.type === 'actors') {
    return {
      background: { color: { value: "#18181b" } },
      particles: {
        color: { value: "#f472b6" },
        links: { enable: true, color: "#f472b6" },
        move: { enable: true, speed: 1.5 },
        number: { value: 40 },
        shape: { type: "star" },
        opacity: { value: 0.5 },
        size: { value: 3 }
      }
    };
  }
  return {};
});
</script>

<style>
.particles-bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  pointer-events: none;
  top: 0;
  left: 0;
}
</style>
