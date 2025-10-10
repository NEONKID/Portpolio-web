import { createRouter, createWebHashHistory } from 'vue-router'; // Changed to createWebHashHistory
import HomeView from '../views/HomeView.vue';
import ResumeView from '../views/ResumeView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import BlogView from '../views/BlogView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // Changed to createWebHashHistory
  routes
});

export default router;