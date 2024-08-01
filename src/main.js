import { createApp } from 'vue';
import App from './App.vue';
import router from '@/assets/router/router';
import '@/assets/styles/styles.css';
import { FontAwesomeIcon } from './font-awesome';

const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Register global method
app.config.globalProperties.$isActive = (route) => {
  return app.config.globalProperties.$route.path === route;
};

app.use(router);
app.mount('#app');
