import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import Particles from "@tsparticles/vue3"


createApp(App).use(router).mount('#app').use(Particles);
