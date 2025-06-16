<template>
  <section class="movie-detail-container">
    <div
      class="movie-detail-card"
      :style="{ backgroundImage: `url(${movie.poster || fallbackPoster})` }"
    >
      <div class="movie-detail-glass">
        <div class="poster-section">
          <img
            :src="movie.poster || fallbackPoster"
            :alt="movie.title"
            class="movie-poster"
            @error="onImgError"
          />
        </div>
        <div class="details-section">
          <h2 class="movie-title">{{ movie.title }}</h2>
          <ul class="movie-meta">
            <li v-if="movie.plot">
              <span class="label plot"><span class="icon">📝</span>Plot:</span>
              <span class="value">{{ movie.plot }}</span>
            </li>
            <li v-if="movie.fullplot">
              <span class="label fullplot"><span class="icon">📖</span>Full Plot:</span>
              <span class="value">{{ movie.fullplot }}</span>
            </li>
            <li v-if="movie.directors?.length">
              <span class="label directors"><span class="icon">🎬</span>Director(s):</span>
              <span class="value">{{ movie.directors.join(', ') }}</span>
            </li>
            <li v-if="movie.cast?.length">
              <span class="label cast"><span class="icon">👥</span>Cast:</span>
              <span class="value">{{ movie.cast.join(', ') }}</span>
            </li>
            <li v-if="movie.genres?.length">
              <span class="label genres"><span class="icon">💽</span>Genres:</span>
              <span class="value">{{ movie.genres.join(', ') }}</span>
            </li>
            <li v-if="movie.imdb?.rating">
              <span class="label rating"><span class="icon">⭐</span>IMDb Rating:</span>
              <span class="value">{{ movie.imdb.rating }}</span>
            </li>
            <li v-if="movie.rated">
              <span class="label rated"><span class="icon">🔞</span>Rated:</span>
              <span class="value">{{ movie.rated }}</span>
            </li>
            <li v-if="movie.year">
              <span class="label year"><span class="icon">📅</span>Year:</span>
              <span class="value">{{ movie.year }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieById } from '../services/api'

const route = useRoute()
const movie = ref({})
const fallbackPoster = 'https://via.placeholder.com/300x440?text=No+Image'

const onImgError = (event) => {
  event.target.src = fallbackPoster
}

onMounted(async () => {
  const id = route.params.id
  const res = await fetchMovieById(id)
  movie.value = res.data
})
</script>

<style scoped>
.movie-detail-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
  min-height: 80vh;
}

.movie-detail-card {
  position: relative;
  max-width: 1200px;
  min-height: 20px;
  border-radius: 32px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 40px #000a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.movie-detail-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(16, 16, 24, 0.82);
  backdrop-filter: blur(16px) brightness(0.7);
  z-index: 1;
}

.movie-detail-glass {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2.5rem;
  padding: 2.5rem 2rem;
  border-radius: 32px;
  background: rgba(40, 40, 56, 0.35);
  backdrop-filter: blur(6px) saturate(1.2);
  box-shadow: 0 4px 32px #0005;
}

.poster-section {
  flex: 0 0 340px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.movie-poster {
  width: 320px;
  height: 460px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 2px 22px #000a;
  background: #222;
}

.details-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f2f2f2;
}

.movie-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  color: #fff;
  letter-spacing: 0.03em;
  text-shadow: 0 4px 24px #000b;
  text-align: left;
}

.movie-meta {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.movie-meta li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.6em;
  font-size: 1.15rem;
  line-height: 1.5;
  color: #e3e3ee;
  gap: 0.6em;
}
.label {
  min-width: 140px;
  font-weight: 700;
  color: #a5b4fc;
  display: flex;
  align-items: center;
  gap: 0.3em;
}
.label.plot      { color: #fbbf24; }   /* amber */
.label.fullplot  { color: #60a5fa; }   /* blue */
.label.directors { color: #a78bfa; }   /* purple */
.label.cast      { color: #c084fc; }   /* violet */
.label.genres    { color: #38bdf8; }   /* sky */
.label.rating    { color: #facc15; }   /* yellow */
.label.rated     { color: #fb7185; }   /* rose */
.label.year      { color: #f472b6; }   /* pink */
.value {
  color: #fff;
  font-weight: 400;
  flex: 1;
  word-break: break-word;
}
.icon {
  font-size: 1.15em;
  margin-right: 0.25em;
  vertical-align: middle;
}

@media (max-width: 900px) {
  .movie-detail-card, .movie-detail-glass {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0.5rem;
    gap: 1.5rem;
  }
  .poster-section {
    margin-bottom: 1.5rem;
  }
  .movie-poster {
    width: 220px;
    height: 320px;
  }
  .movie-title {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
