<template>
  <div class="movie-card">
    <div class="movie-title">{{ movie.title }}</div>
    <router-link :to="`/movie/${movie._id}`">
      <button class="details-btn">Details</button>
    </router-link>
  </div>
</template>

<script setup>
defineProps({ movie: Object });
</script>

<style scoped>
.movie-card {
  background: linear-gradient(145deg, #202036, #000000);
  border-radius: 46px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
  padding: 2rem 1rem 1.5rem;
  width: 100%;
  max-width: 160px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.movie-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.02), transparent 70%);
  z-index: 0;
}

.movie-card:hover {
  
  transform: translateY(-10px) scale(1.35);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
}

.movie-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #f7f1f1;
  z-index: 1;
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
  transition: background 0.3s ease, transform 0.3s ease;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.details-btn:hover {
  background: linear-gradient(to right, #7132cf, #7579fa);
  transform: scale(1.15);
}

@media (max-width: 600px) {
  .movie-card {
    max-width: 100%;
    border-radius: 24px;
    padding: 1.5rem 1rem;
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

