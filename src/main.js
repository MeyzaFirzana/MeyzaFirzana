// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Adjust path based on your actual structure
import store from './store'; // Adjust path based on your actual structure
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);

// Use router and store if they are properly initialized
if (router && store) {
  app.use(router);
  app.use(store);
} else {
  console.error('Router or store is not properly initialized');
  // Handle error or provide default configuration
}

app.mount('#app');
