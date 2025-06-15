<template>
  <div class="movie-grid">
    <MovieCard v-for="movie in movies" :key="movie._id" :movie="movie" />
  </div>
</template>

<script setup>
import MovieCard from './MovieCard.vue';
defineProps({ movies: Array });
</script>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem 1rem;
  justify-items: center;
}
@media (max-width: 1200px) {
  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
@media (max-width: 700px) {
  .movie-grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 1.5rem;
  }
}
</style>
