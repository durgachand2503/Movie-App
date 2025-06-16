<template>
  <section>
    <h1 style="font-size: 2rem; margin-bottom: 1rem;">Latest Movies</h1>
    <input
      v-model="search"
      placeholder="Search movies..."
      style="width: 100%; margin-bottom: 1rem;"
      @input="onInput"
      @keydown.enter.prevent="onSearch"
      @focus="showSuggestions = true"
      @blur="hideSuggestions"
      autocomplete="off"
    />
    <ul v-if="showSuggestions && suggestions.length" class="autocomplete-list">
      <li
        v-for="movie in suggestions"
        :key="movie._id"
        @mousedown.prevent="selectSuggestion(movie)"
      >
        {{ movie.title }}
      </li>
    </ul>
    <MovieList :movies="movies" />
    <div
      style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1.5rem;"
      v-if="!isSearching"
    >
      <button @click="prevPage" :disabled="page === 1">Prev</button>
      <span style="font-weight: bold;">Page {{ page }}</span>
      <button @click="nextPage" :disabled="!hasNextPage">Next</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchMovies, searchMovies, autocompleteMovies } from '../services/api';
import MovieList from '../components/MovieList.vue';

const movies = ref([]);
const page = ref(1);
const search = ref('');
const suggestions = ref([]);
const showSuggestions = ref(false);
const isSearching = ref(false);

const pageSize = 10;
const hasNextPage = ref(true);

const loadMovies = async () => {
  isSearching.value = false;
  const res = await fetchMovies(page.value);
  movies.value = res.data;
  hasNextPage.value = res.data.length === pageSize;
};

const onInput = async () => {
  if (search.value.trim().length < 1) {
    suggestions.value = [];
    loadMovies();
    return;
  }
  const res = await autocompleteMovies(search.value);
  suggestions.value = res.data;
  showSuggestions.value = true;
};

const onSearch = async () => {
  if (search.value.trim().length < 1) {
    page.value = 1;
    loadMovies();
    return;
  }
  const res = await searchMovies(search.value);
  movies.value = res.data;
  isSearching.value = true;
  hasNextPage.value = false;
  suggestions.value = [];
  showSuggestions.value = false;
};

const selectSuggestion = (movie) => {
  search.value = movie.title;
  suggestions.value = [];
  showSuggestions.value = false;
  onSearch();
};

const hideSuggestions = () => {
  setTimeout(() => { showSuggestions.value = false; }, 100);
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    loadMovies();
  }
};
const nextPage = () => {
  if (hasNextPage.value) {
    page.value++;
    loadMovies();
  }
};

onMounted(loadMovies);
</script>

<style>
.autocomplete-list {
  position: absolute;
  background: #23232b;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  margin-top: -1rem;
  z-index: 10;
  list-style: none;
  padding: 0;
}
.autocomplete-list li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.autocomplete-list li:hover {
  background: #4f46e5;
}
</style>
