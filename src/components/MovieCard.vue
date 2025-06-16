<template>
  <div class="movie-card">
    <div
      class="poster-blur"
      :style="{ backgroundImage: `url(${movie.poster || fallbackPoster})` }"
    ></div>
    <div class="card-content">
      <div class="movie-title">{{ movie.title }}</div>
      <router-link :to="`/movie/${movie._id}`">
        <button class="details-btn">Details</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ movie: Object });
const fallbackPoster = 'https://via.placeholder.com/160x240?text=No+Image';
</script>

<style scoped>
.movie-card {
  position: relative;
  width: 180px;
  height: 260px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  background: #202036;
  display: flex;
  align-items: flex-end;
  margin: 1rem;
  transition: transform 0.22s, box-shadow 0.22s;
}
.movie-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 12px 36px rgba(0,0,0,0.6);
}
.poster-blur {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(0px) brightness(0.7);
  z-index: 1;
  transition: filter 0.3s;
}
.card-content {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical centering */
  align-items: center;     /* horizontal centering */
  background: linear-gradient(to bottom, rgba(20,20,32,0.48) 60%, rgba(20,20,32,0.88) 100%);
  border-radius: inherit;
  padding: 1.2rem 1rem;
  text-align: center;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #f7f1f1;
  text-shadow: 0 2px 12px #000b;
  transition: color 0.3s;
}
.details-btn {
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: inline-block;
}
.details-btn:hover {
  background: linear-gradient(to right, #7132cf, #7579fa);
  transform: scale(1.08);
}
@media (max-width: 600px) {
  .movie-card {
    width: 100%;
    height: 180px;
    border-radius: 16px;
  }
  .card-content {
    padding: 1.2rem 0.8rem 1rem 0.8rem;
  }
  .movie-title {
    font-size: 1rem;
  }
  .details-btn {
    font-size: 0.85rem;
    padding: 0.4rem 0.9rem;
  }
}
</style>
