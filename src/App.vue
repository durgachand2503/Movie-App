<template>
  <div>
    <header>
      <div class="brand"><a href="/">🎬 Movie App</a></div>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/directors">Directors</router-link>
        <router-link to="/actors">Actors</router-link>
      </nav>
    </header>
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" @setParticles="setParticlesType" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import ParticlesBg from './components/ParticlesBg.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const particlesType = ref('movie');

function setParticlesType(type) {
  particlesType.value = type;
}

watch(() => route.path, () => {
  if (route.path.startsWith('/movie')) particlesType.value = 'movie';
  else if (route.path.startsWith('/directors')) particlesType.value = 'directors';
  else if (route.path.startsWith('/actors')) particlesType.value = 'actors';
  else particlesType.value = 'movie';
});
</script>


