<template>
  <section>
    <MovieDetail v-if="movie" :movie="movie" />
    <CommentSection v-if="movie" :movieId="movie._id" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchMovieById } from '../services/api';
import MovieDetail from '../components/MovieDetail.vue';
import CommentSection from '../components/CommentSection.vue';

const route = useRoute();
const movie = ref(null);

onMounted(async () => {
  const res = await fetchMovieById(route.params.id);
  movie.value = res.data;
});
</script>
