import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MoviePage from '../views/MoviePage.vue';
import Directors from '../views/Directors.vue';
import Actors from '../views/Actors.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MoviePage },
  { path: '/directors', component: Directors },
  { path: '/actors', component: Actors }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
