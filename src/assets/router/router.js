import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'LandingPage', component: () => import('../pages/LandingPage.vue') },
  { path: '/services', name: 'ServicesPage', component: () => import('../pages/ServicesPage.vue') },
  { path: '/industries', name: 'IndustryPage', component: () => import('../pages/IndustryPage.vue') },
  { path: '/digital', name: 'DigitalPage', component: () => import('../pages/DigitalPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
