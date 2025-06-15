import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchMovies = (page = 1) => API.get(`/movies?page=${page}`);
export const fetchMovieById = (id) => API.get(`/movies/${id}`);
export const searchMovies = (q) => API.get(`/movies/search?q=${q}`);
export const autocompleteMovies = (q) => API.get(`/movies/autocomplete?q=${q}`);
export const fetchDirectors = (page = 1) => API.get(`/directors?page=${page}`);
export const fetchActors = (page = 1) => API.get(`/actors?page=${page}`);
export const fetchComments = (movieId) => API.get(`/comments/${movieId}`);
export const addComment = (movieId, data) => API.post(`/comments/${movieId}`, data);

export default API;
