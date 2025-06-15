<template>
  <section>
    <h1 style="font-size: 2rem; margin-bottom: 1rem;">Directors</h1>
    <DirectorList :directors="directors" />
    <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1.5rem;">
      <button @click="prevPage" :disabled="page === 1">Prev</button>
      <span style="font-weight: bold;">Page {{ page }}</span>
      <button @click="nextPage" :disabled="!hasNextPage">Next</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchDirectors } from '../services/api';
import DirectorList from '../components/DirectorList.vue';

const directors = ref([]);
const page = ref(1);
const pageSize = 10;
const hasNextPage = ref(true);

const loadDirectors = async () => {
  const res = await fetchDirectors(page.value);
  directors.value = res.data;
  hasNextPage.value = res.data.length === pageSize;
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    loadDirectors();
  }
};
const nextPage = () => {
  page.value++;
  loadDirectors();
};

onMounted(loadDirectors);
</script>
