import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import FoodTraceability from '@/components/FoodTraceability.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food-traceability',
    name: 'Food Traceability',
    component: FoodTraceability
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
