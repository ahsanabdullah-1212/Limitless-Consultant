import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'LandingPage', component: () => import('../pages/LandingPage.vue') },
  { path: '/services', name: 'ServicesPage', component: () => import('../pages/ServicesPage.vue') },
  { path: '/industries', name: 'IndustryPage', component: () => import('../pages/IndustryPage.vue') },
  { path: '/digital', name: 'DigitalPage', component: () => import('../pages/DigitalPage.vue') },
  { path: '/insight', name: 'InsightPage', component: () => import('../pages/InsightPage.vue') },
  { path: '/promotion', name: 'PromotionPage', component: () => import('../pages/PromotionPage.vue') },
  { path: '/accounting', name: 'AccountingPage', component: () => import('../pages/AccountingPage.vue') },
  { path: '/about', name: 'AboutPage', component: () => import('../pages/AboutPage.vue') },
  { path: '/visit', name: 'VisitVisa', component: () => import('../pages/VisitVisa.vue') },
  { path: '/contact', name: 'Contactus', component: () => import('../pages/ContactForm.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
