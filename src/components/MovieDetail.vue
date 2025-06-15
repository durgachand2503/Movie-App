<template>
  <v-card class="bg-gray-900 text-gray-100 p-6 rounded-xl shadow-lg" elevation="8">
    <v-row dense align="start" justify="center" class="gap-4">
      <!-- Poster Image -->
      <v-col cols="12" md="4">
        <v-img
          :src="movie.poster"
          height="400px"
          class="rounded-lg elevation-3"
          cover
        >
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary" />
            </v-row>
          </template>
        </v-img>
      </v-col>

      <!-- Movie Details -->
      <v-col cols="12" md="8">
        <div class="space-y-3">
          <h2 class="text-3xl font-extrabold tracking-tight text-primary mb-4">
            {{ movie.title }}
          </h2>

          <v-divider class="mb-4" />

          <p><span class="font-semibold text-indigo-400">📝 Plot:</span> {{ movie.plot }}</p>

          <p v-if="movie.fullplot">
            <span class="font-semibold text-indigo-400">📖 Full Plot:</span> {{ movie.fullplot }}
          </p>

          <p v-if="movie.directors?.length">
            <span class="font-semibold text-indigo-400">🎬 Director(s):</span>
            {{ movie.directors.join(', ') }}
          </p>

          <p v-if="movie.cast?.length">
            <span class="font-semibold text-indigo-400">👥 Cast:</span> {{ movie.cast.join(', ') }}
          </p>

          <p v-if="movie.genres?.length">
            <span class="font-semibold text-indigo-400">🏷 Genres:</span> {{ movie.genres.join(', ') }}
          </p>

          <p v-if="movie.imdb?.rating">
            <span class="font-semibold text-indigo-400">⭐ IMDb Rating:</span> {{ movie.imdb.rating }}
          </p>

          <p v-if="movie.rated">
            <span class="font-semibold text-indigo-400">🔞 Rated:</span> {{ movie.rated }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
defineProps({ movie: Object });
</script>
