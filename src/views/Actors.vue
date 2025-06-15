<template>
  <section>
    <h1 style="font-size: 2rem; margin-bottom: 1rem;">Actors</h1>
    <ActorList :actors="actors" />
    <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1.5rem;">
      <button @click="prevPage" :disabled="page === 1">Prev</button>
      <span style="font-weight: bold;">Page {{ page }}</span>
      <button @click="nextPage" :disabled="!hasNextPage">Next</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchActors } from '../services/api';
import ActorList from '../components/ActorList.vue';

const actors = ref([]);
const page = ref(1);
const pageSize = 10;
const hasNextPage = ref(true);

const loadActors = async () => {
  const res = await fetchActors(page.value);
  actors.value = res.data;
  hasNextPage.value = res.data.length === pageSize;
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    loadActors();
  }
};
const nextPage = () => {
  page.value++;
  loadActors();
};

onMounted(loadActors);
</script>
